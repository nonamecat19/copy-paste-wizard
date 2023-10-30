import {Button} from "@/components/ui/button.tsx";
import {JsonService} from "@/services/json.service.ts";
import {useDataStore} from "@/store/useDataStore.ts";
import lgoo from "@/assets/logo.jpg"

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
    <nav className='border-b px-4 border-zinc-800 h-14 flex justify-between items-center'>
      <img
        alt='Logo'
        src={lgoo}
        className='h-14'
      />

      <div className='flex gap-2'>
        <Button
          onClick={resetHandle}
          variant='outline'
        >
          Reset
        </Button>

        <Button
          onClick={importHandle}
          variant='outline'
        >
          Import
        </Button>

        <Button
          variant='outline'
        >
          Export
        </Button>
      </div>

    </nav>
  )
}