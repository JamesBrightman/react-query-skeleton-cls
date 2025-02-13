import { useQuery } from "@tanstack/react-query";
import { faker } from "@faker-js/faker";

export const useFooterContent = (timeout: number) => {
    return useQuery({
        queryKey: ["getFooterContent"],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, timeout));

            return faker.lorem.paragraphs(5);
        },
    });
};
