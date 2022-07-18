import client from "./client";

import { Listing } from "../models/listings";

interface User {
  username: string;
  email: string;
  password: string;
}

export type MessageRegistration = { message: string; listingId: number };

export interface Message {
  fromUser: User;
  toUser: User;
  listing: Listing;
  content: string;
  id: number;
  dateTime: number;
}

const sendMessage = (data: MessageRegistration) =>
  client.post("/messages", data);

const getMessages = () => client.get("/messages");

export default {
  sendMessage,
  getMessages,
};
