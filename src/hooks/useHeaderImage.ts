import { useQuery } from "@tanstack/react-query";
import { faker } from "@faker-js/faker";

export const useHeaderImage = (timeout: number) => {
    return useQuery({
        queryKey: ["getHeaderImage"],
        queryFn: async () => {
            // simulate slow loading
            await new Promise((resolve) => setTimeout(resolve, timeout));

            return faker.image.url({ height: 200 });
        },
    });
};
