import React from "react";

import { Container, Avatar, Message, Header, Content } from './styles';
import Avatar_Profile from '../../assets/Avatar.gif';

export { Mention } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
    img?: string;
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot,
    img
}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}>
                <img src={img ? img : Avatar_Profile} alt="Foto do usuario" />
            </Avatar>

            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>
                <Content>
                    {content}
                </Content>
            </Message>
        </Container>
        )
};

export default ChannelMessage;