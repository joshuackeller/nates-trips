import { useQuery } from "@tanstack/react-query";
import { Activity } from "../../models";
import useDenoApi from "../../useDenoApi";

const GetActivity = async (activityId: string) => {
  const api = useDenoApi();

  const { data: activity } = await api.get(`/activities/${activityId}`);

  return activity;
};

export const KEY = "ACTIVITY";

const useGetActivity = (activityId: string) => {
  return useQuery<Activity>([KEY, activityId], () => GetActivity(activityId));
};

export default useGetActivity;
