import  { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.css'

import Card from './components/Card'
import Navbar from './components/Navbar'
import GridItems from './components/GridItems'
import Footer from './components/Footer'

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currUrl, setCurrUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const pokeItems = async () => {
      setLoading(true);
    
      const res = await axios.get(currUrl);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    }
    const getPokemon = async (res) =>{
      res.map(async(item)=>{
        const result=await axios.get(item.url)
        setPokemonData(state=>{
            state=[...state,result.data]
            return state;
        })
     }) 
    }
    pokeItems();
  }, [currUrl,prevUrl,nextUrl]);
  
function handleNextClick() {
  setPokemonData([]);
  setCurrUrl(nextUrl);


}
  
function handlePrevClick() {
  
  if(prevUrl=== null)
    return;
    setPokemonData([]);
  setCurrUrl(prevUrl);
  
}
  return (
    <>
    <Navbar/>
    <GridItems>
    {pokemonData.map((pokemon) => <Card  key={pokemon.id} name={pokemon.name} imageId={pokemon.sprites.other.dream_world.front_default} baseStat={pokemon.weight} height={pokemon.height} typesId={pokemon.types[0].type.name} statsID={pokemon.stats[0].base_stat} 
       />)}
    </GridItems>
    <Footer handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} prevUrl={prevUrl}/>
      </>
  );
}
export default App
