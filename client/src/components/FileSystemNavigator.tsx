import { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CadFiles from './CadFiles';
import PathPlanningFiles from './PathPlanningFiles';
import ScanFiles from './ScanFiles';
import { useParams } from 'react-router-dom';
import PreviewFile from './PreviewFile';

export default function FileSystemNavigator() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({ id: null, name: null });
  const [cadFiles, setCadFiles] = useState([]);
  const [planningAndScanFiles, setPlanningAndScanFiles] = useState([]);
  const [selectedPath, setSelectedPath] = useState('');

  useEffect(() => {
    const getCustomer = async () => {
      const response = await fetch(`http://localhost:8080/customers/${id}`);
      const customers = await response.json();
      setCustomer(customers[0]);
    };
    getCustomer();
  }, [id]);

  useEffect(() => {
    const getCustomerCadFiles = async () => {
      const response = await fetch(`http://localhost:8080/cadFiles/${id}`);
      const cadFiles = await response.json();
      setCadFiles(cadFiles);
    };

    getCustomerCadFiles();
  }, [id]);

  useEffect(() => {
    const getPlanningAndScanFiles = async () => {
      const cadFileIds = cadFiles.map((file: any) => file.ID).join(',');

      const response = await fetch(
        `http://localhost:8080/pathPlannings/${cadFileIds}`
      );

      const files = await response.json();
      setPlanningAndScanFiles(files);
    };

    getPlanningAndScanFiles();
  }, [cadFiles]);

  const handleSetPath = (path: any) => {
    const fullPath = `/${customer.name}/${path}`;
    setSelectedPath(fullPath);
  };

  return (
    <div className='flex m-20'>
      <div>
        <TreeView
          aria-label='file system navigator'
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 1000, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
          <CadFiles cadFiles={cadFiles} handleSetPath={handleSetPath} />
          <PathPlanningFiles
            planningAndScanFiles={planningAndScanFiles}
            handleSetPath={handleSetPath}
          />
          <ScanFiles
            planningAndScanFiles={planningAndScanFiles}
            handleSetPath={handleSetPath}
          />
        </TreeView>
      </div>
      <div className='ml-20'>
        <PreviewFile selectedPath={selectedPath} />
      </div>
    </div>
  );
}
