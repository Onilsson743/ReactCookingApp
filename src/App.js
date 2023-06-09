import './scss/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './context/context';
import { useState } from 'react';
import Home from './components/pages/Home';
import AddRecipe from './components/pages/AddRecipe';

function App() {
  const [recipies,setRecipies] = useState({
    all: []
  })
  return (
    <BrowserRouter>
      <Context.Provider value={recipies}>
        <Routes>
          <Route path='/ReactCookingApp' element={<Home />} />
          <Route path='/ReactCookingApp/addrecipe' element={<AddRecipe />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
