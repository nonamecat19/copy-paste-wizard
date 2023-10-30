import {create} from 'zustand'
import {ClipboardType, ElementType, GroupData, LinkData, PassData, StringData} from "@/types/data.types.ts";
import {persist} from "zustand/middleware";
import {immer} from 'zustand/middleware/immer'

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
  addElement: (value: string, type: ElementType, label: string, index: number) => void
}

export const useDataStore = create<IStore & IActions>()
(persist(immer((set) => ({
  data: [],
  currentTab: 0,
  setData: (data) => set({data}),
  clearData: () => set({data: []}),
  setCurrentTab: (currentTab) => set({currentTab}),
  addTab: (title) => set((state) => {
      const newTab = {
        title,
        value: []
      }
      state.data.push(newTab)
  }),
  addGroup: (title) => set((state) => {
    const newGroup: GroupData = {
      type: "group",
      name: title,
      value: []
    };
    state.data[state.currentTab].value.push(newGroup)
  }),
  addElement: (value, type, label, index) => set((state) => {
    const newElement: StringData | LinkData | PassData = {
      type,
      label,
      value
    };
    state.data[state.currentTab].value[index].value.push(newElement)
  }),
})), {name: 'zustand'}))