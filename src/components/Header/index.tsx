import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import { Container } from './styles';

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

  const toggleTheme = () => {
    console.log('ok');
  };

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        onColor={colors.secondary}
        offColor={shade(0.15, colors.primary)}
      />
      <h1>finances</h1>
      <div />
    </Container>
  );
};

export default Header;
