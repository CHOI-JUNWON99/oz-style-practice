import styled, { createGlobalStyle, css } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { useState } from "react";
import { mixinFlex, mixinFont } from "./styled/styled";

const StyleSection = styled.section`
  ${mixinFlex("undefined", "center", "center", "20px", "wrap")};
  padding: 20px 40px;
`;

// 수정된 Container 컴포넌트
const Container = styled.div`
  background-color: rgba(${(props) => props.$input1}, ${(props) => props.$input2}, ${(props) => props.$input3}, ${(props) => props.$input4});
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }

  body {
    background-color: #121212;
  }

  input {
    width: 90%;
  }

  ${(props) => props.DarkMode === true ? css`
    *{
      background-color: white;
      color:black;
    }
  `
  :""}
`;

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [DarkMode, setDarkMode] = useState(false);

  return (
    <>
      <GlobalStyle DarkMode={DarkMode}/>
      <main>
        <Header setDarkMode={setDarkMode}/>
        <Container $input1={input1} $input2={input2} $input3={input3} $input4={input4}>
          <StyleSection>
            {/* key 값을 고유하게 설정 */}
            {contents.map((el, index) => (
              <Content key={`${el.id}-${index}`} content={el} />
            ))}
            <input
              type="range"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              min={0}
              max={255}
            />
            <span>{input1}</span>
            <input
              type="range"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              min={0}
              max={255}
            />
            <span>{input2}</span>
            <input
              type="range"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              min={0}
              max={255}
            />
            <span>{input3}</span>
            <input
              type="range"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              min={0}
              step={0.01}
              max={1}
            />
            <span>{input4}</span>
          </StyleSection>
        </Container>
      </main>
    </>
  );
}

export default App;
