import { Grid, Typography, Paper } from '@material-ui/core';
import { Driver } from '../../../../interface/Driver';
import DriverForm from '../DriverForm/DriverForm';
import useStyles from './useStyles';
import { useSnackBar } from '../../../../context/useSnackbarContext';
import { postDriver } from '../../../../helpers/APICalls/driver';
import { useLanguage } from '../../../../context/useLanguageContext';
 
const AddDriver = (): JSX.Element => {
    const { root, title, itemContaienr } = useStyles();
    const { updateSnackBarMessage } = useSnackBar();
    const { language } = useLanguage();
    
    const handleSubmit = (inputs: Driver) => {
        postDriver(inputs).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error)
            }else if (data.success) {
                updateSnackBarMessage('Driver has been added successfully!')
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    };

    const initValues: Driver = {
        name: '',
        phoneNumber: 0,
        email: '',
        carNumber: '',
        createdAt: ''
    }

    return (
        <>
            <Grid container component={Paper} direction="column" className={root} justifyContent="center" alignItems="center">
                <Grid item className={itemContaienr}>
                    <Typography className={title}>
                        { language === 'eng' ? 'Add Driver' : 'sürücü Ekle'}
                    </Typography>
                    <DriverForm handleSubmit={handleSubmit} initValues={initValues}/>
                </Grid>
            </Grid>
        </>
    )
};

export default AddDriver;