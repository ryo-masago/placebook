import PlaceCard from "./components/PlaceCard"
import type {Place} from "./types/Place"
import {useState} from "react"

function App() {
  const [places, setPlaces] = useState<Place[]>([
  {
    id: 1,
    name: "Coffee Mameya",
    category: "Cafe",
    area: "Omotesando",
    status: "visited",
    notes: "Great coffee!"
  },
  {
    id: 2,
    name: "Shinuku Gyoen",
    category: "Park",
    area: "Shinjuku",
    status: "want-to-visit",
    notes: "Visit in October"
  },
  {
    id: 3,
    name: "Tsukiji Outer Market",
    category: "Food",
    area: "Tsukiji",
    status: "visited",
    notes: "Buy seafood"
  }
  ])

  function handleDelete(id: number) {
    setPlaces((currentPlaces) =>
      currentPlaces.filter((place) => place.id !== id)
    )
  }

  return (
    <main>
      <h1>Placebook</h1>
      <p>Save the places you want to visit and remember.</p>

      <h2>Your Places</h2>
      <p>Total Places: {places.length}</p>

      {places.map((place) => (
        <PlaceCard
          key = {place.id}
          place = {place}
          onDelete = {handleDelete}
        />
      ))}

      <button onClick = {() => setPlaces ([])}>Clear All Places</button>
    </main>
  )
}

export default App
