import { nanoid } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { defaultLocalData } from "../constants";
import { addBoard } from "../features/boardSlice";

export default function CreateBoard({ open = false, close = () => {} }) {
  const [board, setBoard] = useState({});
  const dispatch = useDispatch();
  // console.log(store)
  useEffect(
    () =>
      setBoard({
        id: nanoid(),
        title: "",
        description: "",
        stages: [],
        color: "#ffffff",
      }),
    [open]
  );
  const localData =
    JSON.parse(localStorage.getItem("kanban")) ?? defaultLocalData;

  function closeBoard() {
    setBoard({});
    close();
  }
  return open ? (
    <div
      onClick={closeBoard}
      className={`fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black/40 via-blue-100/30 to-white/10 backdrop-blur-sm transition-all duration-300 ${
        open ? "flex" : "hidden"
      }`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBoard(board));
          closeBoard();
        }}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-6 p-8 shadow-2xl min-w-96 w-full max-w-lg bg-white rounded-2xl border border-blue-100 animate-fadeIn"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      >
        <h2 className="text-3xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">
          Create a New Board
        </h2>
        <div className="flex flex-col gap-4">
          <InputBar
            id="NewBoardTitleInput"
            title="Board Title"
            type="text"
            placeholder="Enter Title for the Board"
            value={board.title}
            required
            onChange={(e) =>
              setBoard((prev) => {
                prev.title = e.target.value;
                return { ...prev };
              })
            }
          />
          <InputBar
            id="NewBoardColorInput"
            title="Board Color"
            type="color"
            value={board.color}
            onChange={(e) =>
              setBoard((prev) => {
                prev.color = e.target.value;
                return { ...prev };
              })
            }
            sideContent={
              <span className="ml-2 px-2 py-1 rounded bg-blue-50 border text-xs font-mono text-blue-700 shadow">
                {board.color}
              </span>
            }
          />
          <InputBar
            id="NewBoardDescriptionInput"
            title="Board Description"
            type="textarea"
            rows={4}
            placeholder="Enter Description for the Board"
            value={board.description}
            onChange={(e) =>
              setBoard((prev) => {
                prev.description = e.target.value;
                return { ...prev };
              })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:to-blue-500 rounded-lg p-2 text-white font-bold shadow transition-all duration-200 text-lg tracking-wide"
        >
          <span className="inline-block align-middle mr-2">➕</span> Create
          Board
        </button>
        <button
          type="button"
          onClick={closeBoard}
          className="mt-2 text-blue-500 hover:text-blue-700 text-sm underline self-center"
        >
          Cancel
        </button>
      </form>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  ) : null;
}

function InputBar({
  id = "",
  title = "",
  sideContent = null,
  type = "text",
  ...props
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-base font-semibold text-blue-700">
        {title}{" "}
        {props.required ? (
          <span className="text-red-500 text-xs align-super">*</span>
        ) : null}
      </span>
      <div className="flex gap-4 items-center">
        {type === "textarea" ? (
          <textarea
            id={id}
            type={type}
            {...props}
            className={`border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 ${
              ["color"].includes(props.type) ? "" : "flex-1"
            }`}
          />
        ) : (
          <input
            id={id}
            type={type}
            {...props}
            className={`border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 ${
              ["color"].includes(type) ? "" : "flex-1"
            }`}
          />
        )}
        {sideContent}
      </div>
    </label>
  );
}
