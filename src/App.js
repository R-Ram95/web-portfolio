import 'bulma/css/bulma.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/web-portfolio" element={
             <Home/>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
