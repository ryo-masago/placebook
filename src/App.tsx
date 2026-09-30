type Place = {
  id: number
  name: string
  category: string
  area: string
  status: "visited" | "want-to-visit"
}

const places: Place[] = [
  {
    id: 1,
    name: "Coffee Mameya",
    category: "Cafe",
    area: "Omotesando",
    status: "visited"
  },
  {
    id: 2,
    name: "Shinuku Gyoen",
    category: "Park",
    area: "Shinjuku",
    status: "want-to-visit"
  },
  {
    id: 3,
    name: "Tsukiji Outer Market",
    category: "Food",
    area: "Tsukiji",
    status: "visited"
  }
]

function App() {
  return (
    <main>
      <h1>Placebook</h1>
      <p>Save the places you want to visit and remember.</p>

      <h2>Your Places</h2>

      {places.map((place) => (
        <div key = {place.id}>
          <h3>{place.name}</h3>
          <p>{place.category}・{place.area}</p>
          <p>{place.status}</p>
        </div>
      ))}
    </main>
  )
}

export default App
