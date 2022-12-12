import './App.scss';
import SimpleSlider from './Slider';
import Header from './Header';
import Footer from './Footer';
import SearchForm from './Search';
import NewPost from './NewPost';
import SendQuest from './SendQuest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from './Product'
import Login from './Login';
import Admin from './Admin';
import {AuthContext} from "./helpers/AuthContext"
import {useState} from "react"
import Products from './Admin/Product/Products';
import Blog from './Admin/Blog';
import Blogs from './Blogs';
import ViewBlog from './Blogs/ViewBlog';


function App() {
  const [authState, setAuthState] = useState(false)
  return (
    <div className="App">
      <AuthContext.Provider value={{authState,setAuthState}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<><Header class='main'></Header><SimpleSlider></SimpleSlider><SearchForm></SearchForm><NewPost></NewPost><SendQuest></SendQuest><Footer></Footer></>}/>
            <Route exact path="/products/:id" element={<><Header class='product'></Header><Product></Product><Footer></Footer></>}/>
            <Route exact path="/login" element={<Login></Login>}/>
            <Route exact path="/admin" element={<Admin></Admin>}/>
            <Route exact path="/productsTable" element={<><Products></Products></>}/>
            <Route exact path="/blog" element={<><Blog></Blog></>}/>
            <Route exact path='/strucni-tekstovi' element={<><Header class='product'></Header><Blogs></Blogs><Footer></Footer></>}></Route>
            <Route exact path='/strucni-tekst/:id' element={<><Header class='product'></Header><ViewBlog></ViewBlog><Footer></Footer></>}></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
