import { Button } from '@/components/ui/button'
import { useDataStore } from '@/store/useDataStore'
import { JsonService } from '@/services/json.service'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Theme, useTheme } from '@/components/ThemeProvider.tsx'
import ConfirmDialog from '@/components/ConfirmDialog.tsx'
import useSwitch from '@/hooks/useSwitch.ts'

export default function Settings() {
  const dataStore = useDataStore()
  const { setTheme, theme } = useTheme()
  const [openReset, setOpenReset, toggleReset] = useSwitch()

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
    toggleReset()
  }

  async function exportHandle() {
    await JsonService.exportData(dataStore.data)
  }

  function changeThemeHandle(value: Theme) {
    setTheme(value)
  }

  return (
    <div className="m-2 flex flex-col gap-2">
      <Button onClick={() => setOpenReset(true)} variant="destructive">
        Reset data
      </Button>

      <ConfirmDialog
        open={openReset}
        successHandle={resetHandle}
        onOpenChange={setOpenReset}
      />

      <Button onClick={importHandle} variant="outline">
        Import from file
      </Button>

      <Button onClick={exportHandle} variant="outline">
        Export to file
      </Button>

      <div className="flex gap-4 items-center">
        <h3>Theme: </h3>
        <Select defaultValue={theme} onValueChange={changeThemeHandle}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="light">Light</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
