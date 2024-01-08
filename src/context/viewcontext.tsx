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
  updateView: (view: string | number) => void;
};

export const ViewContext = createContext<View | undefined>(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState("today");

  const updateView = (view: string | number) => {
    if (typeof view === "string") setView(view);
    else setView("project_" + view);
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
