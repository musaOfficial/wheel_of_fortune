import { ClerkProvider, SignedOut } from "@clerk/nextjs"
import { Roboto } from "next/font/google";
import type { Metadata } from "next";

import '../globals.css';

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Application'
}



const roboto = Roboto({
  weight: ['300', '500', '700', '900'],
  subsets: ['latin']
});


export default function RootLayout({ children }:{children: React.ReactNode}){
    return (
    <ClerkProvider>
        <html lang="de">
            <body className={`${roboto.className}`}>
                <SignedOut>
                    {children}
                </SignedOut>
            </body>
        </html>
    </ClerkProvider>
    )
}