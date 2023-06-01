import styled from "styled-components";
import ItemLi from "./Item-li";
import useFilter from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";

interface FilterByTypeProps {}

const UlItems = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    
`

function FilterByType() {
    const {type, setType } = useFilter()
const handleChangeType = (value: FilterType) => {
    setType(value)
}

    return (
        <UlItems>
            <ItemLi selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>Todos os Produtos</ItemLi>
            <ItemLi selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>Camisetas</ItemLi>
            <ItemLi selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>Canecas</ItemLi>
        </UlItems>
    );
}

export default FilterByType;