import { ReactNode } from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@ui'
import { useSwitch } from '@/hooks'
import { ConfirmDialog } from '@/components'
import { EditElement } from '@/components'
import { useDataStore } from '@/store'
import { useTranslation } from 'react-i18next'

interface IProps {
  children: ReactNode
  index: number
  index2: number
}

export function ElementContextMenu({ children, index, index2 }: IProps) {
  const dataStore = useDataStore()
  const { t } = useTranslation()
  const [openEdit, setOpenEdit, editSwitch] = useSwitch()
  const [openDelete, setOpenDelete, deleteSwitch] = useSwitch()

  function deleteHandle() {
    dataStore.deleteElement(index, index2)
    deleteSwitch()
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={editSwitch}>
            {t('Edit element')}
          </ContextMenuItem>
          <ContextMenuItem onClick={deleteSwitch}>
            {t('Delete')}
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
