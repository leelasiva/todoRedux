import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Badge from './Badge';
import Card from './Card';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Badge/>
     <Card/> 
    </div>
    </Provider>
  );
}

export default App;
