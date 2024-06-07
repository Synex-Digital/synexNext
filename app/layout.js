import "./globals.css";

export const metadata = {
    title: "Synex Digital",
    description:
        "We are the Synex Digital Team and are Highly Motivated to Give You The Best and effective on-time Results for Your Online Presence and Traffic Growth.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`font-pops bg-body`}>
                {children}
            </body>
        </html>
    );
}
