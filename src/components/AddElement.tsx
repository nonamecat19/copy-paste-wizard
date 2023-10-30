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
import {ElementType} from "@/types/data.types.ts";
import {SelectValue, Select, SelectItem, SelectContent, SelectTrigger } from "./ui/select";

interface IProps {
  index: number
}

export default function AddElement({index}: IProps) {
  const [value, setValue] = useState<string>('')
  const [type, setType] = useState<ElementType>('string')
  const [label, setLabel] = useState<string>('')

  const dataStore = useDataStore()

  function handleSubmit() {
    console.log({value, type, label, index})
    dataStore.addElement(value, type, label, index)
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
            Add element
          </DialogTitle>
          <DialogDescription>
            Name edit in progress
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Value
            </Label>
            <Input
              id="name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="label" className="text-right">
              Label (not required)
            </Label>
            <Input
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Select
              onValueChange={(e: ElementType) => setType(e)}
              value={type}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="string">String</SelectItem>
                <SelectItem value="link">Link</SelectItem>
                <SelectItem value="pass">Password</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            type='submit'
            onClick={handleSubmit}
          >
            Add element
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}