import FormProject from "../components/Project/FormProject"
import { getAllProjects, getAllUserProjectsWithTasks, getUserOwnProjectsWithTasks } from "../services/projectService"
import useAuthStore from "../stores/userStore"

const Home = () => {

  const {user} = useAuthStore()


  const handleCheckProjects = () => {
    getAllUserProjectsWithTasks(user)
  }
  return (
    <div>
      <h1>Bienvenido {user.displayName}</h1>

      <FormProject></FormProject>
      <button onClick={handleCheckProjects}>Ver projects</button>
    </div>
  )
}

export default Home