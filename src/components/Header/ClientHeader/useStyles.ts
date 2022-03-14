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
        right: 150
    },
}));

export default useStyles;

