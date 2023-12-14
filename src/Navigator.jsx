import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Album from "./pages/Album";
import Photo from "./pages/Photo";

export default function Navigator(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/web2-galeria" element={<Home/>}></Route>
                <Route path="/web2-galeria/album/:id" element={<Album/>}></Route>
                <Route path="/web2-galeria/photo/:id" element={<Photo/>}/>
            </Routes>
        </BrowserRouter>
    )
}