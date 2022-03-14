import { Grid, List, Typography, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getDrivers } from '../../../../helpers/APICalls/driver';
import useStyles from './useStyles';
import { useSnackBar } from '../../../../context/useSnackbarContext';  
import { Driver } from '../../../../interface/Driver';
import clsx from 'clsx';
import CustomButton from '../../../../components/Button/CustomButton';
import { updateReservation } from '../../../../helpers/APICalls/agencyReservation';
import { Reservation } from '../../../../interface/agencyReservation';

interface Props {
    reservation: any;
    invokeUseEffect: () => void;
    handleClose: () => void;
}

const AssignDriver = ({ reservation, invokeUseEffect, handleClose }: Props): JSX.Element => {
    const { root, listItem } = useStyles();
    const selected = clsx(listItem, 'selected');

    const [value, setValue] = useState<string | undefined>();
    const [drivers, setDrivers] = useState<Driver []>([]);

    const { updateSnackBarMessage } = useSnackBar();

    useEffect(() => {
        getDrivers().then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error);
            } else if (data.success){
                setDrivers(data.success.drivers);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
        return () => {
            setDrivers([]);
        }
    }, []);

    const handleSubmit = () => {
        if (value === undefined) {
            updateSnackBarMessage('Please select a driver');
            return
        };
        const id = reservation._id;
        const inputs = { confirmed: true, driver: value };
        updateReservation(inputs, id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error);
            } else if (data.success) {
                updateSnackBarMessage('reservation has been confirmed successfully!');
                invokeUseEffect();
                
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }

    return (
        <>
            <Grid container direction="column" className={root} >
                <Grid item>
                    <Typography>
                        Please Select Driver
                    </Typography>
                        <List style={{ width: '100%', maxWidth: 360, backgroundColor: 'background.paper' }}>
                            {drivers.map((driver, idx) => (
                                <>
                                    <ListItem alignItems="flex-start" className={value !== driver._id ? listItem : selected} onClick={() => {setValue(driver._id)}}>
                                        <ListItemAvatar>
                                            <Avatar alt={`${driver.name}`} src="https://airportshuttle0.s3.amazonaws.com/defaultAvatar.png" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${driver.name}`}
                                            secondary={
                                                <>
                                                <Typography
                                                    style={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                >
                                                    {`Car N0: ${driver.carNumber}`} <br /> {`Cep: ${driver.phoneNumber}`}
                                                </Typography>
                                                
                                                </>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </>
                            ))}
                        </List>
                </Grid>
                <Grid item container justifyContent='space-evenly' style={{ marginTop: '2em' }}>
                    <CustomButton btnText="Submit" style='dialogSubmit' onClick={handleSubmit} />
                    <CustomButton btnText="Cancel" style='cancel' onClick={handleClose} />
                </Grid>
            </Grid>
        </>
    );
};

export default AssignDriver;