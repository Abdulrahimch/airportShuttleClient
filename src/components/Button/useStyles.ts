import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    circularProgress: {
        color: theme.palette.common.white,
    },
    button: {
        textTransform: 'uppercase',
        borderRadius: theme.shape.borderRadius,
        fontSize: 12,
        fontWeight: 600,
        padding: theme.spacing(1),
        '&.submit': {
            backgroundColor: theme.palette.primary.main,
            margin: theme.spacing(6, 2, 2),
            width: 160,
            height: 56,
        },
        '&.edit': {
            backgroundColor: "#006400",
            width: 75,
            height: 40,
        },
        '&.dialogSubmit': {
            backgroundColor: theme.palette.primary.main,
            width: 75,
            height: 40,
        },
        '&.delete': {
            backgroundColor: '#8B0000',
            width: 75,
            height: 40,
        },
        '&.cancel': {
            backgroundColor: '#8B0000',
            width: 75,
            height: 40,
        },
        '&.processed': {
            backgroundColor: "#006400",
            width: 100,
            height: 10,
            marginTop: 5
        },
        '&.unprocessed': {
            backgroundColor: '#8B0000',
            width: 100,
            height: 10,
            marginTop: 5
        },
        '&.showResDetails': {
            backgroundColor: '#FF8C00',
            width: 100,
            height: 10,
            marginBottom: 5
        },
        '&.addPayment': {
            backgroundColor: '#006400',
            width: 100,
            height: 40,
        },
        '&.allPayments': {
            backgroundColor: '#006400',
            width: 100,
            height: 40,
        },
        '&.details': {
            backgroundColor: '#006400',
            width: 100,
            height: 40,
        },
        '&.driverDetails': {
            backgroundColor: '#0000FF',
            width: 100,
            height: 40,
        },
        '&.confirm': {
            backgroundColor: '#483D8B',
            width: 100,
            height: 10,
        },
        '&.confirmed': {
            backgroundColor: '#A9A9A9',
            width: 100,
            height: 10,
        },
        '&.yes': {
            backgroundColor: "#006400",
            width: 75,
            height: 40,
            marginRight: '1em'
        },
        '&.no': {
            backgroundColor: '#8B0000',
            width: 75,
            height: 40,
        },
        '&.searchButton': {
            backgroundColor: "#006400",
            width: 75,
            height: 40,
            marginTop: '0.5em'
        },

    },
}));

export default useStyles;