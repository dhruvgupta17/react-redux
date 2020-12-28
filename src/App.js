import './App.css';
import {Provider} from 'react-redux';
import {Book} from'./components/book'
import Books from'./components/funcBook'
import store from './redux/store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Book/>
      <Books/>
    </div>
    </Provider>
  );
}

export default App;
