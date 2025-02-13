import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import Api from "./api";
import News from "./news.tsx";

const rootElement = document.querySelector<HTMLDivElement>('#app');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // React 18+
    root.render(
        <React.StrictMode>
            <Api />
            <News/>
        </React.StrictMode>
    );
}