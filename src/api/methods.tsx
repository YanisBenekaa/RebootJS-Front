import { User } from "../users/types";
import axios from "axios";
import { IProfile } from "../profile/types";
import { IConversation } from "../conversations/types";

// fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get(`${process.env.REACT_APP_BACKEND}/profile`).then((resp) => {
    return resp.data;
  });
}

export function getConnectedProfile(): Promise<User> {
  return axios
    .get(`${process.env.REACT_APP_BACKEND}/profile/me`, {
      withCredentials: true,
    })
    .then((resp) => resp.data);
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

export function getConversations(): Promise<IConversation[]> {
  return Promise.resolve([
    {
      _id: "abcd",
      targets: ["5f5b888b74adca1d4e71bbb0", "5f606ef451fc4331a1f26096"],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: "1",
          conversationId: "abcd",
          createdAt: new Date(),
          emitter: "5f5b888b74adca1d4e71bbb0",
          targets: ["5f606ef451fc4331a1f26096"],
          content: "Coucou",
        },
        {
          _id: "2",
          conversationId: "abcd",
          createdAt: new Date(),
          emitter: "5f606ef451fc4331a1f26096",
          targets: ["5f5b888b74adca1d4e71bbb0"],
          content: "Hey Comment tu vas ?",
        },
      ],
    },
    {
      _id: "abcde",
      targets: ["5f5b888b74adca1d4e71bbb0", "5f606ef451fc4331a1f26096"],
      updatedAt: new Date(),
      unseenMessages: 0,
      messages: [
        {
          _id: "1",
          conversationId: "abcde",
          createdAt: new Date(),
          emitter: "5f5b888b74adca1d4e71bbb0",
          targets: ["5f606ef451fc4331a1f26096"],
          content: "Coucou encore",
        },
        {
          _id: "2",
          conversationId: "abcd",
          createdAt: new Date(),
          emitter: "5f606ef451fc4331a1f26096",
          targets: ["5f5b888b74adca1d4e71bbb0"],
          content: "ça faisait longtemps",
        },
      ],
    },
  ]);
}
