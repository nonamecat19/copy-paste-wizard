import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@ui'
import { useEffect, useState } from 'react'
import { useDataStore } from '@/store'
import { useSwitch } from '@/hooks'
import { useTranslation } from 'react-i18next'

export function AddGroup() {
  const [name, setName] = useState<string>('')
  const dataStore = useDataStore()
  const { t } = useTranslation()

  const [open, setOpen, switchOpen] = useSwitch()

  useEffect(() => {
    setName('')
  }, [open])

  function submitHandle() {
    dataStore.addGroup(name)
    switchOpen()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('Add group')}</DialogTitle>
          <DialogDescription>{t('Edit in progress')}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              {t('Title')}
            </Label>
            <Input
              id="Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitHandle}>
            {t('Submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
