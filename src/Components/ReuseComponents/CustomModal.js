import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import '../../Common/CSS/position.css'
import { deleteProductFromProductListAction } from "../Redux/Action/ProductStoreAction";

const CustomModal = ({isOpen = false, handleClose, cancelHandler,  confirmHandler }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm deletion of product!
          </Typography>
          {/* <Typography> &nbsp; </Typography> */}
          <Typography style={{color: 'grey'}} id="modal-modal-description" sx={{ mt: 2 }}>
           Are you sure you want delete the product ?
           <Typography> &nbsp; </Typography>
           <div className="flex-row justify-content-end">
            <Button size="small" variant="contained" color="primary" style={{marginRight : '10px'}} onClick={confirmHandler}>OK</Button>
            <Button size="small" variant="contained" color="primary" onClick={cancelHandler}>Cancel</Button>
           </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
