import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useHistory } from 'react-router';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userAgree, setUserAgree] = useState(false);
  const [userPremium, setUserPremium] = useState(false);
  let history = useHistory();

  const postData = () => {
    axios
      .post('https://6106a8231f348700174379e7.mockapi.io/api/v1/crudReactAppData/', {
        firstName,
        lastName,
        email,
        userAgree,
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
          <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setUserAgree(!userAgree)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I want to sign up for the Premium Plan' onChange={(e) => setUserPremium(!userPremium)} />
        </Form.Field>
        <Button type='submit' onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
