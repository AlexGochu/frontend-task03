import { Card, Search } from '../../components';
import { Pagination } from '../../components';
import { MovieInfo } from '@types';
import React, { FC, useState, useEffect, useMemo, useCallback } from 'react';
import { API } from '../../api';

import './movies.scss';

let PageSize = 10;

export const Movies: FC = () => {
	const [baseMovies, setBaseListMovies] = useState<Array<MovieInfo>>([]);
	const [listMovies, setListMovie] = useState<Array<MovieInfo>>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return listMovies.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, listMovies]);

	const useOnChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setCurrentPage(1);
			const filteredFilms = [...baseMovies].filter((film: MovieInfo): MovieInfo | undefined => {
				if (event.target.value === '') {
					return film;
				} else if (
					film.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
					film.director.toLowerCase().includes(event.target.value.toLowerCase())
				) {
					return film;
				}
			});
			setListMovie(filteredFilms);
		},
		[baseMovies]
	);

	useEffect(() => {
		const fetchData = async () => {
			const request = await API.get('movies');
			console.log(request);
			setListMovie(request.data);
			setBaseListMovies(request.data);
			return request;
		};
		fetchData();
	}, []);

	return (
		<div style={{ border: '1px black solid', width: '100' }}>
			<div className="search-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Search setQuery={useOnChange} />
			</div>
			<div
				style={{
					display: 'flex',
					width: '1000px',
					flexDirection: 'row',
					flexWrap: 'wrap',
					margin: 'auto',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{currentTableData.map((e: MovieInfo) => (
					<Card {...e} key={e.id} />
				))}
			</div>
			<div className="pagination">
				<Pagination
					className="pagination-bar"
					currentPage={currentPage}
					totalCount={listMovies.length}
					pageSize={PageSize}
					onPageChange={(page: string | number) => setCurrentPage(parseInt(page.toString()))}
				/>
			</div>
		</div>
	);
};
