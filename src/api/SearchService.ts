import { HTTP } from "./index";

export default {
  async getSearchData(searchValue: string) {
    try {
      const response = await HTTP.get(
        `${encodeURIComponent(searchValue)}`,
        {
          headers: {
            Prefer: `code=200,·example=Example·${encodeURIComponent(
              searchValue
            )}`,
          },
        }
      ); // params string
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};

//api/search/
