import styled from "styled-components";

export const TabsContainer = styled.div`
  padding: 3rem;
  background-color: var(--color-grey-50);
`;

export const TabTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-grey-800);
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const StyledTabList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
`;

export const StyledTab = styled.button<{ selected: boolean }>`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${({ selected }) => (selected ? "600" : "400")};
  border: none;
  background: ${({ selected }) =>
    selected ? "var(--color-brand-600)" : "transparent"};
  color: ${({ selected }) => (selected ? "#fff" : "var(--color-grey-700)")};
  border-radius: 8px 8px 0 0;
  margin-bottom: -2px;
`;

export const TabContent = styled.div`
  padding: 1.5rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  color: var(--color-grey-600);
  border-radius: 8px;
`;
