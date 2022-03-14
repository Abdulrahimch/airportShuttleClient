import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    dialog: {
        '&.updateReservation': {
            maxHeight:"1000px",
        },
        '&.addPayment': {
            maxHeight:"1000px",
        }
    }
}));

export default useStyles;