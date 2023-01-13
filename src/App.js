import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Homepage from './components/Homepage';
import ArticleCard from './components/ArticleCard';
import ViewComments from './components/ViewComments';
import Topics from './components/Topics';



function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='*' element={<p>404: Not Found</p>}></Route>
        <Route path='/articles' element={<Articles/>}>All Articles</Route>
        <Route path='/topics' element={<Topics/>}>All Topics</Route>
        <Route path='/articles/:article_id' element={<ArticleCard/>}></Route>
        <Route path='/articles/:article_id/comments' element={<ViewComments/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
