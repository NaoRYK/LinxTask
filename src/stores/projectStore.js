import { create } from 'zustand';

const useProjectStore = create((set) => ({
  storeProjects: [],
  selectedProject: null,
  setProjects: (newProjects) => set((state) => ({
    storeProjects: [...state.storeProjects, ...newProjects],
  })),
  addProject: (project) => set((state) => ({
    storeProjects: [...state.storeProjects, project],
  })),
}));

export default useProjectStore;
