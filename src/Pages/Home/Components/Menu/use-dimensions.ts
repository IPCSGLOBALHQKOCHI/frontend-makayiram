import { useEffect, useRef } from "react";

// Define the types for the `ref` parameter and returned dimensions
export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]); // Add `ref` as a dependency to ensure it triggers the effect when it changes

  return dimensions.current;
};
