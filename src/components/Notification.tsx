import { twMerge } from "tailwind-merge";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5",
        className
      )}
    >
      <img
        src={notification1}
        alt="Notification image"
        width={62}
        height={62}
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  alt={item}
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          <span className="block body-2 text-n-13">1m ago</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
