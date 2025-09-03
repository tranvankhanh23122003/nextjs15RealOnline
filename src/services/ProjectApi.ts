import AxiosClient from "../apis/AxiosClient";

const ProjectApi = {
  url: "/dictionary/DuAn",
  getAll: (params: any) => {
    return AxiosClient.get(ProjectApi.url, { params });
  },
  
};

export default ProjectApi;