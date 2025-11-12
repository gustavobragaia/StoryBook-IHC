import React, { useState } from 'react';
import { ButtonSOS } from '../stories/buttonSOS';
import { ModalSOS } from '../stories/ModalSOS';

export const SOSButtonWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonSOS onClick={() => setIsOpen(true)} />
      {isOpen && (
        <ModalSOS
          onClose={() => setIsOpen(false)}
          onCallContact={() => alert('Ligando para contato de segurança...')}
          onCallCVV={() => alert('Ligando para o CVV...')}
        />
      )}
    </>
  );
};