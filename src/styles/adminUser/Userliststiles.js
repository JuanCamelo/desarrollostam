import {
    makeStyles,
    withStyles,
  } from '@material-ui/core/styles';
  import TableCell from '@material-ui/core/TableCell';
  import TableRow from '@material-ui/core/TableRow';
    
  
  const StyledTableCell = withStyles((theme) => ({
    head: {
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
      letterSpacing: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '1.88',
      backgroundColor: '#ffffff',
      color: '#636e71',
    },
    body: {
      position: 'relative',
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
      padding: '13px'
    },
  }))(TableCell);
  
  
  const StyledTableCellEmp = withStyles((theme) => ({
    head: {
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
      letterSpacing: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '1.88',
      backgroundColor: '#f9f9f9',
      color: '#636e71',
    },
    body: {
      position: 'relative',
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
      letterSpacing: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '1.88',
      borderBottom: '0px',
      width: '16.67%',
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      verticalAlign: 'top',
      textAlign: 'left',
    },
  }))(TableCell);
  
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      
    },
  }))(TableRow);
  
  export { StyledTableCell, StyledTableRow,StyledTableCellEmp };