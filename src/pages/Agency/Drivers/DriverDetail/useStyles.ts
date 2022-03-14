import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(9),
        monHieght: '50vn'
    },
    avatar: {
        height: 80, 
        width: 80
    },
    title: {
        fontSize: 25,
        fontWeight: 800,
        color: theme.palette.common.black
    }
}));

export default useStyles;