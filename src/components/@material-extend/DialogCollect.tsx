import { Dialog } from "@mui/material";
import React, { useState } from "react";

interface Props {
  modalType: string;
  handler: boolean;
  closeHandler: () => void;
}

const DialogCollect = ({ modalType, handler, closeHandler }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(handler);
  let body = undefined;

  const handleDialogClose = () => {
    setModalOpen(false);
  };

  // switch (modalType) {
  //     case ModalType.
  // }

  return (
    <Dialog open={handler} onClose={handleDialogClose}>
      {body}
    </Dialog>
  );
};

export default DialogCollect;
