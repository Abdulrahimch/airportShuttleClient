import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    tabs: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 12
    },
    gridItem: {
        position: 'absolute',
        right: 50
    },
    drawer: {
        backgroundColor: '#808080',
        color: theme.palette.common.white
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        fontWeight: 700,
        [theme.breakpoints.down('md')]: {
            marginBottom: "1.25em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1.25em"
        }
    },
    drawerIcon: {
        "&:hover": {
            backgroundColor: "transparent"
        },
        marginLeft: "auto"
    },
    drawerIconMenu: {
        height: "50px",
        width: "100px"
    },
}));

export default useStyles;

