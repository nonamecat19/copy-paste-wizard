import {useDataStore} from "@/store/useDataStore.ts";
import {Button} from "@/components/ui/button.tsx";
import AddDialog from "@/components/AddDialog.tsx";

export default function TabsBlock() {
  const store = useDataStore()

  function changeTabHandle(index: number) {
    store.setCurrentTab(index)
  }

  if (!store.data || store.data.length === 0) {
    return null
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
      <AddDialog/>
    </div>
  )
}