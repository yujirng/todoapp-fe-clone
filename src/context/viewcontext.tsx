import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type View = {
  view: string;
  // setView: Dispatch<SetStateAction<string>>;
  updateView: (view: string) => void;
};

export const ViewContext = createContext<View | undefined>(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  console.log("view state is call");
  const [view, setView] = useState("home");

  const updateView = (view: string) => {
    setView(view);
  };

  return (
    <ViewContext.Provider value={{ view, updateView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useViewContext must be used within a ViewProvider");
  }
  return context;
};
