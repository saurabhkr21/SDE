

export default function Home() {
  return (
    <div className="flex w-screen bg-violet-950 p-5 h-screen gap-4 text-4xl  items-center justify-center ">
      <div className="flex   bg-violet-700 w-[900px] h-[400px] text-white items-center rounded-3xl ">
        <div className="flex flex-col flex-grow p-4 gap-6 w-[1/2] h-full items-center justify-center rounded-3xl bg-violet-900">
        <header className=" flex flex-col   gap-3">
          <span>Get <strong className="text-amber-700">insight </strong>that help your business grow.</span>
          <span className="text-[18px]">Discover the benefits of data analytics and make better decisions regarding
          revenue,customer experience, and overall efficiency.</span>
        </header>
        <footer className="flex flex-row gap-7">
            <div className="flex flex-col">
              <span>10K+</span>
              <span className="text-[10px]">companies</span>
            </div>
            <div className="flex flex-col">
              <span>314</span>
              <span className="text-[10px]">companies</span>
            </div>
            <div className="flex flex-col">
              <span>125</span>
              <span className="text-[10px]">companies</span>
            </div>
        </footer>
        </div>
        <div   >
          <img
          className="w-[600px] h-[400px] rounded-3xl flex-grow"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfOcwLv5zPn_aDmIjj5_4qyjg5SvuENN8XHdCjzkyGQ-Znyz8Lu9HlMPl1_EeGEYmKbA&usqp=CAU" alt="" />
        </div>
      </div>
      
    </div>
  );
}
