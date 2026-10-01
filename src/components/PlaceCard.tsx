import type {Place} from "../types/Place"

type PlaceCardProps = {
  place: Place
}

function PlaceCard({place}: PlaceCardProps) {
  return (
    <div>
      <h3>{place.name}</h3>
      <p>{place.category}・{place.area}</p>
      <p>{place.status === "visited" ? "Visited" : "Want to Visit"}</p>
      <p>{place.notes}</p>
    </div>
  )
}

export default PlaceCard
