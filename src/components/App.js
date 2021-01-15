import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  // useEffect(() => {
  //   fetch("http://localhost:3001/pets")
  //   .then(resp => resp.json())
  //   .then(petsObjs => setPets(petsObjs))
  // }, [])
  
  const filteredPets = pets.filter((pet) => 
    filters.type === "all" || pet.type === filters.type
  )

  function handleFindPetsClick() {
    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
      .then(resp => resp.json())
      .then(petsObjs => setPets(petsObjs))
    } else if (filters.type === "cat") {
      fetch("http://localhost:3001/pets?type=cat")
      .then(resp => resp.json())
      .then(petsObjs => setPets(petsObjs))
    } else if (filters.type === "dog") {
      fetch("http://localhost:3001/pets?type=dog")
      .then(resp => resp.json())
      .then(petsObjs => setPets(petsObjs))
    } else {
      fetch("http://localhost:3001/pets?type=micropig")
      .then(resp => resp.json())
      .then(petsObjs => setPets(petsObjs))
    }
  }

  function handleAdoptPet(id) {
    const updatedPets = filteredPets.map((pet) => pet.id === id ? {...pet, isAdopted: true} : pet)
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              filters={filters}
              onChangeType={setFilters}
              onFindPetsClick={handleFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
              pets={filteredPets}
              onAdoptPet={handleAdoptPet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
