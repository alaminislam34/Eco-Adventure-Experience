import moment from "moment";
import { useEffect, useState } from "react";

const MeetGoogle = () => {
  const [join, setJoin] = useState(false);
  useEffect(() => {
    const now = moment();
    const startTime = moment("10:00 am", "h:mm a");
    const endTime = moment("8:00 pm", "h:mm a");
    if (now.isBetween(startTime, endTime)) {
      setJoin(true);
    } else {
      setJoin(false);
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-full my-6 mx-4 md:my-8 md:mx-6 relative z-20">
      <div className="p-6 md:p-8 lg:p-12 shadow-[_0px_4px_10px_rgba(0, 0, 0, 0.5)] bg-gradient-to-b from-[#F8F8FF] to-blue-300 rounded-xl text-center space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold font-merienda">
          Meet with our expert team.
        </h1>
        <div>
          {join ? (
            <div className="">
              <a
                href="https://meet.google.com/landing"
                className="btn rounded-none bg-primary hover:bg-darkPri hover:shadow-[inset_2px_4px_10px_0px_#00000090] group"
              >
                <span className="group-hover:scale-95 ">Join Google Meet</span>
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-red-500 font-semibold py-1 px-2">Notice:</p>
              <p className="bg-warning py-2 font-medium">
                Meeting hours : <span className="italic"> 10:00 am </span> to{" "}
                <span className="italic">8:00 pm</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetGoogle;
