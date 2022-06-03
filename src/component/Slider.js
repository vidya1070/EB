import React from 'react';
import { Carousel } from 'react-bootstrap';
const Slider = () => {
    return(
        <div className="container">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/couple-training-together-gym_1303-25228.jpg?t=st=1649047822~exp=1649048422~hmac=f332eda0518abba40f27e9d90bac9a3b13232290ad9238968c3a74e778289f1a&w=740"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Be active Daily for Menatal and physical Health</h3>
      <p>Get Our Exciting Fitness Plans</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/sportswoman-sportswear-training-gym_1157-30349.jpg?t=st=1649050163~exp=1649050763~hmac=c5ed145c883d48316dfadd7fece1b37d9b0cc8d72f0b75b631627f431dd0b862&w=740"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Get Fit Don't Quit</h3>
      <p>Your Fitness is our Motivation</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/male-motivation-muscular-activity-dance_1139-716.jpg?t=st=1649051513~exp=1649052113~hmac=49d4d9a5cbdf7fbb83a87fe39ff7159adc885829c538a14dcc4d39141fd5ec4d&w=740"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Once You See Result You Get Addicted</h3>
      <p>To Enjoy Glow of Good Health you Must Exercise</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/female-yoga-instructor-helping-woman-doing-exercise-group-tra_1163-5002.jpg?t=st=1649220795~exp=1649221395~hmac=f42e890b571e5e82dc3838af50e869be8966c7aef0141d202258d55d2303d973&w=1060"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Once You See Result You Get Addicted</h3>
      <p>To Enjoy Glow of Good Health you Must Exercise</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://as2.ftcdn.net/v2/jpg/01/71/23/49/1000_F_171234990_cSNErNz2LkXTP7YxMNzRY3jDhz0laMa2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Be active Daily for Menatal and physical Health</h3>
      <p>Get Our Exciting Fitness Plans</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>

      

    );

}
export default Slider;
