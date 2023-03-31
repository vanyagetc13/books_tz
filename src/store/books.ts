import { makeAutoObservable } from "mobx";
import { runInAction } from "mobx";
import { ISearchedBooks } from "../types/Book";
import instanse from "./../axios";

class Books {
	books: ISearchedBooks = {
		kind: "",
		totalItems: 0,
		items: [],
	};
	MAX_RESULTS: number = 20;
	status: "pending" | "fulfilled" = "fulfilled";
	lastSearch: {
		query: string;
		sort: string;
	} = {
		query: "",
		sort: "relevance",
	};

	constructor() {
		makeAutoObservable(this);
	}

	fetchBooks(query: string = "js", sort: string = "relevance", category: string = "All") {
		this.status = "pending";
		if(category !== "All") query+=` inauthor:${category}`;
		instanse
			.get("", {
				params: {
					q: query,
					orderBy: sort,
					maxResults: this.MAX_RESULTS,
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
		const { query, sort } = this.lastSearch;
		instanse
			.get("", {
				params: {
					q: query,
					orderBy: sort,
					startIndex: this.books.items.length,
					maxResults: this.MAX_RESULTS,
				},
			})
			.then((response) => response.data)
			.then((data) => {
				runInAction(() => {
					if (this.books.items) {
						this.books.items = this.books.items.concat(data.items);
					}
				});
			});
	}
}
const books = new Books();
export default books;
