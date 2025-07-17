//@ts-nocheck
'use client'
import { createContext, useContext, useState } from "react";
import SideBar from "@/component/SideBar";
import { Switch, Theme } from "@radix-ui/themes";

// Create context for search and filter state
const SearchContext = createContext();
export const FavContext = createContext();

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within SearchProvider');
    }
    return context;
};

export default function layout({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [isFavourite, setIsFavourite] = useState([]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleCategoryFilter = (category) => {
        setCategoryFilter(category);
    };

    return (
        <FavContext.Provider value={{isFavourite,setIsFavourite}}>

            <SearchContext.Provider value={{ searchTerm, categoryFilter, setSearchTerm, setCategoryFilter }}>
                <Theme className="flex min-h-screen">
                    {/* Fixed Sidebar */}
                    <div className="w-[250px] h-screen  sticky left-0 top-0 ">
                        <SideBar
                            onSearch={handleSearch}
                            onCategoryFilter={handleCategoryFilter}
                        />
                    </div>
                    {/* Main Content Area */}
                    <div className="flex-1  min-h-screen">
                        {children}
                    </div>
                </Theme>
            </SearchContext.Provider>
        </FavContext.Provider>
    );
}
