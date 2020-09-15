import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#29579B',

        },
        secondary: {
            main: '#ffc12c',
        },
        error: {
            main: red.A400,
        },
        background: {
            // default: '#fff',
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});
