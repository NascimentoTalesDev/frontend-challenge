"use client"

import styled from "styled-components";

import { Saira_Stencil_One } from 'next/font/google'

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
    font-size: 50px;
    color: var(--logo-color);
`

export function Header(props : HeaderProps) {
    
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>Capoteeno</Logo>
        </TagHeader>
    )
}