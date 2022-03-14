import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 136,
    },
    menu: {
        backgroundColor: '#808080',
        color: theme.palette.common.white,
        marginLeft: '1em',
        marginTop: "3em",
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        },
    },
    menuItem: {
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        },
        
    },
    tabStyle: {
        fontWeight: 'bold'
    }
}));

export default useStyles;