import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@ui'
import { Dispatch } from 'react'
import { useTranslation } from 'react-i18next'

interface IProps {
  open: boolean
  successHandle: () => void
  onOpenChange: Dispatch<boolean>
  title?: string
  description?: string
  buttonText?: string
}

export function ConfirmDialog({
  open,
  onOpenChange,
  successHandle,
  title,
  description,
}: IProps) {
  const { t } = useTranslation()
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black dark:text-white">
            {title ?? t('Are you sure absolutely sure?')}
          </DialogTitle>
          <DialogDescription>
            {description ?? t('This action permanently.')}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" type="submit" onClick={successHandle}>
            {t('Confirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
