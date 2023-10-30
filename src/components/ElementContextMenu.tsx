import {ReactNode} from "react";
import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";
import useSwitch from "@/hooks/useSwitch.ts";
import ConfirmDialog from "@/components/ConfirmDialog.tsx";
import EditElement from "@/components/EditElement.tsx";
import {useDataStore} from "@/store/useDataStore.ts";

interface IProps {
  children: ReactNode
  index: number
  index2: number
}

export default function ElementContextMenu({children, index, index2}: IProps) {
  const dataStore = useDataStore()

  const [openEdit, setOpenEdit, editSwitch] = useSwitch()
  const [openDelete, setOpenDelete, deleteSwitch] = useSwitch()

  function deleteHandle() {
    dataStore.deleteElement(index, index2)
    deleteSwitch()
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          {children}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={editSwitch}>
            Edit element
          </ContextMenuItem>
          <ContextMenuItem onClick={deleteSwitch}>
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <EditElement
        open={openEdit}
        onOpenChange={setOpenEdit}
        index={index}
        index2={index2}
      />

      <ConfirmDialog
        open={openDelete}
        onOpenChange={setOpenDelete}
        successHandle={deleteHandle}
      />
    </>
  )
}