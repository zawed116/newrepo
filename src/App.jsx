import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Checkout from './components/Checkout'
import { StateProvider } from './StateContext'
import reducer, { initialState } from './reducer'

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="app">
          <Header /> {/* Header should only appear once here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </StateProvider>
  )
}

export default App