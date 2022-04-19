import React from "react";
import { Wrapper, Main, H1, P, Image, Container, Box, Image2, Image3 } from "./style";

const Content = () => {
    return(
        <Wrapper>
            <Main>
                <H1>The Rubik's cube</H1>
                <P>A complete page to you understand everything about the incredible world of the Rubik's Cube, from zero to expert!</P>
                <Container>
                    <Box>
                        <Image src="https://i0.wp.com/cubovelocidade.com.br/wp-content/uploads/2020/08/91F99DCA-554A-49B3-B17C-6794A093D2BB-2.jpg" />
                        <H1>Oficial Shop</H1>
                    </Box>

                    <Box>
                        <Image2 src="https://i0.wp.com/cubovelocidade.com.br/wp-content/uploads/2020/09/tutoriais-cubo-magico-.jpg" />
                        <H1>Tutorials</H1>
                    </Box>

                    <Box>
                        <Image3 src="https://content.instructables.com/ORIG/FKE/W2VE/GTKH9WPX/FKEW2VEGTKH9WPX.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150" />
                        <H1>Know More</H1>
                    </Box>
                </Container>
            </Main>
        </Wrapper>
    )
};

export default Content;