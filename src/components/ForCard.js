import dayjs from "dayjs";

export const ForCard = ({ info }) => {
  const { icon, text } = info.day.condition;
  const { maxtemp_c } = info.day;
  const date = info ? dayjs(info.date).format("ddd") : "";

  return (
    <div class="flex flex-col items-center space-y-1 hover:bg-gray-300 rounded p-2">
      <span>{date}</span>
      <img src={icon} alt="" />
      <span>{maxtemp_c}°</span>
    </div>
  );
};
