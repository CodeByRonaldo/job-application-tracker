import React from "react";
import { RecordProvider } from "@/context/RecordContext";

export default function NewRecordLayout({ children }) {
    return (
        <body>
            <RecordProvider>
                <main>
                    {children}
                </main>
            </RecordProvider>
        </body>
    )
}

// export default function RootLayout({ children }) {
//     return (
//         <html lang='en'>
//             <body>
//                 <RecordProvider>
//                     <main>
//                         {children}
//                     </main>
//                 </RecordProvider>
//             </body>
//         </html>
//     );
// }