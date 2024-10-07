import http from 'k6/http';
// import { sleep } from 'k6';
import { check } from 'k6';

export let options = {
  vus: 2,               // Number of virtual users
  duration: '1m',         // Test duration
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should complete below 500ms
    http_reqs: ['rate>50'],          // Target at least 50 RPS
  },
};

export default function () {
  const apiKey = __ENV.HISTORI_API_KEY; // Get the API key from environment variables
  const url = 'https://api.histori.xyz/v1/eth-mainnet/token';
  const headers = {
    'x-api-key': apiKey, // Set the API key in the header
  };

  let response = http.get(url, { headers: headers });
  
  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  // sleep(0.01); // Sleep for 10ms between requests to control the rate of requests - 100RPS
}
