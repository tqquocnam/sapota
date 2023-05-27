import { createContext, ReactNode, useContext, useState } from "react";

const GlobalContext = createContext({
  parentCategory: "",
  setParentCategory: (category: string) => {},
  isContactProvided: true,
  setIsContactProvided: (isContactProvided: boolean) => {},
});

export function AppContext({ children }: { children: ReactNode }) {
  const [parentCategory, setParentCategory] = useState<string>("");
  const [isContactProvided, setIsContactProvided] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        parentCategory,
        setParentCategory,
        isContactProvided,
        setIsContactProvided,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useAppContext() {
  return useContext(GlobalContext);
}
