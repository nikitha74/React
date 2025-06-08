import './App.css';
import Product from './components/product';
import DisplayProducts from './components/display-products';

function App() {
  return (
    <div className="App">
        <div className="jumbotron text-center">
  <h1>React + Rest api with image Demo</h1>
  <p>Done by JF027 and JF028 team!</p> 
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      
     
    </div>
    <div class="col-sm-4">
      
        <Product />
    </div>
    <div class="col-sm-4">
      
     
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      
     
    </div>
    <div class="col-sm-4">
      
        <DisplayProducts />
    </div>
    <div class="col-sm-4">
      
     
    </div>
  </div>
</div>



    </div>
  );
}

export default App;
