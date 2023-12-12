import { useParams, useSearchParams } from "react-router-dom";

const Call = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const hasVideo = searchParams.get("has_video");

  return <div>{hasVideo}</div>;
};

export default Call;
