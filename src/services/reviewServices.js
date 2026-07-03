import axios from "axios";

const API_URL =
  "https://admin.tomedes.com/api/v1/get-reviews?page=1";

export const getReviews = async () => {
  const response = await axios.get(API_URL);

  return response.data.data;
};