//@ts-nocheck
'use Client'

import { useContext, useState } from "react";
// Create context for search and filter state
const SearchContext = createContext();
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};
export default function AppContext({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  return (
    <SearchContext.Provider value={{ searchTerm, categoryFilter, setSearchTerm, setCategoryFilter }}>
      {children}
    </SearchContext.Provider>
  );
}
