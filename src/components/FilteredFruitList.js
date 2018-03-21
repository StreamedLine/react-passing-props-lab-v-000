import React from 'react';

const FilteredFruitList = props=> {
	const {fruit, filter} = props;
	const filteredList = !filter || filter === 'all' ? fruit : fruit.filter(i => i.fruit_type === filter);

    return (
      <ul className="fruit-list">
        {filteredList.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
}

export default FilteredFruitList;
