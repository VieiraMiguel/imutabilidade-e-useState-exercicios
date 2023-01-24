import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={props.cor}>
        <img src={props.img} alt={`Pokemon`}/>
        <PokemonName>{props.nome}</PokemonName>
        <PokemonType>{props.tipo}</PokemonType>
        <p>{props.peso}kg</p>

        <EvolveButton onClick={props.mudaPokemon/*() => evoluirPokemon()*/}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard