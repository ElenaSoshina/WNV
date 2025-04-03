import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/index.html" replace />} />
                <Route path="/index.html" element={<HomePage />} />
            </Route>
        </Routes>
    );
}
