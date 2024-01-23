import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Dispatch } from 'react'
import { Button } from '@/components/ui/button.tsx'

interface IProps {
  open: boolean
  successHandle: () => void
  onOpenChange: Dispatch<boolean>
  title?: string
  description?: string
}

export default function ConfirmDialog({
  open,
  onOpenChange,
  successHandle,
  title,
  description,
}: IProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title ?? 'Are you sure absolutely sure?'}</DialogTitle>
          <DialogDescription>
            {description ?? 'This action permanently.'}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" type="submit" onClick={successHandle}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
