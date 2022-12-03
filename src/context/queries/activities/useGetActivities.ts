import { useQuery } from "@tanstack/react-query";
import { Activity } from "../../models";
import useDenoApi from "../../useDenoApi";

const GetActivities = async () => {
  const api = useDenoApi();

  const { data: activity } = await api.get(`/activities`);

  return activity;
};

export const KEY = "ACTIVITIES";

const useGetActivities = () => {
  return useQuery<Array<Activity>>([KEY], GetActivities);
};

export default useGetActivities;
