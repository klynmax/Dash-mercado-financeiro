import styled from 'styled-components';
import Dolar from './dolar'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Dolar />
}
