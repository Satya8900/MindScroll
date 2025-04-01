import { useState, useEffect } from "react";

const Alert = ({ type, message, color, timeout = 3000 }) => {
    const [visible, setVisible] = useState(true);

    const icons = {
        primary: "info-fill",
        success: "check-circle-fill",
        warning: "exclamation-triangle-fill",
        danger: "exclamation-triangle-fill",
    };

    const colors = {
        primary: "#0d6efd",
        success: "#198754",
        warning: "#ffc107",
        danger: "#dc3545",
    };

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), timeout);
        return () => clearTimeout(timer);
    }, [timeout]);

    if (!visible) return null;

    return (
        <div className={`alert alert-${type} d-flex align-items-center fade show fixed-top mt-5 mx-5 mb-0`} role="alert">
            <svg width={24} height={24} fill={color || colors[type]} className="bi flex-shrink-0 me-2" role="img" aria-label={type}>
                <use href={`/src/assets/Icons.svg#${icons[type]}`} />
            </svg>
            <div>{message}</div>
        </div>
    );
};

export default Alert;
