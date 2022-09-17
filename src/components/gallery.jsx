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
            <div className="description">
              <p><strong>Latin Name:</strong> {animal.latin_name}</p>
              <p><strong>Habitat:</strong> {animal.habitat}</p>
              <p><strong>Diet:</strong> {animal.diet}</p>
              <p><strong>Localization:</strong> {animal.geo_range}</p>
            </div>
          </div>
        )
      })}
    </ul>
    </div>
    
  );
}

export default ShowAnimals;