import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 500,
  duration: '30s',
};

export default function homepage () {
  const response = http.get('https://shop.renditionproperties.com');
  console.log("test");
  sleep(1);
}