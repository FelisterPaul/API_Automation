import http from 'k6/http';

export default function () {
  const url = 'https://renditionproperties.com/my-account';
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
