import styled from "styled-components";

interface ItemProps{
    selected: boolean,
    option: boolean,
    size: string;
    margin: string,
    textTransform: string
}

const ItemLi = styled.li<ItemProps>`
    list-style: none;
    cursor: pointer;
    margin: ${props => props.margin ? props.margin : '0px'};
    font-size: ${props => props.size ? props.size : '12px'};
    font-weight: ${props => props.selected ? '600' : '400'};
    color: var(--text-dark); 
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
    text-transform: ${props => props.textTransform ? props.textTransform : 'lowercase'};
`

export default ItemLi;