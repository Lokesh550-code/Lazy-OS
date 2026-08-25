import { useContext } from "react";
import { WindowContext } from "../context/WindowProvider";

export const useWindow = () => {
  if (!useContext(WindowContext)) {
    throw new Error("useWindows must be used within WindowProvider");
  }
  return useContext(WindowContext);
};
