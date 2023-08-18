import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalOverlay,
  ModalContent,
  ModalImage,
  CloseButton,
} from './Modal.styled';

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => (
  <ModalOverlay isOpen={isOpen}>
    <ModalContent>
      <CloseButton onClick={onRequestClose}>Close</CloseButton>
      {selectedImage && <ModalImage src={selectedImage} alt="" />}
    </ModalContent>
  </ModalOverlay>
);

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  selectedImage: PropTypes.string,
};

export default ImageModal;
