import { spawn } from "child_process";
import React from "react";
import { AvatarGenerator } from 'random-avatar-generator';

import { Container, Role, User, Avatar } from './styles';

const generator = new AvatarGenerator();

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} >
                <img src={isBot ? 'https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad' : generator.generateRandomAvatar()} alt="Foto do perfil" />
            </Avatar>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role> 
            <UserRow nickname="Beltrano" />

            <Role>Offline - 23</Role> 
            <UserRow nickname="Wendel Souza" isBot />

            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
        </Container>
        )
};

export default UserList;