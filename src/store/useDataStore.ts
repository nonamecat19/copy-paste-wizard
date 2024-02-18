import { create } from 'zustand'
import { ClipboardType, ElementType } from '@/types'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface IStore {
  data: ClipboardType
  currentTab: number
}

interface IActions {
  setData: (data: ClipboardType) => void
  clearData: () => void
  setCurrentTab: (currentTab: number) => void
  addTab: (title: string) => void
  editTab: (title: string, index: number) => void
  deleteTab: (index: number) => void
  addGroup: (name: string) => void
  addElement: (
    value: string,
    type: ElementType,
    label: string,
    index: number
  ) => void
  editElement: (
    value: string,
    type: ElementType,
    label: string,
    index: number,
    index2: number
  ) => void
  deleteElement: (index: number, index2: number) => void
}

export const useDataStore = create<IStore & IActions>()(
  persist(
    immer((set) => ({
      data: [],
      currentTab: 0,
      setData: (data) => set({ data }),
      clearData: () => set({ data: [] }),
      setCurrentTab: (currentTab) => set({ currentTab }),

      addTab: (title) =>
        set((state) => {
          state.data.push({
            title,
            value: [],
          })
        }),
      editTab: (title, index) =>
        set((state) => {
          state.data[index].title = title
        }),
      deleteTab: (index) =>
        set((state) => {
          state.currentTab = 0
          state.data.splice(index, 1)
        }),

      addGroup: (name) =>
        set((state) => {
          state.data[state.currentTab].value.push({
            type: 'group',
            name,
            value: [],
          })
        }),

      addElement: (value, type, label, index) =>
        set((state) => {
          state.data[state.currentTab].value[index].value.push({
            type,
            label,
            value,
          })
        }),
      editElement: (value, type, label, index, index2) =>
        set((state) => {
          state.data[state.currentTab].value[index].value[index2] = {
            type,
            label,
            value,
          }
        }),
      deleteElement: (index, index2) =>
        set((state) => {
          state.data[state.currentTab].value[index].value.splice(index2, 1)
        }),
    })),
    { name: 'zustand' }
  )
)
