import { open, save } from '@tauri-apps/api/dialog'
import { readTextFile } from '@tauri-apps/api/fs'
import { ClipboardType } from '@/types/data.types'
import { localStorageKey } from '@/config/localStorage'
import { invoke } from '@tauri-apps/api'
import { format } from 'date-fns'

export class JsonService {
  public static async importData(): Promise<ClipboardType | undefined> {
    try {
      const selectedPath = await open({
        multiple: false,
        title: 'Open JSON file',
      })
      if (!selectedPath || Array.isArray(selectedPath)) {
        throw new Error('No path found')
      }
      const text = await readTextFile(selectedPath)
      const clipboardData = JSON.parse(text)
      localStorage.setItem(localStorageKey, text)
      return clipboardData as ClipboardType
    } catch (e) {
      console.error({ e })
    }
  }

  public static async exportData(data: ClipboardType): Promise<void> {
    try {
      const fileName = `save-${format(new Date(), 'ss:mm:hh dd|MM|yy')}.json`
      const savePath = await save({
        title: 'Save your backups',
        defaultPath: fileName,
      })
      await invoke('save_file', {
        path: savePath,
        contents: JSON.stringify(data, null, '\t'),
      })
    } catch (e) {
      console.error({ e })
    }
  }

  public static resetLocalData(): void {
    try {
      localStorage.removeItem(localStorageKey)
    } catch (e) {
      console.error({ e })
    }
  }
}
