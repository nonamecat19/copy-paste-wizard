import { Button } from '@/components/ui/button'
import { JsonService } from '@/services/json.service'
import { useDataStore } from '@/store/useDataStore'
import logo from '@/assets/logo.jpg'
import NavLink from '@/components/NavLink.tsx'

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

  async function exportHandle() {
    await JsonService.exportData(dataStore.data)
  }

  return (
    <nav className="border-b px-4 border-zinc-800 h-14 flex justify-between items-center">
      <img alt="Logo" src={logo} className="h-12" />

      <div className="flex gap-2">
        <Button onClick={resetHandle} variant="outline">
          Reset
        </Button>

        <Button onClick={importHandle} variant="outline">
          Import
        </Button>

        <Button onClick={exportHandle} variant="outline">
          Export
        </Button>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  )
}
