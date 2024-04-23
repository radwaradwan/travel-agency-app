import React, { useState,useEffect } from 'react';
import styles from './Modal.module.css'
// import { randomNumber } from 'random-number';

function Modal({ modalId, destinationID,mode, currentObject, onAddSubmit }) {
    
    const [currentDestination, setCurrentDestination] = useState({
        id:'',
        image: '',
        title: '',
        rate: '',
        startDate: '',
        endDate: '',
        description: '',
    });
    
    // Update currentDestination when the currentObject changes
    useEffect(() => {
        if (mode === "edit") {
            setCurrentDestination(currentObject);
        }
    }, [mode, currentObject]);

    function getRandomInt(min, max) {
        min = Math.ceil(min); // Round up to the nearest integer
        max = Math.floor(max); // Round down to the nearest integer
        return Math.floor(Math.random() * (max - min + 1)) + min; // Return a random integer within the range
    }
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        if(mode==="add"){
            currentDestination.id=getRandomInt(1,100000);
        }

        // Call the onAddSubmit prop with the currentDestination
        onAddSubmit(currentDestination);
        

        
        console.log("from modal",currentDestination);
        // Clear the form fields
        setCurrentDestination   ({
            image: '',
            title: '',
            rate: '',
            startDate: '',
            endDate: '',
            description: '',
        });

        // if(mode==="add"){
        //     toast.success('Destination Added successfully.');
        // }
        // else if (mode==="edit"){
        //     toast.success('Destination Updated successfully.');
        // }
        
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCurrentDestination({...currentDestination, image: reader.result});
            };
            console.log(file);
            reader.readAsDataURL(file);
            console.log("image path",currentDestination.image);
        }
    };
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0]; // Get the selected file
    //     if (file) {
    //       // Extract the path from the file object
    //         const path = URL.createObjectURL(file);
    //         setCurrentDestination({...currentDestination, image: path});
    //         console.log(path);
    //         }
            
    //     };
    // const handleFileChange = async (event) => {
    //     const file = event.target.files[0]; // Get the selected file
    //     if (file) {
    //         try {
    //             const resizedImage = await resizeImage(file); // Resize the image
    //             setCurrentDestination({ ...currentDestination, image: resizedImage });
    //         } catch (error) {
    //             console.error('Error resizing image:', error);
    //         }
    //     }
    // };
    
    // const resizeImage = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             const img = new Image();
    //             img.src = event.target.result;
    //             img.onload = () => {
    //                 const canvas = document.createElement('canvas');
    //                 const ctx = canvas.getContext('2d');
    //                 const maxWidth = 200; // Set the maximum width for the resized image
    //                 const maxHeight = 200; // Set the maximum height for the resized image
    //                 let width = img.width;
    //                 let height = img.height;
    
    //                 if (width > height) {
    //                     if (width > maxWidth) {
    //                         height *= maxWidth / width;
    //                         width = maxWidth;
    //                     }
    //                 } else {
    //                     if (height > maxHeight) {
    //                         width *= maxHeight / height;
    //                         height = maxHeight;
    //                     }
    //                 }
    
    //                 canvas.width = width;
    //                 canvas.height = height;
    
    //                 ctx.drawImage(img, 0, 0, width, height);
    
    //                 canvas.toBlob((blob) => {
    //                     resolve(new File([blob], file.name, { type: 'image/jpeg' }));
    //                 }, 'image/jpeg');
    //             };
    //             img.onerror = (error) => {
    //                 reject(error);
    //             };
    //         };
    //         reader.onerror = (error) => {
    //             reject(error);
    //         };
    //         reader.readAsDataURL(file);
    //     });
    // };
    
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0]; // Get the selected file
    //     if (file) {
    //       // Convert the file to a data URL
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             // Set the data URL to the state
    //             setCurrentDestination({
    //             ...currentDestination,
    //             image: reader.result
    //             });
    //         };
    //         reader.readAsDataURL(file);
    //         }
    //     };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0]; // Get the selected file
    //     if (file) {
    //       // Extract the file name from the File object
    //         const fileName = file.name;
    //         setCurrentDestination({...currentDestination,image: fileName});
    //         }
    //     };

    return (
        <div>
            <div className='modal fade' id={modalId} tabIndex="-1" aria-labelledby="AddDestinationModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{mode === "add" ? "Add Destination" : "Edit Destination"}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className={`form-group d-flex flex-column justify-content-center align-items-center mb-3 ${styles.imageFileContainer}`}>
                                    <div className={`d-flex justify-content-center align-items-center fw-bold ${styles.imageDivStyle}`}>
                                        {currentDestination.image ? (
                                            <img src={currentDestination.image} alt='' />
                                        ) : (
                                            <span className='mt-3'>image preview</span>
                                        )}
                                    </div>
                                    <label htmlFor="imageInput" className={`btn btn-outline-secondary my-3 ${styles.chooseFileButton}`}>Choose Image</label>
                                    <input type="file" className={`form-control-file ${styles.imageFile} d-none`} id="imageInput" onChange={handleImageChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="titleInput">Title</label>
                                    <input type="text" className="form-control" id="titleInput" value={currentDestination.title} onChange={(e) => setCurrentDestination({ ...currentDestination, title: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rateInput">Rate</label>
                                    <input type="number" className="form-control" id="rateInput" value={currentDestination.rate} onChange={(e) => setCurrentDestination({ ...currentDestination, rate: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDateInput">Start Date</label>
                                    <input type="date" className="form-control" id="startDateInput" value={currentDestination.startDate} onChange={(e) => setCurrentDestination({ ...currentDestination, startDate: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endDateInput">End Date</label>
                                    <input type="date" className="form-control" id="endDateInput" value={currentDestination.endDate} onChange={(e) => setCurrentDestination({ ...currentDestination, endDate: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descriptionInput">Description</label>
                                    <textarea className="form-control" id="descriptionInput" rows="3" value={currentDestination.description} onChange={(e) => setCurrentDestination({ ...currentDestination, description: e.target.value })}></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className={`btn btn-primary ${styles.addEditButton}`} data-bs-dismiss="modal">{mode==="add"? "Add Destination": "Save changes"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
