import styled from "styled-components";

interface ItemProps{
    selected: boolean;
}

const ItemLi = styled.li<ItemProps>`
    list-style: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: ${props => props.selected ? '600' : '400'};
    color: var(--text-dark); 
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
    text-transform: uppercase;
`

export default ItemLi;