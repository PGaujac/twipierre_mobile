import React from 'react';

export default function Tweets() {
  const getTweets = () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const data = {
      headers: headers,
      method: 'GET',
    };

    fetch('http://10.11.97.140:8080/gettweets', data)
      .then(response => response.json())
      .then(data => setTweets(data));
  };

  return hello;
}
