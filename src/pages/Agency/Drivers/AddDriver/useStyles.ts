import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 24,
        color: 'primary',
        marginBottom: '3em',
        textAlign: "center",

    },
    itemContaienr: {
        backgroundColor: '#D0D0D0', 
        padding: theme.spacing(4)
    }
}));

export default useStyles;