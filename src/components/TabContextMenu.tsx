import { ReactNode } from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import useSwitch from '@/hooks/useSwitch'
import ConfirmDialog from '@/components/ConfirmDialog'
import { useDataStore } from '@/store/useDataStore'
import EditTab from '@/components/EditTab'

interface IProps {
  children: ReactNode
  index: number
}

export default function TabContextMenu({ children, index }: IProps) {
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
