
import './App.css'
import HexColor from './Components/Colors/HexColor'
import RGBColor from './Components/Colors/RGBColor'
import RandomColor from './Components/Colors/RandomColor'

function App() {
  

  return (
    <div className='color'>
      <HexColor/>
      <RGBColor/>
      <RandomColor/>
    </div>
  )
}
export default App
