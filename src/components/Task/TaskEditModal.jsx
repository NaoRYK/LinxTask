import React, { useState } from 'react';
import { updateTask } from '../../services/taskService'; // Importa la función para actualizar tareas

const TaskEditModal = ({ task, onClose, statuses,refetchProject }) => {
  const [taskText, setTaskText] = useState(task.name);
  const [taskDesc, setTaskDesc] = useState(task.description);
  const [taskDate, setTaskDate] = useState(task.dueDate);
  const [taskColor, setTaskColor] = useState(task.taskColor);
  const [taskPriority, setTaskPriority] = useState(task.priority || false);
  const [taskStatus, setTaskStatus] = useState(task.status[0]); // Suponiendo que `status` es un array

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(task.projectId, task.id, {
        name: taskText,
        description: taskDesc,
        dueDate: taskDate,
        taskColor: taskColor,
        priority: taskPriority,
        status: [taskStatus],
      });
      refetchProject(); // Llama a refetchProject para actualizar la lista de tareas

      onClose();

    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };
  const darkerColor =  darkenColor(task.taskColor,-0.4)
  const darkestColor =  darkenColor(task.taskColor,0.4)
  return (
    <div
   
      className="fixed top-[80px] z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm shadow-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
       style={{backgroundColor:task.taskColor,color:darkerColor, borderColor:darkestColor}}
      className="w-[600px] h-[700px] rounded-[20px] p-6 shadow-lg">
        <h2 className="text-[24px] font-bold mb-4">Editar tarea</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-bold mb-2">Nombre de la tarea</label>
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className="p-2 border rounded"
              style={{backgroundColor:darkestColor}}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-2">Descripción</label>
            <textarea
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              className="p-2 border rounded h-[150px]"
              style={{backgroundColor:darkestColor}}

            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-2">Fecha límite</label>
            <input
              type="datetime-local"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="p-2 border rounded"
              style={{backgroundColor:darkestColor}}

            />
          </div >
            <div className='flex justify-around items-center'>
            <div className="flex flex-col items-center">
            <label className="font-bold mb-2">Color de la tarea</label>
            <input
              type="color"
              value={taskColor}
              onChange={(e) => setTaskColor(e.target.value)}
              className="p-2 border rounded"
              style={{backgroundColor:taskColor}}

            />
          </div>
          <div className="flex flex-col items-center">
  <label className="font-bold mb-2">Prioridad</label>
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={taskPriority}
      onChange={() => setTaskPriority(!taskPriority)}
      className="w-4 h-4 rounded-sm border-2 border-gray-300 checked:bg-[#34C759] checked:border-[#34C759] focus:ring-0"
      style={{backgroundColor: taskPriority ? darkestColor : 'transparent'}}
    />
  </div>
</div>
            </div>
          <div className="flex flex-col">
            <label className="font-bold mb-2">Estado</label>
            <select
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value)}
              className="p-2 border rounded"
              style={{backgroundColor:darkestColor}}

            >
              {statuses.map((status) => (
                <option key={status.name} value={status.name}>
                  {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-4 justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-[10px] "
              style={{backgroundColor:darkerColor,color:task.taskColor}}            >
              Cancelar
            </button>
            <button
             style={{backgroundColor:darkerColor,color:task.taskColor}}
              type="submit"
              className="px-4 py-2 rounded-[10px]"
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const darkenColor = (color, percent) => {
    let R = parseInt(color.slice(1, 3), 16);
    let G = parseInt(color.slice(3, 5), 16);
    let B = parseInt(color.slice(5, 7), 16);

    R = Math.max(0, Math.min(255, R * (1 - percent)));
    G = Math.max(0, Math.min(255, G * (1 - percent)));
    B = Math.max(0, Math.min(255, B * (1 - percent)));

    return `#${Math.round(R).toString(16).padStart(2, '0')}${Math.round(G).toString(16).padStart(2, '0')}${Math.round(B).toString(16).padStart(2, '0')}`;
};
export default TaskEditModal;
