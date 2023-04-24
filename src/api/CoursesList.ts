import { HTTP } from "./index";

export default {
  async getUserhCourses() {
    try {
      const response = await HTTP.get(`/api/get_user_courses/`, {
        headers: {
          Prefer: `code=200, example=Example`,
        },
      }); // params string
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};

//api/search/
