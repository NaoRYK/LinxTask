import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskInfoModal from './TaskInfoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faClock } from '@fortawesome/free-solid-svg-icons';

const CompletedTasksModal = ({ project, completedTasks, onClose, refetchProject }) => {
    const [openTaskInfoModal, setOpenTaskInfoModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [totalHours, setTotalHours] = useState(0);
    useEffect(() => {
      
    refetchProject()
    
    }, [])
    
    const darkenColor = (color, percent) => {
        let R = parseInt(color.slice(1, 3), 16);
        let G = parseInt(color.slice(3, 5), 16);
        let B = parseInt(color.slice(5, 7), 16);
    
        R = Math.max(0, Math.min(255, R * (1 - percent)));
        G = Math.max(0, Math.min(255, G * (1 - percent)));
        B = Math.max(0, Math.min(255, B * (1 - percent)));
    
        return `#${Math.round(R).toString(16).padStart(2, '0')}${Math.round(G).toString(16).padStart(2, '0')}${Math.round(B).toString(16).padStart(2, '0')}`;
    };

    const lighterColor = darkenColor(project.color, -0.2);
    const darkestColor = darkenColor(project.color, 0.4);
    const darkerColor = darkenColor(project.color, 0.2);

    const calculateHours = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffInMs = end - start;
        const diffInHours = diffInMs / (1000 * 60 * 60); // Convertir de milisegundos a horas
        return diffInHours.toFixed(2); // Redondear a 2 decimales
    };

    const calculateTimeSinceCompletion = (endDate) => {
        const end = new Date(endDate);
        const now = new Date();
        const diffInMs = now - end;

        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInDays > 0) {
            return `Finalizado hace: ${diffInDays} días`;
        } else if (diffInHours > 0) {
            return `Finalizado hace: ${diffInHours} horas`;
        } else {
            return `Finalizado hace: ${diffInMinutes} minutos`;
        }
    };

    useEffect(() => {
        const total = completedTasks.reduce((acc, task) => {
            const hours = calculateHours(task.startDate, task.endDate);
            return acc + parseFloat(hours);
        }, 0);
        setTotalHours(total.toFixed(2));
    }, [completedTasks]);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
        setOpenTaskInfoModal(true);
    };

    const handleCloseCardModal = () => {
        setOpenTaskInfoModal(false);
        setSelectedTask(null);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
            style={{backgroundColor:lighterColor}}
            className="p-6 rounded-[20px] shadow-lg w-[850px] h-[550px]">
                <div className='flex items-center mb-4 justify-between'>
                    <h2 style={{color:darkestColor}} className="text-[40px] font-bold">Tareas Completadas</h2>
                    <button
                        onClick={onClose}
                        style={{ backgroundColor: darkerColor, color: lighterColor }}
                        className="py-2 px-4 text-[16px] h-[45px] w-[130px] rounded-[100px]"
                    >
                        Cerrar
                    </button>
                </div>
                {completedTasks.length > 0 ? (
                    <ul className="list-none flex flex-col gap-2 py-4 overflow-y-auto max-h-[400px]">
                        {completedTasks.map(task => (
                            <li 
                                key={task.id} 
                                style={{backgroundColor: darkerColor, color: darkestColor}}
                                className="w-[765px] h-[110px] rounded-[10px] p-4 flex justify-between items-center cursor-pointer" 
                                onClick={() => handleTaskClick(task)}
                            >
                                <div>
                                    <div className='flex items-center gap-2 text-primaryDark'>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <p className='font-semibold text-[24px]'>{task.name}</p>
                                    </div>
                                    <p className='w-[410px] h-[60px]'>{task.description}</p>
                                </div>
                               <div className='flex flex-col gap-2'>
                               <div style={{backgroundColor: darkestColor, color: lighterColor}} className='flex text-[12px] items-center justify-center p-2 gap-2 w-[156px] text-nowrap h-[35px] rounded-[10px]'>
                                    <FontAwesomeIcon icon={faClock} />
                                    <p>Horas dedicadas: {calculateHours(task.startDate, task.endDate)}</p>
                                </div>
                                <div style={{backgroundColor: darkestColor, color: lighterColor}} className='flex text-[12px] items-center justify-center gap-2 w-[auto] p-2  text-nowrap h-[35px] rounded-[10px]'>
                                <FontAwesomeIcon icon={faClock} /> <p className='text-sm'>{calculateTimeSinceCompletion(task.endDate)}</p>

                                </div>
                               </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay tareas completadas.</p>
                )}
                <div className="mt-4">
                    <strong style={{color:darkestColor}}>Total de horas acumuladas: {totalHours} horas</strong>
                </div>

            </div>
            {openTaskInfoModal && 
                <TaskInfoModal
                    refetchProject={refetchProject}
                    taskData={selectedTask}
                    onClose={handleCloseCardModal}
                />
            }
        </div>
    );
};

CompletedTasksModal.propTypes = {
    completedTasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
    refetchProject: PropTypes.func.isRequired
};

export default CompletedTasksModal;
