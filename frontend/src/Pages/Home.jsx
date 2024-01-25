import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Asset/Images/Image1.jpg';
import Image2 from '../Asset/Images/Image2.jpg';
import Image3 from '../Asset/Images/Image3.jpg';


function Home () {
    return (
        <>
        
        <Carousel>

            {/* first carousel slide */}
            <Carousel.Item interval={3500}>
                <img className="d-block w-100" src={`${Image1}`} alt="First slide" />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* second carousel slide */}
            <Carousel.Item interval={3500}>
                <img className="d-block w-100" src={`${Image2}`} alt="Second slide" />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* third carousel slide */}
            <Carousel.Item interval={3500}>
                <img className="d-block w-100" src={`${Image3}`} alt="Third slide" />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        
        
        
        
        </>
    )
}

export default Home