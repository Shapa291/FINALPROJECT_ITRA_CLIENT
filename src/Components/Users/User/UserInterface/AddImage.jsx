import React from 'react'
import { useState } from "react";
import classes from "./UserInterface.module.css";
import { PostImages } from '../../../../API/API';
import { useTranslation } from 'react-i18next';

const AddImage = (props) => {

    const { t } = useTranslation()

    let images = []

    const [drag, setDrag] = useState(false);

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    }

    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    }

    const onDropHandler = (e) => {
        e.preventDefault();
        let addedfiles = [...e.dataTransfer.files];
        const body = new FormData();
        addedfiles.forEach((file) => {
            body.append("image", file);
            PostImages(body)
                .then((response) => {
                    images.push(response.data.data.url);
                    props.getImages(images)
                });
        });
        setDrag(false);
    }
    return (
        <div>
            <div className={classes.drag}>
                {drag ? (
                    <div
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragOver={(e) => dragStartHandler(e)}
                        onDrop={(e) => onDropHandler(e)}
                    >
                        {t("userprofile.imgdrop")}
                    </div>
                ) : (
                    <div
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragOver={(e) => dragStartHandler(e)}
                    >
                        {images[0]}
                        {t("userprofile.imgform")}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddImage
