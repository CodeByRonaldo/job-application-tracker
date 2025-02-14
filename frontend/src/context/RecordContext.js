"use client";

import { createContext, useContext, useState } from "react";

const RecordContext = createContext();

export const useRecord = () => useContext(RecordContext);

export const RecordProvider = ({ children }) => {
    const [record, setRecord] = useState({});

    return (
        <RecordContext.Provider value={{ record, setRecord }}>
            { children }
        </RecordContext.Provider>
    );
};