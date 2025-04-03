import styled from "styled-components";

export const PeekSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #f8f9fa;
`;

export const PeekTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
