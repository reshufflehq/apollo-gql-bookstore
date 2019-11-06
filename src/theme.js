import { createMuiTheme } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: cyan.A400,
      dark: cyan.A400,
    },
  },
});
