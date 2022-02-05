import React, {useEffect, useState} from "react"
import { AnimalCard } from './AnimalCard.js'
import { getAllAnimals, getAnimalById, deleteAnimal } from "../../modules/AnimalManager.js"

export const AnimalList = () => {
    const [animals, setAnimals] = useState([])
    
    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        })
    }

    const handleDeleteAnimal = id => {
        deleteAnimal(id)
        .then(() => getAllAnimals().then(setAnimals));
    };


    useEffect(() => {
        getAnimals();
    }, []);

    return(
        <div className="container-cards">
            {animals.map(animal => 
                <AnimalCard 
                key={animal.id} 
                animal={animal} 
                handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
    )

}