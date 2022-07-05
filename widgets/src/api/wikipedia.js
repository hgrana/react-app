import axios from "axios";

const BASE_URL = 'https://en.wikipedia.org/w/api.php';

const Search = async (searchParam) => {
  const result = await axios.get(BASE_URL, {
    params: {
      action: 'query',
      format: 'json',
      list: 'search',
      origin: '*',
      srsearch: searchParam
    }
  });

  return result.data;
}

const WikipediaApi = {
  Search
}

export default WikipediaApi;
