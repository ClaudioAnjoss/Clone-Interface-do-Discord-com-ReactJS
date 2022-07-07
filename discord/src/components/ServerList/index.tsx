import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications img />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton img />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton mentions={72} img />
            <ServerButton />
            <ServerButton />
        </Container>
    )
};

export default ServerList;