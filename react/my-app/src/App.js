import React, {
  Component
} from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';


import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><Link to="/abc">家</Link></li>
            <li><Link to="/abc1">产品</Link></li>
            <li><Link to="/abc2">我们</Link></li>
            <li><img src={logo} alt="Logo" /></li>
          </ul>

          <hr/>
          
          <Route path="/abc" component={Home}/>
          <Route path="/abc1" component={Product}/>
          <Route path="/abc2" component={About}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;