import { useEffect, useState } from 'react'; 
import { Box, Typography } from "@material-ui/core";
import CustomDialog from "../../../../components/CustomDialog/CustomDialog";
import DataTable from "../../../../components/DataTable/DataTable";
import { useLanguage } from "../../../../context/useLanguageContext";
import { engDriverColumn, turksihDriverColumns } from "../../../../utils/dictionary";
import UpdateDriver from "../UpdateDriver/UpdateDriver";
import { Driver } from '../../../../interface/Driver';
import { getDrivers } from '../../../../helpers/APICalls/driver';
import { useSnackBar } from '../../../../context/useSnackbarContext';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import CustomButton from "../../../../components/Button/CustomButton";
import DeleteDriver from '../DeleteDriver/DeleteDriver';


const ListDrivers = (): JSX.Element => {
    // const initRows = [{id: 1, firstName: 'abood', lastName: 'shiha', email: 'abood@gmail.com', carNumber: '656'} ]

    const [open, setOpen] = useState<boolean>(false);
    const [rows, setRows] = useState<Driver []>([]);
    const [initValues, setInitValues] = useState<any>();
    const [dialogUpdate, setDialogUpdate] = useState<boolean>(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
    const { updateSnackBarMessage } = useSnackBar(); 
    const history = useHistory();
    const { language } = useLanguage();

    useEffect(() => {
        getDrivers().then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error)
            }else if (data.success) {
                data.success.drivers.map((driver, idx) => {
                    driver.id = idx + 1;
                    const date = driver.createdAt ? new Date(driver.createdAt) : new Date();
                    driver.createdAt = format(date, 'dd-MM-yyyy kk:mm')
                });
                setRows(data.success.drivers);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
        return () => {
            setRows([]);
        };
    }, [history])

    const handleEditClick = (values: any) => {
        setInitValues(values.row)
        setOpen(true);
    }
    const handleCancelClick = (values: any) => {
        setInitValues(values.row);
        setOpenDeleteDialog(true);
    }

    const handleClose = () => {
        setOpen(false)
    };

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(!openDeleteDialog)
    }

    const columns = language === 'eng' ? engDriverColumn(handleEditClick, handleCancelClick) : turksihDriverColumns(handleEditClick, handleCancelClick)
    return (
        <>
            <Box>
                <DataTable rows={rows} columns={columns} />
                <CustomDialog open={open} onClose={handleClose} style="updateReservation">
                    <UpdateDriver initValues={initValues} handleClose={handleClose} rows={rows} setRows={setRows} />
                </CustomDialog>
                <CustomDialog open={openDeleteDialog} onClose={handleDeleteDialogClose} style="updateReservation">
                    <DeleteDriver initValues={initValues} handleDeleteDialogClose={handleDeleteDialogClose} rows={rows} setRows={setRows}/>
                </CustomDialog>
            </Box>
        </>
    )
};

export default ListDrivers;