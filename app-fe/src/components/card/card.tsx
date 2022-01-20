import { MovieInfo } from '@types';
import React from 'react';

export const Card: React.FC<MovieInfo> = ({ id, coverImage, title, director }) => {
	return (
		<div style={{ padding: '10px' }}>
			<div
				style={{
					minWidth: '200px',
					maxWidth: '200px',
					minHeight: '200px',
					backgroundImage: `url(${coverImage})`,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div style={{ textAlign: 'right', color: 'olivedrab', textShadow: '2px 2px 1px white' }}>{id}</div>
				<footer style={{ marginTop: 'auto' }}>
					<div
						style={{ textAlign: 'left', fontSize: '18px', color: 'blue', textShadow: '2px 2px 5px white' }}
					>
						{title}
					</div>
					<div
						style={{
							textAlign: 'right',
							fontSize: '12px',
							color: 'red',
							fontWeight: 800,
							textShadow: '2px 2px 5px white',
						}}
					>
						{director}
					</div>
				</footer>
			</div>
		</div>
	);
};
