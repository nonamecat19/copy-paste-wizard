import { create } from 'zustand'
import {ClipboardType} from "@/types/data.types.ts";

interface IStore {
  data: any
}

interface IActions {
  setData: (data: ClipboardType) => void
  clearData: () => void
}

export const useDataStore = create<IStore & IActions>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  clearData: () => set({data: null})
}))