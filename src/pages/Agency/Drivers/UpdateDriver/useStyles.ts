import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 30,
        fontWeight: 800,
        color: theme.palette.common.black,
        margin: '3em',
        textTransform: 'uppercase'
    }
}));

export default useStyles;
