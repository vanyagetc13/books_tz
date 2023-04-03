import { makeAutoObservable } from "mobx";
import { runInAction } from "mobx";
import { ISearchedBooks, lastSearch } from "../types/Book";
import instanse from "./../axios";
import { IBook } from "./../types/Book";

const MAX_RESULTS: number = 30;

class Books {
	books: ISearchedBooks | null = {
		kind: "",
		totalItems: 0,
		items: [],
	};
	bookById: IBook | null = null;
	status: "pending" | "fulfilled" = "fulfilled";
	lastSearch: lastSearch = {
		query: "",
		sort: "relevance",
	};

	constructor() {
		makeAutoObservable(this);
	}

	fetchBooks(
		query: string = "js",
		sort: string = "relevance",
		category: string = "All"
	) {
		this.status = "pending";
		this.books = null;
		if (category !== "All") query += ` subject:${category}`;
		instanse
			.get("", {
				params: {
					q: query,
					orderBy: sort,
					maxResults: MAX_RESULTS,
				},
			})
			.then((response) => response.data)
			.then((data) => {
				runInAction(() => {
					this.books = data;
					this.status = "fulfilled";
					this.lastSearch = { query: query, sort: sort };
				});
			})
			.catch((err) => console.error(err));
	}
	loadMore() {
		this.status = "pending";
		const { query, sort } = this.lastSearch;
		instanse
			.get("", {
				params: {
					q: query,
					orderBy: sort,
					startIndex: this.books?.items.length,
					maxResults: MAX_RESULTS,
				},
			})
			.then((response) => response.data)
			.then((data) => {
				runInAction(() => {
					if (this.books?.items) {
						this.books.items = this.books.items.concat(data.items);
						this.status = "fulfilled";
					}
				});
			})
			.catch((err) => console.error(err));
	}
	fetchBookById(id: string) {
		this.bookById = null;
		instanse
			.get(id)
			.then((response) => response.data)
			.then((data) => {
				runInAction(() => {
					this.bookById = data;
					console.log(data);
				});
			})
			.catch((err) => console.error(err));
	}
}
const books = new Books();
export default books;
