import { useReducer} from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { GistReducer , initialState , GistContext } from './context/GistContext';
import LoginScreen from './pages/LoginScreen';
import ListsPublicGistScreen from './pages/ListsPublicGistScreen';
import ListPrivateGistsScreen from './pages/ListPrivateGistsScreen';
import StarGistScreen from './pages/StarGistScreen';
import CreateGistForm from './pages/CreateGistScreen';
import GistProfileScreen from './pages/GistProfileScreen';
import UniqueGistScreen from './pages/UniqueGistScreen';
import SearchGistScreen from './pages/SearchGistScreen';
import EdistGistScreen from './pages/EdistGistScreen';

const App:React.FC = () => {
  const [state, dispatch] = useReducer( GistReducer , initialState);
  const { tab } = state;

  const displayScreenTabs = (() => {
            
    switch (tab) {
      case 1:
        return <ListsPublicGistScreen />;
      case 2:
        return <LoginScreen />;
      case 3:
        return <ListPrivateGistsScreen />;
      case 5:
        return <StarGistScreen />;
      case 6:
        return <CreateGistForm />;
      case 7:
        return <GistProfileScreen />;
      case 8:
        return <ListsPublicGistScreen />;
      case 9:
        return <UniqueGistScreen />;
      case 10:
        return <SearchGistScreen />;
      case 11:
        return<EdistGistScreen />;
      default:
        return <ListsPublicGistScreen />;
    }
  })();

  return (
    <GistContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        {displayScreenTabs}
      </div>
    </GistContext.Provider>
  );
}

export default App;
