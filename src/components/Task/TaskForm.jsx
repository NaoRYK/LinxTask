import React, { useState, useEffect } from "react";
import { createTask } from "../../services/taskService";
import useAuthStore from "../../stores/userStore";
import { getProjectCollaborators } from "../../services/projectService";
import { useParams } from "react-router-dom";
import { getUserDisplayNames } from "../../services/userService";
import {
  faArrowLeft,
  faCalendar,
  faCalendarAlt,
  faCheck,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskForm = ({
  onCreateTask,
  refetchProject,
  statuses,
  project,
  darkenedColor,
  darkestColor,
  onClose,
}) => {
  const [taskText, setTaskText] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskColor, setTaskColor] = useState("#ffffff");
  const [taskPriority, setTaskPriority] = useState(false);
  const [collaborators, setCollaborators] = useState([]);
  const [filteredCollaborators, setFilteredCollaborators] = useState([]);
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuthStore();
  const { projectId } = useParams();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchCollaborators = async () => {
      const projectCollaborators = await getProjectCollaborators(projectId);
      const userDisplayNames = await getUserDisplayNames(projectCollaborators);
      setCollaborators(userDisplayNames);
      setFilteredCollaborators(userDisplayNames);
    };

    fetchCollaborators();
  }, [projectId]);

  useEffect(() => {
    const filtered = collaborators.filter((collaborator) =>
      collaborator.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredCollaborators(filtered);
  }, [filterText, collaborators]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (!taskText || !taskDesc || !taskDate) {
      setError("Por favor, complete todos los campos obligatorios.");
      return;
    }

    setError("");

    const taskData = {
      creatorId: user.uid,
      creatorName: user.displayName,
      projectId: projectId,
      name: taskText,
      description: taskDesc,
      dueDate: taskDate,
      status: ["pendiente"],
      priority: taskPriority,
      assignedTo: selectedCollaborators,
      taskColor: taskColor,
    };

    createTask(projectId, taskData)
      .then((newTask) => {
        onCreateTask(newTask);
        refetchProject();

        setTaskText("");
        setTaskDesc("");
        setTaskDate("");
        setTaskPriority(false);
        setSelectedCollaborators([]);
        setTaskColor("#FFED88");
      })
      .catch((error) => {
        console.error("Error al crear la tarea:", error);
        setError("Hubo un error al crear la tarea.");
      });
  };

  const handleCollaboratorChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCollaborators(value);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const convertToLinks = (text) => {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[-A-Z0-9+&@#\/%=~_|$])+/gi;
    return text.replace(urlRegex, url => `<a href="${url}" target="_blank" style="color: blue; text-decoration: underline;">${url}</a>`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{ color: darkestColor }}
      className="flex flex-col min-w-[800px] w-full gap-2 text-[20px]"
    >
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex items-center justify-between">
        <div
          style={{ backgroundColor: darkenedColor }}
          className="w-[600px] h-[65px] rounded-[20px] flex shadow-md items-center p-4 gap-2"
        >
          <label className="text-[20px] font-bold" htmlFor="taskName">
            Nombre de la tarea
          </label>
          <input
            id="taskName"
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Nombre de la tarea"
            required
            style={{ backgroundColor: darkestColor, color: darkenedColor }}
            className="w-[355px] h-[45px] rounded-[15px] p-2"
          />
        </div>

        <div className="flex items-center gap-2 mr-16 ">
          <div
            style={{ backgroundColor: darkenedColor }}
            className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-md"
          >
            <input
              id="projectColor"
              value={taskColor}
              onChange={(e) => setTaskColor(e.target.value)}
              type="color"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPalette}
              className="w-8 h-8 cursor-pointer "
            />
          </div>
          <label
            htmlFor="projectColor"
            style={{ color: darkestColor }}
            className="text-[14px] font-bold w-[149px]"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Escoge el color de la tarea
            pulsando aquí
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <div
          style={{ backgroundColor: darkenedColor }}
          className="h-[150px] w-[600px] rounded-[20px] p-2"
        >
          <label className="text-[20px] font-bold" htmlFor="taskDesc">
            Descripción de la tarea
          </label>
          <textarea
            id="taskDesc"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            placeholder="Descripción de la tarea"
            required
            style={{ backgroundColor: darkestColor, color: darkenedColor }}
            className="w-[524px] h-[90px] rounded-[15px] p-2 mt-2"
          />
        </div>

        <div
          className="rounded-[20px] p-2 flex items-center "
          style={{ backgroundColor: darkenedColor }}
        >
          <label className="flex items-center flex-col gap-2 space-x-2">
            <span className="text-[20px] font-bold">Prioritaria</span>

            <span
              className={`flex items-center justify-center w-6 h-6 rounded border-2 border-${darkestColor} 
                            ${
                              taskPriority
                                ? `bg-${darkenedColor} border-${darkestColor}`
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
      </div>

      <div className="flex gap-2">

      <div className="h-[178px] w-[400px] p-4 rounded-[20px]" style={{ backgroundColor: darkenedColor }}>
        <p className="text-[20px] font-bold mb-6">Fecha limite</p>
        <div className="flex items-center justify-center">
          <label className="text-center" htmlFor="taskDate">
            Introducir fecha y hora{" "}
            <FontAwesomeIcon className="ml-2" icon={faCalendarAlt}></FontAwesomeIcon>
          </label>
        </div>
        <input
          id="taskDate"
          type="datetime-local"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          required
          min={today}
          style={{ backgroundColor: darkestColor, color: darkenedColor }}
          className="w-full rounded-[15px] p-2 mt-2"
        />
      </div>
      <div className="h-[180px] w-[600px] rounded-[20px] p-2" style={{ backgroundColor: darkenedColor }}>
  <label className="text-[20px] font-bold">Vista previa</label>
  <div
    className="w-full h-[120px] rounded-[15px] p-2 mt-2 overflow-y-auto overflow-x-hidden"
    style={{ backgroundColor: darkestColor, color: darkenedColor, maxWidth: '100%', wordBreak: 'break-word' }}
    dangerouslySetInnerHTML={{ __html: convertToLinks(taskDesc) }}
  />
</div>


      </div>


      <div style={{ backgroundColor: darkenedColor }} className="p-4 rounded-[20px]">
        <label className="text-[20px] font-bold" htmlFor="collaborators">
          Colaboradores
        </label>
        <input
          type="text"
          placeholder="Buscar colaboradores"
          value={filterText}
          onChange={handleFilterChange}
          className="w-full rounded-[15px] p-2 mb-2"
          style={{ backgroundColor: darkestColor, color: darkenedColor }}
        />
        <select
          id="collaborators"
          value={selectedCollaborators}
          onChange={handleCollaboratorChange}
          multiple
          style={{ backgroundColor: darkestColor, color: darkenedColor }}
          className="w-full rounded-[15px] p-2"
        >
          {filteredCollaborators.map((collaborator) => (
            <option
              key={collaborator.id}
              value={collaborator.id}
              style={{
                borderRadius: "5px",
                backgroundColor: selectedCollaborators.includes(collaborator.id)
                  ? darkenedColor
                  : "transparent",
                color: selectedCollaborators.includes(collaborator.id)
                  ? darkestColor
                  : "inherit",
              }}
            >
              {collaborator.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full flex justify-end gap-3">
        <button
          style={{ backgroundColor: darkestColor, color: darkenedColor }}
          className="w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4"
          onClick={onClose}
        >
          Cerrar
        </button>
        <button
          style={{ backgroundColor: darkestColor, color: darkenedColor }}
          className="w-[140px] h-[60px] rounded-[100px] shadow-md text-[#077559] font-semibold mt-4"
          type="submit"
        >
          Crear tarea
        </button>
      </div>



      <style>
        {`
          input::placeholder,
          textarea::placeholder {
            color: ${darkenedColor};
          }
        `}
      </style>
    </form>
  );
};

export default TaskForm;
