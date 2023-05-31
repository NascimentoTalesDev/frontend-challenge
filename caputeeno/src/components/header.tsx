"use client"

import styled from "styled-components";
import { useEffect } from 'react'
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})

interface HeaderProps {

}

const TagHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`
const Logo = styled.a`
    font-size: 40px;
    color: var(--logo-color);
    font-weight: 400;
    line-height: 150%;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

export function Header(props : HeaderProps) {

    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <Container>
                <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
                <CartControl/>
            </Container>
        </TagHeader>
    )
}