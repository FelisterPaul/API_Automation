import http from 'k6/http';
import { sleep } from 'k6';

let url = "https://renditionproperties.com/";
export default function () {
  http.get(url);
  sleep(2);
}