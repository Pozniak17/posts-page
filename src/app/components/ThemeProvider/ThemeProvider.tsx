import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;

export default ThemeProvider;
