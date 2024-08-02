import React from 'react'
import { Carousel,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomeScreen =()=>{
    return(
        <>
            <div>
            <marquee>VTU Results 2024 out- Check Exam results here!!!
                <Link to='/result/loginpage'>click here...</Link>Best of Luck!!!</marquee>
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
                    <h3><Link to='/about' href='#'>Vision</Link></h3>
                        <p className='p-style'>To become an outstanding Technological University at the cutting edge
                            of Science and Technology that produces world class Knowledge-delivery, Research,
                            Extension and Leadership in Technology innovation for Industry and Society.
                        </p>
                        <Link to='/about' className='btn btn-warning'>Read More</Link>
                    </Col>
                    <Col>
                    <h3><Link to='/about' href='#'>Mission</Link></h3>
                        <p className='p-style' >
                        To plan the development of technical education,
                         to establish value-based and need-based education and training in engineering and technology,
                          with a view to generate qualified and competent manpower,
                         responsive to technological and societal needs.
                        </p>
                        <Link to='/about' className='btn btn-warning'>Read More</Link>
                    </Col>
                    <Col>
                    <h3><Link to='/about' href='#'>Mandate</Link></h3>
                        <p className='p-style'>The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.
*Design need based programs that ensure adequate human resource of the right kind.
*Establish objective evaluation and certification systems for students,programs and institutions.
*Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.
                        </p>
                        <Link to='/about' className='btn btn-warning'>Read More</Link>
                    </Col>
                    </Row>
        </div>
        </div>
        </>
    )
}
export default HomeScreen;