import React, { useRef, useEffect} from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef])

    return (
        <Container>
            <Messages ref={messageRef}>

                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                    author="Claudio Anjos"
                    date="05/07/2022"
                    content="Eai beleza?"
                />
                ))}                

                <ChannelMessage
                    author="Kelvin Andrade"
                    date="05/07/2022"
                    content={
                        <>
                            <Mention>@Claudio Anjos</Mention>, Me carrega no Valorant 
                        </>
                    }
                    hasMention
                    isBot
                />


            </Messages>

            <InputWrapper>
                <Input placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;