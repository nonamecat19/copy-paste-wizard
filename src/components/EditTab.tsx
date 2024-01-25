import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Dispatch, useEffect, useState } from 'react'
import { useDataStore } from '@/store/useDataStore'
import { useTranslation } from 'react-i18next'

interface IProps {
  index: number
  open: boolean
  onOpenChange: Dispatch<boolean>
}

export default function EditTab({ index, onOpenChange, open }: IProps) {
  const dataStore = useDataStore()
  const { t } = useTranslation()
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    setTitle('')
  }, [open])

  function handleSubmit() {
    dataStore.editTab(title, index)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('Edit tab')}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {t('Title')}
            </Label>
            <Input
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
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
