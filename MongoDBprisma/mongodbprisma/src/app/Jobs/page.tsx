import prismaClient from "@/services/prisma";

export default async function page() {
  const data = await prismaClient.job.findMany({
    select: {
      id: true,
      title: true,
      description:true,
      category:true
    },
  });
  return (
    <div className="flex gap-10">
      {data.map((job) => (
        <div
          key={job.id}
          className="flex flex-col bg-amber-100 border rounded-xl"
        >
          <h2>Title: {job.title}</h2>
          <p>Description:{job.description}</p>
          <p>Category:{job.category}</p>
        </div>
      ))}
    </div>
  );
}
