import { useEffect, useState } from "react";
import DataTable from "../../../../components/DataTable/DataTable";
import { getClientPayments, updatePayment } from '../../../../helpers/APICalls/agencyPayment';
import { format } from 'date-fns';
import { useSnackBar } from '../../../../context/useSnackbarContext';
import { 
        agencyListPaymentEngColumns, 
        agencyListPaymentTurkishColumns 
       } from '../../../../utils/dictionary';

import { useLanguage } from '../../../../context/useLanguageContext';

interface Props {
    clientId: String;
}

function ListPayments({ clientId }: Props): JSX.Element {
    const [rows, setRows] = useState<any>([]);
    const { updateSnackBarMessage } = useSnackBar();
    const { language } = useLanguage();

    const handleCancelClick = (cellValues: any) => {
        const paymentId = cellValues.row._id;
        const inputs = { status: 'canceled', clientId };
        updatePayment(inputs, paymentId).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message)
            } else if (data.success) {
                updateSnackBarMessage('Payment has been canceled successfully');
                setRows(rows.filter((row: any) => row.id !== cellValues.id));

            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    }
    const columns = language === 'eng' ? agencyListPaymentEngColumns(handleCancelClick) : agencyListPaymentTurkishColumns(handleCancelClick);
    useEffect(() => {
        getClientPayments(clientId).then((data) => {
            if (data.error){
                console.log(data.error.message)
            } else if (data.success) {
                data.success.payment.map((item, idx) => {
                    item.id = idx + 1;
                    item.status = 'payment';
                    item.property = item.client?.property;
                    item.email = item.client?.email;
                    const date = item.createdAt ? new Date(item.createdAt): new Date();
                    item.createdAt = format(date, "dd-MM-yyyy kk:mm")
                })
                setRows(data.success.payment);
            } else {
                console.log('External Error!');
            }
        });
        }, [])
    return (
        <DataTable rows={rows} columns={columns} />
    )
};

export default ListPayments;