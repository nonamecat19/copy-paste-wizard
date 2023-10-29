import { create } from 'zustand'

interface IStore {
  data: any
}

interface IActions {
  setData: (data: string) => void
  clearData: () => void
}

export const useDataStore = create<IStore & IActions>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  clearData: () => set({data: null})
}))