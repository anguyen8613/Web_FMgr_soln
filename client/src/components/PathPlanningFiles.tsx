import TreeItem from '@mui/lab/TreeItem';

const PathPlanningFiles = ({ planningAndScanFiles, handleSetPath }: any) => {
  const handleClick = (e: any) => {
    const file = e.target.outerText;
    const path = `PathPlanning/${file}`;
    handleSetPath(path);
  };

  return (
    <TreeItem nodeId='Path Planning' label={'PathPlanning'}>
      {planningAndScanFiles.map((file: any) => (
        <div key={file.ID}>
          <TreeItem
            nodeId={file.slice_file_name}
            label={file.slice_file_name}
            onClick={handleClick}
          />
          <TreeItem
            nodeId={file.build_file_name}
            label={file.build_file_name}
            onClick={handleClick}
          />
        </div>
      ))}
    </TreeItem>
  );
};

export default PathPlanningFiles;