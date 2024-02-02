import {useState} from 'react' 
import {
Glass, Wrapper,Glassgroup,Wrapper__header,Title,Profile,Photo,Name,Next,Wrapper__category,
Category,Main,Wrapper__title,DivideLine,Wrapper__body,Number_Label,Group,Title_Label, Arrow,
Set,Wrapper__menu,Menu,Icon,Menu_Label
} from "../../styles/section04"

export default function section04QuizPage() {

        return (
            <Wrapper>
                <Wrapper__title>
                    <Glassgroup>
                        <Glass src="/glass.png"/>
                    </Glassgroup>
                    <Wrapper__header>
                        <Title>마이</Title>
                        <Profile>
                            <Photo src="/profile.png"></Photo>
                            <Name>임정아</Name>
                            <Next src="/arrow_left.png"></Next>
                        </Profile>
                    </Wrapper__header>
                    <Wrapper__category>
                        <Category>공지사항</Category>
                        <Category>이벤트</Category>
                        <Main>FAQ</Main>
                        <Category>Q&A</Category>
                    </Wrapper__category>
                </Wrapper__title>
                <DivideLine></DivideLine>
                <Wrapper__body>
                    <Group>
                        <Number_Label>Q.01</Number_Label>
                        <Set>
                            <Title_Label>리뷰 작성은 어떻게 하나요?</Title_Label>
                            <Arrow src="/arrow_down.png"></Arrow>
                        </Set>
                    </Group>
                    <Group>
                        <Number_Label>Q.02</Number_Label>
                        <Set>
                            <Title_Label>리뷰 수정/삭제는 어떻게 하나요?</Title_Label>
                            <Arrow src="/arrow_down.png"></Arrow>
                        </Set>
                    </Group>
                    <Group>
                        <Number_Label>Q.03</Number_Label>
                        <Set>
                            <Title_Label>아이디/비밀번호를 잊어버렸어요.</Title_Label>
                            <Arrow src="/arrow_down.png"></Arrow>
                        </Set>
                    </Group>
                    <Group>
                        <Number_Label>Q.04</Number_Label>
                        <Set>
                            <Title_Label>회원탈퇴를 하고싶어요.</Title_Label>
                            <Arrow src="/arrow_down.png"></Arrow>
                        </Set>
                    </Group>
                    <Group>
                        <Number_Label>Q.05</Number_Label>
                        <Set>
                            <Title_Label>출발지 설정은 어떻게 하나요?</Title_Label>
                            <Arrow src="/arrow_down.png"></Arrow>
                        </Set>
                    </Group>
                    <Group>
                        <Number_Label>Q.06</Number_Label>
                        <Set>
                            <Title_Label>비밀번호를 변경하고 싶어요.</Title_Label>
                            <Arrow src="/arrow_down.png"></Arrow>
                        </Set>
                    </Group>
                </Wrapper__body>
                <DivideLine></DivideLine>
                <Wrapper__menu>
                    <Menu>
                        <Icon src="/home.png" width="40px" height="41px"></Icon>
                        <Menu_Label>홈</Menu_Label>
                    </Menu>
                    <Menu>
                        <Icon src="/address.png" width="35px" height="43px"></Icon>
                        <Menu_Label>잇츠로드</Menu_Label>
                    </Menu>
                    <Menu>
                        <Icon src="/heart.png"width="40px" height="34px"></Icon>
                        <Menu_Label>마이찜</Menu_Label>
                    </Menu>
                    <Menu>
                        <Icon src="/person.png" width="38px" height="39px"></Icon>
                        <Menu_Label>마이</Menu_Label>
                    </Menu>
                </Wrapper__menu>
            </Wrapper>
    )
}