import React, { useState } from 'react';

const FileUploader = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onFileChange(file);
  };

  return (
    <div>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
