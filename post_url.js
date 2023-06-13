import http from 'k6/http';

export default function () {
  const url = 'https://renditionproperties.com/my-account';
  const payload = JSON.stringify({
    email: 'felisterpaul4@gmail.com',
    password: 'Aminahnjie17@',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
