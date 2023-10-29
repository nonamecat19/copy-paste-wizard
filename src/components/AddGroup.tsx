import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {useState} from "react";
import {JsonService} from "@/services/json.service.ts";
import {useDataStore} from "@/store/useDataStore.ts";

export default function AddGroup() {
  const [name, setName] = useState<string>('')
  const dataStore = useDataStore()
  function submitHandle() {
    dataStore.addGroup(name)
    setTimeout(() => {
      console.log(dataStore.data)
      JsonService.setLocalData(dataStore.data)
    }, 500)
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
            Add group
          </DialogTitle>
          <DialogDescription>
            Edit in progress
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right"
            >
              Title
            </Label>
            <Input
              id="Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onChange={submitHandle}
          >
            Add group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}