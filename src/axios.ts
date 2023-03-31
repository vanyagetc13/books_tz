import axios from "axios";

const instanse = axios.create({
	baseURL: "https://www.googleapis.com/books/v1/volumes",
});

instanse.interceptors.request.use((config) => {
	if (config.params) {
		config.params["key"] = "AIzaSyCAwYeYYWYb1dJTki0QTaI3Zi4DaTym2EE";
	}
	return config;
});

export default instanse;
