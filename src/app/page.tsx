"use client";

import React, { FC } from "react";
import { useGridContent } from "@/hooks/useGridContent";
import { useHeaderImage } from "@/hooks/useHeaderImage";
import { useFooterContent } from "@/hooks/useFooterContent";
import { FillerText } from "@/components/FillerText";

// const DynamicRandomParagraphs = dynamic(() => Promise.resolve(() => <p>{faker.lorem.paragraphs(5)}</p>), {
//     ssr: false,
// });

const Home: FC = () => {
    const { data: headerUrl, isLoading: isHeaderLoading } = useHeaderImage(3000);
    const { data: gridContent, isLoading: isGridLoading } = useGridContent(2000);
    const { data: footerContent, isLoading: isFooterLoading } = useFooterContent(1000);

    return (
        <div className="flex flex-col items-center justify-center">
            {isHeaderLoading ? (
                <div className="w-full h-[200px] bg-gray-200 animate-pulse "></div>
            ) : (
                <img className="w-full h-[200px]" src={headerUrl} alt={"faker header image"} />
            )}
            <FillerText />
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full w-full">
                {isGridLoading
                    ? Array.from(Array(6), (_, idx) => (
                          <div key={idx} className="w-full h-[400px] bg-gray-200 animate-pulse"></div>
                      ))
                    : gridContent?.map((ele, idx) => (
                          <div
                              key={idx}
                              className="flex w-full h-[400px] bg-red-400 rounded-lg items-center justify-center text-xl font-bold"
                          >
                              {ele}
                          </div>
                      ))}
            </div>
            <FillerText />
            {isFooterLoading ? (
                <div className="w-full h-[150px] bg-gray-200 animate-pulse "></div>
            ) : (
                <p className="w-full h-[150px]">{footerContent}</p>
            )}
        </div>
    );
};

export default Home;
