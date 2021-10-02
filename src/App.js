import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Food from './components/food/food';
import Foods from './components/foods/Foods';
import Details from './components/homedetail/Details';
import Errror from './components/notfound/Errror';

function App() {
  return (
    <div variant = "container">
 <BrowserRouter>
 <Header/>
 <Switch>
<Route exact path ="/home">

  <Home/>
</Route>
<Route path ="/foods">
<Foods></Foods>
</Route>

<Route path ="/food/:idMeal">
<Details></Details>
</Route>



<Route exact path ="/">
<Home></Home>

</Route>


<Route path ='*'>
<Errror/>
</Route>
 </Switch>
 </BrowserRouter>
    </div>
  );
}

export default App;
