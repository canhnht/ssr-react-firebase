import fetch from 'isomorphic-fetch';

export default function getFacts() {
  console.log('getFacts');
  return fetch('https://ssr-react.firebaseio.com/facts.json')
    .then((res) => res.json());
}