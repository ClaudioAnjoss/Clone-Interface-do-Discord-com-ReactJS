import React from 'react';

import Logo from '../../assets/Logo.svg';
import AvatarServer from '../../assets/Avatar.gif';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    img?: boolean;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    img
}) => {
    return (
        <Button 
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="Rocketseat" />}
            {img && <img src={AvatarServer} alt="Foto do servidor" />}
        </Button>
    )
};

export default ServerButton;
