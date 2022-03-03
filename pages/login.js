import React from 'react'
import tw from "tailwind-styled-components"
import styled from 'styled-components';

const Login = () => {
    return (
    <Wrapper>
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
    </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    h-screen
    flex
    flex-col
`

const AppImage = tw.img``

const LoginContainer = tw.div`

`

const InputEmailAddress = tw.input``

const InputPassword = tw.input``

const LoginButton = tw.button``

const Border = tw.div``

const GoogleLoginButton = tw.button``