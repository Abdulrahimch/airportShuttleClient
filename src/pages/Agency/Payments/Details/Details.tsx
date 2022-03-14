import {  Box } from '@material-ui/core';
import { useEffect, useState, useRef } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { useLanguage } from '../../../../context/useLanguageContext';
import { getClientReservationPaymentStat } from '../../../../helpers/APICalls/agencyReservation';
import { format } from 'date-fns';

import { detailsEngColumns, detailsTurksihColumns } from '../../../../utils/dictionary';
import Search from '../../../../components/Search/Search';

interface Props {
    clientId: string;
    debt: number;
};

interface Total {
    id: number;
    totalReservationsCost?: number;
    paymentTotal?: number;
    currency?: string;
    debt: number;
    status?: string;
}

function Details({ clientId, debt }: Props): JSX.Element {
    const { language } = useLanguage();
    const detailsColumns = language === 'eng' ? detailsEngColumns() : detailsTurksihColumns();
    
    const [detailsRows, setDetailsRows] = useState<any>([]);
    const [useEffectTrigger, setUseEffectTrigger] = useState<boolean>(false);
    const [from, setFrom] = useState(new Date());
    const date = new Date();
    const [to, setTo] = useState(new Date(date.setHours(date.getHours() + 24)));


    const totalReservationsCost = useRef(0);
    const paymentTotal = useRef(0);
    const totalsRows = useRef<Total[]>([{id: 10000200, totalReservationsCost: 0, paymentTotal: 0, debt: debt, status: 'total'}]); 

    const invokeUseEffect = () => {
        setUseEffectTrigger(!useEffectTrigger)
    };

    useEffect(() => {
        getClientReservationPaymentStat(clientId, from, to).then((data) => {
                let idx = 0;
                if (data.error) {
                    console.log(data.error)
                } else if (data.success) {
                    data.success.reservations.map((reservation) => {
                        reservation.id = idx + 1;
                        reservation.status = 'reservation'
                        const date = new Date(reservation.selectedDate);
                        reservation.date = format(date, "dd-MM-yyyy kk:mm");
                        totalReservationsCost.current +=  (reservation.cost ? reservation.cost : 0);
                        idx ++;
                        });
                    data.success.payments.map((item) => {
                        item.id = idx + 1;
                        item.property = item.client?.property;
                        item.status = 'payment'
                        const date = new Date(item.createdAt ? item.createdAt : new Date());
                        item.date = format(date, "dd-MM-yyyy kk:mm");
                        paymentTotal.current += item.paidInTL;
                        idx++
                    });
                    totalsRows.current[0].totalReservationsCost = totalReservationsCost.current;
                    totalsRows.current[0].paymentTotal = paymentTotal.current;
                    totalsRows.current[0].debt = totalReservationsCost.current - paymentTotal.current;  
                    setDetailsRows([...data.success.reservations, ...data.success.payments, ...totalsRows.current]
                    .sort(function(a, b) {return parseFloat(a.date) - parseFloat(b.date)}));                    
                 
                } else {
                    console.log('External Error, please try again Later!')
                }
            });
            return () => {
                totalReservationsCost.current = 0;
                paymentTotal.current = 0;
                setDetailsRows([]);
            }
    }, [useEffectTrigger]);
    
    return (
        <>  
            <Box display='flex' flexDirection='column'>
                <Search from={from} to={to} setFrom={setFrom} setTo={setTo} invokeUseEffect={invokeUseEffect}/>
                <DataTable rows={detailsRows} columns={detailsColumns} />
            </Box>
        </>
    )
}
export default Details