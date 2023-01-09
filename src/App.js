import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Routes, Route, Link } from 'react-router-dom';
import Articles from './components/Articles';



function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h3>The best news, the only news!</h3>}></Route>
        <Route path='/articles' element={<Articles/>}>All Articles</Route>
      </Routes>
      
      <img src="https://media1.giphy.com/media/JWW56EAh9hJRTX32LY/giphy.gif?cid=790b76113ad0c931745026ef25d424b9e3aff3a9a229182b&rid=giphy.gif&ct=s" className="news" alt="breaking news"/>
    </div>
  );
}

export default App;
