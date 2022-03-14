import { Box, Typography, Grid, Paper } from "@material-ui/core";
import AddPaymentForm from "./AddPaymentForm/AddPaymentForm";
import useStyles from "./useStyles";
import { agencyPaymentPage } from '../../../../utils/dictionary';
import { useLanguage } from "../../../../context/useLanguageContext";
import { postPayment } from '../../../../helpers/APICalls/agencyPayment';
import { Payment } from '../../../../interface/AgencyPayment';
import { useSnackBar } from "../../../../context/useSnackbarContext";

const { engPage, turkishPage } = agencyPaymentPage;

interface Props {
    clientId: string;
}

function AddPayment( { clientId } : Props): JSX.Element {
    const classes = useStyles();
    const { language } = useLanguage();
    const { updateSnackBarMessage } = useSnackBar();
    const page = language === 'eng' ? engPage : turkishPage;


    const handleSubmit = (inputs: Payment) => {
        postPayment(inputs).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message)
            } else if (data.success) {
                updateSnackBarMessage('Payment has been saved successfully ')
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !')
            }
        })    
    };
    
    return (
        <Grid container component={Paper} className={classes.root} alignItems='center'>
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Box
                    display="flex"
                    flexDirection="column"
                    minHeight="100vh"
                    width="100%"
                >
                    <Box>
                        <Typography variant="h4" color="primary" className={classes.title}>
                            { page.title} 
                        </Typography>
                        <AddPaymentForm form={page.form} handleSubmit={handleSubmit} clientId={clientId} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AddPayment;