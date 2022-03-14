import { Box } from '@material-ui/core';
import CustomButton from '../../components/Button/CustomButton';

export const agencyEngColumns = (handleProcessedClick, handleUnprocessedClick, handleConfirmClick, handleShowClick) => {
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
        field: 'property',
        headerName: 'Property',
        width: 150,
      },
      {
        field: "Action",
        width: 150,
        renderCell: (cellValues) => {
          return (
            <>
              <Box style={{ display: 'flex', flexDirection: 'column'}}>
              <CustomButton
                  style="showResDetails"
                  btnText="Show"
                  onClick={() => handleShowClick(cellValues)} />
                <CustomButton
                  disabled={cellValues.row.confirmed}
                  style={!cellValues.row.confirmed ? "confirm" : "confirmed"}
                  btnText={!cellValues.row.confirmed ? "confirm" : "confirmed"}
                  onClick={() => handleConfirmClick(cellValues)} />
                <CustomButton
                  style="processed"
                  btnText="processed"
                  onClick={() => handleProcessedClick(cellValues)} />
                <CustomButton
                  style="unprocessed"
                  btnText="unprocessed"
                  onClick={() => handleUnprocessedClick(cellValues)} />
              </Box>
            </>
          );
        }
      },
    ];
    return columns;
  };
  
  export const agencyTurksihColumns = (handleProcessedClick, handleUnprocessedClick, handleConfirmClick, handleShowClick) => {
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
        width: 150,
      },
      {
        field: 'property',
        headerName: 'Emlak',
        width: 150,
      },
      {
        field: "Onay",
        width: 150,
        renderCell: (cellValues) => {
          return (
            <>
              <Box style={{ display: 'flex', flexDirection: 'column'}}>
              <CustomButton
                  style="showResDetails"
                  btnText="göster"
                  onClick={() => handleShowClick(cellValues)} />
                <CustomButton
                  disabled={cellValues.row.confirmed}
                  style={!cellValues.row.confirmed ? "confirm" : "confirmed"}
                  btnText={!cellValues.row.confirmed ? "onay" : "onaylandi"}
                  onClick={() => handleConfirmClick(cellValues)}
                />
                <CustomButton
                  style="processed"
                  btnText="işlenmiş"
                  onClick={() => handleProcessedClick(cellValues)}
                />
                <CustomButton
                  style="unprocessed"
                  btnText="işlenmemiş"
                  onClick={() => handleUnprocessedClick(cellValues)}
                />
              </Box>
            </>
          );
        }
      },
    ];
    return columns;
  };