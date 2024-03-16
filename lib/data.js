// TEMPORARY DATA
// const users = [
//   { id: 1, name: "Ahmad" },
//   { id: 2, name: "Ikhsaniyah" },
// ];

import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const posts = [
//   { id: 1, title: "Post 1", body: ".......", userId: 1 },
//   { id: 2, title: "Post 2", body: ".......", userId: 2 },
//   { id: 3, title: "Post 3", body: ".......", userId: 1 },
//   { id: 4, title: "Post 4", body: ".......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getPost = async (slug) => {
  // const post = posts.find((post) => post.id === parseInt(id));
  // console.log(post);
  // return post;
  try {
    connectToDb();
    const post = await Post.findOne({slug});
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data post");
  }
};
export const getUsers = async () => {
  // return users.find((user) => user.id === parseInt(id));
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data users");
  }
};

export const getUser = async (_id) => {
  // return users.find((user) => user.id === parseInt(id));
  try {
    connectToDb();
    const user = await User.findById({_id});
    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

