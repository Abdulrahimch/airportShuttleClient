import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '2em',
        padding: theme.spacing(2)
    },
    title: {
        textTransform: 'uppercase',
    },
}));

export default useStyles;