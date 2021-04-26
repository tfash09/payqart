import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import {Typography, FormControlLabel, RadioGroup} from '@material-ui/core';
import { Col, Row, Image, Form, InputGroup, FormControl, } from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import {ArrowBack, CalendarToday} from '@material-ui/icons';


const StepOne = ({employeeModes, handelChange}) => {
    return(
        <div className="stepone">
            <h4>What Do You Do?</h4>
            <Row>
                {employeeModes.map((employeeMode, i) => 
                    <Col md="4" key={i}>
                        <label>
                            <input type="radio" name="employeeMode" onChange={(e) => handelChange(e,"employeeMode")} value={employeeMode.value}  />
                            <Image src={employeeMode.imageUrl} />
                            <p>{employeeMode.modeName}</p>
                        </label>
                    </Col>
                
                )}
            </Row>
            <p>How much do you get paid monthly?</p>
            <Col xs="auto" className="p-0">
                <Form.Label htmlFor="amountPaid" srOnly>
                    Amount Paid
                </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>₦</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        type="number" 
                        min="0" 
                        id="amountPaid" 
                        placeholder="" 
                        name="amountPaid" 
                        onChange={(e) => handelChange(e,"amountPaid")}
                    />
                </InputGroup>
            </Col>
            <p>When is your next salary date?</p>
            <Col xs="auto" className="p-0">
                <Form.Label htmlFor="payDate" srOnly>
                    Pay Date
                </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text><CalendarToday /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        type="date" 
                        id="payDate" 
                        name="payDate" 
                        onChange={(e) => handelChange(e,"payDate")}
                    />
                </InputGroup>
            </Col>
            <p>Do you have any existing loan?</p>
            <RadioGroup aria-label="existingLoan" name="existingLoan">
                <Row className="existingLoan">
                    <Col sm="6" className="d-flex justify-content-center yes">
                        <FormControlLabel 
                            value="yes" 
                            control={<Radio />} 
                            label="Yes"
                            onChange={(e) => handelChange(e,"existingLoan")}
                        />
                    </Col>
                    <Col sm="6" className="d-flex justify-content-center">
                        <FormControlLabel 
                            value="no" 
                            control={<Radio />} 
                            label="No" 
                            onChange={(e) => handelChange(e,"existingLoan")}
                        />
                    </Col>
                </Row>
            </RadioGroup>
        </div>
    )
}

const StepTwo = ({months, handelChange, minimumDownPayment, shoppingCredit, monthlyRepayment, numberWithCommas, noMonth}) => {

    return(
        <div className="steptwo">
            <h4>Choose Your Plan</h4>
            <Row>
                {months.map((month,i) =>
                    <Col sm="4" md="3" lg="2" key={i}>
                        <label>
                            <input 
                                type="radio" 
                                name="noMonth" 
                                value={month.month}
                                // defaultChecked = {month.month === 1 ? 'true' : 'false'} 
                                onChange={(e) => handelChange(e,"noMonth")}                                
                            />
                            <div className="item">
                                <header style={{ backgroundColor: `${month.color}` }}></header>
                                <span>{month.monthName}</span>
                                <span>{month.month}</span>
                                <span>{month.month > 1 ? `months` : `month`}</span>
                            </div>
                        </label>
                    </Col>
                )}
            </Row>

            <Row className="mt-5">
                <Col md="12">
                    <h4>Payment Breakdown</h4>
                    <div className="breakdown">
                        <Row className="m-0">
                            <Col sm="8" md="7" lg="4" className="m-0 p-0">
                                <div className="first">
                                    <p>Shopping Credit</p>
                                    <p>Down Payment</p>
                                    <p>Monthly Installment</p>
                                    <p>Tenure</p>
                                </div>
                            </Col>
                            <Col sm="4" md="4" lg="3" className="m-0 p-0">
                                <div className="second">
                                    <p>₦{numberWithCommas(shoppingCredit.toFixed(2))}</p>
                                    <p>₦{numberWithCommas(minimumDownPayment.toFixed(2))}</p>
                                    <p>₦{numberWithCommas(monthlyRepayment.toFixed(2))}</p>
                                    <p>{`${noMonth} ${noMonth > 1 ? `months` : `month`}`}</p>
                                </div>
                            </Col>
                            <Col sm="12" md="12" lg="5" className="m-0 p-0">
                                <div className="third">
                                    <div>
                                        <p>Customize</p>
                                        <p>Down Payment</p>
                                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                            Amount Paid
                                        </Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>₦</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                id="inlineFormInputGroup"
                                                value={minimumDownPayment}
                                            />
                                        </InputGroup>
                                    </div>
                                    <Button
                                        variant="outlined"
                                        color="secondary">
                                        Update Breakdown
                                    </Button>
                                </div>

                            </Col>

                        </Row>

                    </div>
                </Col>
            </Row>

        </div>
    )
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 13,
    left: 'calc(-50% - 0px)',
    right: 'calc(50% - 0px)',
  },
  active: {
    '& $line': {
        backgroundColor: '#FF005E',
    },
  },
  completed: {
    '& $line': {
        backgroundColor: '#FF005E',
    },
  },
  line: {
    height: 5,
    border: 0,
    backgroundColor: '#CBCBCB',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 30,
    height: 30,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#FF005E',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    zIndex: 1,
    backgroundColor: '#FF005E',
    borderRadius: '50%',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? <Check className={classes.completed} /> : icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['', '', '', ''];
}

function getStepContent(step, employeeModes, months, handelChange, minimumDownPayment, shoppingCredit, monthlyRepayment, numberWithCommas, noMonth) {
  switch (step) {
    case 0:
      return <StepOne 
                employeeModes={employeeModes} 
                handelChange={handelChange}
            />;
    case 1:
      return <StepTwo 
                noMonth={noMonth} 
                months={months} 
                handelChange={handelChange}
                numberWithCommas={numberWithCommas}
                minimumDownPayment={minimumDownPayment}
                shoppingCredit={shoppingCredit}
                monthlyRepayment={monthlyRepayment}
            />;
    case 2:
      return '';
    default:
      return 'Unknown step';
  }
}

export default function Approval({employeeModes, months, totalCart}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [employeeMode, setEmployeeMode] = React.useState(0);
  const [amountPaid, setAmountPaid] = React.useState(0);
  const [payDate, setPayDate] = React.useState("");
  const [existingLoan, setExistingLoan] = React.useState('');
  const [noMonth, setNoMonth] = React.useState(1);
  const steps = getSteps();
  let minimumDownPayment = (30/100) * totalCart;
  let shoppingCredit = totalCart - minimumDownPayment;
  let monthlyInterestPayable = 4000;
  let totalInterestPayable  = monthlyInterestPayable * noMonth;
  let monthlyRepayment = (shoppingCredit + totalInterestPayable) / noMonth;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
        if(prevActiveStep === 0){
            if(employeeMode === 0 || amountPaid===0 || payDate==="" || existingLoan==='' ){
                alert("All Fields Required")
                return prevActiveStep
            }            
        }
        if(prevActiveStep === 1){
            alert("End of the road for now")
            return prevActiveStep
        }
        return prevActiveStep + 1
    });
  };

  const handelChange = (e, field) =>{
    if(field === 'employeeMode')
    {
        setEmployeeMode(e.target.value);
    }else if(field === 'amountPaid'){
        setAmountPaid(e.target.value);
    }else if(field === 'payDate'){
        setPayDate(e.target.value);
    }else if(field === 'existingLoan'){
        setExistingLoan(e.target.value);
    }else if(field === 'noMonth'){
        setNoMonth(e.target.value);
    }
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={`${classes.root} approval`}>
        <Row>
            <Col md="1">
                {activeStep > 0 && <p className="back" onClick={handleBack}><ArrowBack /> Back</p>}                
            </Col>
            <Col md="9">
                  <Stepper alternativeLabel activeStep={activeStep} className="w-75 m-auto" connector={<ColorlibConnector />}>
                      {steps.map((label) => (
                          <Step key={label}>
                              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                          </Step>
                      ))}
                  </Stepper>
            </Col>
        </Row>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div className="">
            <Typography className={classes.instructions}>
                {getStepContent(activeStep, employeeModes, months, handelChange, minimumDownPayment, shoppingCredit, monthlyRepayment, numberWithCommas, noMonth)}
            </Typography>
            <div className="w-100 d-flex justify-content-center mt-3">
                <Button 
                    onClick={handleNext}
                    variant="outlined" 
                    color="secondary">
                    {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
                </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
