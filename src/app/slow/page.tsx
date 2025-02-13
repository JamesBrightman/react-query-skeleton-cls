"use client";

import React, { FC } from "react";
import { useHeaderImage } from "@/hooks/useHeaderImage";
import { useGridContent } from "@/hooks/useGridContent";
import { useFooterContent } from "@/hooks/useFooterContent";
import { FillerText } from "@/components/FillerText";

// const DynamicRandomParagraphs = dynamic(() => Promise.resolve(() => <p>{faker.lorem.paragraphs(5)}</p>), {
//     ssr: false,
// });

const Slow: FC = () => {
    const { data: headerUrl } = useHeaderImage(3000);
    const { data: gridContent } = useGridContent(2000);
    const { data: footerContent } = useFooterContent(1000);

    return (
        <div className="flex flex-col items-center justify-center">
            <img className="w-full" src={headerUrl} alt={"faker header image"} />
            <FillerText />
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full w-full">
                {gridContent?.map((ele, idx) => (
                    <div
                        key={idx}
                        className="flex w-full h-[400px] bg-red-400 rounded-lg items-center justify-center text-xl font-bold"
                    >
                        {ele}
                    </div>
                ))}
            </div>
            <FillerText />
            <p className="w-full h-[150px]">{footerContent}</p>
        </div>
    );
};

export default Slow;
