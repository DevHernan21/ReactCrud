import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "../App";
import NavBar from "../components/NavBar";
import CreateUser from "../components/CreateUser";
import UserId from "../components/UserId";

// the routes I use are from react-router-dom v6
// I haven't used breadcrumb navigation, because I don't know how to implement it. because with v6 router it is used differently


const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>

                <Route exact index element={<App />} />
                <Route path="create" element={<CreateUser />} />
                <Route path={"edit/:id"} element={<UserId />} />

            </Routes>
        </BrowserRouter >
    );
}

export default Router;
