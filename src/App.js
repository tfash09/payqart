import './App.css';
import React, { Suspense } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
const Home = React.lazy(() => import('./component/Home'));
const Cart = React.lazy(() => import('./component/Cart'));
const Approval = React.lazy(() => import('./component/Approval'));

function App() {
  const [totalCart, setTotalCart] = React.useState(0);

  const cart = [
    { imageUrl: 'https://www.corning.com/content/dam/corning/microsites/csm/gorillaglass/Samsung/CGG_samsung_galaxy_s10.jpg', 
      productName: 'Meeysoo P45 Pro', 
      price: 42900, 
      quantity: 1 
    },
    { imageUrl: 'https://stylesatlife.com/wp-content/uploads/2019/06/Long-Sleeve-Cotton-Shirt-Mens.jpg', 
      productName: "Men's long sleeve shirts", 
      price: 6800, 
      quantity: 2 
    }
  ]

  const employeeModes = [
    { imageUrl: 'https://www.corning.com/content/dam/corning/microsites/csm/gorillaglass/Samsung/CGG_samsung_galaxy_s10.jpg', 
      modeName: 'Paid Employment', 
      value: 1 
    },
    { imageUrl: 'https://stylesatlife.com/wp-content/uploads/2019/06/Long-Sleeve-Cotton-Shirt-Mens.jpg', 
      modeName: 'Self Employed/ Freelance', 
      value: 2 
    },
    { imageUrl: 'https://stylesatlife.com/wp-content/uploads/2019/06/Long-Sleeve-Cotton-Shirt-Mens.jpg', 
      modeName: 'Corporate Organisation', 
      value: 3 
    }
  ]

  const months = [
    {       
      month: 1, 
      color: "#FF5151", 
      monthName: "Aggressive", 
    },
    {       
      month: 2, 
      color: "#FF51F3", 
      monthName: "Stretching", 
    },
    {       
      month: 3, 
      color: "#6751FF", 
      monthName: "Forcused", 
    },
    {       
      month: 4, 
      color: "#51FFED", 
      monthName: "Council", 
    },
    {       
      month: 5, 
      color: "#FFAE51", 
      monthName: "Mild", 
    },
    {       
      month: 6, 
      color: "#6DFF51", 
      monthName: "Gentle", 
    },
  ]


  return (
    <Container fluid className="p-0 m-0">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="section">
          <Row className="h-100" style={{ overflowY: 'auto' }}>
            <Col sm="12" md="6" lg="3" xl="3" className="p-0 m-0">
              <Home />
            </Col>
            <Col sm="12" md="6" lg="3" xl="3" className="p-0 m-0">
              <Cart
                items={cart}
                setTotalCart={setTotalCart}
              />
            </Col>
            <Col sm="12" md="12" lg="6" xl="6" className="p-0 m-0">
              <Approval
                employeeModes={employeeModes}
                months={months}
                totalCart={totalCart}
              />
            </Col>
          </Row>

        </div>
      </Suspense>
    </Container>
  );
} 

export default App;
