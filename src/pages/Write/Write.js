import React, { useState } from "react";
import { createPost } from "../../utils/api/board";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "./style"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const StyledReactQuill = styled(ReactQuill)`
  .quill{
    background-color: aliceblue;
    position: relative;
  }

  .ql-toolbar {
    height: 100px;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .ql-formats {
    button {
      font-size: 20px; 
    }
  }

  .ql-container{
    margin-top: 200px;
    background-color: aliceblue;
  }

`;


const modules = {
  toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        // [{ 'font': [] }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
        ['image', 'video'],
        ['clean']  
      ],
  }
}

const Write = () => {
  const { boardID } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    userNickname: "",
    description: "",
  });

  const handleWrite = async () => {
    try {
      const data = {
        tableInfoId: boardID,
        ...formData,
      };
      const createdPost = await createPost(data);
      console.log("게시물 작성 완료:", createdPost);

      // navigate(`/${boardID}`);
    } catch (error) {
      console.log("게시물 작성 실패:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ position: "relative"}}>
      <S.PostBox>
        
          <div>
            {/* <S.Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="제목"
            />
            <S.Input
              type="text"
              name="userNickname"
              value={formData.userNickname}
              onChange={handleInputChange}
              placeholder="작성자"
            /> */}
            {/* <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="본문"
            ></Textarea> */}

            <StyledReactQuill
              name="description"
              value={formData.description}
              onChange={(value) =>
                handleInputChange({ target: { name: "description", value } })
              }
              placeholder="본문"
              modules={modules}
            />

            <S.Button onClick={handleWrite}>작성</S.Button>
          </div>
        
      </S.PostBox>
    </div>
  );
};

export default Write;
