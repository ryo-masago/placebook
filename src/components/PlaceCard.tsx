import type {Place} from "../types/Place"

type PlaceCardProps = {
  place: Place
  onDelete: (id: number) => void
}

function PlaceCard({place, onDelete}: PlaceCardProps) {
  return (
    <div>
      <h3>{place.name}</h3>
      <p>{place.category}・{place.area}</p>
      <p>{place.status === "visited" ? "Visited" : "Want to Visit"}</p>
      <p>{place.notes}</p>
      <button onClick = {() => onDelete(place.id)}>Delete</button>
    </div>
  )
}

export default PlaceCard
