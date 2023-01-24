import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image: "https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png",
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "Abra",
    type: "Psychic",
    evolved: false,
    weight: 19,
    color: "pink",
    image: "https://archives.bulbagarden.net/media/upload/archive/b/bd/20110722101745%210063Abra.png",
    id: 1
  })

  const [pokemon3, setPokemon3] = useState({
    name: "Absol",
    type: "Dark",
    evolved: false,
    weight: 47,
    color: "tan",
    image: "https://archives.bulbagarden.net/media/upload/archive/9/9b/20091228163824%210359Absol.png",
    id: 2
  })

  const Evoluir = () =>{
    const novoPokemon = {
      ...pokemon,
      name: "Pikachu",
      color: "orange",
      evolved: true,
      image:"https://archives.bulbagarden.net/media/upload/archive/4/4a/20100904002342%210025Pikachu.png"
    }
    setPokemon(novoPokemon)
  }

  const Evoluir2 = () =>{
    const novoPokemon = {
      ...pokemon2,
      color: "salmon",
      name: "Kadabra",
      weight: 56,
      image: "https://archives.bulbagarden.net/media/upload/archive/a/af/20130810055059%210064Kadabra.png"
    }
    setPokemon2(novoPokemon)
  }

  const Evoluir3 = () =>{
    const novoPokemon = {
      ...pokemon3,
      color: "rosybrown",
      name: "Mega Absol",
      weight: 49,
      image :"https://archives.bulbagarden.net/media/upload/thumb/d/d7/0359Absol-Mega.png/240px-0359Absol-Mega.png"
    }
    setPokemon3(novoPokemon)
  }

  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
      nome={pokemon.name}
      tipo={pokemon.type}
      evoluido={pokemon.evolved} 
      peso={pokemon.weight}
      cor={pokemon.color}
      img={pokemon.image}
      id={pokemon.id}
      mudaPokemon={Evoluir}
      />
      <PokemonCard
      nome={pokemon2.name}
      tipo={pokemon2.type}
      evoluido={pokemon2.evolved} 
      peso={pokemon2.weight}
      cor={pokemon2.color}
      img={pokemon2.image}
      id={pokemon2.id}
      mudaPokemon={Evoluir2}
      />
      <PokemonCard
      nome={pokemon3.name}
      tipo={pokemon3.type}
      evoluido={pokemon3.evolved} 
      peso={pokemon3.weight}
      cor={pokemon3.color}
      img={pokemon3.image}
      id={pokemon3.id}
      mudaPokemon={Evoluir3}
      />
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
