import app from './Config/Firebase';
import "../src/App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { SignIn } from './Components/SignIn';
import { SignUp } from './Components/SignUp';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
