import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Layout from "./components/Layout/Layout.jsx";
import LegalizationPage from './pages/LegalizationPage/LegalizationPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="legalization" element={<LegalizationPage />} />
            </Route>
        </Routes>
    );
}
