type PlaceCardProps = {
  name: string
  category: string
  area: string
  status: "visited" | "want-to-visit"
}

function PlaceCard({
  name,
  category,
  area,
  status
}: PlaceCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{category}・{area}</p>
      <p>{status === "visited" ? "Visited" : "Want to Visit"}</p>
    </div>
  )
}

export default PlaceCard
