import dayjs from "dayjs";

export const ForCard = ({ info }) => {
  const { icon } = info.day.condition;
  const { maxtemp_c } = info.day;
  const date = info ? dayjs(info.date).format("ddd") : "";

  return (
    <div>
      <div className="flex flex-col hover:-translate-y-3 duration-150 hover:scale-300 ease-in-out delay-150 items-center space-y-1 hover:bg-gray-300 rounded p-2">
        <span>{date}</span>
        <img className="hover:animate-bounce" src={icon} alt="" />
        <span>{maxtemp_c}°</span>
      </div>
    </div>
  );
};
