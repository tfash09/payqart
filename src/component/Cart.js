import {Row, Col, Image, Card} from 'react-bootstrap';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Cart = ({items, setTotalCart}) =>{
    let totalCartValue = 0;
    return(
        <div className="cart">
            <p>ORDER SUMMARY</p>
            <Card body className="mt-3 mb-2">
                <div className="items">
                    {items.map((item, i) => {
                        totalCartValue = totalCartValue + (item.price * item.quantity);
                        setTotalCart(totalCartValue);
                        return(
                            <div className="item" key={i}>
                                <Row>
                                    <Col sm="4"><Image src={item.imageUrl} /></Col>
                                    <Col sm="8 mt-2 w-100" className="itemDetails">
                                        <p>{item.productName}</p>
                                        <p>₦{numberWithCommas(item.price)}</p>
                                        <p>Qty: {item.quantity}</p>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })}
                </div>
            </Card>
            <Card body className="">
                <Row>
                    <Col sm="6">Total Cart Value: </Col>
                    <Col sm="6"><b className="float-right">₦{numberWithCommas(totalCartValue)}</b></Col>
                </Row>
            </Card>
        </div>

    )
}

export default Cart