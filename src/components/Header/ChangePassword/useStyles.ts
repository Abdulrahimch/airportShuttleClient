import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
        backgroundColor: '#D0D0D0'
    },
    title: {
        fontSize: 18,
        fontWeight: 800,
        textTransform: 'uppercase',
        marginBottom: '1em'
    },
    inputs: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        height: '100%',
        padding: theme.spacing(2),
        marginBottom: '2em',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:cfous': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
    },
    label: {
        fontSize: 12,
        fontWeight: 800,
        color: theme.palette.common.black,
        textTransform: 'uppercase'
    },

}));

export default useStyles;