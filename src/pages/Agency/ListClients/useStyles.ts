import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        padding: theme.spacing(3)

    },
    title: {
        fontSize: 20,
        fontWeight: 800,
        textTransform: 'uppercase',
        marginBottom: 20
    }
}));

export default useStyles;