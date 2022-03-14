import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        minHeight: '100vh',
        width: '50vh'
    },
    listItem: {
        '&:hover': {
            cursor: 'pointer',
            opacity: 0.5,
            backgroundColor: '#D3D3D3'
        },
        '&.selected': {
            backgroundColor: '#A9A9A9'
        }
    },
}));

export default useStyles;