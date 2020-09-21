import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 80;

const HomePageStyles = makeStyles((theme) => ({

  container: {
    display: "block",   
    position: "initial",
    backgroundColor:'#f9f9f9',
    margin: '-1% 6.4%',
    padding: '4% 0% 0% 3.6%', 
    width:'90%'
  },

  root: {
    display: 'flex',
    height: "95px",
    '& .MuiPaper-elevation1':{
    boxShadow:'0px 0px 1px -1px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
  },
  },


  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: '81px',
    marginLeft: drawerWidth,
    boxShadow: 'none',
    
  },

  line: {
    borderLeft: '1px solid #E6E8F1',
    height: '200vh',
    marginLeft: '20px',
  },
  toolbar: {
    position: 'relative',
    height: '81px',
    paddingLeft: '32px',
    paddingRight: '33px',
    backgroundColor: '#ffffff',
  },


  divIconHeader: {},

  divTextHeader: {
    fontFamily: 'Roboto',
    margin: 'auto',
    marginRight: '12px',
    marginLeft: '125px',
    textAlign: 'right',
    
  },

  helloHeader: {
    width: '297px',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: 'normal',
    color: '#474747',
    opacity: '0.5',
    '& span': {
      fontWeight: '300',
    },
  },

  titleHeader: {
    fontSize: '13px',
    fontWeight: 'normal',
    lineHeight: '0.92',
    color: '#636e71',
  },

  divAvatarHeader: {
    margin: 'auto',
    marginRight: '0px',
    marginLeft: '0px',
    '& button': {
      padding: '0px',
    },
  },

  badgeAvatarHeader: {
    '& span': {
      right: '2%',
      padding: '0',
      backgroundColor: '#ffffff',
    },
  },

  avatarHeader: {
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '1.56',
    textAlign: 'center',
    backgroundColor: '#146fd1',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    marginTop: '190px',
    marginLeft: '5px',
    ' & .MuiList-root': {
      marginTop: '150px',
    },
    '& .MuiListItem-root': {
      paddingBottom: '16px !important',
    },

    '& .MuiListItem-button': {
      transition: 'none',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    '& .MuiListItem-gutters':{
      paddingLeft:'14px',
    },

  },

  drawerT: {
    width: drawerWidth,
    backgroundColor: 'transparent',
    height: '100vh',
    flexShrink: 0,
    position: 'absolute',
  },

  headerDrawerIcon: {
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '49px',
    '& svg': {
      width: '125px',
    },
  },

  leftIcon: {
    marginLeft: '0px',
    marginRight: '20px',
    width: '18px',
    minWidth: '18px',
    fill: '#929292',
  },


  leftIconC: {
    marginLeft: '0px',
    marginRight: '20px',
    width: '18px',
    minWidth: '18px',
    fill: '#F6134B',
  },

  rightIcon: {
    marginLeft: '-13px',
    marginTop:'8px',
    width: '10px',
   },

  divMesagge: {
    marginLeft: '560px',
    fill: '#3249EB',
  },

  divText: {
    '& p': {
      fontFamily: 'Roboto',
      color: '#3249EB',
      fontSize: '14px',
      marginLeft: '6px',
      marginTop: '8px',
      width:'90px',
    },
  },

  line2: {
    borderLeft: '1px solid #E6E8F1',
    height: '82px',
    marginLeft: '20px',
  },

  line3: {
    borderLeft: '1px solid #E6E8F1',
    height: '82px',
    marginLeft: '20px',
  },
  divNot: {
    marginLeft: '34px',
    fill: '#979797',
  },

  line4:{
    borderLeft: '4px solid #F6134B',
    height: '25px',
   }

}));

export default HomePageStyles;
