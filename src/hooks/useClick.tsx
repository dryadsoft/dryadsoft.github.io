import { useEffect, useRef } from "react";

export const useClick = (onClick: () => void) => {
  const element = useRef<HTMLDivElement>(null);

  const setOnclick = () => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  };
  useEffect(setOnclick, []);
  return element;
};
