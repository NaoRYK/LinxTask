import TaskForm from './TaskForm'

const TaskModal = ({ statuses, project, onCreateTask, refetchProject, onClose }) => {

  function darkenHexColor(hex, percent) {
    // Elimina el símbolo '#' si está presente
    hex = hex.replace(/^#/, '');
    
    // Si el valor es de 3 caracteres, expándelo a 6
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    // Convierte hex a valores RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    // Oscurece el color
    r = Math.max(0, Math.min(255, Math.round(r * (1 - percent / 100))));
    g = Math.max(0, Math.min(255, Math.round(g * (1 - percent / 100))));
    b = Math.max(0, Math.min(255, Math.round(b * (1 - percent / 100))));
    
    // Convierte RGB de vuelta a hex
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}


  const projectColor = project.color; // Color de proyecto
  const darkestColor = darkenHexColor(projectColor, 40); // Oscurece el color en un 20%
  const darkenedColor = darkenHexColor(projectColor, 20); // Oscurece el color en un 20%

  
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-[80px] z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm shadow-sm"
      onClick={handleBackgroundClick}
    >
      <div style={{ backgroundColor: projectColor }} className="w-[957px] h-[840px] rounded-[20px] p-6">
        <h2 style={{ color: darkenedColor }} className="font-bold text-[40px]">Crear nueva tarea</h2>
        <TaskForm 
          onCreateTask={onCreateTask}
          refetchProject={refetchProject}
          statuses={statuses}
          project={project}
          darkenedColor={darkenedColor}
          darkestColor={darkestColor}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

export default TaskModal;
