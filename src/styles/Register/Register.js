import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'grid'
    },
    margin: {
      backgroundColor: 'white',
      margin: '2px',
      padding: '8px 12px 8px',
      font: 'menu'
  
  
    },
  
    Sgv5: {
      margin: '89px 123px'
    },
  
    Button: {
      marginTop: '37px',
      boxShadow: '0px 10px 10px -6px black',
    },
    title: {
      textAlign: 'center',
      color: '#7B7F85'
    },
    p: {
      margin: '0px 0px 38px 0px;',
      textAlign: 'center',
      color: '#6C88B1'
    },
  
    svgIcon1: {
      position: 'absolute',
      top: '618px',
      left: '85px'
    },
    Circulo1: {
      position: 'absolute',
      top: '188px',
      left: '185px'
    },
    Circulo2: {
      position: 'absolute',
      marginTop: '148px',
      right: '55px'
    },
    buttonAyuda: {
      margin: theme.spacing(1),
      backgroundColor: '#F7CE29 ',
      color: '#E0AE05 ',
      position: 'absolute',
      marginTop: '630px',
      right: '55px'
    }
  
  }));

  export default useStyles;