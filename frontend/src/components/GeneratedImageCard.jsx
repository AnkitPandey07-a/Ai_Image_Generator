import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  flex: 1;
  padding: 100px;
  min-height: 300px;
  border: 3px dashed ${({ theme }) => theme.yellow + 90};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    `;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black + 50};
  border-radius: 25px;
  object-fit: cover;

`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            sx={{ color: "inherit", width: "70px", height: "10px" }}
          />
          Generating Your Image . . . 
        </>
      ) :  (
        <>{src ? <Image src={src} /> : <>Write a Prompt to Generate Image</>}</>
      )}
    </Container>
  );
};

export default GeneratedImageCard;