import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { fetchCoffee } from './store/actions/coffeeActions';
import MainPge from './pages/main-page'
import CoffePage from './pages/coffe-page';
import PleasurePage from './pages/pleasure-page';
import CoffeItemPage from './pages/coffe-item-page';

import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoffee())
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <MainPge /> } />
          <Route path='/coffe' element={ <CoffePage /> } />
          <Route path='/coffe/:id' element={ <CoffeItemPage /> } />
          <Route path='/pleasure' element={ <PleasurePage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
