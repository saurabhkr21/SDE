import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
export async function signup(email: string, password: string) {
  const userData = await createUserWithEmailAndPassword(auth, email, password);
  return userData;
}

export async function login(email: string, password: string) {
  const userData = await signInWithEmailAndPassword(auth, email, password);
  return userData;
}

export async function signout() {
  const res = await signOut(auth);
  return res;
}
export default auth;
