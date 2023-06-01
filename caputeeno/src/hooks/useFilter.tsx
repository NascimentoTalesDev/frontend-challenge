import { FilterContext } from '@/context/filter-context';
import { useContext } from 'react';

const useFilter = () => {
    return useContext(FilterContext)
};

export default useFilter;