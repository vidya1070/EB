
import React from "react"
import { Card } from "react-bootstrap";

import { Container } from "react-bootstrap";
// import wtloss from 'E:\React\todos_list\src\component\img\weightloss.jpeg';

export default function Cards() {
    return (
        <>
           <Container>
                <div className="row">
                    <Card style={{ width: '23rem' }}>
                        <Card.Header><Card.Title>Weight Loss</Card.Title></Card.Header>

                        <Card.Img variant="top" src="https://img.favpng.com/15/25/5/ketogenic-diet-fitness-centre-physical-fitness-weight-loss-adipose-tissue-png-favpng-2x9FxGL9zTSHwH2YTsMLJqBVq.jpg" style={{ height: '400px' }} />
                        <Card.Body>

                            <Card.Text>
                                All physical activity can help you burn calories. However, resistance training — such as weight lifting — has benefits that go beyond that. Resistance training helps increase the strength, tone, and amount of muscle you have.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '23rem' }}>
                        <Card.Header><Card.Title>Weight Gain</Card.Title></Card.Header>
                        <Card.Img variant="top" src="https://www.gainingtactics.com/wp-content/uploads/2022/02/weight-gain-workout.png" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Text>
                                You will gain weight from lean muscle mass that you add by building your muscles with exercise or weightlifting. But this won't happen right away. It will take you at least a month or two to add any lean muscle mass that would show up in your weight.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '23rem' }}>
                        <Card.Header><Card.Title>Body Building</Card.Title></Card.Header>
                        <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/777/512/png-clipart-physical-fitness-fitness-centre-general-fitness-training-strength-training-others-miscellaneous-physical-fitness.png" style={{ height: '400px' }} />
                        <Card.Body>
                            <Card.Text>
                                The goal with hypertrophy training is to push the muscle into a zone of complete fatigue so that during the recovery period, your muscle will be forced to adapt to the stress placed on it.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
}