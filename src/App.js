import './styles/App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import FetchDataContext from './context/FetchDataContext';

function App() {
  return (
    <FetchDataContext>
    <div className="App">
      <Header />
      <Home />
    </div>
    </FetchDataContext>
  );
}

export default App;
