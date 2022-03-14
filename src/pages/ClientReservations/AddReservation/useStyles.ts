import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight:"100vh",
        marginTop: '2em'
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 800
    }
}));

export default useStyles;
