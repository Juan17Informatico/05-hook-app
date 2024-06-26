import React from "react";
import ReactDOM from "react-dom/client";
import {
        createBrowserRouter,
        RouterProvider, BrowserRouter} from "react-router-dom";
import "./index.css";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayout.jsx/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterApp } from "./01-useState/CounterApp";
// import { HooksApp } from "./HooksApp.jsx";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import "./08-useReducer/intro-reducer"; 
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContect/MainApp";


ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
                <MainApp />
        </BrowserRouter>
);
