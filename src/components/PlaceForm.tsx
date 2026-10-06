import {useState} from "react"
import type {
  Place,
  Category,
  PlaceStatus
} from "../types/Place"

type PlaceFormProps = {
  onAdd: (place: Place) => void
}

function PlaceForm({onAdd}: PlaceFormProps) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState<Category>("Cafe")
  const [area, setArea] = useState("")
  const [status, setStatus] = useState<PlaceStatus>("want-to-visit")
  const [notes, setNotes] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newPlace: Place = {
      id: Date.now(),
      name: name,
      category: category,
      area: area,
      status: status,
      notes: notes
    }

    onAdd(newPlace)

    setName("")
    setCategory("Cafe")
    setArea("")
    setStatus("want-to-visit")
    setNotes("")
  }

  return (
    <form onSubmit = {handleSubmit}>
      <div>
        <label htmlFor = "name">Place Name</label>
        <input
          id = "name"
          type = "text"
          value = {name}
          onChange = {(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor = "category">Category</label>
        <select
          id = "category"
          value = {category}
          onChange = {(event) =>
            setCategory(event.target.value as Category)
          }
        >
          <option value = "Cafe">Cafe</option>
          <option value = "Restaurant">Restaurant</option>
          <option value = "Bar">Bar</option>
          <option value = "Park">Park</option>
          <option value = "Shop">Shop</option>
          <option value = "Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor = "area">Area</label>
        <input
          id = "area"
          type="text"
          value = {area}
          onChange = {(event) => setArea(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor = "staus">Status</label>
        <select
          id = "status"
          value = {status}
          onChange = {(event) =>
            setStatus(event.target.value as PlaceStatus)
          }
        >
          <option value = "want-to-visit">Want to Visit</option>
          <option value = "visited">Visited</option>
        </select>
      </div>

      <div>
        <label htmlFor = "notes">Notes</label>
        <input
          id = "notes"
          type="text"
          value = {notes}
          onChange = {(event) => setNotes(event.target.value)}
        />
      </div>

      <button type = "submit">Add Place</button>
    </form>
  )
}

export default PlaceForm
