import React from 'react';
import './customRadio.css'
const ChangePriorityModal = ({ task, onClose, onSave }) => {
    const [priority, setPriority] = React.useState(task.priority ? 'Prioritaria' : 'Normal');

    const handleSave = () => {
        onSave(priority === 'Prioritaria');
        onClose();
    };

    return (
        <div className='fixed w inset-0 flex  bg-[#D2F9E6] items-center justify-center bg-opacity-50 '>
            <div className=' w-[312px] h-[257px] p-6 flex items-center flex-col   bg-[#D2F9E6]  rounded-[28px] shadow-lg'>
                <div className='w-full h-[40px] mb-6'>
                <h2 className='text-[24px] font-normal'>Cambiar Prioridad</h2>
                </div>

<div className='mt-2 flex flex-col items-start gap-4 w-full'>
                    <label className='flex w-full items-center space-x-2 p-2  border-b-2 border-custom-background pb-4'>
                        <input
                            type='radio'
                            value='Prioritaria'
                            checked={priority === 'Prioritaria'}
                            onChange={() => setPriority('Prioritaria')}
                            className='radio-input'
                        />
                        <span className='radio-label'></span>
                        <span>Prioritaria</span>
                    </label>
                    <label className='flex  space-x-2  w-full items-center p-2  '>
                        <input
                            type='radio'
                            value='Normal'
                            checked={priority === 'Normal'}
                            onChange={() => setPriority('Normal')}
                            className='radio-input'
                        />
                        <span className='radio-label'></span>
                        <span>Normal</span>
                    </label>
                </div>
                <div className='mt-4 flex justify-end w-full'>
                    <button
                        onClick={onClose}
                        className='ml-2  text-custom-checked px-4 py-2 rounded'
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className=' text-custom-checked px-4 py-2 rounded'
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangePriorityModal;
