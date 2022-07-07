import React, { useRef, useEffect } from "react";
import { Repeat } from "styled-icons/material";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { AvatarGenerator } from 'random-avatar-generator';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const generator = new AvatarGenerator();

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
                        author="Fulano"
                        date="05/07/2022"
                        content="Eai, bora jogar?"
                        img={generator.generateRandomAvatar()}
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
                    img="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
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