import {useState} from "react";

export default function useSwitch(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue)

  function toggle() {
    setValue(!value)
  }

  return [value, setValue, toggle] as const
}