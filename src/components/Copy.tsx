import {useDataStore} from "@/store/useDataStore.ts";

export default function Copy() {
  const store = useDataStore()


  return (
    <>
      {JSON.stringify(store.data)}
    </>
  )
}