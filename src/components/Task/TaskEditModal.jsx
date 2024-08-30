import React, { useState } from "react";
import { updateTask } from "../../services/taskService"; // Importa la función para actualizar tareas
import { faCalendarAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskEditModal = ({
  task,
  onClose,
  statuses,
  refetchProject,
  onUpdateTask,
}) => {
  const [taskText, setTaskText] = useState(task.name);
  const [taskDesc, setTaskDesc] = useState(task.description);
  const [taskDate, setTaskDate] = useState(task.dueDate);
  const [taskColor, setTaskColor] = useState(task.taskColor);
  const [taskPriority, setTaskPriority] = useState(task.priority || false);
  const [taskAllowComments, setTaskAllowComments] = useState(
    task.allowComments || false
  );
  const [taskStatus, setTaskStatus] = useState(task.status[0]);

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
        allowComments:taskAllowComments
      });
      refetchProject(); 

      onClose();
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };
  const darkerColor = darkenColor(task.taskColor, -0.4);
  const lighterColor = darkenColor(task.taskColor, 0.2);
  const darkestColor = darkenColor(task.taskColor, 0.4);
  return (
    <div
      className="fixed top-[80px] z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm shadow-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          backgroundColor: task.taskColor,
          color: darkerColor,
          borderColor: darkestColor,
        }}
        className="w-[957px] h-[720px] rounded-[20px] p-6"
      >
        <h2 style={{ color: darkestColor }} className="font-bold text-[40px]">
          Crear nueva tarea
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between">
            <div
              className="w-[600px] h-[65px] rounded-[20px] flex shadow-md items-center p-4 gap-2"
              style={{ backgroundColor: lighterColor }}
            >
              <label className="text-[20px] font-bold">
                Nombre de la tarea
              </label>
              <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                style={{ backgroundColor: darkestColor, color: darkerColor }}
                className="w-[355px] h-[45px] rounded-[15px] p-2"
              />
            </div>
            <div
              className="flex flex-col items-center mr-20 p-2 rounded-lg "
              style={{ backgroundColor: lighterColor }}
            >
              <label className="font-bold mb-2">Color de la tarea</label>
              <input
                type="color"
                value={taskColor}
                onChange={(e) => setTaskColor(e.target.value)}
                className="p-2 border rounded"
                style={{ backgroundColor: taskColor }}
              />
            </div>
          </div>
          <div className="flex">
            <div
              style={{ backgroundColor: lighterColor }}
              className="h-[150px] w-[600px] rounded-[20px] p-2"
            >
              <label className="text-[20px] font-bold">
                Descripción de la tarea
              </label>
              <textarea
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                style={{ backgroundColor: darkestColor, color: darkerColor }}
                className="w-[524px] h-[90px] rounded-[15px] p-2 mt-2 "
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div
              className="h-[178px] w-[400px] p-4 rounded-[20px]"
              style={{ backgroundColor: darkestColor }}
            >
              <p className="text-[20px] font-bold mb-6">Fecha limite</p>

              <div className="flex items-center justify-center">
                <label className="text-center" htmlFor="taskDate">
                  Introducir fecha y hora limite
                  <FontAwesomeIcon
                    className="ml-2"
                    icon={faCalendarAlt}
                  ></FontAwesomeIcon>
                </label>
              </div>
              <input
                id="taskDate"
                type="datetime-local"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                style={{ backgroundColor: lighterColor, color: darkerColor }}
                className="w-full rounded-[15px] p-2 mt-2"
              />
            </div>
            <div className="flex justify-around items-center">
              <div className="grid grid-cols-[200px,250px] justify-center items-center">
                <div
                  className="rounded-[10px]  h-[90px] w-[130px] p-2 flex items-center mr-96 "
                  style={{ backgroundColor: lighterColor }}
                >
                  <label className="flex items-center flex-col w-full gap-2 space-x-2">
                    <span className="text-[20px] text-center  font-bold">Prioritaria</span>

                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded border-2 border-${darkestColor} 
                            ${
                              taskPriority
                                ? `bg-${lighterColor} border-${darkestColor}`
                                : `bg-transparent`
                            }`}
                    >
                      {taskPriority && (
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={taskPriority}
                      onChange={(e) => setTaskPriority(e.target.checked)}
                      className="hidden"
                    />
                  </label>
                </div>
                <div
                  className="rounded-[10px] h-[90px] w-[130px] p-2 flex items-center mr-96 "
                  style={{ backgroundColor: lighterColor }}
                >
                  <label className="flex items-center flex-col gap-2 space-x-2">
                    <span className="text-[20px] font-bold">Comentarios</span>

                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded border-2 border-${darkestColor} 
                            ${
                              taskAllowComments
                                ? `bg-${lighterColor} border-${darkestColor}`
                                : `bg-transparent`
                            }`}
                    >
                      {taskAllowComments && (
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={taskAllowComments}
                      onChange={(e) => setTaskAllowComments(e.target.checked)}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-bold mb-2">Estado</label>
            <select
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value)}
              className="p-2 border rounded"
              style={{
                backgroundColor: darkestColor,
                borderColor: darkerColor,
              }}
            >
              {statuses.map((status) => (
                <option key={status.name} value={status.name}>
                  {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex justify-end gap-3">
            <button
              style={{ backgroundColor: darkestColor, color: darkerColor }}
              className="w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button
              style={{ backgroundColor: darkestColor, color: darkerColor }}
              className="w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4"
              type="submit"
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

  return `#${Math.round(R).toString(16).padStart(2, "0")}${Math.round(G)
    .toString(16)
    .padStart(2, "0")}${Math.round(B).toString(16).padStart(2, "0")}`;
};
export default TaskEditModal;
