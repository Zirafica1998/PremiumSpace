import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from "react-i18next";

export default function MessageBox(props) {
  const [open, setOpen] = React.useState(true);
  const [text,setText] = React.useState(props.text);
  const [refresh,setRefresh] = React.useState(props.refresh);
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
    if(refresh){
        window.location.reload(false);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{t("information")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("inf-button")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
