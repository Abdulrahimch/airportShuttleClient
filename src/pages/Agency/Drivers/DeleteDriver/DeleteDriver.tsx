import { Typography, Grid, Box } from '@material-ui/core';
import CustomButton from '../../../../components/Button/CustomButton';
import { deleteDriver } from '../../../../helpers/APICalls/driver';
import useStyles from './useStyles';
import { useSnackBar } from '../../../../context/useSnackbarContext'; 
import { Driver } from '../../../../interface/Driver';

interface Props {
    initValues: Driver;
    handleDeleteDialogClose: () => void;
    rows: Driver [];
    setRows: any;
}

const DeleteDriver = ({ initValues, handleDeleteDialogClose, rows, setRows }: Props): JSX.Element => {
    const { title, root } = useStyles();
    const { updateSnackBarMessage } = useSnackBar();

    const onYesClick = () => {
        const id = initValues._id;
        deleteDriver(id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error);
            } else if (data.success){
                updateSnackBarMessage('Client has been deleted successfully!');
                handleDeleteDialogClose();
                setRows(rows.filter(row => row.id !== initValues.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }

    const onNoClick = () => {
        handleDeleteDialogClose();
    }

    return (
        <>
            <Grid container direction="column" className={root}>
                <Grid item>
                    <Typography className={title}>
                        Are you sure you want to delete the driver
                    </Typography>
                    <Grid item container justifyContent="space-around">
                        <CustomButton btnText="Yes" style="edit" onClick={onYesClick} />
                        <CustomButton btnText="No" style="delete" onClick={onNoClick}/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default DeleteDriver;