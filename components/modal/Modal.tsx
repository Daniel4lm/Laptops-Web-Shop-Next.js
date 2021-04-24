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
}; // document.body document.querySelector("#modal-root")

export default Modal;

/*
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalWindow = styled.div`
  position: relative;
  background: white;
  margin: auto;
  margin-top: 10%;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
  z-index: 999;
  animation: show-modal 0.2s linear;

  .modal-header {
    display: flex;
    justify-content: space-between;
  }

  .modal-title {
    font-size: 2rem;
    color: rgb(44, 44, 44);
  }

  .modal-close-button {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
    background-color: rgb(22, 22, 22);
    border-radius: 2px;
    color: #fff;
    opacity: 0.9;
    cursor: pointer;
    padding: 0.4rem 0.8rem;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;
  }

  .modal-close-button:hover {
    color: #000;
    background-color: transparent;
    border-color: rgb(22, 22, 22);
  }

    button {
        font-size: .9rem;
        font-weight: 700;
        border: none;
        border-radius: 3px;
        padding: .3rem 1rem;
        margin-left: .5rem;
    }

    .button-default {
        background: #247BA0;
        color: #fff;
    }

  @keyframes show-modal {
    0% {
      opacity: 0;
      transform: translateY(-200%);
    }
  }
`;
*/