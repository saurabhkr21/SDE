//@ts-nocheck
import prismaClient from "@/services/prisma";

export default async function page({ params }) {
  const params_id = params.id;
  const data = await prismaClient.job.findUnique({
    where:{
        id:params_id
    }
  });
  return (
    <div className="flex gap-10">
        <div
         
          className="flex flex-col bg-amber-100 border rounded-xl"
        >
          <h2>Title: {data?.title}</h2>
          <p>Description:{data.description}</p>
          <p>Category:{data.category}</p>
        </div>
    </div>
  );
}
