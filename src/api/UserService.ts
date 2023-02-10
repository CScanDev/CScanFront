import { HTTP } from "./index"

enum EUserServiceRoutes {
    GetUsers = '/users',
    GetUser = '/user/'
} 

export default({
  async getUsers(value: string){
      try {
          const response = await HTTP.get(EUserServiceRoutes.GetUsers) // params string
          return response.data
      } catch (e) {
          console.log(e)
      }
  },

  async getUser(value: string){
      try {
          const response = await HTTP.get(EUserServiceRoutes.GetUser + value,  {
              headers: {
                  Prefer: `code=200, example=Example ${value}`
              }
          }) // params string
          return response.data
      } catch (e) {
          console.log(e)
      }
  }
});
