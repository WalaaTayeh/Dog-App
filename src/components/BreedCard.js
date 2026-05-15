function BreedCard({ breed }) {
return (
    <div className="card">
    <img
        src="https://placedog.net/400"
        alt="dog"
        className="card-img"
    />
    <h3>{breed.attributes.name}</h3>
    </div>
);
}

export default BreedCard;