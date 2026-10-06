export type Category =
  | "Cafe"
  | "Restaurant"
  | "Bar"
  | "Park"
  | "Shop"
  | "Other"

export type PlaceStatus =
  | "visited"
  | "want-to-visit"

export type Place = {
  id: number
  name: string
  category: Category
  area: string
  status: PlaceStatus
  notes: string
}
