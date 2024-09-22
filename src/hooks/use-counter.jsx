import { useEffect, useState } from "react";

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount || 0);
  const increment = () => {
    setCount(count + 1);
  };
  const clearCounter = () => {
    setCount(0);
  };
  useEffect(() => {
    console.log(count);
  }, [count]);
  return { count, increment, clearCounter };
}
