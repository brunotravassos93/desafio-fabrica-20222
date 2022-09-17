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
      <p>Latin Name: {animals.latin_name}</p>
      <p>Habitat: {animals.habitat}</p>
      <p>Diet: {animals.diet}</p>
      <p>Localização: {animals.geo_range}</p>

      <button type="button" className="btn"
      onClick={getAnimals}>
        Get Another Animal
      </button>
    </div>
  );
}

export default ShowAnimals;