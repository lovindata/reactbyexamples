import { useState } from "react";

// Custom hook 👇
// ⚠️ Need to start as `use<Something>`
// ⚠️ Need to be initalized as global of a component
// Can return an object or array for choosing variable name (Please check at `return` object)
export const useCount = (
  initialCount: number = 0
): {
  currentCount: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
} => {
  // Define
  const [count, setCount] = useState<number>(initialCount);

  // Available variables from the hook
  const currentCount: number = count;
  const increaseCount = (): void => setCount(count + 1);
  const decreaseCount = (): void => setCount(count - 1);
  const resetCount = (): void => setCount(initialCount);

  // Return variables from the hook
  return { currentCount, increaseCount, decreaseCount, resetCount }; // 👈 Cannot allow direct rename the variable but with `:` can
};
