import {
  EachPostLi,
  FooterDiv,
  FooterBig,
  FooterSmall,
  HeaderDiv,
  LoadingDiv,
  LoadingImg,
  Main,
  MediaDiv,
  PagenumberDiv,
  PagingSection,
  PostLink,
  PostListDiv,
  PostRepl,
  PostSection,
  PostTitle,
  PostTitleDiv,
  SlogunBig,
  SlogunSection,
  SlogunSmall,
  SubHeaderDiv,
  TitleBig,
  TitleLogoDiv,
  TitleSmall,
} from "./styledComponent";
//작성한 컴포넌트는 모드 import 되어있다.
import {
  faSun,
  faMoon,
  faArrowsRotate,
  faPenToSquare,
  faLocationPin,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
//fortawesome 다양한 아이콘들이 import 되어져있다.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import loadingIcon from "./loading.svg";
//App 뼈대
function App() {
  //다크모드의 하기위한 함수
  const darkMode = false;
  //로딩 상태를 구분할수있는 변수
  const loading = false;
  //post가 있는지 없는 구분 함수
  const isPost = true;
  return (
    <>
      <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <HeaderDiv>
            <TitleLogoDiv>
              <TitleBig>멋사</TitleBig>
              <TitleSmall>익명의게시판</TitleSmall>
            </TitleLogoDiv>
            <SubHeaderDiv>
              {darkMode ? (
                <div>
                  <FontAwesomeIcon icon={faMoon} />
                </div>
              ) : (
                <div>
                  <FontAwesomeIcon icon={faSun} />
                </div>
              )}
            </SubHeaderDiv>
          </HeaderDiv>
          <Main>
            <SlogunSection>
              <SlogunBig>HACK YOUR LIFE</SlogunBig>
              <SlogunSmall>내 아이디어를 내 손으로 실현한다.</SlogunSmall>
            </SlogunSection>
            <PostSection>
              <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} />
                <PostTitle>익명계시판</PostTitle>
                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
              </PostTitleDiv>
              {loading ? (
                <LoadingDiv>
                  <LoadingImg src={loadingIcon}></LoadingImg>
                </LoadingDiv>
              ) : isPost ? (
                <LoadingDiv>기록된 글이 없습니다.</LoadingDiv>
              ) : (
                <div>
                  <ul>
                    <EachPostLi>
                      <div>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <PostLink>서강확보, 시사 N 대학기지상 취재</PostLink>
                      </div>
                      <PostRepl>[35]</PostRepl>
                    </EachPostLi>
                  </ul>
                </div>
              )}
              <PostListDiv></PostListDiv>
            </PostSection>
            <PagingSection>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowLeft} />
              </PagenumberDiv>
              <PagenumberDiv>2</PagenumberDiv>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowRight} />
              </PagenumberDiv>
            </PagingSection>
          </Main>
          <FooterDiv>
            <FontAwesomeIcon icon={faReact} />
            <FooterBig>for react study</FooterBig>
            <FooterSmall>2022. by gyu</FooterSmall>
          </FooterDiv>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
