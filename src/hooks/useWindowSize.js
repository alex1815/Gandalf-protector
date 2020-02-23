//@flow

import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState<Array<number>>([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () =>
      setSize([window.innerWidth ?? 0, window.innerHeight ?? 0]);

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export default useWindowSize;
