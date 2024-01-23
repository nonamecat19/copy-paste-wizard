import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Dispatch, useEffect, useState } from 'react'
import { useDataStore } from '@/store/useDataStore.ts'

interface IProps {
  index: number
  open: boolean
  onOpenChange: Dispatch<boolean>
}

export default function EditTab({ index, onOpenChange, open }: IProps) {
  const dataStore = useDataStore()

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
          <DialogTitle>Edit tab</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
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
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
