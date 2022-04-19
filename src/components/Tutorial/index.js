import React from "react";
import { Wrapper, Main, H1, P, Container, Input, FormArea, InputInfo, Button} from "./style";

const Tutorial = () => {
    return(
        <Wrapper>
            <Main>
                <H1>Tutorials</H1>
                <P>Send me your name and your email and I'll send you tutorials!</P>
                <Container>
                    <FormArea>
                        <InputInfo>
                        <p>Name: </p>
                        <Input/>
                        </InputInfo>

                        <InputInfo>
                        <p>Email:</p>
                        <Input style={{ marginLeft: 5}}/>
                        </InputInfo>

                        <Button>SEND</Button>
                    </FormArea>
                </Container>
            </Main>
        </Wrapper>
    )
};

export default Tutorial;