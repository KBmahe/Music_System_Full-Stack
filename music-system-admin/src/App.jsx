import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SongAdd from "./pages/SongAdd";
import AlbumAdd from "./pages/AlbumAdd";
import SongList from "./pages/SongList";
import AlbumList from "./pages/AlbumList";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

export const url = "https://music-system-full-stack.onrender.com"

const App = () => {
  return (
    <div className="flex items-center min-h-screen">
      <ToastContainer />
      <SideBar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#f3fff]">
        <Navbar />
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<SongAdd />} />
            <Route path="/add-album" element={<AlbumAdd />} />
            <Route path="/list-song" element={<SongList />} />
            <Route path="/list-album" element={<AlbumList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
