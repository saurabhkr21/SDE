import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Board";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index Component={Home} />
            <Route path="profile" Component={Profile} />
            <Route path="auth" Component={Auth} />
            <Route path="board" Component={Board}>
              <Route path=":boardId" element={<></>} />
              <Route path="*" element={<>Board Id Not Found</>} />
            </Route>
          </Route>
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
