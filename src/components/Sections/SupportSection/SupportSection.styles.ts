import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--color-grey-100);
  padding: 8rem 2rem;
  color: var(--color-grey-900);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.5rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: white;
`;

export const Textarea = styled.textarea`
  padding: 1rem;
  font-size: 1.5rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: white;
`;

export const SubmitButton = styled.button`
  padding: 1rem 1.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
  background-color: var(--color-brand-600);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

export const FAQColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const QuestionBlock = styled.div`
  background-color: var(--color-grey-0);
  padding: 1.6rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
`;

export const Question = styled.h3`
  font-size: 1.6rem;
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 0.6rem;
`;

export const Answer = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;
