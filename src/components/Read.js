import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Image, Checkbox, Button } from 'semantic-ui-react';

function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, email, userPremium } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Email', email);
    localStorage.setItem('Premium', userPremium);
  };

  const readData = () => {
    axios.get('https://6106a8231f348700174379e7.mockapi.io/api/v1/crudReactAppData/').then((response) => {
      setAPIData(response.data);
    });
  };

  const deleteData = (id) => {
    axios.delete(`https://6106a8231f348700174379e7.mockapi.io/api/v1/crudReactAppData/${id}`).then(() => {
      readData();
    });
  };

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Avatar</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Registration Date</Table.HeaderCell>
          <Table.HeaderCell>E-mail address</Table.HeaderCell>
          <Table.HeaderCell>Premium</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>
            <Link to='/create'>
              <Button color='green'>New</Button>
            </Link>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>
                <Image src={data.avatar} rounded size='mini' />
              </Table.Cell>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              <Table.Cell>
                <Checkbox checked={data.userPremium} />
              </Table.Cell>
              <Table.Cell>
                <Link to='/update'>
                  <Button onClick={() => setData(data)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button color='red' onClick={() => deleteData(data.id)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default Read;
