import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Result = () => {
  return (
    <div>
        <div>
            <Container class="result">
                <Row>
                    <Col sm="12" lg="4">
                        <figure class="figure">
                                <center><img class="media"  src="http://i.giphy.com/4fDWVPMoSyhgc.gif" /></center>
								<figcaption class="figcaption">"This time, let go your conscious self and act on instinct."</figcaption>
						</figure>
                    </Col>
                    <Col sm="12" lg="8">
                        <span class="citation">"Don't under&shy;estimate the Force. I suggest you try it again, Luke."</span>
                        <p>Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. I have traced the Rebel spies to her. Now she is my only link to finding their secret base.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
};
  
export default Result;