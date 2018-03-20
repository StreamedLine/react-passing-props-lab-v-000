import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			// filters: [],
      		selectedFilter: null
      	}
	}

	handleFilterChange = (event)=> {
   	    console.log('new filter: ', event.target.value);
   		this.setState({ selectedFilter: event.target.value });
  	}

	render() {
		return (
			<FruitBasket handleChange={this.handleFilterChange.bind(this)} 
						 selectedFilter={this.state.selectedFilter} />
		)
	}	
} 

export default App;
