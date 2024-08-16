import TaskForm from './TaskForm'

const TaskModal = ({statuses, onCreateTask,refetchProject}) => {

    
  return (
    <div>
        <TaskForm  onCreateTask={onCreateTask}         refetchProject={refetchProject} // Pasa la función refetchProject como prop
        ></TaskForm>
    </div>
  )
}

export default TaskModal