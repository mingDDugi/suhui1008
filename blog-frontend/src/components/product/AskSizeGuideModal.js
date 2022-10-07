import React from 'react';
import AskSizeModal from '../common/AskSizeModal';

const AskSizeGuideModal = ({ visible, onConfirm, }) => {
  return (
    <AskSizeModal
      visible={visible}
      description="/assets/sizeGuide.jpg"
      confirmText="닫기"
      onConfirm={onConfirm}
    />
  );
};

export default AskSizeGuideModal;