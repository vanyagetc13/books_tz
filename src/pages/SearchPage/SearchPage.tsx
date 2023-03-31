import React from "react";
import books from "../../store/books";
import { observer } from "mobx-react-lite";
import styles from "./SearchPage.module.scss";
import BookList from "../../components/BookList/BookList";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

const SearchPage = observer(() => {
	return (
		<div className='App'>
			<div className={styles.wrapper}>
				<div className={styles.results}>
					Results found:{" "}
					{books.status === "fulfilled" ? (
						books.books?.totalItems || "0"
					) : (
						<CircularProgress size={20} />
					)}
				</div>
				{books.status === "pending" ? (
					<CircularProgress />
				) : (
					<BookList />
				)}
				{books.books.items.length !== 0 && (
					<Button
						onClick={() => {
							books.loadMore();
						}}
					>
						Загрузить еще
					</Button>
				)}
			</div>
		</div>
	);
});

export default SearchPage;
