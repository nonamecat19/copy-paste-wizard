import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useDataStore} from "@/store/useDataStore.ts";

export default function AddTab() {
  const [name, setName] = useState<string>('')
  const dataStore = useDataStore()

  function handleSubmit() {
    dataStore.addTab(name)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Add tab
          </DialogTitle>
          <DialogDescription>
            Name edit in progress
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type='submit'
            onClick={handleSubmit}
          >
            Add tab
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}