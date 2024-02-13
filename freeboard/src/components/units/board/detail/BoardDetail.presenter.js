import { Avatar, AvatarWrapper, Body, BottomWrapper, Button, CardWrapper, Contents, CreatedAt, Header, Info, Title, Wrapper, Writer } from "./BoardDetail.styles";
export default function BoardDetailUI(props) {
    return (
        <Wrapper>
        <CardWrapper>
          <Header>
            <AvatarWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer>{props.writer}</Writer>
                <CreatedAt>
                  {props.createdAt}
                </CreatedAt>
              </Info>
            </AvatarWrapper>
          </Header>
          <Body>
            <Title>{props.title}</Title>
            <Contents>{props.contents}</Contents>
          </Body>
        </CardWrapper>
        <BottomWrapper>
          <Button>목록으로</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </BottomWrapper>
      </Wrapper>
    )
}