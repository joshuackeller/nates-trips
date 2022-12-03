export interface Destination {
  id: string;
  name: string;
  latitude: number;
  longitute: number;
  activities: Activity[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  destinationId: string;
  destinationName: string;
  longitude: string;
  latitude: string;
  url: string;
}

export interface Picture {
  id: string;
  url: string;
  activityId: string;
  activity: Activity;
}
