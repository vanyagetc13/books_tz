import { makeAutoObservable, runInAction } from "mobx";

interface Error {
	code: number;
	text: string;
	id: number;
}

class Errors {
	errors: Error[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	addError(error: Error) {
		this.errors.push(error);
		setTimeout(() => {
			runInAction(() => {
				this.errors.shift();
			});
		}, 3000);
	}
	deleteError(id: number) {
		this.errors = this.errors.filter((err) => err.id !== id);
	}
}

const errors = new Errors();
export default errors;
