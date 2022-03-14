import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '3em',
        position: 'relative', 
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center', 
        justifyContent: 'center'
    },
}));

export default useStyles;
