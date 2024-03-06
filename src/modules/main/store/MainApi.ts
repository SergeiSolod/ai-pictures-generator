import axios from "axios";

const $api = axios.create({
  baseURL:
    import.meta.env.VITE_STATUS === "DEV"
      ? import.meta.env.VITE_API_DEV
      : import.meta.env.VITE_API_PROD,
});

export const mainApi = {
  getImage({ text }) {
    return $api.post<any>("img", {
      text,
    });
  },
};
