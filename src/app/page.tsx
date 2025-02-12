"use client";

import dynamic from "next/dynamic";
import { useHeaderImage } from "@/hooks/useHeaderImage";
import { faker } from "@faker-js/faker";
import React, { FC } from "react";

const DynamicRandomParagraph = dynamic(() => Promise.resolve(() => <p>{faker.lorem.paragraphs(5)}</p>), {
    ssr: false,
});

const Home: FC = () => {
    const { data, isLoading } = useHeaderImage(3000);

    return (
        <div className="flex flex-col items-center justify-center">
            <p>{isLoading ? "LOADING" : "NOT LOADING"}</p>
            <img className="w-full h-[200px]" src={data} alt={"faker header image"} />
            <DynamicRandomParagraph />
        </div>
    );
};

export default Home;
