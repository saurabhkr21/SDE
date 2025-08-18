import { createSlice } from "@reduxjs/toolkit";
import { defaultLocalData } from "../../constants";

const { boards = [] } =
  JSON.parse(localStorage.getItem("kanban")) ?? defaultLocalData;

const initialState = boards;

export const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, { payload = {} }) => {
      state.push(payload);
    },
    removeBoard: (state, { payload = "" }) => {
      const idx = state.findIndex((board) => board.id === payload);
      if (idx !== -1) state.splice(idx, 1);
    },
    addStage: (state, { payload: { boardId = "", stageData } }) => {
      const board = state.find((b) => b.id === boardId);
      board.stages.push(stageData);
    },
    addItem: (state, { payload: { boardId = "", stageId = "", item } }) => {
      const board = state.find((b) => b.id === boardId);
      if (!board) return;
      const stage = board.stages.find((s) => s.stageId === stageId);
      if (!stage) return;
      stage.items.push(item);
    },
    moveItem: (
      state,
      {
        payload: {
          boardId = "",
          senderStageId = "",
          receiverStageId = "",
          itemId = "",
        },
      }
    ) => {
      if (!boardId || !senderStageId || !receiverStageId || !itemId)
        return console.log("Issue while moving item!");
      const board = state.find((b) => b.id === boardId);
      const senderStage = board.stages.find((s) => s.stageId === senderStageId);
      const receiverStage = board.stages.find(
        (s) => s.stageId === receiverStageId
      );
      const item = senderStage.items.find((i) => i.itemId === itemId);
      senderStage.items = senderStage.items.filter((i) => i.itemId != itemId);
      receiverStage.items.push(item);
    },
    deleteStage: (state, { payload: { boardId = "", stageId = "" } }) => {
      const board = state.find((b) => b.id === boardId);
      if (!board) return;
      board.stages = board.stages.filter((s) => s.stageId !== stageId);
    },
  },
});

export const {
  addBoard,
  removeBoard,
  addStage,
  addItem,
  moveItem,
  deleteStage,
} = boardsSlice.actions;

export default boardsSlice.reducer;
