export type ClipboardType = GroupData[] | null

export interface GroupData {
  type: "group"
  value: GroupData | StringData | LinkData | PassData
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