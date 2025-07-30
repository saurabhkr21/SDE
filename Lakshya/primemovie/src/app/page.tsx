import Image from "next/image";
import CarouselComponent from "./components/Crousel";
import MovieSection from "./components/MovieCard";
import  TVshow from "/components/TVshow";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center  justify-between ">
      <CarouselComponent/>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        {/* <h1 className="text-4xl font-bold">Welcome to Prime Movie</h1>
        <p className="mt-3 text-lg">
          Discover the latest movies and TV shows with Prime Movie.
        </p>
        <div className="mt-6">
          <Image
            src="/images/prime-movie-logo.png"
            alt="Prime Movie Logo"
            width={200}
            height={100}
            className="rounded-lg"
          />
        </div> */}
        <div className=" w-full ">
          <MovieSection/>
        </div>
      </main>
      {/* <TVshow/> */}
      
    </div>
  );
}
