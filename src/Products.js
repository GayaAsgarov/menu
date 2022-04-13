import React from 'react';

const Products = (props) => {
  return (
    <div className='products'>
        {props.datas.map((data,index)=>{
            return(
                <div className="product" key={index}>
                    <aside className="img-prod">
                        <img src={data.image} alt="product image" />
                    </aside>
                    <aside className="info-prod">
                        <header>
                            <h4 className="title">{data.title}</h4>
                            <h4 className='price'>${data.price}</h4>
                        </header>
                        <p>{data.description}</p>
                    </aside>
                </div>
            )
        })}
    </div>
  )
}

export default Products