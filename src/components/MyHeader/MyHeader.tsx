import { Button, Input, NativeSelect } from "@mui/material";
import React, { useState } from "react";
import books from "../../store/books";
import styles from "./MyHeader.module.scss";
import { useNavigate } from "react-router-dom";
import errors from "../../store/errors";

const MyHeader = () => {
	const [sort, setSort] = useState<string>("relevance");
	const [query, setQuery] = useState<string>("");
	const [category, setCategory] = useState<string>("All");
	const [genErrButtonMode, setGenErrorButtonMode] = useState<boolean>(false);

	const navigate = useNavigate();
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		books.fetchBooks(query, sort, category);
		navigate("/");
	};
	return (
		<header className={styles.header}>
			<button
				onClick={() => {
					errors.addError({
						id: Number(new Date()),
						text: "Error Catcher test",
						code: 500,
					});
					setGenErrorButtonMode(true);
					setTimeout(() => {
						setGenErrorButtonMode(false);
					}, 500);
				}}
				disabled={genErrButtonMode}
				style={{
					padding: "0 5px",
					position: "absolute",
					top: "5px",
					left: "5px",
				}}
			>
				generate error
			</button>
			<form onSubmit={submitHandler}>
				<Input
					type='text'
					placeholder='Поиск...'
					value={query}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setQuery(e.currentTarget.value);
					}}
				/>
				<Button type='submit'>Искать</Button>
			</form>
			<div className={styles.selects}>
				<NativeSelect
					defaultValue={sort}
					onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
						setSort(e.currentTarget.value);
					}}
				>
					<option value={"Relevance"}>Relevance</option>
					<option value={"Newest"}>Newest</option>
				</NativeSelect>
				<NativeSelect
					defaultValue={category}
					onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
						setCategory(e.currentTarget.value);
					}}
				>
					<option value={"All"}>All</option>
					<option value={"Art"}>Art</option>
					<option value={"Biography"}>Biography</option>
					<option value={"Computers"}>Computers</option>
					<option value={"History"}>History</option>
					<option value={"Medical"}>Medical</option>
					<option value={"Poetry"}>Poetry</option>
				</NativeSelect>
			</div>
		</header>
	);
};

export default MyHeader;
