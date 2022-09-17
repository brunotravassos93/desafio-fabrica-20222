import React, { useEffect, useState } from "react";


function ShowAnimals() {
  const [animals, setAnimals] = useState([]);

  
  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/" + 10)
      .then(response => response.json())
      .then(data => {
        setAnimals(data);
      })
  }, [])


  return (
    <div className="block"> 
    <ul className="template" id="template">
      {animals.map(animal => {
        return (
          <div className="container gallery">
          <img id="animalsImg" src={animal.image_link} />
          <h4>Name: {animal.name}</h4>
          <p>Latin Name: {animal.latin_name}</p>
          <p>Habitat: {animal.habitat}</p>
          <p>Diet: {animal.diet}</p>
          <p>Localização: {animal.geo_range}</p>
        </div>
        )
      })}
    </ul>
    </div>
    
  );
}

export default ShowAnimals;