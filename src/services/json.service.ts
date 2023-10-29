import {open} from "@tauri-apps/api/dialog";
import {readTextFile} from "@tauri-apps/api/fs";
import {ClipboardType} from "@/types/data.types.ts";
import {localStorageKey} from "@/config/localStorage";

export class JsonService {
  static async importData(): Promise<ClipboardType | undefined> {
    try {
      const selectedPath = await open({
        multiple: false,
        title: "Open JSON file"
      })
      if (!selectedPath || Array.isArray(selectedPath)) {
        throw new Error('No path found')
      }
      const text = await readTextFile(selectedPath)
      const clipboardData = JSON.parse(text)
      localStorage.setItem(localStorageKey, text)
      return clipboardData as ClipboardType
    } catch (e) {
      console.error({e})
    }
  }

  static loadData(): ClipboardType | undefined {
    try {
      const text = localStorage.getItem(localStorageKey)
      if (!text) {
        throw new Error('No data in localstorage')
      }
      return JSON.parse(text) as ClipboardType
    } catch (e) {
      console.error({e})
    }
  }

  static resetLocalData(): void {
    try {
      localStorage.removeItem(localStorageKey)
    } catch (e) {
      console.error({e})
    }
  }
}