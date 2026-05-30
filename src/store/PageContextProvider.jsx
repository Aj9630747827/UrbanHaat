import { createContext, useState } from "react";

export const PageContext = createContext({
  page: "home",
  setPage: () => {},
});
function PageContextProvider({ children }) {
  const [page, setPage] = useState("home");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
export default PageContextProvider;
