import '../styles/styles.css';

const Picture = ({data}) => {
    
  return (
    <div className="picture-ctn" >
        {data.map(({photographer,src})=>{
            return(
                <div className='pictures'>
                    <div className='img-ctn'>
                      <img className="images" src={src.large} alt="imic" />
                    </div>
                    

                    <p>{photographer}</p>
                
                    
                </div>
            )
    })} 
    </div>
  )
}

export default Picture