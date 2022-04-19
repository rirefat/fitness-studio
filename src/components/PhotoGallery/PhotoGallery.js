import React from 'react';
import PhotoAlbum from "react-photo-album";
// import photos from "./photos";

const PhotoGallery = () => {
    const photos = [
        {
            src: "https://i.ibb.co/ZT3sWB2/package-3.png",
            width: 800,
            height: 600
        },
        {
            src: "https://i.ibb.co/Pz4xdBV/img1.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/dcmDr8h/img2.jpg",
            width: 800,
            height: 600
        },
        {
            src: "https://i.ibb.co/1mncGTc/img3.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/T8RCNdM/img4.jpg",
            width: 800,
            height: 600
        },
        {
            src: "https://i.ibb.co/2dtXqNr/img5.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/tb1kMWk/img6.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/r2F7pLm/img7.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/7bNpjw4/img8.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/MMxXpcC/img9.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/98Ss8G6/img10.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/cvzxcp5/img11.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/Gd4q4kJ/img12.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/mGxx5SZ/img13.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/26TdGDJ/img14.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/sbXmtz5/img15.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/kSLxsvb/img16.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://i.ibb.co/LZ98ByK/package-2.png",
            width: 1600,
            height: 900
        }
    ];
    return (
        <div className='container photo-gallery text-center my-5'>
            <h1 className='mb-5 mt-3'>Fitness Studio Photo Gallery</h1>
            <PhotoAlbum layout="columns" photos={photos} />
        </div>
    );
};

export default PhotoGallery;
















