import {useDataStore} from "@/store/useDataStore.ts";
import CopyElement from "@/components/CopyElement.tsx";
import AddGroup from "@/components/AddGroup.tsx";

export default function MainBlock() {
  const store = useDataStore()

  if (!store.data || store.data.length === 0) {
    return <>No data</>
  }

  const {value: tabData} = store.data[store.currentTab]


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
                value.map((el, index2) => {
                  if (el.type === 'group') {
                    return null
                  }
                  return (
                    <CopyElement
                      label={el.label}
                      type={el.type}
                      value={el.value}
                      key={index2}
                    />
                  )
                })
              }
            </div>
          </div>
        )
      }

      <AddGroup/>
    </div>
  )
}