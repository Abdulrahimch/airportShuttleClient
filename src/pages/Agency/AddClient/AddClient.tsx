import useStyles from "./useStyles";
import AddClientForm from './AddClientForm/AddClientForm';
import { Grid, Typography, Paper } from '@material-ui/core';
import { postClient } from '../../../helpers/APICalls/user';
import { Client } from '../../../interface/Client';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { useLanguage } from '../../../context/useLanguageContext';

function AddClient(): JSX.Element {
    const classes = useStyles();
    const { updateSnackBarMessage } = useSnackBar();
    const { language } = useLanguage();

    const initialValues={
        email: '',
        firstName: '',
        lastName: '',
        businessType: '',
        address: '',
        propertyName: '',
        IstAirportMaxFourPaxCost: 0,
        IstAirportMaxSixPaxCost: 0,
        IstAirportMaxTenPaxCost: 0,
        SawAirportMaxFourPaxCost: 0,
        SawAirportMaxSixPaxCost: 0,
        SawAirportMaxTenPaxCost: 0,
    };
    
    const handleSubmit = (inputs: Client) => {
        postClient(inputs).then((data) => {
            if (data.error) {
                console.log(data.error);
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                console.log(data.success);
                updateSnackBarMessage('Client has been added successfully!')
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }
    return (
        <>
            <Grid container direction="column" alignItems="center" component={Paper} spacing={2} className={classes.root}>
                <Grid item style={{ backgroundColor: '#D3D3D3' }}>
                    <Typography variant='h2' className={classes.title}>
                        { language === 'tr' ? 'müşteri ekle' : 'add client' }
                    </Typography>
                    <AddClientForm handleSubmit={handleSubmit} values={initialValues}/>
                </Grid>
            </Grid>
        </>
    )
};

export default AddClient;
