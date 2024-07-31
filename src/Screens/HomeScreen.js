import React from 'react'
import { Carousel,Row,Col,Button } from 'react-bootstrap';
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
            <br/>
            <div>
                <Row>
                    <Col>
                    <h3><a href='#'>Vision</a></h3>
                    <p className='p-style'>To plan the development of technical education, 
                            to establish value-based and need-based education and training in engineering
                         and technology,with a view to generate qualified and competent manpower,
                         responsive to technological and societal needs.</p>
                         <p>To plan the development of technical education, 
                        to establish value-based and need-based education and training in engineering
                         and technology, with a view to generate qualified and competent manpower,
                         responsive to technological and societal needs.</p>
                         <Button variant='warning'>Read More</Button>
                    </Col>

                    <Col>
                    <h3><a href='#'>Mission</a></h3>
                    <p className='p-style'>To plan the development of technical education, 
                        to establish value-based and need-based education and training in engineering
                         and technology, with a view to generate qualified and competent manpower,
                         responsive to technological and societal needs.</p>
                         <p>To plan the development of technical education, 
                        to establish value-based and need-based education and training in engineering
                         and technology, with a view to generate qualified and competent manpower,
                         responsive to technological and societal needs.</p>
                         <Button variant='warning'>Read More</Button>
                    </Col>

                    <Col>
                    <h3><a href='#'>Mandate</a></h3>
                    <p className='p-style'>To plan the development of technical education, 
                        to establish value-based and need-based education and training in engineering
                         and technology, with a view to generate qualified and competent manpower,
                         responsive to technological and societal needs.</p>
                         <p>To plan the development of technical education, 
                        to establish value-based and need-based education and training in engineering
                         and technology, with a view to generate qualified and competent manpower,
                         responsive to technological and societal needs.</p>
                         <Button variant='warning'>Read More</Button>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}
export default HomeScreen;