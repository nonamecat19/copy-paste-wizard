import {Button} from "@/components/ui/button.tsx";
import {writeText} from '@tauri-apps/api/clipboard';
import {open} from '@tauri-apps/api/shell';
import {useToast} from "@/components/ui/use-toast"

interface IProps {
  type: "string" | "pass" | "link"
  value: string
  label?: string
}

export default function CopyElement({value, label, type}: IProps) {
  const {toast} = useToast()

  async function clickHandle() {
    if (type === 'link') {
      await open(value);
      return
    }

    await writeText(value);
    toast({
      description: "Copied to clipboard",
      duration: 1500
    })
  }

  return (
    <Button
      onClick={clickHandle}
      variant='secondary'
    >
      {label ?? value}
    </Button>
  )
}