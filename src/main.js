const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  axios
     .get(`${BASE_URL}/constellations`)
      .then((res) => console.log(res.data))
}

function create(body) {

}

function show(id) {
  axios.get(`${BASE_URL}/constellations/${id}`)
}

function update(id, body) {}

function destroy(id) {}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
