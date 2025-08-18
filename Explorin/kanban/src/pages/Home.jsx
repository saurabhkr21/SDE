import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CreateBoard from "../components/CreateBoard";
import { defaultLocalData } from "../constants";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCreateBoardOpen, setCreateBoardOpen] = useState(false);

  const boards = useSelector((s) => s.boards) ?? [];

  useEffect(() => {
    function unload() {
      console.log("Ending, bye bye...");
      const localData =
        JSON.parse(localStorage.getItem("kanban")) ?? defaultLocalData;
      localData.boards = boards;
      localStorage.setItem("kanban", JSON.stringify(localData));
    }
    window.addEventListener("beforeunload", unload);
    return () => {
      window.removeEventListener("beforeunload", unload);
    };
  }, [boards]);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col justify-center items-center w-full p-6 gap-4 h-full bg-slate-200">
        <h1 className="text-4xl font-bold">Kanban Board</h1>
        <button
          onClick={() => setCreateBoardOpen(true)}
          className="w-fit bg-blue-600 hover:bg-blue-600/80 rounded-lg p-1.5 text-white"
        >
          Create Board
        </button>

        
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 justify-center gap-4">
        {boards.map((board) => (
          <li
            key={board.id}
            style={{ borderColor: board.color, position: "relative" }}
            className="rounded-2xl border-2 shadow pb-4 flex flex-col overflow-hidden"
          >
            <div
              style={{ backgroundColor: board.color }}
              className={`w-full h-3 rounded-t-xl`}
            />
            <button
              className="absolute top-3 right-2 px-1 py-0.5 rounded-full text-white shadow hover:bg-red-200 z-10"
              title="Delete Board"
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "boards/removeBoard", payload: board.id });
              }}
            >
              &#x2716;
            </button>
            <span
              className="text-lg font-semibold px-4 pt-2 cursor-pointer"
              onClick={() => navigate("/board/" + board.id)}
            >
              {board.title}
            </span>
            <span className="font-medium px-4">{board.description}</span>
          </li>
        ))}
      </ul>

      <CreateBoard
        open={isCreateBoardOpen}
        close={() => setCreateBoardOpen(false)}
      />
    </div>
  );
}
