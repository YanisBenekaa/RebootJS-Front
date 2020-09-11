import { User } from "../users/types";
import axios from "axios";
import { IProfile } from "../profile/types";

// fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get(`${process.env.REACT_APP_BACKEND}/profile`).then((resp) => {
    return resp.data;
  });
}

export function login(email: string, password: string): Promise<IProfile> {
  return axios
    .post(
      `${process.env.REACT_APP_BACKEND}/login`,
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

export function register(
  email: string,
  password: string,
  firstname: string,
  lastname: string
): Promise<IProfile> {
  return axios
    .post(`${process.env.REACT_APP_BACKEND}/profile`, {
      email,
      password,
      firstname,
      lastname,
    })
    .then((resp) => resp.data);
}
