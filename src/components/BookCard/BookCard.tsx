import React from "react";
import { IBook } from "./../../types/Book";
import styles from "./BookCard.module.scss";

interface BookCardProps {
	book: IBook;
}
const BookCard = ({ book }: BookCardProps) => {
	return (
		<div className={styles.card}>
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
			<div className={styles.title}>{book.volumeInfo.title}</div>
			<div></div>
		</div>
	);
};

export default BookCard;
