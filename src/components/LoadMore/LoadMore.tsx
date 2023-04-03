import { Button } from "@mui/material";
import React from "react";
import books from "../../store/books";
import CircularProgress from "@mui/material/CircularProgress";

const LoadMore = () => {
	if (books.books?.totalItems !== 0 && books.books) {
		if (books.books.totalItems <= books.books?.items.length) return null;
		else
			return (
				<>
					{books.status === "fulfilled" ? (
						<Button
							onClick={() => {
								books.loadMore();
							}}
						>
							Загрузить еще
						</Button>
					) : (
						<Button sx={{ cursor: "default" }}>
							<CircularProgress size={20} />
						</Button>
					)}
				</>
			);
	} else return books.status === "fulfilled" ? null : <CircularProgress />;
};

export default LoadMore;
