import Link from "next/link";
import useGetActivities from "../../../context/queries/activities/useGetActivities";
import Image from "next/image";

const AllActivitiesPage = () => {
  const { data: activities } = useGetActivities();
  return (
    <div>
      <div className="text-3xl font-black">Adventures</div>
      <div>
        {activities &&
          activities?.map((activity) => (
            <Link href={`/activity/${activity.id}`} key={activity.id}>
              <div className="flex gap-2 h-36  my-6 shadow hover:shadow-lg rounded-lg transition overflow-hidden">
                <div className="relative h-26 w-48">
                  <Image
                    src={activity?.url}
                    // height={200}
                    // width={200}
                    fill
                    className="object-cover absolute"
                    alt="pictures"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="font-black text-xl">{activity.name}</div>
                    <div className="text-sm text-gray-700  max-w-lg truncate">
                      {activity.description}
                    </div>
                  </div>
                  <div className="text-nt-pink font-bold">
                    Learn More &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllActivitiesPage;
