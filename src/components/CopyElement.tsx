import {Button} from "@/components/ui/button.tsx";
import { writeText } from '@tauri-apps/api/clipboard';
import { open } from '@tauri-apps/api/shell';

interface IProps {
  type: "string" | "pass" | "link"
  value: string
  label?: string
}

export default function CopyElement({value, label, type}: IProps) {
  async function clickHandle() {
    if (type === 'string' || type === 'pass') {
      await writeText(value);
    } else if (type === 'link') {
      await open(value);
    }
  }

  return (
    <Button
      onClick={clickHandle}
    >
      {label ?? value}
    </Button>
  )
}