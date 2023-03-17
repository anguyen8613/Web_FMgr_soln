import TreeItem from '@mui/lab/TreeItem';

const CadFiles = ({ cadFiles, handleSetPath }: any) => {
  const handleClick = (e: any) => {
    const file = e.target.outerText;
    const path = `CAD/${file}`;
    handleSetPath(path);
  };
  return (
    <div>
      <TreeItem nodeId='Cad Files' label='CAD'>
        {cadFiles.map((file: any) => (
          <div key={file.ID}>
            <TreeItem
              nodeId={file.file_name + 'sdf'}
              label={file.file_name}
              onClick={handleClick}
            />
          </div>
        ))}
      </TreeItem>
    </div>
  );
};

export default CadFiles;
