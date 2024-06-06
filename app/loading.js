import Image from "next/image";
import Icon from "/public/assets/loadicon.svg";

export default function Loading() {
    return (
        <section className="text-white absolute w-full !h-dvh z-50 bg-body">
            <div className="flex justify-center items-center !h-screen bg-body">
                <p className="text-white animate-spin bg-body">
                    <Image className="w-28" src={Icon} alt="loading Icon" />
                </p>
            </div>
        </section>
    );
}
