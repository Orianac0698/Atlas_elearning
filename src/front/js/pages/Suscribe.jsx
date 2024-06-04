import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../styles/components.css';
import { Context } from '../store/appContext';

export const Suscribe = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();

    const courses = [
        { title: "Por 15 dias", price: "$15" },
        { title: "Susbribete a todo los Course", price: "$35" },
        { title: "Con certificado", price: "$40" },
    ];

    const [titleCourse] = useState("indefinido");
    const [courseId] = useState(1);

   /*  function handleAddTrolley(titleCourse, courseId, price) {
        // Remove the $ sign and convert the string to a number
        const cleanedPrice = parseFloat(price.replace('$', ''));
        console.log(titleCourse, courseId, cleanedPrice);
        navigate('/paypal', { state: { totalPrice: cleanedPrice, numberCourse: courseId } });
    } */

    const handleCheckout = (titleCourse, courseId, price) => {
        const cleanedPrice = parseFloat(price.replace('$', ''));
        console.log(titleCourse, courseId, cleanedPrice);

        if (courseId !== undefined) {
            navigate('/paypal', { state: { totalPrice: cleanedPrice, numberCourse: courseId } });
        } else {
            alert('Not Available.');
        }
    };

    return (
        <div className="container-fluid d-flex flex-column justify-content-around align-items-center" style={{ height: "100vh" }}>
            <div className="d-flex align-items-center">
                <h1 className="poppins-extrabold-italic lh-lg fw-light">Unleash your curiosity, enjoy the learning process, and reach new heights with us.</h1>
            </div>
            <div className='d-flex justify-content-center'>
                {courses.map((course, index) => (
                    <div key={index} className='card border-0 cardEdit shadow rounded-5 text-white bg-dark col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-12 me-3' style={{ width: "", height: "50vh" }}>
                        <div className="card-body rounded-4 p-3 d-flex flex-column justify-content-around align-items-center" style={{
                            backgroundColor: (index % 2 === 0) ? "#165D95" : "#3A6F99"
                        }}>
                            <div>
                                <h3 className="card-title fw-bolder fs-2 text-white">{course.title}</h3>
                            </div>

                            <div className="d-flex justify-content-end mt-3">
                                <p className="fs-1 py-1 px-1 me-3 d-inline-flex text-white">{course.price}</p>
                            </div>

                            <div className={`py-2 px-2 border fs-5 rounded-pill d-inline-flex justify-content-center align-items-center btnFav`} onClick={() => handleCheckout(course.title, index, course.price)}>
                                <strong style={{ cursor: "pointer" }}>subscribe</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
