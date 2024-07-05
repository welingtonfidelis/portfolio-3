import { EndPoints } from "../../../enum/endPoints";
import RestRequestService from "../api";
import { ListProjectsResponse } from "./types";

const { LIST } = EndPoints.PROJECTS;

export const getProjectsList = async () => {
  const { data: response } = await RestRequestService.get<
    ListProjectsResponse[]
  >(LIST, {
    withCredentials: false,
  });

  return response;
};
