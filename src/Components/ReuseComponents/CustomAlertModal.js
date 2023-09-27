import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@mui/styles';
// import { Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Paper } from '@mui/material';
import CustomProgressBar from './CustomProgessBar';

const useStyles = {
  alertModal: {
    position: 'fixed',
    top: '16px',
    right: '16px',
    backgroundColor: '#06bc0b',
    height: '50px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: '',
    color: 'white',
    fontWeight: '500',
    transition: 'border-bottom 3s ease-in-out',
    zIndex: '9999'
  },
  closeButton: {
    color: 'white',
    cursor: 'pointer',
    fontSize: ''
  },
  body: {
    display: 'inline-flex',
    height: '100%',
    alignItems: 'center',
    paddingLeft: '16px',
    fontSize: '12px'
  }
};

const CustomAlertModal = ({ message, onClose, isError }) => {
  useStyles.alertModal.backgroundColor = isError ? '#ED4337' : '#06bc0b';
  const classes = JSON.parse(JSON.stringify(useStyles));
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div>
      {show && (
        <Paper style={classes.alertModal}>
          <div className='flex-row align-items-baseline justify-content-between w-100'>
            <div style={classes.body}>
              {message}
            </div>
              <IconButton
              style={classes.closeButton}
              size={"small"}
              onClick={() => {
                setShow(false);
                onClose();
              }}
            >
              <CloseIcon fontSize='6' />
            </IconButton>
          </div>
          {/* <div>
            
          </div> */}
          <CustomProgressBar backgroundColor={useStyles.alertModal.backgroundColor}/>
        </Paper>
      )}
    </div>
  );
};

export default CustomAlertModal;
