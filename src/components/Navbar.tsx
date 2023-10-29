import {Button} from "@/components/ui/button.tsx";

export default function Navbar() {
  return (
    <nav className='border-b px-2 border-zinc-800 h-14 flex justify-between items-center'>
      <div className="logo">
        Logo
      </div>
      <div className='flex gap-2'>
        <Button>
          Import
        </Button>

        <Button>
          Export
        </Button>
      </div>

    </nav>
  )
}