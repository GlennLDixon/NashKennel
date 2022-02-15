import React, {useEffect, useState} from "react"
import { AnimalCard } from './AnimalCard.js'
import { getAllAnimals, getAnimalById, deleteAnimal } from "../../modules/AnimalManager.js"
import { useNavigate } from "react-router-dom"

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

    const navigate = useNavigate()

    useEffect(() => {
        getAnimals();
    }, []);


    return(
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/animals/create")}}>
                    Admit Animal
                </button>
            </section>
            <div className="container-cards">
                {animals.map(animal => 
                    <AnimalCard 
                    key={animal.id} 
                    animal={animal} 
                    handleDeleteAnimal={handleDeleteAnimal} />)}
            </div>
        </>
    )

}