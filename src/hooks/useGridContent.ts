import { useQuery } from "@tanstack/react-query";

export const useGridContent = (timeout: number) => {
    return useQuery({
        queryKey: ["getGridContent"],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, timeout));

            return ["foo", "bar", "baz", "lorem", "ipsum", "dolor"];
        },
    });
};
