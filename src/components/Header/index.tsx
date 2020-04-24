import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return(
    <div>
      <Container> 
     Light / Dark

        <Switch
         onChange={toggleTheme}
         checked={title === 'dark'}
         checkedIcon={false}
         uncheckedIcon={false}
         height={15}
         width={40}
         handleDiameter={20}
         offColor={shade(0.25, colors.primary)}
         onColor={colors.secundary}
        />
      </Container>
    </div>
  )
};

export default Header;