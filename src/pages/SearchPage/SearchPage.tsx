import React from "react";
import books from "../../store/books";
import { observer } from "mobx-react-lite";
import styles from "./SearchPage.module.scss";
import BookList from "../../components/BookList/BookList";
import CircularProgress from "@mui/material/CircularProgress";
import LoadMore from "../../components/LoadMore/LoadMore";

const SearchPage = observer(() => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.results}>
				Results found:{" "}
				{books.status === "fulfilled" ? (
					books.books?.totalItems +
						`(${books.books?.items.length})` || "0"
				) : (
					<CircularProgress size={20} />
				)}
			</div>
			<BookList />
			<LoadMore />
		</div>
	);
});

export default SearchPage;
