import {open} from "@tauri-apps/api/dialog";
import {readTextFile} from "@tauri-apps/api/fs";

export class JsonService {


  static async importData() {
    try {
      const selectedPath = await open({
        multiple: false,
        title: "Open JSON file"
      })
      if (!selectedPath) {
        return
      }
      const data = await readTextFile(selectedPath as string)

      return JSON.parse(data)
    } catch (e) {
      console.log({e})
    }
  }
}