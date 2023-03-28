import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

const App= () => {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
            <p>Hello</p>
        </BrowserRouter>
    );
};

export default App;
