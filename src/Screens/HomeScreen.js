import React from 'react'
import { Carousel } from 'react-bootstrap';
const HomeScreen =()=>{
    return(
        <>
            <div>
            <marquee>VTU Results 2024 out- Check Exam results here!!!
                <a href='#'>click here...</a>Best of Luck!!!</marquee>
        </div>
        <div>
            <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img1.jpg"
                            alt="First slide"/>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img3.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img4.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img5.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img6.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img7.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img8.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img9.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="Image/img10.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}
export default HomeScreen;