import styled from "styled-components";
import FilterByType from "./filter-by-type";
import FilterByPriority from "./filter-by-priority";

interface FilterBarProps {}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

function FilterBar(props: FilterBarProps) {
    return (
        <Container>
            <FilterByType/>
            <FilterByPriority/>
        </Container>
    );
}

export default FilterBar;