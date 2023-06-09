import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import books from "../../store/books";
import CircularProgress from "@mui/material/CircularProgress";
import { observer } from "mobx-react-lite";
import styles from "./BookPage.module.scss";
import { IBook } from "./../../types/Book";
import errors from "../../store/errors";

const BookPage = observer(() => {
	const { id } = useParams();
	const navigate = useNavigate()
	useEffect(() => {
		if (id) books.fetchBookById(id);
		else {
			errors.addError({
				code: 500,
				text: "Ошибка сервера",
				id: Number(new Date()),
			});
			navigate("/")
		}
	}, []);
	if (!books.bookById || !id)
		return (
			<div className={styles.progress_box}>
				<CircularProgress role={"progress-bar"} />
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
