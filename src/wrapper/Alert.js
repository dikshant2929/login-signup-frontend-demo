import React from 'react';
import SweetAlert from 'sweetalert2-react';

const Alert = ({ show = false, title = "Title", text = "", onCancel }) => {

    const [showAlert, setShowAlert] = React.useState(show)

    const handleConfirm = (status) => {
        setShowAlert(status);
        onCancel(status);
    }

    return (
        <SweetAlert
            show={showAlert}
            title={title}
            text={text}
            onConfirm={() => handleConfirm(false)}
        />
    );
}

export default Alert;