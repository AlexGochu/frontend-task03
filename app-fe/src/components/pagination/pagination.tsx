import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './pagination.hooks';
import './pagination.scss';
interface IPagination {
	onPageChange: (val: number | string) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className: string;
}
export const Pagination: React.FC<IPagination> = (props: IPagination) => {
	const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

	const paginationRange: Array<string | number> = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul className={classnames('pagination-container', { [className]: className })}>
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === 1,
				})}
				onClick={onPrevious}
			>
				<div className="arrow left" />
			</li>
			{paginationRange.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return (
						<li className="pagination-item dots" key={index}>
							&#8230;
						</li>
					);
				}

				return (
					<li
						className={classnames('pagination-item', {
							selected: pageNumber === currentPage,
						})}
						onClick={() => onPageChange(pageNumber)}
						key={index}
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === lastPage,
				})}
				onClick={onNext}
			>
				<div className="arrow right" />
			</li>
		</ul>
	);
};
