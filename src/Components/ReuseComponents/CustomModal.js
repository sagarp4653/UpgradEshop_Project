import { Button } from "@mui/base";
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { deleteProductFromProductListAction } from "../Redux/Action/ProductStoreAction";

const CustomModal = ({isOpen = false, handleClose, cancelHandler,  confirmHandler }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
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
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            <Button onClick={cancelHandler}>Cancel</Button>
            <Button onClick={confirmHandler}>Confirm</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
