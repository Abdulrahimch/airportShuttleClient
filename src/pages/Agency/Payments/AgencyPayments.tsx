import { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable/DataTable';
import { useLanguage } from '../../../context/useLanguageContext';
import CustomDialog from '../../../components/CustomDialog/CustomDialog';
import AddPayment from './AddPayment/AddPayment';
import { getClients } from '../../../helpers/APICalls/user';
import CloseIcon from '@material-ui/icons/Close';
import { agencyPaymentEngColumns, agencyPaymentTurkishColumns } from '../../../utils/dictionary';
import ListPayments from './ListPayments/ListPayments';
import Details from './Details/Details';
import { IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function AgencyPayments(): JSX.Element {
    const { language } = useLanguage();
    const history = useHistory();

    const [openAddPayment, setOpenAddPayment] = useState<boolean>(false);
    const [openAllPayments, setOpenAllPayments] = useState<boolean>(false);
    const [details, setDetails] = useState<boolean>(false);

    const [rows, setRows] = useState<any>([]);
    const [clientId, setClientId] = useState<string>('');
    const [debt, setDebt] = useState<number>(0)

    const handleAddPaymentClick = (cellValues: any) => {
        setClientId(cellValues.row._id)
        setOpenAddPayment(true)
    };

    const handleAddPaymentClose = () => {
        setOpenAddPayment(false)
    }

    const handleAllPaymentsClick = (cellValues: any) => {
        setClientId(cellValues.row._id);
        setOpenAllPayments(true)
    };

    const handleAllPaymentsClose = () => {
        setOpenAllPayments(false)
    };

    const handleDetailsClick = (cellValues: any) => {
        setDebt(cellValues.row.debt)
        setClientId(cellValues.row._id);
        setDetails(true);
    };

    const handleDetailsClose = () => {
        setDetails(false)
    };

    const columns = language === 'eng'  
                                    ? agencyPaymentEngColumns(handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick) 
                                    : agencyPaymentTurkishColumns(handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick);
    
    useEffect(() => {
        getClients().then((data) => {
            if (data.error) {
                console.log('data error')
            } else if (data.success) {
                data.success.clients.map((client, idx) => {
                    client.id = idx + 1;
                    client.status = 'client'
                });
                setRows(data.success.clients);
            } else {
                console.log('external error')
            }
        });
        return () => {
            setRows([])
        };
    }, [history, openAllPayments, openAddPayment])
    
    return (
        <>
            <DataTable rows={rows} columns={columns} />
            <CustomDialog 
                open={openAddPayment} 
                onClose={handleAddPaymentClose}
                style={'addPayment'}
            >
                <AddPayment clientId={clientId}/>
            </CustomDialog>
            <CustomDialog 
                open={openAllPayments} 
                onClose={handleAllPaymentsClose}
                style={'addPayment'}
                isFullScreen={true}
            >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleAllPaymentsClose}
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            All Payments
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ListPayments clientId={clientId}/>
            </CustomDialog>
            <CustomDialog 
                open={details} 
                onClose={handleDetailsClose}
                style={'addPayment'}
                isFullScreen={true}
            >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleDetailsClose}
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            Reservations and Payments details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Details clientId={clientId} debt={debt}/>
            </CustomDialog>
        </>
        
    )
}

export default AgencyPayments;