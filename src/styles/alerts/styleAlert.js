import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root:{        
        padding: '14px 78px',
          
    },
    Butons: {
      width: '68%',
      border: '1px solid #F6134B',
      height: 26,
      margin: '35px 8%',
      color: '#F6134B', "&:hover": {
        color: '#FEFCFC'
      },
      backgroundColor: ({ backgroundColor }) => backgroundColor,
      "&:hover, &:focus": {
        color: '#FEFCFC',
        backgroundColor: ({ hoverBackgroundColor, backgroundColor }) =>
          hoverBackgroundColor
            ? hoverBackgroundColor
            : (backgroundColor, '#F6134B'),
  
  
      },
      "&:active": {
  
        backgroundColor: ({ hoverBackgroundColor, backgroundColor }) =>
          (
            hoverBackgroundColor
              ? hoverBackgroundColor
              : backgroundColor, 0.12
          )
      }
    },
  
    

    Logo: {
      margin: '5% 35%',
  
    },
  
    closeButton: {
      position: 'absolute',
      right: '2px',
      top: '2px',
  
  
      color: ({ color }) => '#0C0908',
      backgroundColor: ({ backgroundColor }) => backgroundColor,
      "&:hover, &:focus": {
        backgroundColor: ({ hoverBackgroundColor, backgroundColor }) =>
          hoverBackgroundColor
            ? hoverBackgroundColor
            : (backgroundColor, '#FBF7F6')
  
      },
      "&:active": {
        backgroundColor: ({ hoverBackgroundColor, backgroundColor }) =>
          (
            hoverBackgroundColor ? hoverBackgroundColor : backgroundColor,
            0.12
          )
      }
  
    },
  }));


  export default useStyles;