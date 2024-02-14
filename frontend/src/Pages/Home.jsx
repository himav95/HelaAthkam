import Carousel from 'react-bootstrap/Carousel';
import { Row, Col  } from 'react-bootstrap';
import Image1 from '../Asset/Images/Image1.jpg';
import Image2 from '../Asset/Images/Image15.jpg';
import Image3 from '../Asset/Images/Image10.jpg';

// import Hela thkam: page css file here.
import '../Asset/Style/Helaathkam_Page.css';


function Home () {
    return (
        <>

        <Row className='mb-5'>
            <Col></Col>
            <Col xs={8}>
                <h4>Welcome to Hela Athkam, where craftsmanship meets curated elegance! Immerse yourself in a world of handcrafted
                wonders that blend tradition with contemporary allure. 
                Our pieces are more than just products—they are a celebration of heritage and a testament to the skilled artisans
                 behind each creation.</h4>
            </Col>
            <Col></Col>
        </Row>
        
        
        {/* caraousel slides */}
        <Row className='mb-5'>
            <Col></Col>
            <Col>
            <Carousel className='caraouselBlock'>
            {/* first carousel slide */}
            <Carousel.Item interval={2500}>
                <img className="caraousalImg" src={`${Image1}`} alt="First slide" />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* second carousel slide */}
            <Carousel.Item interval={3500}>
                <img className="caraousalImg" src={`${Image2}`} alt="Second slide" />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* third carousel slide */}
            <Carousel.Item interval={3500}>
                <img className="caraousalImg" src={`${Image3}`} alt="Third slide" />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Col>
        <Col></Col>
        </Row>
        
        
        
        
        
        </>
    )
}

export default Home