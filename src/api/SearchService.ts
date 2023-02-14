import{ HTTP } from "./index"

export default({
  async getSearchData(value: string){
      try {
          const response = await HTTP.get('/search') // params string
          return response.data
      } catch (e) {
          console.log(e)
      }
  },
});
