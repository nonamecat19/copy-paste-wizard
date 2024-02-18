import { useDataStore } from '@/store'
import {
  AddElement,
  AddGroup,
  CopyElement,
  ElementContextMenu,
} from '@/components'
import { useTranslation } from 'react-i18next'

export function MainBlock() {
  const store = useDataStore()
  const { t } = useTranslation()

  if (!store.data || store.data.length === 0) {
    return <>{t('Select the tab or create')}</>
  }

  const currentTab = store.data[store.currentTab]

  if (!currentTab) {
    return <>{t('Select the tab or create')}</>
  }

  const { value: tabData } = currentTab

  return (
    <div className="flex flex-col gap-2 p-2">
      {tabData.map(({ name, value }, index) => (
        <div
          className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-2 rounded-lg"
          key={index}
        >
          <div>{name}</div>

          <div className="flex flex-wrap gap-2 mt-2">
            {value.map((el, index2) => (
              <ElementContextMenu index={index} index2={index2} key={index2}>
                <CopyElement label={el.label} type={el.type} value={el.value} />
              </ElementContextMenu>
            ))}
            <AddElement index={index} />
          </div>
        </div>
      ))}

      <AddGroup />
    </div>
  )
}
