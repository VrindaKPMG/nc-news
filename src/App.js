import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Homepage from './components/Homepage';
import ArticleCard from './components/ArticleCard';



function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/articles' element={<Articles/>}>All Articles</Route>
        <Route path='article/:article_id' element={<ArticleCard/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
