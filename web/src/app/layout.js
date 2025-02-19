import React from 'react';
import { RecordProvider } from '@/context/RecordContext';
import './globals.css';

export const metadata = {
    title: 'Job Application Tracker',
    description: 'This is a simple job application tracker for desktop, and mobile'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <RecordProvider>
                    {children}
                </RecordProvider>
            </body>
        </html>
    );
}
