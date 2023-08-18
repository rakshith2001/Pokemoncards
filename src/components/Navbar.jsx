import image from '../assets/PokeballLogo.png'

const Navbar = () => {
  return (
    <nav style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#1847D7  ',marginBottom:'5px',height:'70px'}}>
    <img src={image} alt="Pokeball" style={{height:'60px',width:'60px'}}/>
      <h1 style={{color:'white',fontWeight:'bold',fontFamily:'fantasy',fontSize:'50px'}}>Pokedex</h1>
    </nav>
  )
}

export default Navbar