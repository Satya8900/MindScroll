import { useEffect, useState } from "react";
import api from "../utils/api";

function Spinner() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const requestInterceptor = api.interceptors.request.use(config => {
            setLoading(true);
            return config;
        });

        const responseInterceptor = api.interceptors.response.use(
            response => {
                setLoading(false);
                return response;
            },
            error => {
                setLoading(false);
                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return (
        <>
            {loading &&
                <div className="wrapper">
                    <div className="spinner"></div>
                </div>
            }
        </>
    )
}

export default Spinner;