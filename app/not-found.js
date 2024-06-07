import { CustomButton } from "./core";

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center w-full text-center">
      <h2 className="text-5xl text-white font-semibold">Not Found</h2>
      <p className="text-3xl text-white font-semibold mt-6 mb-5">Could not find requested resource</p>
      <CustomButton btnTitle="Back to Home" href="/" />
    </div>
  );
}
