import Link from "next/link";
import useGetActivity from "../../../context/queries/activities/useGetActivity";
import Image from "next/image";
import GoogleMapReact from "google-map-react";
import { MapPinIcon } from "@heroicons/react/20/solid";

const API_KEY = "AIzaSyAUpiiwLuNNeYPSL5gqgoxMuXIwAgk3DP0";

interface SingleActivityProps {
  activityId: string;
}

const SingleActivityPage = ({ activityId }: SingleActivityProps) => {
  const { data: activity, isLoading } = useGetActivity(activityId);

  if (isLoading)
    return <div className="rounded-xl bg-gray-200 animate-pulse h-96" />;

  return (
    <div className="py-4 space-y-4">
      <Link href="/" className="text-sm font-bold">
        &larr; Go Back
      </Link>
      <div className="text-2xl font-black">{activity?.name}</div>
      <div className="flex gap-4">
        <div className="relative h-80 w-1/2">
          {activity && (
            <Image
              src={activity?.url}
              fill
              alt={activity?.description}
              className="object-contain"
            />
          )}
        </div>
        <div>
          {activity && (
            <GoogleMap
              latitude={activity?.latitude}
              longitutde={activity?.longitude}
            />
          )}
        </div>
      </div>
      <div>{activity?.description}</div>
    </div>
  );
};

interface GoogleMapProps {
  longitutde: string;
  latitude: string;
}

const GoogleMap = ({ longitutde, latitude }: GoogleMapProps) => {
  const mapProps = {
    center: {
      lat: parseFloat(latitude),
      lng: parseFloat(longitutde),
    },
    zoom: 8,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={mapProps.center}
        defaultZoom={mapProps.zoom}
      >
        <MapPinComponent
          lat={parseFloat(latitude)}
          lng={parseFloat(longitutde)}
        />
      </GoogleMapReact>
    </div>
  );
};

interface MapPinComponentProps {
  lat: number;
  lng: number;
}

const MapPinComponent = ({ lat, lng }: MapPinComponentProps) => {
  return <MapPinIcon className="h-8 text-red-500" />;
};

export default SingleActivityPage;
