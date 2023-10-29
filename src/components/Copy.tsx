import {useDataStore} from "@/store/useDataStore.ts";
import {useEffect} from "react";
import {JsonService} from "@/services/json.service.ts";
import CopyElement from "@/components/CopyElement.tsx";

export default function Copy() {
  const store = useDataStore()

  useEffect(() => {
    const data = JsonService.loadData()
    if (!data) {
      return
    }
    store.setData(data)
  }, [])

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
            {name}

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

    </div>
  )
}