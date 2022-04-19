import React from "react";
import { Wrapper, Main, H1, P, Image, Container, Box, Image2, Image3 } from "./style";

const Me = () => {
    return(
        <Wrapper>
            <Main>
                <H1>Heitor Urbanetz</H1>
                <P>Web developer, Work with React and React Native and expert in solve problems</P>
                <Container>
                    <Box>
                        <Image src="https://avatars.githubusercontent.com/u/96732484?v=4" />
                        <H1>Meet me!</H1>
                    </Box>
                </Container>
            </Main>
        </Wrapper>
    )
};

export default Me;