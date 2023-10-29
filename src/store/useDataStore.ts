import { create } from 'zustand'
import {ClipboardType} from "@/types/data.types.ts";

interface IStore {
  data: ClipboardType | null
  currentTab: number
}

interface IActions {
  setData: (data: ClipboardType) => void
  clearData: () => void
  setCurrentTab: (currentTab: number) => void
}

export const useDataStore = create<IStore & IActions>((set) => ({
  data: null,
  currentTab: 0,
  setData: (data) => set({ data }),
  clearData: () => set({data: null}),
  setCurrentTab: (currentTab) => set({currentTab})
}))