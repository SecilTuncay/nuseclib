import axios from "axios";

export default axios.create({
	baseURL: "public/data/libdata.json"
});
