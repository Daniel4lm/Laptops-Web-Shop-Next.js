import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface ModalType {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactChild | React.ReactChild[];
}

const useStyles = makeStyles({
  modalContainer: {
    padding: '2rem',
    background: '#000',
    opacity: 0.6,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: 'all 5s ease-in-out',
  },
  modalWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 500,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto',
    outline: 0,
  },
  modalWindow: {
    position: 'relative',
    background: 'white',
    width: '90%',
    //height: '80%',
    margin: 'auto',
    marginTop: '5rem',
    //padding: '2rem',
    borderRadius: '0.4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    zIndex: 999,
  },
  closeBtn: {
    color: "inherite",
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    fontSize: '4rem'
  },

});

export const Modal = ({ isOpen, onClose, title, children }: ModalType) => {

  const classes = useStyles();

  if (!isOpen) {
    return null;
  }

  const stopClick = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <>
      <Box className={classes.modalContainer} />
      <Box className={classes.modalWrapper} onClick={onClose}>
        <Box className={classes.modalWindow} onClick={stopClick}>
          <Button className={classes.closeBtn} onClick={onClose} >
            <HighlightOffIcon />
          </Button>
          {children}
        </Box>
      </Box>
    </>,
    document.querySelector("#modal")
  );
}; 

export default Modal;
