import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';  

const FruitBasket = props=> {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleChange} />
      <FilteredFruitList
        filter={props.selectedFilter} />
    </div>
  );
}

export default FruitBasket;
