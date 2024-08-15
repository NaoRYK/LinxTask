import {create} from 'zustand';

const useProjectStore = create((set) => ({
  projects: [],
  selectedProject:null,
  setProjects: (project) => set({ projects:project}),
}));

export default useAuthStore;
