"use client"
import { FilterTypeByPriority } from '@/types/filter-types-by-priority';
import { FilterType }from '../types/filter-types';
import { ReactNode, createContext, useState } from 'react';

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: FilterTypeByPriority.NEWS,

    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
    setTypeByPriority: (value: FilterTypeByPriority) => {}
})

interface ProviderProps{
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps ){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setTypeByPriority] = useState(FilterTypeByPriority.NEWS)

    return(
        <FilterContext.Provider value={{search, page, type, priority, setSearch, setPage, setType, setTypeByPriority}}>
            {children}
        </FilterContext.Provider>
    )
};