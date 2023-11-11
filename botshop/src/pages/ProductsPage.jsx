import React from 'react'
import prod1 from '../images/produ1.jpg'
import '../App.css';
import filter from '../images/filter.jpg'


const ProductsPage = () => {
  const card = [
    { src: prod1, text: 'Engine oil for steel skin', prise: 'from $180', },
    { src: prod1, text: 'Engine oil for steel skin', prise: 'from $180', },
    { src: prod1, text: 'Engine oil for steel skin', prise: 'from $180', },
    { src: prod1, text: 'Engine oil for steel skin', prise: 'from $180', },
    { src: prod1, text: 'Engine oil for steel skin', prise: 'from $180', },
    { src: prod1, text: 'Engine oil for steel skin', prise: 'from $180', },
  ];
  return (
    <div className='prod'>
      <header>
        <h1>Products</h1>
        <img src={filter} alt=''/>
      </header>
      <div className='prodCard'>
      {card.map((index) => (
        <div key={index} className='prodCardDiv'>
          <img src={index.src} alt='img' />
          <p>{index.text}</p>
          <p>{index.prise}</p>
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default ProductsPage