import React from 'react';
import SliderControls from './SliderControls';
import data from './data';

const Slider = () => {

  const listItems = data.map((item) => {
    const { id, title, description } = item;
    return (
      <li className="item" key={id}>
        <div className="front">
          <span className='id'>{id}</span>
          <h3 className='title'>{title}</h3>
        </div>
        <div className="back">
          <p className='description'>{description}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      <div className="slider">
        <div className="wrapper">
          <ul className="slider-items">{listItems}</ul>
          <SliderControls />
        </div>
      </div>
    </>
  )
}

export default Slider;
