import useCounter from "../hooks/use-counter";
import Button from "../components/Button";

const CounterPage = () => {
  const { count, increment, clearCounter } = useCounter();
  return (
    <div>
      <h1 className="text-2xl">Counter: {count}</h1>
      <div className="flex mt-6">
        <Button onClick={increment}>Increment ++</Button>
        <Button onClick={clearCounter} secondary>
          Clear{" "}
        </Button>
      </div>
    </div>
  );
};

export default CounterPage;
