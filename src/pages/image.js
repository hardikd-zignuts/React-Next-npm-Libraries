import React, { useState } from 'react'
import ReactCrop from 'react-image-crop'
import Image from 'next/image'

const ImageCrop = () => {
    const [crop, setCrop] = useState('')
    console.log(crop)
    const handleCrop = () => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
        const croppedImage = canvas.toDataURL('image/jpeg');
        console.log(croppedImage);
    };
    return (
        <div>
            <h1>React Image Crop</h1>
            <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                <Image src={'https://source.unsplash.com/1280x700/?nature'} priority width={1280} height={720} alt='' />
            </ReactCrop>
        </div>
    )
}

export default ImageCrop
