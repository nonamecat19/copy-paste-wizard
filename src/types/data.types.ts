export type ClipboardType = TabData[]
export type ElementType = 'string' | 'pass' | 'link' | 'danger-link'

export interface TabData {
  title: string
  value: GroupData[]
}

export interface GroupData {
  type: 'group'
  name: string
  value: (StringData | LinkData | PassData | DangerLinkData)[]
}

interface BaseData {
  value: string
  icon?: string
  label?: string
}

export interface StringData extends BaseData {
  type: 'string'
}

export interface PassData extends BaseData {
  type: 'pass'
}

export interface LinkData extends BaseData {
  type: 'link'
}

export interface DangerLinkData extends BaseData {
  type: 'danger-link'
}
