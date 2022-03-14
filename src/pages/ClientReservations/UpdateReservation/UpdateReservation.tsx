import AddReservationForm from "../AddReservation/AddReservationForm/AddReservationForm";
import { NewReservationDictionary } from '../../../utils/dictionary';
import { useEffect } from "react";
import { FormValues, Page } from "../../../interface/Reservation";
import { updateReservation } from "../../../helpers/APICalls/reservation";
import { useSnackBar } from '../../../context/useSnackbarContext';
import { Box } from "@material-ui/core";
import useStyles from './useStyles';

const { engPage, turkishPage } = NewReservationDictionary;
let page: Page = {title: 'rezervasyon ekle', form: turkishPage.form};

interface Props {
    initValues: FormValues;
    setOpen: (open: boolean) => void;
}
let lan = 'eng';

function UpdateReservation({ initValues, setOpen }: Props): JSX.Element {
    const { box } = useStyles();
    const { updateSnackBarMessage } = useSnackBar();

    const handleSubmit = (values: FormValues) => {
        const id = initValues._id ? initValues._id : '';
        updateReservation(id, values).then((data) => {
            if (data.error){
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                updateSnackBarMessage('reservation has been updated successfully');
                setOpen(false);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    };

    useEffect(() => { 
        if (lan === 'tr') page = turkishPage; 
        else page = engPage;
    }, [])
    
    return (
        <Box className={box}>
            <AddReservationForm  form={page.form} handleSubmit={handleSubmit} initValues={initValues}/>
        </Box>
    )   
    };
export default UpdateReservation;