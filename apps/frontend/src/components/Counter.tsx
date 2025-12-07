import { useState } from "react";
import { Button } from "../components/ui/button";
// import "./Counter.css";

export default function Counter({
  children,
  count: initialCount,
}: {
  children: JSX.Element;
  count: number;
}) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="counter">
        <Button variant="outline" onClick={subtract}>
          -
        </Button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
