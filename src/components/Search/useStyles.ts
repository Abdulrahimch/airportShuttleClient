import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: 12,
        fontWeight: 800,
        color: theme.palette.common.black,
        textTransform: 'uppercase'
    },
    select: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: theme.spacing(2),
        marginTop: '0.5em',
        width: 150,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
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
        marginRight: '1em'
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: theme.palette.common.black,
        padding: theme.spacing(1)

    },
    itemContainer: {
        margin: '1em 0 1em 0',
    },
}));

export default useStyles;