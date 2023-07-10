import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('https://renditionproperties.com');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
//check(res, {
  //if( response.status === 200){
    //return "Is response 200"
//}
//});');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
//check(res, {
  //if( response.status === 200){
    //return "Is response 200"
//}
//});