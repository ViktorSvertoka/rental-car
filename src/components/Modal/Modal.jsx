import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Close from '../../images/close.svg';

import { Wrapper, Button, Image } from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 541,
  height: 752,
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
};

export default function BasicModal({ open, onClose, carId }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Wrapper>
            <Button onClick={onClose}>
              <Image src={Close} alt="close-cross" />
            </Button>
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
}
