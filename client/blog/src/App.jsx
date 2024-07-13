import './App.css'
import Layout from './Layout.jsx'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './Pages/IndexPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import Register from './Pages/Register.jsx'

function App() {

  return (
      <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<IndexPage/>} />
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path={"/register"} element={<Register/>} />
      </Route>
      </Routes>
  );
}

export default App;