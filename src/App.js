
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Mainvideo from './components/Mainvideo';
import Suggestions from './components/Suggestions';


function App() {
  return (
    <>
      <Navbarr/>
       <div ClassName="list">
         <Mainvideo/>
         <Suggestions/>
      </div>
    </>
  )
}

export default App;
