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
import i18n, { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next'
import { useLocalizationStore } from '@/store/useLocalizationStore.ts'
import { Lang } from '@/types/global.types.ts'

export default function Settings() {
  const dataStore = useDataStore()
  const { setTheme, theme } = useTheme()
  const [openReset, setOpenReset, toggleReset] = useSwitch()
  const { t } = useTranslation()
  const localizationStore = useLocalizationStore()

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

  async function changeLangHandle(lang: Lang) {
    await changeLanguage(lang)
    localizationStore.changeLang(lang)
  }

  return (
    <div className="m-2 flex flex-col gap-2">
      <Button onClick={() => setOpenReset(true)} variant="destructive">
        {t('Reset data')}
      </Button>

      <ConfirmDialog
        open={openReset}
        successHandle={resetHandle}
        onOpenChange={setOpenReset}
      />

      <Button onClick={importHandle} variant="outline">
        {t('Import from file')}
      </Button>

      <Button onClick={exportHandle} variant="outline">
        {t('Export to file')}
      </Button>

      <div className="flex gap-4 items-center">
        <h3>{t('Settings')}: </h3>
        <Select defaultValue={theme} onValueChange={changeThemeHandle}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('Theme')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">{t('Dark')}</SelectItem>
            <SelectItem value="light">{t('Light')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-4 items-center">
        <h3>{t('Lang')}: </h3>
        <Select defaultValue={i18n.language} onValueChange={changeLangHandle}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('Lang')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">{t('English')}</SelectItem>
            <SelectItem value="uk">{t('Ukrainian')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
