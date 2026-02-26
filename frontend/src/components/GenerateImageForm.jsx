import React from 'react'
import styled from 'styled-components';
import Button from './button';
import Textinput from './Textinput';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';


const Form = styled.div`
 flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap:4%;
  justify-content: center;
`;


const Top = styled.div`
 display: flex;
  flex-direction: column;
  gap: 10px;

`;

const Title = styled.div`
 font-size: 35px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};

`;

const Desc = styled.div`
 font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;


const Action = styled.div`
 display: flex;
  flex: 1;
  gap: 10px;
    
    
`;


const GenerateImageForm = ({
      post,
      setPost,
      createPostLoading,
      setGenerateImageLoading,
      generateImageLoading,
      setCreatePostLoading
}) => {
  const generateImageFun = () => {
    setGenerateImageLoading (true);
  };
  
  const createPostFun = () => {
    setCreatePostLoading (true);
  };
  return <Form>
    <Top>
        <Title>Generate Image With Prompt</Title>
        <Desc>Write Your Prompt According to the Image You want to Generate !</Desc>
    </Top>
    <Body>
        <Textinput
        label="Author"
         placeholder="Enter Your Name..."
         name="name"
         value={post.name}
         handelChange={(e)=>setPost({...post, name: e.target.value})}
         />
        <Textinput 
        label="Image Prompt" 
        placeholder="Enter Your detailed Prompt about the image..." 
        name="prompt"
         rows="8"
         textArea
         value={post.prompt}
         handelChange={(e)=>setPost({...post,prompt: e.target.value})}
          />
         ** You Can post the AI Generated Image to the Community **

    </Body>
    <Action>
        <Button 
        text="Generate Image"
        flex lefticon={<AutoAwesome />} 
        
        isLoading={generateImageLoading}
        isDisabled={post.prompt === ""   }
        onClick={()=> generateImageFun()}
        />
        <Button 
        text="Post Image" 
        flex Type="secondary"
        lefticon={<CreateRounded />} 
        isLoading={createPostLoading}
        isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
        onClick={()=> createPostFun()}
        />
        
    </Action>

  </Form> ;
};

export default GenerateImageForm;