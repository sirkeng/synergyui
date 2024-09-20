import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import IconSearch from "../../assets/images/icon-search.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  /**
   * If true, the button will display a search icon before the text
   */
  search?: boolean;
}

const StyledButton = styled.button`
  padding: 0.75rem 2.5rem;
  background-color: #004c85;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #003f6e;
  }

  &:disabled {
    background-color: #b0b0b0;
    cursor: not-allowed;
  }

  /* Adding transition for smoother hover effect */
  transition: background-color 0.3s ease;
`;

const SearchIcon = styled.img`
  margin-right: 0.5rem; /* Space between icon and text */
  width: 16px;
  height: 16px;
`;

export function Button({
  children,
  type = "button",
  search = false,
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <StyledButton type={type} {...rest}>
      {search && <SearchIcon src={IconSearch} alt="Search Icon" />}
      {children}
    </StyledButton>
  );
}
