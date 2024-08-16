import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip, faThumbtackSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import attachFile from '../../assets/icons/attach_file.png'
import trashCan from '../../assets/icons/delete.png'
import keep from '../../assets/icons/keep.png'

const ProjectCard = ({ project }) => {
  console.log("project", project);

  return (
    <Link className="relative" to={`projects/${project?.id}`}>
      <div
        className="w-[535px] h-[205px] rounded-[10px] p-4 flex flex-col justify-between shadow-md"
        style={{ backgroundColor: project.color }}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold">{project?.name}</p>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex gap-2 text-tertiaryDark">
            <img src={trashCan} className="w-[19.8px] h-[20.2px]" alt="trash-icon" ></img>
            <img src={keep} className="w-[19.8px] h-[20.2px]"  alt="keepoficon" ></img>
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
