import React from 'react';
import { Row, Col} from 'reactstrap';
const PackageStep = ({packages}) => (
    <>
      
      <h2>Which package do you need?</h2>
          <Row>
            {packages.map(pack => {
              return (
                <Col md="4">
                  <div>
                    <h3>{pack.title}</h3>
                    <p>{pack.price} EGP</p>

                    <ul>
                      <li>{pack.time} hour shoot</li>
                      <li>Unlimited photos</li>
                      <li>Editing Included</li>
                    </ul>
                  </div>
                </Col>
              )
            })}
          </Row>
      
    </>
  )

export default PackageStep;