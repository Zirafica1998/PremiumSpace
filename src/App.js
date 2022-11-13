import logo from './logo.svg';
import './App.scss';
import SimpleSlider from './Slider';
import Header from './Header';
import Footer from './Footer';
import SearchForm from './Search';
import NewPost from './NewPost';
import SendQuest from './SendQuest';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './Product'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header class='main'></Header>
            <SimpleSlider></SimpleSlider>
            <SearchForm></SearchForm>
            <NewPost></NewPost>
            <SendQuest></SendQuest>
          </Route>
          <Route path="/products/:id">
             <Header class='product'></Header>
            <Product></Product>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
