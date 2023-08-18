

const Footer = ({handleNextClick,handlePrevClick,prevUrl}) => {
  return (
    <footer style={{display:'flex',justifyContent:'space-evenly',backgroundColor:'#1847D7',marginBottom:'5px',marginTop:'5px',width:'100%'}}>
      { prevUrl!==null && <button onClick={handlePrevClick} style={{padding:'15px',margin:'4px',width:'100px',borderRadius:'15px',backgroundColor:"#FFDE00"}}>Previous</button>}
      <button onClick={handleNextClick} style={{padding:'15px',margin:'4px',width:'100px',borderRadius:'15px',backgroundColor:"#FFDE00"}}>Next</button>
      </footer>
  )
}

export default Footer