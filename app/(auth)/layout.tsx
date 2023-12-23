import { ClerkProvider } from "@clerk/nextjs"
import { Head } from "next/document"
import { Inter } from "next/font/google"
import '../globals.css'

export const metada = {
    title:'Threads',
    description:'A Next.js 13 Meta Threads Application'
}

const inter = Inter({subsets:['latin']})
export default function Rootlayout ({children}: {children:React.ReactNode}){
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>

            </html>
        </ClerkProvider>
    )
}