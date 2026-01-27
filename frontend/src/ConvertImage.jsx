import React, { useRef, useState } from "react";

function ConvertImage() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col items-center pt-20">
      
      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">JPG to PDF</h1>
      <p className="text-lg text-gray-600 mb-10">
        Convert JPG images to PDF in seconds. Easily adjust orientation and margins.
      </p>

      {/* Upload Button */}
      <div className="flex items-center gap-4">
        
        <button
          onClick={handleButtonClick}
          className="bg-red-600 hover:bg-red-700 text-white text-xl font-semibold px-10 py-6 rounded-xl shadow-lg transition"
        >
          Select JPG images
        </button>

        {/* Optional side icons */}
        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
            ☁️
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
            📦
          </div>
        </div>

      </div>

      <p className="mt-4 text-gray-500">or drop JPG images here</p>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/jpeg,image/png"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Preview selected files */}
      {files.length > 0 && (
        <div className="mt-8 text-gray-700">
          <p className="font-semibold mb-2">Selected files:</p>
          <ul className="list-disc">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default ConvertImage;
