import React, { useState, useEffect } from "react";
import axios from "axios";
import requiresAuth from './requiresAuth'
import styled from 'styled-components'

const JokesWrapper = styled.div `
border: 1px solid black;
padding: 30px;
border-radius: 10px;

ul {
  margin: 0;
  padding: 0;
}

li {
  background-color: #ffcdaa
  margin: 20px;
  padding: 10px;
  border-radius: 2px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 7px #898989;

}
`

const JokesComp = () => {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    const fetchjokes = async () => {
      const endpoint  = `/jokes`
      const res = await axios.get(endpoint);
      console.log(res);
      setjokes(res.data);
      console.log("useEffect ran");
    };
    fetchjokes();
  }, []);

  return jokes.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <JokesWrapper>
      <h2>List of jokes</h2>
      <ul>
        {jokes.map(joke => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    </JokesWrapper>
  );
};

export default requiresAuth(JokesComp);
