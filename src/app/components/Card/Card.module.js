import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  padding: 10px;
  background-color: #cccccc;
  text-align: center;
  border-radius: 12px; //12px
  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 8px 2px;
  &:hover {
    transform: scale(1.1); /* Збільшення розміру при наведенні */
    transition: transform 0.3s ease; /* Плавний перехід */
  }
`;
