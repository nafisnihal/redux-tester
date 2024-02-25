import { useAppDispatch } from "@app/hooks";
import SideBySide from "@components/SideBySide";
import { amountAdded, incremented } from "@features/counter/counterSlice";

function App() {
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleAmountAdded = () => {
    dispatch(amountAdded(5));
  };

  return (
    <div className="bg-black h-screen text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={handleIncrement}
          className=" p-2 bg-yellow-50 rounded text-black"
        >
          To increase +1
        </button>
        <button
          onClick={handleAmountAdded}
          className=" p-2 bg-yellow-50 rounded text-black"
        >
          To increase +5
        </button>
      </div>
      <SideBySide />
    </div>
  );
}

export default App;