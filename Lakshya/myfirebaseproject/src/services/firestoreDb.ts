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
  const posts = await getDocs(collection(db, "posts"));
  return formatPosts(posts);

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
  const q = query(
    collection(db, "posts"),
    where("authorId", "==", auth.currentUser?.uid)
  );
  const posts = await getDocs(q);
  return formatPosts(posts);
}

export async function deletePost(id) {
  const res = await deleteDoc(doc(db, "posts", id));
  return res;
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
  const postRef = doc(db, "posts", id);
  await updateDoc(postRef, updatedData);
}

export default db;
