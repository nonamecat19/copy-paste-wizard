import {create} from 'zustand'
import {ClipboardType, GroupData} from "@/types/data.types.ts";

interface IStore {
  data: ClipboardType
  currentTab: number
}

interface IActions {
  setData: (data: ClipboardType) => void
  clearData: () => void
  setCurrentTab: (currentTab: number) => void
  addTab: (title: string) => void
  addGroup: (title: string) => void
}

export const useDataStore = create<IStore & IActions>((set) => ({
  data: [],
  currentTab: 0,
  setData: (data) => set({data}),
  clearData: () => set({data: []}),
  setCurrentTab: (currentTab) => set({currentTab}),
  addTab: (title) => {
    set((state) => ({
      data: [
        ...state.data,
        {
          title,
          value: []
        }
      ]
    }))
  },
  addGroup: (title) => {
    set((state) => {
        const newGroup: GroupData = {
          type: "group",
          name: title,
          value: []
        };
        state.data[state.currentTab].value.push(newGroup)
        return { data: [...state.data] };
    })
  }
}))