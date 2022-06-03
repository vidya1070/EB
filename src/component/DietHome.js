import React from "react";
import { Container, Card, Button, CardText, CardTitle, CardSubtitle, CardImg, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DietHome() {

    const bagdemo2 = {
        backgroundImage: "url('https://img.freepik.com/free-photo/different-vegetables-seeds-fruits-table-healthy-diet-flat-lay-top-view_1150-42611.jpg?t=st=1649673706~exp=1649674306~hmac=d4f3c877ad1077c815aa5fa4c68f449c7c05225848fd0f9baa6fc93b32e73da2&w=1060')",
        height: '500px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const bagdemo3 = {
        backgroundImage: "url('https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_worst_brunch_slideshow/1800ss_unsplash_rf_stack_of_pancakes.jpg?resize=700px:*&output-quality=75')",
        height: '500px',

        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <>
            <Container>
                <div className="container">
                    <div className="row"  >
                        <div className="col-md-6 d-grid gap-3 " style={{ backgroundColor: '#F0FFF0', height: '500px' }} >
                            <div>
                                <div className=" offset-md-2 col-md-6" style={{ margin: '20px', margin: '40px', border: '2px solid #800080', height: '250px', width: '600px', background: 'white', paddingLeft: '40px' }}>
                                    <h5 style={{ backgroundColor: '#008000', color: '#F5F5F5', padding: '10px', width: '300px', margin: '10px' }}>Diet & Weight Management</h5>
                                    <h1 style={{ fontSize: '40px', padding: '20px', color: '	#696969' }}>Healthy Eating Habits From Around the World</h1>

                                </div>
                                <div style={{ display: '-ms-inline-grid' }}>
                                    <h6 style={{ backgroundColor: 'white', padding: '10px', marginLeft: '30px', width: '350px' }}>Does Fasting Help or Hurt Your Health?</h6>
                                    <h6 style={{ backgroundColor: 'white', padding: '10px', marginLeft: '30px', width: '250px' }}>Healthy Weight</h6>
                                    <h6 style={{ backgroundColor: 'white', padding: '10px', marginLeft: '30px', width: '300px' }}>Healthy Eating & Nutrition</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-grid gap-3 " style={bagdemo2} >
                        </div>
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'left', textDecoration: 'underline yellowgreen 4px', padding: '20px', margin: '20px' }} >Food Facts</h3>
                        <div className="row">
                            <Card style={{ width: '26rem' }}>
                                <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/ginger_health_benefits_slideshow/1800ss_thinkstock_rf_ginger_tea.jpg?resize=652px:*&output-quality=75" style={{ height: '300px' }} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="#">Fight Germs</Card.Link></Card.Title>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Certain chemical compounds in fresh ginger help your body ward off germs. They’re especially good at halting growth of bacteria like E.coli and shigella, and they may also keep viruses like RSV at bay.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '26rem' }}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-photo/peanut-butter-sandwiches_114579-14128.jpg?t=st=1649681380~exp=1649681980~hmac=8fc2d5d262893c853ec2c09bbc63ac4ef22236216c40ab963598ad9346a2495c&w=1060" style={{ height: '300px' }} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="https://www.webmd.com/diet/ss/slideshow-health-benefits-nut-butters">Health Benefits of Nut Butters</Card.Link></Card.Title>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Nut Butters go beyound being a tasty treat. Find out how they can keep you feeling full,burn energy, and more.
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '26rem' }}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-photo/side-close-up-view-fruits-red-pomegranates-cutting-board-red-tablecloth_140725-122911.jpg?t=st=1649681511~exp=1649682111~hmac=5ededa046de61cc5ff52bdeaedfb865e9897c761f9913864741d1622deba1f5a&w=1060" style={{ height: '300px' }} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="https://www.webmd.com/diet/video/video-one-food-wonder-pomegranates">The Facts About Pomegranates</Card.Link></Card.Title>
                                    <Card.Text style={{ textAlign: 'justify' }}>
                                        Learn about this fruit whose juice packs more antioxidants than green tea and red wine.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <h3 style={{ textAlign: 'left', textDecoration: 'underline yellowgreen 4px', padding: '20px', margin: '20px' }} >Healthy Eating</h3>


                <div className="row" style={{ border: '1px solid gray' }}>
                    <div className="col-md-6 d-grid gap-3 " >
                        <div style={bagdemo3}></div>
                        <div>
                            <h4>What to Eat and What to Avoid</h4>
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div className="row">
                            <div className="col-md-6 ">
                                <Card>
                                    <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/00/52/87/43/1000_F_52874381_Ucxx67h9KLuxSXiNGcsmHfSjAuqRXqDr.jpg" style={{ width: '300px', height: '200px' }} />
                                </Card>
                            </div>
                            <div className="col-md-6">

                                <a href="https://www.webmd.com/diet/video/video-good-foods-bad-reputation"> <h4> Which Fruits Have the Most Sugar?</h4> </a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 ">
                                <Card>
                                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/sandwich-hamburger-with-juicy-burgers-tomato-red-cabbage_2829-4119.jpg?t=st=1649687425~exp=1649688025~hmac=54ae88b0c2326240759cd85e033ac404465b469db157233fdb9afc3c176f642c&w=1060" style={{ width: '300px', height: '180px' }} />
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <a href="https://www.webmd.com/diet/video/video-good-foods-bad-reputation"><h4> 3 Foods That Get a Bad Rap</h4>   </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <Card>
                                    <Card.Img variant="top" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/tips_to_avoid_germs_when_you_have_cancer_slideshow/1800ss_getty_rf_plate_of_sushi.jpg?resize=600px:*&output-quality=75" style={{ width: '300px', height: '180px' }} />
                                </Card>
                            </div>
                            <div className="col-md-6">
                                <a href="https://www.webmd.com/diet/ss/slideshow-best-worst-sushi-health">   <h4> Bset And Worst Sushi for Your Health</h4>     </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"  >
                    <h3 style={{ textAlign: 'left', textDecoration: 'underline yellowgreen 4px', padding: '20px', margin: '20px' }}> BEGIN BY IDENTIFYING YOUR GOALS </h3>
                    <div style={{textAlign:'justify'}}>

                        Have you taken the time to define your wellness goals? Without a clear objective in mind, you're unlikely to make significant progress.

                        Your current goals may look different than those held by your friends and family members — and you may adjust your goals to reflect your changing life circumstances over time. Common themes include:
                        
                        <ul>
                            <li>Weight Loss</li>
                            <li>Weight Gain</li>
                            <li>Body Building</li>
                        </ul>
                        Running a marathon or completing a triathlon
                        As you determine which objectives should underscore your diet and fitness efforts, opt for SMART goals. This commonly used acronym helps you develop goals that can realistically be achieved with a little planning and effort.
                    </div>
                </div>

                <div className="row" style={{margin:'10px'}}>
                            <Card style={{ width: '26rem' }}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-photo/weight-loss-scale-with-centimeter-top-view_1150-42311.jpg?t=st=1649689104~exp=1649689704~hmac=3ebb9dfba352b9842d290213c98be7d7ad3bd0ac13017038e0b900f54be78be3&w=1060" style={{ height: '300px' }} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="/WeightL">Weight Loss</Card.Link></Card.Title>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '26rem' }}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-psd/paper-bag-full-delicious-organic-food-diet-menu_23-2148322495.jpg?t=st=1649689671~exp=1649690271~hmac=680dd58cac4aaf18ce18ccab06fbae282606d395a3caabd8db283379459e0c00&w=1060" style={{ height: '300px' }} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="/Bbuilding">Body Building</Card.Link></Card.Title>
                                    
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '26rem' }}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-photo/fruits-vegetables-still-life_23-2148194524.jpg?t=st=1649689671~exp=1649690271~hmac=9a86e12694f753399a07fd0c7c24efb7939f8bc8478840ac0ea5dd37119f57e2&w=1060" style={{ height: '300px' }} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="/WeightG">Weight Gain</Card.Link></Card.Title>
                                   
                                </Card.Body>
                            </Card>
                        </div>
            </Container>
        </>
    );
}