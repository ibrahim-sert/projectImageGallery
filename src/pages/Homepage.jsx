import data from '../helper/data';
import Picture from '../components/Picture';


const Homepage = () => {
    console.log(data);
  return (
    <div className='home-ctn'>
      <h1>Image Gallery</h1>
        <Picture  data={data}/>
        
    </div>
  )
}

export default Homepage