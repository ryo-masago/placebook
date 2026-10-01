import {useState} from "react"
import type {Place} from "../types/Place"

type PlaceFormProps = {
  onAdd: (place: Place) => void
}

function PlaceForm({onAdd}: PlaceFormProps) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [area, setArea] = useState("")
  const [notes, setNotes] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newPlace: Place = {
      id: Date.now(),
      name: name,
      category: category,
      area: area,
      status: "want-to-visit",
      notes: notes
    }

    onAdd(newPlace)

    setName("")
    setCategory("")
    setArea("")
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
        <input
          id = "category"
          type="text"
          value = {category}
          onChange = {(event) => setCategory(event.target.value)}
        />
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
