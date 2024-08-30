import { create } from 'zustand';

const useProjectStore = create((set) => ({
  storeProjects: [],
  selectedProject: null,
  
  // Reemplaza el estado de proyectos con los nuevos proyectos
  setProjects: (newProjects) => set(() => ({
    storeProjects: newProjects,
  })),
  
  // Agrega un nuevo proyecto, evitando duplicados
  addProject: (project) => set((state) => {
    const exists = state.storeProjects.some(p => p.id === project.id);
    const updatedProjects = exists
      ? state.storeProjects // Si el proyecto ya existe, no lo agrega
      : [...state.storeProjects, project]; // Si no existe, lo agrega
    
    console.log("Adding project:", project);
    console.log("Updated storeProjects:", updatedProjects);
    
    return { storeProjects: updatedProjects };
  }),
}));

export default useProjectStore;
