import styled from "styled-components";

export const FAQSection = styled.section`
  padding: 3rem 2rem;
  background-color: #f3f4f6;
`;

export const FAQTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`;

export const Question = styled.div`
  margin-bottom: 1rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const QuestionHeader = styled.button`
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }
`;

export const Answer = styled.div`
  padding: 0 1rem 1rem;
  font-size: 1rem;
  color: #4b5563;
`;
