import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    passengerTitle: {
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 800,
    },
    passengerRoot: {
        padding: theme.spacing(5)
    },
}));

export default useStyles;