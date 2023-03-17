import TreeItem from '@mui/lab/TreeItem';

const ScanFiles = ({ planningAndScanFiles, handleSetPath }: any) => {

  const handleClick = (e: any) => {
    const file = e.target.outerText;
    const path = `Scan/${file}`;
    handleSetPath(path);
  };
  return (
    <TreeItem nodeId='Scan' label={'Scan'}>
      {planningAndScanFiles.map((file: any) => (
        <div key={file.ID}>
          <TreeItem
            nodeId={file.rsi_file_name}
            label={file.rsi_file_name}
            onClick={handleClick}
          />
          <TreeItem
            nodeId={file.mesh_file_name}
            label={file.mesh_file_name}
            onClick={handleClick}
          />
          <TreeItem
            nodeId={file.scan_file_name}
            label={file.scan_file_name}
            onClick={handleClick}
          />
          <TreeItem
            nodeId={file.zmetric_file_name}
            label={file.zmetric_file_name}
            onClick={handleClick}
          />
        </div>
      ))}
    </TreeItem>
  );
};

export default ScanFiles;
