import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router';

function Update() {
  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userPremium, setUserPremium] = useState(false);
  let history = useHistory();

  useEffect(() => {
    setId(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setEmail(localStorage.getItem('Email'));
    let isPremium;

    if (localStorage.getItem('Premium') === 'true') {
      isPremium = true;
    } else {
      isPremium = false;
    }

    setUserPremium(isPremium);
  }, []);

  const updateData = () => {
    axios
      .put(`https://6106a8231f348700174379e7.mockapi.io/api/v1/crudReactAppData/${id}`, {
        firstName,
        lastName,
        email,
        userPremium,
      })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <div>
      <Form className='create-form'>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I want to sign up for the Premium Plan' checked={userPremium} onChange={() => setUserPremium(!userPremium)} />
        </Form.Field>
        <Button type='submit' onClick={updateData}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
