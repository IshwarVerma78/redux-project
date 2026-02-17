
import './App.css'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

function App() {
  // function getPhotos(){
  //   fetchPhotos()
  // }

  return (
    <>
      <button onClick={async ()=>{
        const data = await fetchPhotos('cat')
        console.log(data.results);
        }}>Get Photos</button>

      <button onClick={async ()=>{
        const data = await fetchVideos('cat')
        console.log(data.videos);
        }}>Get Videos</button>
    </>
  )
}

export default App
