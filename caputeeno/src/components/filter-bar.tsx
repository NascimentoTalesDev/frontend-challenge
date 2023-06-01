import styled from "styled-components";
import FilterByType from "./filter-by-type";

interface FilterBarProps {}

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
`

function FilterBar(props: FilterBarProps) {
    return (
        <Container>
            <FilterByType/>
        </Container>
    );
}

export default FilterBar;