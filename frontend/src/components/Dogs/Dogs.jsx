import DogCard from "../DogCard/DogCard";
import "./dogs.css";

// This components hold all the dogs
const Dogs = (props) => {
  // object destructuring
  const { allDogs } = props;
  return (
    <section className="dogs-container">
      {allDogs.map((dog) => {
        return (
          <DogCard
            key={dog.id}
            id={dog.id}
            name={dog.name}
            breed={dog.breed}
            des={dog.description}
            imageUrl={dog.imageUrl}
          ></DogCard>
        );
      })}
    </section>
  );
};

export default Dogs;
