import { useEffect, useState } from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

const PreviewFile = ({ selectedPath }: any) => {

   const [selectedDocs, setSelectedDocs] = useState<any[]>([]);

  useEffect(() => {
    if (selectedPath) {
      const getFile = async () => {
        const response = await fetch('http://localhost:8080/file', {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            path: selectedPath,
          }),
        });

        const file = await response.blob();
        //console.log(file);
        setSelectedDocs([file]);
      };

      getFile();
    }
  }, [selectedPath]);

  return (
    <div>
      <DocViewer
        style={{ width: 800, height: 800 }}
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </div>
  );
};

export default PreviewFile;
