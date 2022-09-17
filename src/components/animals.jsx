import { useEffect, useState } from "react";

function ShowAnimals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    const dados = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand"
    );
    const converter = await dados.json();
    setAnimals(converter);
  };

  return (
    <div className="container">
      <img id="animalsImg" src={animals.image_link} />
      <h4>Name: {animals.name}</h4>
      <p><strong>Latin Name:</strong> {animals.latin_name}</p>
      <p><strong>Habitat:</strong> {animals.habitat}</p>
      <p><strong>Diet:</strong> {animals.diet}</p>
      <p><strong>Localization:</strong> {animals.geo_range}</p>

      <button type="button" className="btn"
      onClick={getAnimals}>
        Get Another Animal
      </button>
    </div>
  );
}

export default ShowAnimals;