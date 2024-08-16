import { faPaperclip, faThumbtackSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import attachFile from '../../assets/icons/attach_file.png'
import trashCan from '../../assets/icons/delete.png'
import keepOff from '../../assets/icons/keep_off.png'

const PinnedProject = ({ project }) => {
  console.log("project", project);

  return (
    <Link className="relative" to={`projects/${project?.id}`}>
      <img className="absolute top-[-15px] right-4 " src={attachFile} alt="attach-file-icon" />
      <div
        className="w-[250px] h-[150px] rounded-[10px] p-4 flex flex-col justify-between shadow-md"
        style={{ backgroundColor: project.color }}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold">{project?.name}</p>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex gap-2 text-tertiaryDark">
            <img src={trashCan} className="w-[19.8px] h-[20.2px]" alt="trash-icon" ></img>
            <img src={keepOff} className="w-[19.8px] h-[20.2px]"  alt="keepoficon" ></img>
          </div>

          <div className="flex">
            {project.collaborators?.length > 1 && (
              <p><span className="font-semibold">{project?.collaborators?.length} </span> colaboradores</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PinnedProject;
