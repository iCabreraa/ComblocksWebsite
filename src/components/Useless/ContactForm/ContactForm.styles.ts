import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 3rem;
  background-color: #f9fafb;
`;

export const ContactTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1f2937;
`;

export const Form = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
`;

export const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #1e40af;
  }
`;

export const Error = styled.span`
  color: #dc2626;
  font-size: 0.9rem;
`;
