import { Button } from '@/components/ui/button'
import { writeText } from '@tauri-apps/api/clipboard'
import { open } from '@tauri-apps/api/shell'
import ConfirmDialog from '@/components/ConfirmDialog'
import { useState } from 'react'
import { toast } from 'sonner'

interface IProps {
  type: 'string' | 'pass' | 'link' | 'danger-link'
  value: string
  label?: string
}

export default function CopyElement({ value, label, type }: IProps) {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false)

  function openDanger() {
    setOpenConfirm(true)
  }

  async function clickHandle() {
    if (type === 'link' || type === 'danger-link') {
      await open(value)
      return
    }

    await writeText(value)
    toast('Copied to clipboard', { duration: 2000 })
  }

  async function confirmDanger() {
    await clickHandle()
    setOpenConfirm(false)
  }

  if (type === 'danger-link') {
    return (
      <>
        <ConfirmDialog
          open={openConfirm}
          successHandle={confirmDanger}
          onOpenChange={setOpenConfirm}
        />
        <Button onClick={openDanger} variant="destructive">
          {label?.length ? label : value}
        </Button>
      </>
    )
  }

  return (
    <Button onClick={clickHandle} variant="secondary">
      {label && label.length ? label : value}
    </Button>
  )
}
