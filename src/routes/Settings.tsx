import { Button } from '@/components/ui/button.tsx'
import { useDataStore } from '@/store/useDataStore.ts'
import { JsonService } from '@/services/json.service.ts'

export default function Settings() {
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

  async function exportHandle() {
    await JsonService.exportData(dataStore.data)
  }

  return (
    <div className="m-2 flex flex-col gap-2 ">
      <Button onClick={resetHandle} variant="outline">
        Reset data
      </Button>

      <Button onClick={importHandle} variant="outline">
        Import from file
      </Button>

      <Button onClick={exportHandle} variant="outline">
        Export to file
      </Button>
    </div>
  )
}
