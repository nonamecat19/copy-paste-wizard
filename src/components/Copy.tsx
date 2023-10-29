import {Button} from "@/components/ui/button.tsx";
import {useDataStore} from "@/store/useDataStore.ts";
import {JsonService} from "@/services/json.service.ts";

export default function Copy() {

  const store = useDataStore()

  async function clickHandle() {
    const data = await JsonService.importData()
    store.setData(data)
  }

  return (
    <>
      <Button onClick={clickHandle}/>
      {JSON.stringify(store.data)}
    </>
  )
}