import { useRouter } from "next/router";
import SingleActivityPage from "../../src/pages/Activities/Single/SingleActivityPage";

const Page = () => {
  const {
    query: { activityId },
  } = useRouter();

  if (typeof activityId == "string") {
    return <SingleActivityPage activityId={activityId} />;
  } else {
    return null;
  }
};

export default Page;
