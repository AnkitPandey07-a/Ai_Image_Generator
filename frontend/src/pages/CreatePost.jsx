import React from 'react';
import styled from 'styled-components'; 
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';



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
    padding: 7px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  height: fit-content;
  
  max-width: 1200px;
  gap: 30px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;


const CreatePost = () => { 
  const [generateImageLoading, setGenerateImageLoading] = React.useState(false);
  const [createPostLoading, setCreatePostLoading] = React.useState(false);


  const [post, setPost] = React.useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return <Container>
    <Wrapper>
      <GenerateImageForm
      post={post} 
      setPost={setPost} 
      createPostLoading={createPostLoading}
      setGenerateImageLoading={setGenerateImageLoading}
      generateImageLoading={generateImageLoading}
      setCreatePostLoading={setCreatePostLoading}/>
      <GeneratedImageCard src={post?.photo} loading={generateImageLoading}/>
    </Wrapper>
    </Container>
 }; 

export default CreatePost;