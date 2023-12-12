import { useParams, useSearchParams } from "react-router-dom";
import DailUp from "./DailUp";
import { useState } from "react";

const Call = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const hasVideo = searchParams.get("has_video");
  const [isCalling, setIsCalling] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center bg-slate-900  py-8 px-4 rounded-lg">
      <center>
        <DailUp isCalling={isCalling} setIsCalling={setIsCalling} />
      </center>
    </div>
  );
};

export default Call;
