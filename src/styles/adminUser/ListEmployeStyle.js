import { makeStyles } from '@material-ui/core/styles';
const ListEmployeeStyle = makeStyles((theme) => ({
  /**
 * Header Text
 */
  divHeader: {
    position: 'relative',
    height: '48px',
    width: '723px',
    display: 'flex',
    marginTop: '30px',
    marginLeft: '32px',
    marginBottom: '1%',
    '& p': {
      margin: '0px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      fontSize: '25px',
      fontWeight: 'normal',
      color: '#146fd1',
      '& span': {
        fontWeight: '900',
      },
    },
  },

  divSidebar: {
    width: '100%',
    backgroundColor: '#f9f9f9',
  },

  iconClose: {
    marginLeft: '430px',
    cursor: 'pointer',
  },

  divInfo: {
    position: 'relative',
    height: '48px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4%',
    marginLeft: '32px',
    '& p': {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#2d3436',
      '& span': {
        fontWeight: '900',
      },
    },
  },

  findT: {
    width: '679px',
  },

  searchTextField: {
    fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
    width: '100% !important',
    height: '48px',
    marginLeft: '32px',
    "& label": {
      color: '#2d3436',
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
      top: '3px',
      transform: 'translate(14px, 15px) scale(1)',
    },

    '& .MuiOutlinedInput-root': {
      paddingRight: '25px !important',
    },
    "& div ": {
      '& input': {
        padding: '14.0px 14px',
        height: '16px',
        width: '500px',
      },
      '& fieldset': {
        border: 'solid 1.5px #146fd1',
      },
      '& select ': {
        backgroundColor: 'transparent !important',
      },
    },
    '& p': {
      marginTop: '0px',
    },
  },

  imgOrder: {
    '& .MuiSvgIcon-root': {
      verticalAlign: 'middle',
    }

  },

}));

export default ListEmployeeStyle;