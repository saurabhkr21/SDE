import prismaClient from "@/services/prisma";
import { PrismaClient } from "../../generated/prisma";

export default function Home() {
  async function createJob(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const job = {
      title,
      description,
      category,
    };

    await prismaClient.job.create({
      data : job
    });
  }
  return (
    <div className="flex h-screen w-screen  items-center justify-center bg-blue-100">
      <form action={createJob} className="flex flex-col gap-4 ">
        <input type="text" name="title" placeholder="Enter job title" />
        <input
          type="text"
          name="description"
          placeholder="Enter job description"
        />
        <select name="category" className="h-8">
          <option value="random">Random</option>
          <option value="it">IT</option>
          <option value="design">Design</option>
          <option value="software">Software</option>
        </select>
        <button
          className="flex bg-amber-300 text-black rounded-2xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
