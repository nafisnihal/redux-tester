import { useAppSelector } from "@app/hooks";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const SideBySide = () => {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <div className="flex gap-5  mt-5">
      <LeftSide count={count} />
      <RightSide count={count} />
    </div>
  );
};

export default SideBySide;
