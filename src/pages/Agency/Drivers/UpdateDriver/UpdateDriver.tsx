import CustomDialog from "../../../../components/CustomDialog/CustomDialog";
import DriverForm from "../DriverForm/DriverForm";
import { Driver } from '../../../../interface/Driver';
import { Box, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import { updateDriver } from "../../../../helpers/APICalls/driver";
import { useSnackBar } from '../../../../context/useSnackbarContext';

interface Props {
    initValues: Driver;
    handleClose: () => void;
    rows: Driver [];
    setRows: any;
}

const UpdateDriver = ({ initValues, handleClose, rows, setRows }: Props): JSX.Element => {
    const { title } = useStyles();
    const { updateSnackBarMessage } = useSnackBar();
    const handleSubmit = (inputs: Driver) => {
        const id = initValues._id;
        updateDriver(inputs, id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error);
            }else if (data.success) {
                setRows(rows.map(row => row.id === initValues.id ? { ...row, ...data.success?.driver } : row));
                updateSnackBarMessage('Driver has been updated successfully!');
                handleClose();
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    }
    return (
        <>
            <Box>
                <Typography className={title}>
                    update driver
                </Typography>
                <DriverForm handleSubmit={handleSubmit} initValues={initValues} />
            </Box>
        </>
        
    )
};

export default UpdateDriver;
