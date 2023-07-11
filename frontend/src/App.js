import { Provider } from "react-redux"; //react component to get access to redux store
import { store } from './state';
import { NavBar } from './common'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App min-h-screen text-black dark:text-white bg-white dark:bg-slate-800">
        < NavBar />
      </div>
    </Provider>

  );
}

export default App;
