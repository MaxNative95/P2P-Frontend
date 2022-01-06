import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from '../screens/home';
import { Chat } from '../chat/Chat';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="chat/:room" element={<Chat />} />
        </Routes>
    );
}