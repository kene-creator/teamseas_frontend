import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  from: number;
  to: number;
}

export function Counter({ from, to }: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    if (node) {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = parseInt(value.toFixed(0)).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [from, to]);

  return <div ref={nodeRef} />;
}

export default function App() {
  return <Counter from={0} to={100} />;
}
