import {Button} from "@/components/ui/button.tsx";
import {JsonService} from "@/services/json.service.ts";
import {useDataStore} from "@/store/useDataStore.ts";

export default function Navbar() {
  const dataStore = useDataStore()

  async function importHandle() {
    const data = await JsonService.importData()
    if (!data) {
      return
    }
    dataStore.setData(data)
  }

  function resetHandle() {
    JsonService.resetLocalData()
    dataStore.clearData()
  }

  return (
    <nav className='border-b px-2 border-zinc-800 h-14 flex justify-between items-center'>
      <div className="logo">
        Logo
      </div>

      <div className='flex gap-2'>
        <Button onClick={resetHandle}>
          Reset
        </Button>

        <Button onClick={importHandle}>
          Import
        </Button>

        <Button>
          Export
        </Button>
      </div>

    </nav>
  )
}