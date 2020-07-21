import React from 'react';
import './App.css';

import ProductTable from  './components/ProductTable'

const products = [
  { Name
    :"samsung s20",Price:"749£",Category:"Electronics"},
  { Name
    :"Gucci sweatshirt",Price:"1.250£",Category:"Clothes"},
  { Name
    :"Iphone XS Max",Price:"769£",Category:"Electronics"},
  { Name
    :"Jordan Brand",Price:"34.99£",Category:"Clothes"},
   
];



function App() {
  return (
    <div class="body" >
      <ProductTable x={products} />
    </div>
  );
 
}
export default App;
