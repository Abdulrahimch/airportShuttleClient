export const engUnconfirmedResColumns = () => {
    const columns = [
        {
            field: 'property',
            headerName: 'Property',
            width: 150,
        },
        { 
            field: 'date', 
            headerName: 'Date and Time', 
            width: 150 
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
    ];
    return columns;
  };
  
  export const turkishUnconfirmedResColumns = (handleProcessedClick, handleUnprocessedClick, handleConfirmClick) => {
    const columns = [
      {
        field: 'property',
        headerName: 'Emlak',
        width: 150,
      },
      { 
        field: 'date', 
        headerName: 'Traih va Saat', 
        width: 150 
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
    ];
    return columns;
  };

  export const engOwedUsersColumns = () => {
    const columns = [
        {
            field: 'propertyName',
            headerName: 'Property',
            width: 150,
        },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 150,
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 150,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'debt',
            headerName: 'Debt',
            width: 150,
        },
    ];
    return columns;
  };
  
  export const turkishOwedUsersColumns = (handleProcessedClick, handleUnprocessedClick, handleConfirmClick) => {
    const columns = [
      {
        field: 'propertyName',
        headerName: 'Emlak',
        width: 150,
    },
    {
        field: 'firstName',
        headerName: 'Adi',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Soyadi',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
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