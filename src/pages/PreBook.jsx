import React, { useState } from 'react';
import styled from 'styled-components';
import '@fontsource/lato'; 
import '@fontsource/poppins'; 
import ima from "../assets/bikespng/payment.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  max-width: 600px;
  margin: 200px auto;
  padding: 30px;
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #333333;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #666666;
  font-size: 19px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  font-size: 17px;
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  font-size: 17px;
`;

const ColorOption = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ColorCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 3px solid ${props => (props.selected ? '#333333' : 'transparent')};
  cursor: pointer;
  transition: border 0.3s;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #333333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #555555;
  }
`;

const Message = styled.p`
  text-align: center;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333333;
  font-size: 20px;
`;

const ColorDisplay = styled.div`
  height: 30px;
  width: 100%;
  background-color: ${props => props.color || 'transparent'};
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const PaymentTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: #333333;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
`;

const PreBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    model: 'SE03 Lite',
    color: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModelChange = (e) => {
    setFormData({ ...formData, model: e.target.value, color: '' });
  };

  const handleColorChange = (color) => {
    setFormData({ ...formData, color });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('Thank you for your interest! A showroom member will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      model: 'SE03 Lite',
      color: '',
      cardName: '',
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvv: '',
    });
  };

  const getColors = () => {
    switch (formData.model) {
      case 'SE03 Lite':
        return ['#FF0000', '#eb9c34', '#34b1eb'];
      case 'SE03':
        return ['#FF0000', '#eb9c34', '#873e23'];
      case 'SE03 Max':
        return ['#34b1eb', '#FFD700', '#FF0000'];
      default:
        return [];
    }
  };

  return (
    <Container>
      <Title>Pre Book Now</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Phone Number:
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Address:
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          City:
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          State:
          <Input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Model:
          <Select
            name="model"
            value={formData.model}
            onChange={handleModelChange}
          >
            <option value="SE03 Lite">SE03 Lite</option>
            <option value="SE03">SE03</option>
            <option value="SE03 Max">SE03 Max</option>
          </Select>
        </Label>
        <Label>Color:</Label>
        <ColorOption>
          {getColors().map((color) => (
            <ColorCircle
              key={color}
              color={color}
              selected={formData.color === color}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </ColorOption>
        <ColorDisplay color={formData.color} />
        <PaymentTitle>Payment Information</PaymentTitle>
        <img src={ima} className="img-fluid" alt="Accepted Cards" />
        <Label>
          Name on Card:
          <Input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Card Number:
          <Input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Expiration Month:
          <Input
            type="text"
            name="expMonth"
            value={formData.expMonth}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Expiration Year:
          <Input
            type="text"
            name="expYear"
            value={formData.expYear}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          CVV:
          <Input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
      {submitMessage && <Message>{submitMessage}</Message>}
    </Container>
  );
};

export default PreBook;
