import React from "react";

import { Container, HastagIcon, Title, Separador, Description } from './styles';


const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HastagIcon />

            <Title>chat-livre</Title>

            <Separador />

            <Description>Canal aberto para conversas</Description>
        </Container>
        )
};

export default ChannelInfo;