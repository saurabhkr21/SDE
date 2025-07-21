
import Image from "next/image";

import Button from "./components/Button";
import { cookies } from "next/headers";
import Logout from "./components/Logout";

import { redirect, RedirectType } from "next/navigation";

export default async function Home() {
  const userCookies = await cookies();
  const apiKey = userCookies.get('apiKey')?.value;
  // const name = userCookies.get('name')?.value;
  // if(!name){
  //   redirect('/login');
  // }
  return (
    <div className="flex flex-col items-center gap-6 min-h-screen">
      {/* <p>User name is: {name} </p> */}
      <Logout/>
    </div>
  );
}
