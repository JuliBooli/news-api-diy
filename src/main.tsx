import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import Api from "./api";
import News from "./news.tsx";
import Head from "./Head.tsx";

const rootElement = document.querySelector<HTMLDivElement>('#app');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // React 18+
    root.render(
        <React.StrictMode>
            <Head/>
            <Api />
            <News data={[]} />
        </React.StrictMode>
    );
}