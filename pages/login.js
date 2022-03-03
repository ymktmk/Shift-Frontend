import React from 'react'
import tw from "tailwind-styled-components"
import styled from 'styled-components';

const Login = () => {
    return (
    <Wrapper>
        <SectionLeft></SectionLeft>
        <SectionRight>
            <AppImage alt="仮の画像だよ" src="https://1.bp.blogspot.com/-HkohqHrBbJI/VN3vDch8otI/AAAAAAAAris/0NgCSPANHss/s800/hinamatsuri_odairi_ohina.png"/>
            <LoginContainer>
                <InputEmailAddress>

                </InputEmailAddress>
                <InputPassword>

                </InputPassword>
                <LoginButton>

                </LoginButton>
            </LoginContainer>
            <Border>

            </Border>
            <GoogleLoginButton>

            </GoogleLoginButton>
        </SectionRight>
    </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    display: flex;
`
const SectionLeft = styled.div``

const SectionRight = styled.div`
    display: flex;
    flex-direction: column;
`

const AppImage = styled.img``

const LoginContainer = styled.div`

`

const InputEmailAddress = styled.input``

const InputPassword = styled.input``

const LoginButton = styled.button``

const Border = styled.div``

const GoogleLoginButton = styled.button``