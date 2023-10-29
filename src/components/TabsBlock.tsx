import {useDataStore} from "@/store/useDataStore.ts";
import {Button} from "@/components/ui/button.tsx";
import AddTab from "@/components/AddTab.tsx";

export default function TabsBlock() {
  const store = useDataStore()

  function changeTabHandle(index: number) {
    store.setCurrentTab(index)
  }

  return (
    <div className='border-b gap-2 px-4 border-zinc-800 h-14 flex items-center'>
      {
        store.data.map(({title}, index) =>
          <Button
            variant={index === store.currentTab ? 'default' : 'secondary'}
            key={index}
            onClick={() => changeTabHandle(index)}
            children={title}
          />
        )
      }
      <AddTab/>
    </div>
  )
}