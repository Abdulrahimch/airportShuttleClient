import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        backgroundColor: '#D3D3D3',
        '& .MuiFormControl-root': {
            marginTop: theme.spacing(1),
        },
    },
    inputs: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        borderColor: 'blue',
        fontSize: 16,
        height: '100%',
        padding: theme.spacing(2),
        marginTop: 0,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:cfous': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: theme.palette.common.black,
        // color: 'blue'
    },
    fieldInputLabel:  {
        fontSize: 12,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: theme.palette.common.black,
        marginTop: '0.5em'
    },
    select: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        borderColor: 'blue',
        fontSize: 16,
        padding: theme.spacing(2),
        marginTop: '0.5em',
        width: 200,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    circularProgress: {
        color: theme.palette.common.white,
    },
    submit: {
        textTransform: 'uppercase',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(6, 2, 2),
        padding: theme.spacing(1),
        width: 160,
        height: 56,
        fontSize: 12,
        fontWeight: 600,
    },
    itemContainer: {
        margin: '1em 0 1em 0',
    },
    menuItem: {
        width: "100px"
    }
}));

export default useStyles;
