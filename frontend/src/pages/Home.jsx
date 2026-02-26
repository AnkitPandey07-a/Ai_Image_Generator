import React from 'react';
import styled from 'styled-components'; 
import SearchBar from '../components/SearchBar';
import ImageCard from "../components/ImageCard";


const Container = styled.div`
  padding: 30px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;
const Headline = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  display: flex;
  flex-direction: column; 
  @media (max-width: 600px) {
    font-size: 25px;
  }
}`;
const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => { 
  const item = {
    photo:"https://imgs.search.brave.com/aftAiCHm3ydF3yZh4VpxYIMMrQvd3vgqmidbm_tXKp4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/anN0b3Iub3JnL2Fz/c2V0cy9sb25nLWxp/dmVkXzIwMjAxMDA2/L2ltYWdlcy9uZXct/YXZlbnVlcy9hcnRz/dG9yLWltYWdlcy5q/cGc_bGFzdFVwZGF0/ZWQ9MjAyNTA3Mjk",
    author:"Ankit",
    prompt:"A beautiful Eye of the ocean",
  }
  return <Container>
    <Headline>
      Welcome to AImage-Generator
      <Span>Generated With AI</Span>
    </Headline>
    <SearchBar/>
    <Wrapper>
      <CardWrapper>
        <ImageCard item={item} />
        <ImageCard item={item} />
        <ImageCard item={item} />
        <ImageCard item={item} />
        <ImageCard item={item} />
        <ImageCard item={item} />
        <ImageCard item={item} />
        <ImageCard item={item} />
      </CardWrapper>

    </Wrapper>
    </Container>



 };
export default Home;