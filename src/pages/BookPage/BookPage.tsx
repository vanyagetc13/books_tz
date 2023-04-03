import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import books from "../../store/books";
import CircularProgress from "@mui/material/CircularProgress";
import { observer } from "mobx-react-lite";
import styles from "./BookPage.module.scss";
import { IBook } from "./../../types/Book";

const BookPage = observer(() => {
	const { id } = useParams();
	useEffect(() => {
		if (id) books.fetchBookById(id);
	}, []);
	if (!books.bookById)
		return (
			<div className={styles.progress_box}>
				<CircularProgress />
			</div>
		);
	const book: IBook = books.bookById;
	return (
		<div className={styles.wrapper}>
			<div className={styles.side}>
				<img
					src={
						book.volumeInfo.imageLinks.thumbnail ||
						book.volumeInfo.imageLinks.medium
					}
					alt={book.volumeInfo.title}
					loading='lazy'
					width={350}
				/>
				<h4>{book.volumeInfo.authors?.join(", ")}</h4>
				<h5>{book.volumeInfo.categories?.join(", ")}</h5>
				<div>В книге всего: {book.volumeInfo.pageCount} стр.</div>
				{book.volumeInfo.previewLink && (
					<div>
						<span>Эту книгу можно найти на </span>
						<a href={book.volumeInfo.previewLink}>Google books</a>
					</div>
				)}
				<div>{book.volumeInfo.publishedDate.toString()}</div>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{book.volumeInfo.title}</h3>
				<h5>{book.volumeInfo.subtitle}</h5>
				<p>{book.volumeInfo.description}</p>
				<p>{book.volumeInfo.averageRating}</p>
			</div>
		</div>
	);
});

export default BookPage;
