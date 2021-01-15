import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  
  const petComps = pets.map((pet) => {
    return (
    <Pet
      key={pet.id} 
      id={pet.id}
      type={pet.type}
      gender={pet.gender}
      age={pet.age}
      weight={pet.weight}
      name={pet.name}
      isAdopted={pet.isAdopted}
      onAdoptPet={onAdoptPet}
    />
    )
  })
  
  return (
      <div className="ui cards">
        {petComps}
      </div>
  )
}

export default PetBrowser;
