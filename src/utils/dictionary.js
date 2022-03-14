import { Box } from '@material-ui/core';
import CustomButton from '../components/Button/CustomButton';

export const NewReservationDictionary = {
    engPage: {
        title: 'add reservation',
        form: {
            type: 'type',
            from: 'from',
            to: 'to',
            pax: 'pax',
            property: 'property',
            fullName: 'full name',
            passenger: 'passenger',
            driverNote: 'driver note',
            flightNo: 'flight no',
            selectedDate: 'date and time of arrivale'
        }
    },
    turkishPage: {
        title: 'rezervasyon ekle',
        form: {
            type: 'tip',
            from: 'nerden',
            to: 'nereye',
            pax: 'pax',
            property: 'emlak',
            fullName: 'ad soyad',
            passenger: 'yolcu',
            driverNote: 'sürücü notu',
            flightNo: 'uçuş no',
            selectedDate: 'variş tarihi ve saatı'
        }
    }
};

export const tabsDictionary = {
    englishTabs : [
        // { label: 'Home', to: '/client-home' },
        { label: 'new reservation', to: '/new-reservation' },
        { label: 'reservations', to: '/reservation' },
        { label: 'payments', to: '/payment' }
    ],
    turkishTabs : [
        // { label: 'Home', to: '/client-home' },
        { label: 'yeni rezervasyon', to: '/new-reservation' },
        { label: 'rezervasyonlar', to: '/reservation' },
        { label: 'finans', to: '/payment' }
    ]
};

export const clientPaymentDictionary = {
    engColumns:  [
        { 
          field: 'createdAt', 
          headerName: 'Date', 
          width: 150 
        },
        {
          field: 'type',
          headerName: 'Type',
          width: 150,
        },
        {
          field: 'paid',
          headerName: 'Paid',
          width: 150,
        },
        {
          field: 'currency',
          headerName: 'Currency',
          width: 150,
        },
        {
          field: 'paidInTL',
          headerName: 'Paid In TL',
          width: 150,
        },
        { 
          field: 'time', 
          headerName: 'Time', 
          width: 150,
        },
        {
          field: 'debt',
          headerName: 'Debt',
          width: 150,
        },
        {
          field: 'note',
          headerName: 'Note',
          width: 400,
        },
    ],
    
    turksihColumns: [
      { 
        field: 'createdAt', 
        headerName: 'Tarih', 
        width: 150 
      },
      {
        field: 'type',
        headerName: 'Tip',
        width: 150,
      },
      {
        field: 'paid',
        headerName: 'Ödenen para ',
        width: 150,
      },
      {
        field: 'currency',
        headerName: 'Parabirimi',
        width: 150,
      },
      {
        field: 'paidInTL',
        headerName: 'TL Olarak',
        width: 150,
      },
      {
        field: 'debt',
        headerName: 'Borç',
        width: 150,
      },
      {
        field: 'note',
        headerName: 'Note',
        width: 400,
      },
    ]
};

export const engColumn = (handleEditClick, handleCancelClick, handleDriverDetails) => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Date and Time', 
      width: 300 
    },
    {
      field: 'flightNo',
      headerName: 'Flight No',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'From',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'To',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'driverNote',
      headerName: 'Note/property',
      width: 150,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      width: 150,
    },
    {
      field: "Driver",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            disabled={!cellValues.row.confirmed}
            style="driverDetails"
            btnText="Details"
            onClick={() => handleDriverDetails(cellValues)}
          />
        );
      }
    },
    {
      field: "Edit",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            disabled={cellValues.row.confirmed}
            style="edit"
            btnText="edit"
            onClick={() => handleEditClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Cancel",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            disabled={cellValues.row.confirmed}
            style="delete"
            btnText="Cancel"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    }
  ];
  return columns;
};

export const turksihColumns = (handleEditClick, handleCancelClick, handleDriverDetails) => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Traih va Saat', 
      width: 200 
    },
    {
      field: 'flightNo',
      headerName: 'Uçuş No ',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'Nerden',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'Nereye',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'driverNote',
      headerName: 'Note/Emlak',
      width: 150,
    },
    {
      field: 'cost',
      headerName: 'Ücret',
      width: 150,
    },
    {
      field: "Sürücü",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            disabled={!cellValues.row.confirmed}
            style="driverDetails"
            btnText="Detay"
            onClick={() => handleDriverDetails(cellValues)}
        />
        );
      }
    },
    {
      field: "Düzenle",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            disabled={cellValues.row.confirmed}
            style="edit"
            btnText="Düzenle"
            onClick={() => handleEditClick(cellValues)}
        />
        );
      }
    },
    {
      field: "Iptal",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            disabled={cellValues.row.confirmed}
            style="delete"
            btnText="Iptal"
            onClick={() => handleCancelClick(cellValues)}
        />
        );
      }
    }
  ];
  return columns;
};

export const agencyPaymentEngColumns = (handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick) => {
  const columns = [
    {
      field: 'propertyName',
      headerName: 'Property',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 275,
    },
    {
      field: 'debt',
      headerName: 'Debt in TL',
      width: 150,
    },
    {
      field: "Add Payment",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="addPayment"
            btnText="add payment"
            onClick={() => handleAddPaymentClick(cellValues)}
          />
        );
      }
    },
    {
      field: "All Payments",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="allPayments"
            btnText="all payments"
            onClick={() => handleAllPaymentsClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Details",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="details"
            btnText="details"
            onClick={() => handleDetailsClick(cellValues)}
          />
        );
      }
    },
  ];
  return columns;
};

export const agencyPaymentTurkishColumns = (handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick) => {
  const columns = [
    {
      field: 'property',
      headerName: 'Emlak',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 275,
    },
    {
      field: 'debt',
      headerName: 'Borç TL olarak',
      width: 150,
    },
    {
      field: "Ödeme Ekle",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="addPayment"
            btnText="Ödeme ekle"
            onClick={() => handleAddPaymentClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Ödemeler",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="allPayments"
            btnText="Ödemeler"
            onClick={() => handleAllPaymentsClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Detaylar",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="details"
            btnText="detaylar"
            onClick={() => handleDetailsClick(cellValues)}
          />
        );
      }
    },
  ];
  return columns;
};

export const agencyPaymentPage = {
  engPage : {
    title: 'add payment',
    form: {
      type: 'type',
      paid: 'paid',
      currency: 'currency',
      note: 'note',
      exchangeRate: 'exchange rate',
      paidInTL: 'paid in TL'
    }
  },
  turkishPage: {
    title: 'ödeme ekle ',
    form: {
      type: 'tip',
      paid: 'ödenmiş',
      currency: 'para birimi',
      note: 'not',
      exchangeRate: 'Döviz kuru',
      paidInTL: 'TL olarak ödendi'
    }
  }
};

export const agencyListPaymentEngColumns = (handleCancelClick) => {
  const columns = [
    {
      field: 'property',
      headerName: 'Property',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Date of Payment',
      width: 275,
    },
    {
      field: 'paid',
      headerName: 'Paid',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      width: 150,
    },
    {
      field: 'exchangeRate',
      headerName: 'Exchange Rate',
      width: 150,
    },
    {
      field: 'paidInTL',
      headerName: 'Paid in TL',
      width: 150,
    },
    {
      field: "Cancel",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="delete"
            btnText="Cancel"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    },
  ];
  return columns;
};

export const agencyListPaymentTurkishColumns = (handleCancelClick) => {
  const columns = [
    {
      field: 'property',
      headerName: 'Emlak',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'ödeme Tarihi',
      width: 275,
    },
    {
      field: 'paid',
      headerName: 'ödeme',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Para Birimi ',
      width: 150,
    },
    {
      field: 'exchangeRate',
      headerName: 'Döviz Kuru',
      width: 150,
    },
    {
      field: 'paidInTL',
      headerName: 'TL Olarak ödenen',
      width: 150,
    },
    {
      field: "Iptal",
      width: 225,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="delete"
            btnText="Iptal"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    },
  ];
  return columns;
};

export const reservationDetailsEngColumns = () => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Date and Time', 
      width: 300 
    },
    {
      field: 'flightNo',
      headerName: 'Flight No',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'From',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'To',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'driverNote',
      headerName: 'Note/property',
      width: 200,
    },
    {
      field: 'property',
      headerName: 'Property',
      width: 225,
    },
  ];
  return columns;
};

export const reservationDetailsTurksihColumns = () => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Traih va Saat', 
      width: 300 
    },
    {
      field: 'flightNo',
      headerName: 'Uçuş No ',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'Nerden',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'Nereye',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'driverNote',
      headerName: 'Note/Emlak',
      width: 200,
    },
    {
      field: 'property',
      headerName: 'Emlak',
      width: 225,
    },
  ];
  return columns;
};

export const detailsEngColumns = () => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Date and Time', 
      width: 300 
    },
    {
      field: 'flightNo',
      headerName: 'Flight No',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'From',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'To',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'driverNote',
      headerName: 'Note/property',
      width: 200,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      width: 225,
    },
    {
      field: 'paid',
      headerName: 'Paid',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      width: 150,
    },
    {
      field: 'exchangeRate',
      headerName: 'Exchange Rate',
      width: 150,
    },
    {
      field: 'totalReservationsCost',
      headerName: 'Total Cost',
      width: 150,
    },
    {
      field: 'paymentTotal',
      headerName: 'Paid in TL',
      width: 150,
    },
    {
      field: 'debt',
      headerName: 'Remaining Amount In TL',
      width: 150,
    },
  ];
  return columns;
};

export const detailsTurksihColumns = () => {
  const columns = [
    { 
      field: 'date', 
      headerName: 'Traih va Saat', 
      width: 300 
    },
    {
      field: 'flightNo',
      headerName: 'Uçuş No ',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'Nerden',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'Nereye',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'driverNote',
      headerName: 'Note/Emlak',
      width: 200,
    },
    {
      field: 'cost',
      headerName: 'Ucret',
      width: 225,
    },
    {
      field: 'paid',
      headerName: 'ödeme',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Para Birimi ',
      width: 150,
    },
    {
      field: 'exchangeRate',
      headerName: 'Döviz Kuru',
      width: 150,
    },
    {
      field: 'totalReservationsCost',
      headerName: 'Toplam Tutar ',
      width: 150,
    },
    {
      field: 'paymentTotal',
      headerName: 'TL Olarak ödendi',
      width: 150,
    },
    {
      field: 'debt',
      headerName: 'Borç',
      width: 150,
    },
  ];
  return columns;
};

export const paymentDetailsEngColumns = () => {
  const columns = [
    {
      field: 'property',
      headerName: 'Property',
      width: 300,
    },
    {
      field: 'createdAt',
      headerName: 'Date of Payment',
      width: 350,
    },
    {
      field: 'paid',
      headerName: 'Paid',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      width: 150,
    },
    {
      field: 'exchangeRate',
      headerName: 'Exchange Rate',
      width: 150,
    },
    {
      field: 'paidInTL',
      headerName: 'Paid in TL',
      width: 190,
    },
  ];
  return columns;
};

export const paymentDetailsTurkishColumns = () => {
  const columns = [
    {
      field: 'property',
      headerName: 'Emlak',
      width: 300,
    },
    {
      field: 'createdAt',
      headerName: 'ödeme Tarihi',
      width: 350,
    },
    {
      field: 'paid',
      headerName: 'ödeme',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Para Birimi ',
      width: 150,
    },
    {
      field: 'exchangeRate',
      headerName: 'Döviz Kuru',
      width: 150,
    },
    {
      field: 'paidInTL',
      headerName: 'TL Olarak ödenen',
      width: 190,
    },
  ];
  return columns;
};


export const totalDetailsEngColumns = () => {
  const columns = [
    {
      field: 'reservationTotal',
      headerName: 'Total Amount Of Reservations',
      width: 350,
    },
    {
      field: 'paymentTotal',
      headerName: 'Total Amount Paid',
      width: 350,
    },
    {
      field: 'currency',
      headerName: 'currency',
      width: 240,
    },
    {
      field: 'debt',
      headerName: 'Remaining Amount In TL',
      width: 350,
    },
  ];
  return columns;
};

export const totalDetailsTurkishColumns = () => {
  const columns = [
    {
      field: 'reservationsTotal',
      headerName: 'Toplam Rezervasyon Tutarı',
      width: 350,
    },
    {
      field: 'paymentsTotal',
      headerName: 'Toplamda ödenen miktar ',
      width: 350,
    },
    {
      field: 'currency',
      headerName: 'Para Birimi',
      width: 240,
    },
    {
      field: 'debt',
      headerName: 'TL Olarak Kalan Tutar  ',
      width: 350,
    },
  ];
  return columns;
};

export const engTabs =
  [
    { label: 'Confirmed', value: '1' },
    { label: 'Pending Confirmation', value: '2' }
  ]
  export const turkishTabs = 
  [ 
    { label: 'Onaylanmış', value: '1' },
    { label: 'Onay Bekleniyor ', value: '2' }
  ]

export const engDriverColumn = (handleEditClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'name', 
      headerName: 'First Name', 
      width: 150 
    },
    { 
      field: 'phoneNumber',
      headerName: 'Cep', 
      width: 150 
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
    },
    {
      field: 'carNumber',
      headerName: 'Car No',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Joining Date',
      width: 200,
    },
    {
      field: "Edit",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="edit"
            btnText="edit"
            onClick={() => handleEditClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Cancel",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="delete"
            btnText="Cancel"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    }
  ];
  return columns;
};

export const turksihDriverColumns = (handleEditClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'name', 
      headerName: 'Adı', 
      width: 150 
    },
    { 
      field: 'phoneNumber', 
      headerName: 'Cep', 
      width: 150 
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
    },
    {
      field: 'carNumner',
      headerName: 'Arac No',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Katılma Tarihi ',
      width: 200,
    },
    {
      field: "Düzenle",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
          style="edit"
          btnText="Düzenle"
          onClick={() => handleEditClick(cellValues)}
        />
        );
      }
    },
    {
      field: "Iptal",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
          style="delete"
          btnText="Iptal"
          onClick={() => handleCancelClick(cellValues)}
        />
        );
      }
    }
  ];
  return columns;
};


export const engClientColumn = (handleEditClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'propertyName', 
      headerName: 'Property', 
      width: 150 
    },
    { 
      field: 'businessType',
      headerName: 'Type', 
      width: 150 
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 250,
    },
    {
      field: 'createdAt',
      headerName: 'Joining Date',
      width: 200,
    },
    {
      field: "Edit",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="edit"
            btnText="edit"
            onClick={() => handleEditClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Delete",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="delete"
            btnText="Delete"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    }
  ];
  return columns;
};

export const turkishClientColumn = (handleEditClick, handleCancelClick) => {
  const columns = [
    { 
      field: 'propertyName', 
      headerName: 'Emlak', 
      width: 150 
    },
    { 
      field: 'businessType',
      headerName: 'Tip', 
      width: 150 
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 250,
    },
    {
      field: 'createdAt',
      headerName: 'Katılma Tarihi',
      width: 200,
    },
    {
      field: "Düzenle",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="edit"
            btnText="Düzenle"
            onClick={() => handleEditClick(cellValues)}
          />
        );
      }
    },
    {
      field: "Sil",
      width: 175,
      renderCell: (cellValues) => {
        return (
          <CustomButton
            style="delete"
            btnText="Sil"
            onClick={() => handleCancelClick(cellValues)}
          />
        );
      }
    }
  ];
  return columns;
};

export const addClientFormlanguage = {
  eng: {
      firstName: 'FirstName',
      lastName: 'lastName',
      email: 'Email',
      propertyName: 'Property Name',
      businessType: 'Business Type',
      address: 'Address',
      istCostTitle: 'ist airport cost in TL',
      sawCostTitle: 'Saw airport cost in TL'
  },
  turkish: {
      firstName: 'Isim',
      lastName: 'Soyisim',
      email: 'Email',
      propertyName: 'Emlak Adı',
      businessType: 'İşyeri Tipi',
      address: 'Address',
      istCostTitle: 'ist airport maliyeti TL olarak',
      sawCostTitle: 'SAW airport maliyeti TL olarak'
      
  }
};