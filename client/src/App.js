import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App= () => {
    return (
        <BrowserRouter>
            <AppRouter />
            <p>Hello</p>
        </BrowserRouter>
    );
};

export default App;
