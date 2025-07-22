import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function storeDataInDB(data: any) {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: data.title,
      description: data.description,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// export async function getAllPosts(){
// const querySnapshot = await getDocs(collection(db, "posts"));
// }
export default db;
