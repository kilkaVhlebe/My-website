import axios from "axios";

export const getReviews = async () =>{
    return await axios.get('http://localhost:1337/all/reviews')
    .then((data)=>{
        return data.data
    })
    .catch((error) => {
        console.error(error); 
    })
}