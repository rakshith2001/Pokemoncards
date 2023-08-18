import PokeballLogo from '../assets/PokeballLogo.png'
const Card = ({name,imageId,baseStat,height,typesId,statsID}) => {
  
    return (
        <div className="card" style={{background:'#E3350D ', width:'450px',height:'550px',display:'flex',flexDirection:'column',borderRadius:'14px'}}>
          <div style={{width:'400px',height:'220px',backgroundColor:'white', marginTop:'30px',marginLeft:'26px',borderRadius:'5px',display:'flex',justifyContent:'center',alignItems:'center'} }>
          <img src={imageId} width={150} height={150} />
          </div>
          <div style={{marginTop:'10px'}}>
            <h1 style={{color:'#000000' , textAlign:'center',fontWeight:'bold',fontFamily:'fantasy'}}>{name}</h1>
          </div>
          <ul style={{listStyleType:'none',fontWeight:'bold',fontSize:'22px',textAlign:'center',margin:'10px',marginTop:'10px'}}>
            <li style={{color:'#000000' , textAlign:'center'}}>Weight: {baseStat}</li>
            <li style={{color:'#000000' , textAlign:'center'}}>Height: {height}</li>
            <li style={{color:'#000000' , textAlign:'center'}}>Type: {typesId}</li>
            <li style={{color:'#000000' , textAlign:'center'}}>Stats: {statsID}</li>
            
    
          </ul>
          <img src={PokeballLogo} width={70} height={70} style={{marginLeft:'350px',marginTop:'50px'}}/>
    
    
        </div>
          
     
      );
  
}
export default Card;
