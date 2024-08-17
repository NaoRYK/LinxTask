import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import trashCan from '../../assets/icons/delete.png';
import keep from '../../assets/icons/keep.png';
import useAuthStore from "../../stores/userStore";

const ProjectCard = ({ project, onTogglePin, isPinned, onDelete }) => {
  const handlePinClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onTogglePin(project);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      onDelete(project?.id);
    }
  };

  const {user} = useAuthStore()

  return (
    <Link className="relative " to={`projects/${project?.id}`}>
      <div
        className="w-[535px] h-[205px] rounded-[10px] p-4 flex flex-col justify-between shadow-md"
        style={{ backgroundColor: project.color }}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold">{project?.name}</p>
          {!isPinned && <button onClick={handlePinClick}>
            <FontAwesomeIcon icon={faStar} className="hover:text-yellow-500"></FontAwesomeIcon>
          </button>}
        </div>

        <div className="flex w-full justify-between">
          <div className="flex gap-2 text-tertiaryDark">
            {project.creatorId === user.uid &&             <button onClick={handleDeleteClick} className="hover:bg-outlineGrey p-1 rounded-lg transition-all">
              <img src={trashCan} className="w-[19.8px] h-[20.2px]" alt="trash-icon" />
            </button>}
            {!isPinned && <button onClick={handlePinClick} className="hover:bg-outlineGrey p-1 rounded-lg transition-all">
              <img src={keep} className="w-[19.8px] h-[20.2px] cursor-pointer" alt="keep-icon" />
            </button>}
          </div>

          <div className="flex">
            {project.collaborators?.length > 1 && (
              <p>{project?.collaborators?.length} colaboradores</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
