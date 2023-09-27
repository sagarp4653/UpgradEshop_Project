import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import OrderDetail from "./OrderDetail";
import {
  CREATE_ADDRESS_API,
  GET_ADDRESS_API,
  GET_ALL_ADDRESSES_API,
  PLACE_ORDER_API,
} from "../ApiCalls/ApiCall/apiCalls";
import { MenuItem, Select, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { customAlertModalFun } from "../../Common/CSS/Utils/utils";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const steps = ["Items", "Select Address", "Confirm Order"];

export default function PlaceOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [completed, setCompleted] = useState({});
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [addressForm, setAddressForm] = useState({
    id: "",
    name: "",
    contactNumber: "",
    street: "",
    city: "",
    state: "",
    landmark: "",
    zipcode: "",
    user: "",
  });
  const location = useLocation();
  const productDetails = { ...location.state }; // productDetails from BuyProduct

  useEffect(() => {
    const newCompleted = completed;
    newCompleted[0] = true; // Items should be in completed state by default
    setCompleted(newCompleted);
  }, []);

  useEffect(() => {
    // fetch savedAddresses from backend
    GET_ALL_ADDRESSES_API()
      .then((response) => {
        if (response && response.data.length > 0) {
          response.data.map(
            (address) =>
              (address.fullAddress = `${address.name}, Landmark: ${address.landmark}, ${address.street}, ${address.city}, ${address.state} - ${address.zipcode}`)
          );
        }
        setSavedAddresses(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const validation = () => {
    let message;
    if (
      addressForm.name === "" ||
      addressForm.contactNumber === "" ||
      addressForm.city === "" ||
      addressForm.landmark === "" ||
      addressForm.street === "" ||
      addressForm.state === "" ||
      addressForm.zipcode === ""
    ) {
      message = "Please enter all mandatory fields to proceed.";
    } else if (
      (addressForm.name.length > 0 && addressForm.name.length > 255) ||
      (addressForm.contactNumber.length > 0 &&
        addressForm.contactNumber.length > 255) ||
      (addressForm.city.length > 0 && addressForm.city.length > 255) ||
      (addressForm.landmark.length > 0 && addressForm.landmark.length > 255) ||
      (addressForm.street.length > 0 && addressForm.street.length > 255) ||
      (addressForm.zipcode.length > 0 && addressForm.zipcode.length > 255)
    ) {
      message = "Each field must not exceed 255 characters.";
    }
    customAlertModalFun(message, dispatch, true);
    return message;
  };

  const createAddress = (e) => {
    // e.preventDefault();

    if(validation()) {
      e.preventDefault();      
      return;
    }
    
    const adminDetails = JSON.parse(localStorage.getItem("adminDetails"));
    let userId;
    if (adminDetails !== null && adminDetails !== undefined) {
      userId = adminDetails[0].id;
    }
    addressForm.user = userId;
    CREATE_ADDRESS_API(addressForm)
      .then((response) => {
        addressForm.id = response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAddressChange = (value) => {
    setSelectedAddress(value);
    GET_ADDRESS_API(value.id)
      .then((response) => {
        const addressDetails = response.data;
        setAddressForm(addressDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const step = activeStep + 1;
    if (step !== 0) {
      setActiveStep(step);
      checkIfConfirmOrderIsValid(step);
    } else {
      navigate('/buyProduct')
    }
  };

  const handleBack = () => {
    if (activeStep === 1) {
      navigate('/buyProduct')
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const checkIfConfirmOrderIsValid = (step) => {
    if (step === 2) {
      if (addressForm.id === "") {
        customAlertModalFun("Please select address!", dispatch, true);
        setActiveStep(1);
      } else {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
      }
    }
  };

  const handleStep = (step) => () => {
    if (step !== 0) {
      setActiveStep(step);
      checkIfConfirmOrderIsValid(step);
    } else {
      navigate('/buyProduct')
    }
  };

  const placeOrder = () => {
    const payload = {
      quantity: productDetails.quantity,
      user: selectedAddress.user,
      product: productDetails.id,
      address: selectedAddress.id
    }

    PLACE_ORDER_API(payload).then(response => {
      if (response.data) {
        customAlertModalFun("Order placed successfully!", dispatch);
        navigate("/");
      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="flex-row justify-content-center">
      <Box sx={{ width: "75%", padding: "100px" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep == 2 ? (
            <>
              <OrderDetail
                productDetails={productDetails}
                addressDetails={addressForm}
              />
              <div className="flex-column justify-content-center align-items-center">
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={placeOrder}
                  >
                    Place Order
                  </Button>
                </Box>
              </div>
            </>
          ) : (
            <>
              <div
                style={{ width: "100%" }}
                className="flex-row justify-content-center"
              >
                <div
                  className="flex-column justify-content-center align-items-center"
                  style={{
                    width: "50%",
                  }}
                >
                  <Typography sx={{ mt: 2, py: 1 }}>
                    Select Address
                  </Typography>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedAddress}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    style={{ width: "100%" }}
                  >
                    {savedAddresses.map((i, index) => (
                      <MenuItem key={index + 1} value={i}>
                        {i.fullAddress}
                      </MenuItem>
                    ))}
                  </Select>
                  <Typography sx={{ mt: 2, mb: 1, py: 1 }}>-OR-</Typography>
                  <Typography sx={{ mt: 2, mb: 1, py: 1 }} variant="h5" gutterBottom>
                    Add Address
                  </Typography>

                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "40ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div className="flex-column">
                      <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        value={addressForm.name}
                        onChange={(e) =>
                          setAddressForm({
                            ...addressForm,
                            name: e.target.value,
                          })
                        }
                        placeholder="Name"
                        error={addressForm.name.length > 0 && addressForm.name.length > 255}
                        helperText={addressForm.name.length > 0 && addressForm.name.length > 255 ? 'Name must not exceed 255 characters' : ''}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Contact Number"
                        value={addressForm.contactNumber}
                        onChange={(e) =>
                          setAddressForm({
                            ...addressForm,
                            contactNumber: e.target.value,
                          })
                        }
                        style={{ marginTop: "12px", marginBottom: "6px" }}
                        placeholder="Contact Number"
                        error={addressForm.contactNumber.length > 0 && addressForm.contactNumber.length > 255}
                        helperText={addressForm.contactNumber.length > 0 && addressForm.contactNumber.length > 255 ? 'Contact Number must not exceed 255 characters' : ''}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Street"
                        value={addressForm.street}
                        onChange={(e) =>
                          setAddressForm({
                            ...addressForm,
                            street: e.target.value,
                          })
                        }
                        style={{ marginTop: "12px", marginBottom: "6px" }}
                        placeholder="Street"
                        error={addressForm.street.length > 0 && addressForm.street.length > 255}
                        helperText={addressForm.street.length > 0 && addressForm.street.length > 255 ? 'Street must not exceed 255 characters' : ''}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="City"
                        value={addressForm.city}
                        onChange={(e) =>
                          setAddressForm({
                            ...addressForm,
                            city: e.target.value, // Parse to integer
                          })
                        }
                        style={{ marginTop: "12px", marginBottom: "6px" }}
                        placeholder="City"
                        error={addressForm.city.length > 0 && addressForm.city.length > 255}
                        helperText={addressForm.city.length > 0 && addressForm.city.length > 255 ? 'City must not exceed 255 characters' : ''}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="State"
                        value={addressForm.state}
                        onChange={(e) =>
                          setAddressForm({
                            ...addressForm,
                            state: e.target.value,
                          })
                        }
                        style={{ marginTop: "12px", marginBottom: "6px" }}
                        placeholder="State"
                        error={addressForm.state.length > 0 && addressForm.state.length > 255}
                        helperText={addressForm.state.length > 0 && addressForm.state.length > 255 ? 'State must not exceed 255 characters' : ''}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Landmark"
                        value={addressForm.landmark}
                        onChange={(e) =>
                          setAddressForm({
                            ...addressForm,
                            landmark: e.target.value,
                          })
                        }
                        style={{ marginTop: "12px", marginBottom: "6px" }}
                        placeholder="Landmark"
                        error={addressForm.landmark.length > 0 && addressForm.landmark.length > 255}
                        helperText={addressForm.landmark.length > 0 && addressForm.landmark.length > 255 ? 'Landmark must not exceed 255 characters' : ''}
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Zip Code"
                        value={addressForm.zipcode}
                        onChange={(e) =>
                          setAddressForm({
                            ...addressForm,
                            zipcode: e.target.value,
                          })
                        }
                        style={{ marginTop: "12px", marginBottom: "6px" }}
                        placeholder="Zip Code"
                        error={addressForm.zipcode.length > 0 && addressForm.zipcode.length > 255}
                        helperText={addressForm.zipcode.length > 0 && addressForm.zipcode.length > 255 ? 'Zip Code must not exceed 255 characters' : ''}
                      />
                    </div>

                    <Box
                      sx={{
                        display: {
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <Button
                        sx={{ mt: 2, mb: 1, py: 1 }}
                        style={{ width: "97%" }}
                        variant="contained"
                        color="primary"
                        type="submit" // Use 'type="submit"' to trigger the form submission
                        onClick={createAddress}
                        disabled={selectedAddress !== ""}
                      >
                        SAVE ADDRESS
                      </Button>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button
                      onClick={handleNext}
                      sx={{ mr: 1 }}
                      variant="contained"
                      color="primary"
                    >
                      Next
                    </Button>
                  </Box>
                </div>
              </div>
            </>
          )}
        </div>
      </Box>
    </div>
  );
}
