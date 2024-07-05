import { useQuery } from "react-query";

import { getProjectsList } from "./apiRequests";
import { EndPoints } from "../../../enum/endPoints";

const { LIST } = EndPoints.PROJECTS;

// ===== MUTATES ===== //

// ===== QUERIES ===== //
export const useGetProjectsList = () => {
  const getQueryKey = () => [LIST];

  const { data, refetch, isLoading, error } = useQuery(
    getQueryKey(),
    () => getProjectsList(),
    {
      staleTime: 7 * 1000 * 60 * 60 * 24, // 7 days
    }
  );

  return { getQueryKey, refetch, data, isLoading, error };
};
