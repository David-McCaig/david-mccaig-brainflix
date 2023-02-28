/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "./UploadSuccess.scss";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function UploadSuccess() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }, [navigate])

    return (
        <div>
            <iframe src="https://embed.lottiefiles.com/animation/88860" className='upload__success'></iframe>
        </div>
    );
}

export default UploadSuccess;