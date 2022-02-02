import React, {useState} from "react"
import { getAllAnimals, getAnimalById } from "../../modules/AnimalManager.js"

export const AnimalList = () => {
    const getAnimals = () => {
        return getAllAnimas().then(animalsFromAPI => {
            console.log(animalsFromAPI)
        })
    }
    const [animals, setAnimals] = useState([])

    return(
        <div className="container-cards">
            {animals.map(animal => 
                <AnimalCard key={animal.id} animal={animal} />
                )}
        </div>
    )

}