import { useCallback, useState } from "react";

const useToggle = (initialValue?: boolean) => {
  const [state, setState] = useState(initialValue || false);
  const toggle = useCallback(() => {
    setState((v) => !v);
  }, []);
  return [state, toggle];
};

export default useToggle;
