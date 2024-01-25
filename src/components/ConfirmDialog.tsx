import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Dispatch } from 'react'
import { Button } from '@/components/ui/button'

interface IProps {
  open: boolean
  successHandle: () => void
  onOpenChange: Dispatch<boolean>
  title?: string
  description?: string
  buttonText?: string
}

export default function ConfirmDialog({
  open,
  onOpenChange,
  successHandle,
  title,
  description,
  buttonText = 'Confirm',
}: IProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black dark:text-white">
            {title ?? 'Are you sure absolutely sure?'}
          </DialogTitle>
          <DialogDescription>
            {description ?? 'This action permanently.'}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" type="submit" onClick={successHandle}>
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
