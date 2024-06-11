import React, { useState, useEffect } from "react";

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setImages([data.message]);
                setLoading(false);
            })
        
    }, []);
    return(
    <div>
        {loading ? <p>Loading...</p> :
            images.map((image,index) => (
                <img key={index} src={image} alt={"A Random Dog"}
                />
            ))}
    </div>
    );
}


export default App;