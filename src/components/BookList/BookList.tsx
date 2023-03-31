import React from "react";
import books from "../../store/books";
import BookCard from "../BookCard/BookCard";
import { observer } from "mobx-react-lite";
import styles from "./BookList.module.scss";

const BookList = observer(() => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.list}>
				{books.books &&
					books.books.items.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
			</div>
		</div>
	);
});

export default BookList;
