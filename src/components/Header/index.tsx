import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { useDispatch } from 'react-redux';

import * as ThemeActions from '../../store/modules/theme/actions';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import { Container } from './styles';

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  let theme;
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (title === 'light') {
      theme = dark;
    } else {
      theme = light;
    }

    dispatch(ThemeActions.applyTheme(theme));
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
        onColor="#431c99"
        offColor={shade(0.15, colors.primary)}
      />
      <h1>finances</h1>
      <div />
    </Container>
  );
};

export default Header;
