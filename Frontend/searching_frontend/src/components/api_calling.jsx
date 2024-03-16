import React, { useState, useEffect } from 'react'
const Api_calling = (props) => {

    const url = `http://127.0.0.1:8000/api/home/${props.quearyset === '' ? null : props.quearyset}/`

    const [data, setData] = useState([]);

    // Function to fetch data (GET request)
    const fetchData = async (url) => {
        try {
            const res = await fetch(url, {
                method: 'GET',
            });
            const json = await res.json();
            setData(json);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setData(error.toString());
        }
    };


    useEffect(() => {
        fetchData(url);

    }, [props.quearyset]);
    return (
        <>

            <div className="mt-3">

                {data.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mt-3">

                        <div className="d-flex flex-row align-items-center">

                            <span className="star"><img class="image" src={item.image_url} alt="" /></span>

                            <div className="d-flex flex-column" style={{ height: '23vh', width: '100%', 'marginLeft': '10px' }}>


                                <span><h4 style={{ marginBottom: '0px' }}>{item.Movie_name}</h4></span>
                                <p class="relise_date">Relise ({item.Release_data})</p>
                                <div className="d-flex flex-row align-items-center time-text">
                                    <small style={{ color: 'black' }}>{item.description}</small>
                                </div>

                            </div>


                        </div>

                    </div>
                ))}


            </div>

        </>
    );
};



export default Api_calling