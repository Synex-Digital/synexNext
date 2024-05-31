import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center w-full text-center">
      <h2 className="text-5xl text-white font-semibold">Not Found</h2>
      <p className="text-3xl text-white font-semibold mt-6 mb-5">Could not find requested resource</p>
      <Link href="/" className="py-2 px-4 rounded-md bg-primary text-lg font-medium text-black duration-300 shadow-404btn shadow-primary">Back to Home</Link>
    </div>
  );
}
