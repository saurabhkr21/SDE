import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { moveItem } from "../features/boardSlice";
import {  DeleteIcon, PlusCircle } from "lucide-react";

export default function Board() {
  const handleDeleteStage = (stageId) => {
    dispatch({
      type: "boards/deleteStage",
      payload: {
        boardId: board.id ?? boardId,
        stageId,
      },
    });
  };
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItemStageId, setNewItemStageId] = useState("");
  const [newItem, setNewItem] = useState({ title: "", description: "", user: "" });
  const { boardId = "" } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tranferData, setTransferData] = useState(null);
  const [showAddStage, setShowAddStage] = useState(false);
  const [newStageLabel, setNewStageLabel] = useState("");

  const boards = useSelector((s) => s.boards) ?? [];
  const board = boards?.find((b) => b.id === boardId) ?? {};

  console.log(board);

  const {
    id = "",
    title = "",
    description = "",
    user = "",
    stages = [],
    color = "",
  } = board ?? {};

  useEffect(() => {
    if (boardId?.length <= 0) navigate("/");
  }, []);

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${color}22 0%, #f8fafc 100%)`,
      }}
      className="w-full h-full min-h-screen flex flex-col gap-8 p-8"
    >
      <h2 className="text-3xl font-extrabold capitalize text-blue-700 drop-shadow mb-2 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-600 mb-4 max-w-2xl">{description}</p>
      )}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-blue-700">{user}</span>
      </div>
      <div className="stages flex items-stretch h-full flex-1 gap-6 ">
        {stages.map(({ stageId, items, label, total }, i) => (
          <div
            key={stageId}
            id={stageId}
            style={{ borderColor: color, background: `${color}08` }}
            className="stage border-2 min-h-full basis-[24%] max-w-1/2 gap-4 flex flex-col self-stretch shadow-xl p-4 pt-2 bg-white rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
            onDragOver={(e) => {
              e.preventDefault();
            }}
            onDragEnter={(e) => {
              setTransferData((prev) => ({
                ...prev,
                receiverStageId: stageId,
              }));
            }}
            onDrop={(e) => {
              dispatch(moveItem(tranferData));
              setTransferData(null);
            }}
          >
            <span className="span flex items-center gap-2 max-w-full w-full mb-2">
              <h3 className="max-w-full flex-1 text-xl font-semibold capitalize truncate text-blue-700">
                {label ?? `Stage ${i + 1}`}
              </h3>
              <span className="inline-block px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold shadow">
                {items?.length ?? 0}
              </span>
              <button
                className="px-2 aspect-square rounded-lg shadow hover:shadow-md active:shadow-inner bg-blue-600 text-white font-bold text-lg transition-all duration-150 hover:bg-blue-700"
                title="Add Item"
                onClick={() => {
                  setNewItemStageId(stageId);
                  setShowAddItem(true);
                }}
              >
                <PlusCircle />
              </button>
              <button
                className="px-2 aspect-square rounded-lg shadow hover:shadow-md active:shadow-inner bg-red-500 text-white font-bold text-lg transition-all duration-150 hover:bg-red-700"
                title="Delete Stage"
                onClick={() => handleDeleteStage(stageId)}
              >
                <DeleteIcon />
              </button>
            </span>
            <ul className="flex flex-col gap-4 ">
              {items?.map((item) => (
                <li
                  key={item.itemId}
                  id={item.itemId}
                  draggable
                  className={`flex flex-col gap-1 px-3 py-2 shadow rounded-xl overflow-hidden border border-blue-100 bg-white transition-all duration-150 hover:bg-blue-50 hover:shadow-lg cursor-move ${
                    tranferData?.itemId === item.itemId
                      ? "dragging opacity-50 shadow-inner border-blue-400"
                      : ""
                  }`}
                  onDragOver={(e) => e.stopPropagation()}
                  onDragStart={(e) => {
                    setTransferData(() => ({
                      boardId: board.id ?? boardId,
                      senderStageId: stageId,
                      receiverStageId: null,
                      itemId: item?.itemId,
                    }));
                  }}
                >
                  <span className="font-semibold text-blue-700 truncate">
                    {item.title}
                  </span>
                  <span className="text-sm text-slate-600 truncate">
                    {item.description}
                  </span>
                  {item.creator ? (
                    <span className="text-xs text-slate-400 italic">
                      {item.creator}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button
          className="px-4 py-2 rounded-lg bg-green-600 text-white font-bold shadow hover:bg-green-700 transition-all duration-150 self-start mt-4"
          onClick={() => setShowAddStage(true)}
        >
          + Add Stage
        </button>
      </div>
      {showAddStage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <form
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 min-w-[300px]"
            onSubmit={(e) => {
              e.preventDefault();
              if (!newStageLabel.trim()) return;
              dispatch({
                type: "boards/addStage",
                payload: {
                  boardId: board.id ?? boardId,
                  stageData: {
                    stageId: Math.random().toString(36).slice(2),
                    label: newStageLabel,
                    items: [],
                    total: 0,
                  },
                },
              });
              setNewStageLabel("");
              setShowAddStage(false);
            }}
          >
            <h3 className="text-lg font-bold text-blue-700">Add New Stage</h3>
            <input
              type="text"
              placeholder="Stage name"
              value={newStageLabel}
              onChange={(e) => setNewStageLabel(e.target.value)}
              className="border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowAddStage(false)}
                className="px-3 py-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
      {showAddItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <form
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 min-w-[300px]"
            onSubmit={(e) => {
              e.preventDefault();
              if (!newItem.title.trim()) return;
              dispatch({
                type: "boards/addItem",
                payload: {
                  boardId: board.id ?? boardId,
                  stageId: newItemStageId,
                  item: {
                    itemId: Math.random().toString(36).slice(2),
                    title: newItem.title,
                    description: newItem.description,
                    creator: newItem.user,
                  },
                },
              });
              setNewItem({ title: "", description: "", user: "" });
              setShowAddItem(false);
            }}
          >
            <h3 className="text-lg font-bold text-blue-700">Add New Item</h3>
            <input
              type="text"
              placeholder="Item title"
              value={newItem.title}
              onChange={(e) =>
                setNewItem({ ...newItem, title: e.target.value })
              }
              className="border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Item description"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
              className="border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
            />
            <input
              type="text"
              placeholder="User"
              value={newItem.user}
              onChange={(e) =>
                setNewItem({ ...newItem, user: e.target.value })
              }
              className="border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowAddItem(false)}
                className="px-3 py-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
