"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import anisvg from "/public/assets/animation.svg";

const AosAnimation = ({ children, aosvalue,className }) => {
    useEffect(() => {
        AOS.init({
            duration: "1000",
        });
    }, []);

    return <div data-aos={aosvalue} className={className}>{children}</div>;
};

export default AosAnimation;
