import React from 'react';
import { useState } from 'react';
import datas from './menuData';
import Products from './Products';

const App = () => {
  let allCategories = ['All', ...new Set(datas.map(data => data.category))];
  const [products, setProducts] = useState(datas);

  const showProducts =(category)=>{
    if(category === 'All'){
      setProducts(datas);
    } else{
      let choosenProducts = datas.filter((data)=>{
        return data.category === category;
      })
      setProducts(choosenProducts);
    }
    return;
  }
  return (
    <div>
        <h2>our menu</h2>
        <div className="underline"></div>
        <div className="categories">
          {allCategories.map((category)=>{
            return(
              <button onClick={()=> showProducts(category)}>{category}</button>
            );
          })}
        </div>
        <Products datas={products} />
    </div>
  )
}

export default App