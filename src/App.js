import React from 'react';
import {Routers} from './router';

const App = props => {
  	const { history } = props;
  	return (
		<Routers history={history}/>
  	);
};

export default App;