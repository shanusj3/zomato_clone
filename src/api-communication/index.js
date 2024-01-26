import axios from "axios";

export async function fetchAllProducts() {
  try {
    const respons = await axios.get(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    );
    if (respons.data) {
      return respons;
    }
  } catch (error) {
    console.log(error);
  }
}
