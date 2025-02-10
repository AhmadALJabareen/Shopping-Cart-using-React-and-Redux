import Cart from "./Components/Cart"
import ProductList from "./Components/ProductList"
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </Router>
    </>
  )
}

      

export default App
