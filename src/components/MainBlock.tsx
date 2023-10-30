import {useDataStore} from "@/store/useDataStore.ts";
import CopyElement from "@/components/CopyElement.tsx";
import AddGroup from "@/components/AddGroup.tsx";
import AddElement from "@/components/AddElement.tsx";
import ElementContextMenu from "@/components/ElementContextMenu.tsx";

export default function MainBlock() {
  const store = useDataStore()

  if (!store.data || store.data.length === 0) {
    return <>Select the tab or create</>
  }

  const currentTab = store.data[store.currentTab]

  if (!currentTab) {
    return <>Select the tab or create</>
  }

  const {value: tabData} = currentTab


  return (
    <div className='flex flex-col gap-2 p-2'>
      {
        tabData.map(({name, value}, index) =>
          <div
            className='bg-zinc-950 border border-zinc-800 p-2 rounded-lg'
            key={index}
          >
            <div>
              {name}
            </div>

            <div className='flex flex-wrap gap-2 mt-2'>
              {
                value.map((el, index2) =>
                    <ElementContextMenu
                      index={index}
                      index2={index2}
                      key={index2}
                    >
                      <CopyElement
                        label={el.label}
                        type={el.type}
                        value={el.value}
                      />
                    </ElementContextMenu>
                )
              }
              <AddElement index={index}/>
            </div>
          </div>
        )
      }

      <AddGroup/>
    </div>
  )
}