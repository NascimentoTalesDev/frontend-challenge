import { useLocalStorage } from "../hooks/useLocalStorage";
import CartIcon from "./cart-icon";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    margin-left: 20px;

`
const CartCount = styled.span`
    position: absolute;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    right: -5px;
    font-size: 10px;
    bottom: 0;
    background-color: var(--delete-color);
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items')
    return(
        <Container>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}
