import React from 'react';
import './search.scss';

interface SearchProps {
	setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ setQuery }) => {
	return (
		<div style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<input
				placeholder="Enter title or director"
				className="bar"
				onChange={setQuery}
				style={{ width: '250px', height: '30px' }}
			/>
		</div>
	);
};
