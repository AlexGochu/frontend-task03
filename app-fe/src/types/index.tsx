export interface MovieInfo {
	id: string;
	title: string;
	director: string;
	description: string;
	year: string;
	coverImage: string;
}

export interface PaginationInfo {
	totalCount: number;
	pageSize: number;
	siblingCount: number;
	currentPage: number;
}
