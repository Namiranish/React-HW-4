import './App.css'
import Card from './component/Card'
import { data } from './component/data'

function App() {
  return (
    <>
     {data.map((ele,idx)=>{
      return <Card key={idx} title={ele.title} ReleaseDate={ele.release_date} director={ele.director} duration={ele.duration} genre={ele.genre} description={ele.description} posterImg={ele.poster_image} mainImg={ele.main_image}/>
     })}
    </>
  )
}

export default App
