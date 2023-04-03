import React from "react";
import { IBook } from "./../../types/Book";
import styles from "./BookCard.module.scss";
import { useNavigate } from "react-router-dom";

interface BookCardProps {
	book: IBook;
}
const BookCard = ({ book }: BookCardProps) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.card}
			onClick={() => {
				navigate(`/books/${book.id}`);
			}}
		>
			<div className={styles.image}>
				<img
					height={"150px"}
					src={
						book.volumeInfo?.imageLinks?.thumbnail ||
						book.volumeInfo?.imageLinks?.smallThumbnail
					}
					alt='book thumb'
				/>
			</div>
			<div className={styles.categories}>
				{book.volumeInfo.categories?.[0]}
			</div>
			<div className={styles.title}>{book.volumeInfo.title}</div>
			<div>{book.volumeInfo.authors?.join(", ")}</div>
		</div>
	);
};

export default BookCard;
