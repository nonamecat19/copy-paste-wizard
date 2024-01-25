import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useDataStore } from '@/store/useDataStore'
import { ElementType } from '@/types/data.types'
import {
  SelectValue,
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
} from './ui/select'
import useSwitch from '@/hooks/useSwitch'
import { useTranslation } from 'react-i18next'

interface IProps {
  index: number
}

export default function AddElement({ index }: IProps) {
  const [value, setValue] = useState<string>('')
  const [type, setType] = useState<ElementType>('string')
  const [label, setLabel] = useState<string>('')
  const { t } = useTranslation()
  const dataStore = useDataStore()

  const [open, setOpen, switchOpen] = useSwitch()

  useEffect(() => {
    setValue('')
    setType('string')
    setLabel('')
  }, [open])

  function handleSubmit() {
    dataStore.addElement(value, type, label, index)
    switchOpen()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('Add element')}</DialogTitle>
          <DialogDescription>{t('Name edit in progress')}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {t('Value')}
            </Label>
            <Input
              id="name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="label" className="text-right">
              {t('Label (not required)')}
            </Label>
            <Input
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              {t('Type')}
            </Label>
            <Select onValueChange={(e: ElementType) => setType(e)} value={type}>
              <SelectTrigger className="w-[180px] text-black dark:text-white">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="string">{t('String')}</SelectItem>
                <SelectItem value="link">{t('Link')}</SelectItem>
                <SelectItem value="pass">{t('Password')}</SelectItem>
                <SelectItem value="danger-link">{t('Danger link')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            {t('Submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
