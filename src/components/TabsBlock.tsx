import { useDataStore } from '@/store'
import { Button } from '@ui'
import { AddTab, TabContextMenu } from '@/components'

export function TabsBlock() {
  const store = useDataStore()

  function changeTabHandle(index: number) {
    store.setCurrentTab(index)
  }

  return (
    <div className="border-b gap-2 px-4 border-zinc-200 dark:border-zinc-800 h-14 flex items-center">
      {store.data.map(({ title }, index) => (
        <TabContextMenu index={index} key={index}>
          <Button
            variant={index === store.currentTab ? 'default' : 'secondary'}
            onClick={() => changeTabHandle(index)}
            children={title}
          />
        </TabContextMenu>
      ))}
      <AddTab />
    </div>
  )
}
