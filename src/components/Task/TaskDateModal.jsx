import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const TaskDatesModal = ({ task, onClose, onSave }) => {
    const [startDate, setStartDate] = useState(task.startDate || '');
    const [dueDate, setDueDate] = useState(task.dueDate || '');
    const [error, setError] = useState('');

    const handleSave = () => {
        if (startDate && dueDate && new Date(dueDate) < new Date(startDate)) {
            setError('La fecha de finalización no puede ser menor que la fecha de inicio.');
            return;
        }
        if (startDate && dueDate && new Date(startDate) > new Date(dueDate)) {
            setError('La fecha de inicio no puede ser mayor que la fecha de finalización.');
            return;
        }

        onSave(startDate, dueDate);
        onClose();
    };

    return (
        <div className='fixed inset-0 flex bg-[#D2F9E6] items-center justify-center bg-opacity-50'>
            <div className='w-[400px] h-auto p-4 flex items-center flex-col bg-[#D2F9E6] rounded-[20px] shadow-lg'>
                <div className='w-full h-[40px] mb-6'>
                    <h2 className='text-[24px] font-bold'>Cambiar Fechas</h2>
                </div>

                <div className='mt-2 flex flex-col items-start gap-4 w-full'>
                    <div className="w-full mb-4">
                        <p className="text-[20px] font-bold mb-2">Fecha de Inicio</p>
                        <div className="flex items-center justify-center">
                            <label className="text-center w-full" htmlFor="startDate">
                                Introducir fecha y hora
                                <FontAwesomeIcon className="ml-2 text-gray-700" icon={faCalendarAlt} />
                            </label>
                        </div>
                        <input
                            id="startDate"
                            type="datetime-local"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            className="w-full bg-loginGreen text-textGreen rounded-[15px] p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-tertiaryGreen"
                            max={dueDate || undefined} // Limita la fecha máxima al valor de dueDate
                        />
                    </div>

                    <div className="w-full">
                        <p className="text-[20px] font-bold mb-2">Fecha de finalizacion</p>
                        <div className="flex items-center justify-center">
                            <label className="text-center w-full" htmlFor="dueDate">
                                Introducir fecha y hora
                                <FontAwesomeIcon className="ml-2 text-gray-700" icon={faCalendarAlt} />
                            </label>
                        </div>
                        <input
                            id="dueDate"
                            type="datetime-local"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                            className="w-full bg-loginGreen text-textGreen rounded-[15px] p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-tertiaryGreen"
                            min={startDate || undefined} // Limita la fecha mínima al valor de startDate
                        />
                    </div>
                </div>

                {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

                <div className='mt-4 flex justify-end w-full'>
                    <button
                        onClick={onClose}
                        className='ml-2 text-gray-700 px-4 py-2 rounded hover:bg-tertiaryGreen/20'
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className='text-gray-700 px-4 py-2 rounded hover:bg-tertiaryGreen/20'
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDatesModal;
