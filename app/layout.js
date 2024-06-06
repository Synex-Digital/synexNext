import { Inter_Tight } from "next/font/google";
import "./globals.css";

const intertight = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
    title: "Synex Digital",
    description:
        "We are the Synex Digital Team and are Highly Motivated to Give You The Best and effective on-time Results for Your Online Presence and Traffic Growth.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${intertight.className} !font-pops bg-body`}>
                {children}
            </body>
        </html>
    );
}
