import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    spacing: 4,
    palette: {        
        primary: {
            light: '#6162c9',
            main: '#6162c9',
        },
        secondary: {
            light: '#19857b',
            main: '#19857b',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
        },
        background: {
            light: '#f5f5f5',
            default: '#f5f5f5',
        },
        success: {
            light: '#81c784',
            main: '#4caf50'
        }
    },
});

export default theme;