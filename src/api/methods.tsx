import { User } from "../users/types";
import axios from "axios";
import { IProfile } from "../profile/types";

// fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get("http://localhost:3000/profile").then((resp) => {
    return resp.data;
  });
}

export function login(email: string, password: string): Promise<IProfile> {
  return axios
    .post(
      "http://localhost:3000/login",
      {
        username: email,
        password: password,
      },
      {
        withCredentials: true,
      }
    )
    .then((resp) => resp.data);
}
