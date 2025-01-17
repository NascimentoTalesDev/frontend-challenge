import styled from "styled-components";
import ArrowDownIcon from "./arrow-down-icon";
import { useState } from "react";
import ItemLi from "./li-item";
import useFilter from "@/hooks/useFilter";
import { FilterTypeByPriority } from "@/types/filter-types-by-priority";

interface FilterByPriorityProps {}

const FilterContainer = styled.div`
    position: relative;
    width: 200px;
    left: 0;
    p{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`
const PriorityFilter = styled.ul`
    position: absolute;
    padding: 12px 16px;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    z-index: 1;
    font-size: 10px;
    width: 100%;
    
`

function FilterByPriority() {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(prev => !prev) 

    const {priority, setTypeByPriority} = useFilter()
    
    const handleUpdatePriority = (value: FilterTypeByPriority) => {
        setTypeByPriority(value)
        setIsOpen(false)
    }
    return (
        <FilterContainer>
            <p onClick={handleOpen}>
                Organizar por
                <ArrowDownIcon/>
            </p>
            {isOpen && 
                <PriorityFilter>
                    <ItemLi size="14px" margin="8px 0" onClick={() => handleUpdatePriority(FilterTypeByPriority.NEWS)} >Novidades</ItemLi>
                    <ItemLi size="14px" margin="8px 0" onClick={() => handleUpdatePriority(FilterTypeByPriority.BIGGEST_PRICE)}>Preço: maior menor</ItemLi>
                    <ItemLi size="14px" margin="8px 0" onClick={() => handleUpdatePriority(FilterTypeByPriority.MINOR_PRICE)}>Preço: menor maior</ItemLi>
                    <ItemLi size="14px" margin="8px 0" onClick={() => handleUpdatePriority(FilterTypeByPriority.POPULARITY)}>Mais vendidos</ItemLi>
                </PriorityFilter>}
        
        </FilterContainer>
    );
}

export default FilterByPriority;