import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const firestoreSlice = createSlice({
    name: 'db',
    initialState:[{
        productName: "",
        productDescription: "",
        productPrice: "",
        productImageUrl: ""
    }],

    reducers: {
        addProduct: async(state, action) => {
            try {
                const docRef = await addDoc(collection(db, "products"), action.payload);

                const imageRef = ref(storage, `ProductImages/`, action.payload);
                uploadBytes(imageRef).then(() => {
                    getDownloadURL(imageRef).then((url) => {
                    alert("Image Uploaded");
                })})
                alert('Added successfully');
            } catch(err){
                console.log(err)
            }
        }
    }
})

export const {addProduct} = firestoreSlice.actions;

export default firestoreSlice.reducer;