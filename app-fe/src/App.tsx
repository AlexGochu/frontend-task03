import React from 'react';
import './App.css';
import { Movies } from 'screens/movies';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
				margin: 'auto 0',
			}}
		>
			<Movies />
		</div>
	);
}

export default App;
