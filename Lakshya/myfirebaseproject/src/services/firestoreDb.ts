//@ts-nocheck

import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import auth from "./firebaseAuth";
import { redirect } from "next/dist/server/api-utils";
const db = getFirestore(app);

export async function storeDataInDB(data: any) {
  // if(!auth?.id){
  //   redirect("/");
  // }
  const doc = {
    ...data,
    authorId: auth.currentUser?.uid,
  };
  try {
    const docRef = await addDoc(collection(db, "posts"), doc);
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function getAllPosts() {
  try {
    const posts = await getDocs(collection(db, "posts"));
    return formatPosts(posts);
  } catch (e) {
    console.error("Error getting posts: ", e);
    throw e;
  }

  // posts.forEach((doc) => {
  //   postsArr.push({
  //     ...doc.data(),
  //     id:doc.id
  //   });
  // });
  // posts.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
}

export async function getCurrentUserPost() {
  try {
    const q = query(
      collection(db, "posts"),
      where("authorId", "==", auth.currentUser?.uid)
    );
    const posts = await getDocs(q);
    return formatPosts(posts);
  } catch (e) {
    console.error("Error getting current user posts: ", e);
    throw e;
  }
}

export async function deletePost(id) {
  try {
    const res = await deleteDoc(doc(db, "posts", id));
    return res;
  } catch (e) {
    console.error("Error deleting post: ", e);
    throw e;
  }
}

function formatPosts(posts) {
  const postsArr = [];
  posts.forEach((elem) => {
    const postObj = {
      ...elem.data(),
      id: elem.id,
    };
    postsArr.push(postObj);
  });
  return postsArr;
}

export async function UpdatePost(updatedData, id) {
  try {
    const postRef = doc(db, "posts", id);
    await updateDoc(postRef, updatedData);
  } catch (e) {
    console.error("Error updating post: ", e);
    throw e;
  }
}

export default db;
