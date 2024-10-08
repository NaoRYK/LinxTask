import { Link } from "react-router-dom";
import attachFile from "../../assets/icons/attach_file.png";
import trashCan from "../../assets/icons/delete.png";
import keepOff from "../../assets/icons/keep_off.png";
import useAuthStore from "../../stores/userStore";

const PinnedProject = ({ project, onUnpinProject,onDelete }) => {
  const {user} = useAuthStore()

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      onDelete(project?.id);
    }

  };
  return (
    <Link className="relative" to={`projects/${project?.id}`}>
      <img
        className="absolute top-[-15px] right-4 "
        src={attachFile}
        alt="attach-file-icon"
      />
      <div
        className="w-[250px] h-[150px] rounded-[10px] p-4 flex flex-col justify-between shadow-md"
        style={{ backgroundColor: project.color }}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold">{project?.name}</p>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex gap-2 text-tertiaryDark">
           {project.creatorId === user.uid &&  <button className="hover:bg-outlineGrey/50 p-1 rounded-lg transition-all"
            onClick={handleDeleteClick}
            >
              <img
                src={trashCan}
                className="w-[19.8px] h-[20.2px]"
                alt="trash-icon"
              />
            </button>}
            <button
              className="hover:bg-outlineGrey/50 p-1 rounded-lg transition-all"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation(); 
                onUnpinProject(project);
              }}
            >
              <img
                src={keepOff}
                className="w-[19.8px] h-[20.2px]"
                alt="keepoff-icon"
              />
            </button>
          </div>

          <div className="flex">
            {project.collaborators?.length > 1 && (
              <p>
                <span className="font-semibold">
                  {project?.collaborators?.length}
                </span>{" "}
                colaboradores
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PinnedProject;
