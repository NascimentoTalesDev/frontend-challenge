import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import SearchIcon from "../components/search-icon"

const PrimaryInput = styled.input`
    width: 352px;
    padding: 10px 16px;
    font-size: 14px;
    border: none;
    font-weight: 400;
    color: var(--text-dark);
    line-height: 22px;
    background-color: var(--bg-secondary);
    :focus{
        outline: none;
    }
`

const InputContainer = styled.div`
    background-color: var(--bg-secondary);
    display: flex;
    padding-right: 10px;
    align-items: center;  
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function PrimaryInputWSearchIcon(props: InputProps) {
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon />
        </InputContainer>
    )
}
