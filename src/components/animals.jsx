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
      <img src={animals.image_link} />
      <h3>{animals.name}</h3>
      <p>{animals.latin_name}</p>
      <p>{animals.habitat}</p>
      <p>{animals.diet}</p>
      <p>{animals.geo_range}</p>

      <button type="button" className="btn"
      onClick={getAnimals}>
        Get Another Fact
      </button>
    </div>
  );
}

export default ShowAnimals;