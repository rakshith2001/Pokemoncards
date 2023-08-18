

const GridItems = ({children}) => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <div style={{display:'grid',gridTemplateColumns:'auto auto auto',gap:'35px',}}>
        {children}
    </div>
    </div>
  )
}

export default GridItems