import logo from './logo.svg';
import './App.scss';
import SimpleSlider from './Slider';
import Header from './Header';
import Footer from './Footer';
import { SearchForm } from './Search';
function App() {
  return (
    <div className="App">
      <SimpleSlider></SimpleSlider>
      <Header></Header>
      <SearchForm></SearchForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
