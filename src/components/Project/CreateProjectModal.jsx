import React from 'react';

const CreateProjectModal = ({ children, onClose }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm shadow-sm"
      onClick={handleBackgroundClick}
    >
      <div className="bg-secondaryGreen w-[1000px] h-[555px] rounded-[20px] p-6">
        <h2 className="font-bold text-[40px] text-[#38CF9C]">Crear nuevo proyecto</h2>
        {children}
      </div>
    </div>
  );
}

export default CreateProjectModal;
