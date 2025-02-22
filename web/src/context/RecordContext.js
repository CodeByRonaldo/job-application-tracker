"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { APPLICATION } from "@/constants/applicationStates";

const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
    const [record, setRecord] = useState(() => {
        // Load initial state from local storage if available
        if (typeof window !== 'undefined') {
            const savedRecord = localStorage.getItem('record');
            return savedRecord ? JSON.parse(savedRecord) : { applications: [] };
        }
        return { applications: [] };
    });

    useEffect(() => {
        // Save state to local storage whenever it changes
        if (typeof window !== 'undefined') {
            localStorage.setItem('record', JSON.stringify(record));
            console.log('record: ', record)
        }
    }, [record]);

    return (
        <RecordContext.Provider value={{ record, setRecord }}>
            {children}
        </RecordContext.Provider>
    );
};

export const useRecord = () => useContext(RecordContext);