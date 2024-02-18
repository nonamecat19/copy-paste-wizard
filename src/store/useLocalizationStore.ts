import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { Lang } from '@/types'

interface IStore {
  lang: Lang
}

interface IActions {
  changeLang: (lang: Lang) => void
}

export const useLocalizationStore = create<IStore & IActions>()(
  persist(
    immer((set) => ({
      lang: 'uk',

      changeLang: (lang) =>
        set((state) => {
          state.lang = lang
        }),
    })),
    { name: 'localization' }
  )
)
