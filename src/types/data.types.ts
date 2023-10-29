export type ClipboardType = TabData[] | null

export interface TabData {
  title: string
  value: GroupData[]
}

export interface GroupData {
  type: "group"
  name: string
  value: (GroupData | StringData | LinkData | PassData)[]
}

interface BaseData {
  value: string
  icon?: string
  label?: string
}

export interface StringData extends BaseData {
  type: "string"
}

export interface PassData extends BaseData {
  type: "pass"
}

export interface LinkData extends BaseData {
  type: "link"
}