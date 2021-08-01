import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userAgree, setUserAgree] = useState('');

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(userAgree);
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
          <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setUserAgree(!userAgree)} />
        </Form.Field>
        <Button type='submit' onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
