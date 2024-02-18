import { ReactNode } from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@ui'
import { useSwitch } from '@/hooks'
import { ConfirmDialog, EditTab } from '@/components'
import { useDataStore } from '@/store'

interface IProps {
  children: ReactNode
  index: number
}

export function TabContextMenu({ children, index }: IProps) {
  const dataStore = useDataStore()

  const [openEdit, setOpenEdit, editSwitch] = useSwitch()
  const [openDelete, setOpenDelete, deleteSwitch] = useSwitch()

  function deleteHandle() {
    dataStore.deleteTab(index)
    deleteSwitch()
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={editSwitch}>Edit element</ContextMenuItem>
          <ContextMenuItem onClick={deleteSwitch}>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <EditTab open={openEdit} onOpenChange={setOpenEdit} index={index} />

      <ConfirmDialog
        open={openDelete}
        onOpenChange={setOpenDelete}
        successHandle={deleteHandle}
      />
    </>
  )
}
