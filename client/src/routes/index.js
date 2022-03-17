import React from "react";
import { Route, BrowserRouter, Routes} from 'react-router-dom';

import CustomRoute from "./customRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage"
import AdminPage from "../pages/AdminPage"
import NotFound404 from "../pages/NotFound404";

export default function MyRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<LoginPage />}/>
                <Route path="/admin" exact element={<AdminPage />}/>
                <Route path="/home" exact element={<HomePage />}/>
                <Route path="*" element={<NotFound404 />}/>
            </Routes>  
        </BrowserRouter>
    )
}