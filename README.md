# RPC Load Tester

A load testing tool for RPC endpoints using `k6` to simulate multiple virtual users making requests. This project is set up to target an RPC endpoint (`https://api.histori.xyz/v1/eth-mainnet/tokens`) and measure performance metrics under high load.

## Features

- Simulates a high number of virtual users making requests to the target endpoint.
- Uses the `x-api-key` header for API authentication.
- Configurable using environment variables.
- Provides detailed performance metrics using `k6`.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [k6](https://k6.io/docs/getting-started/installation/) installed for running the load tests.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Install Dependencies
Make sure you have k6 installed. If not, you can install it as follows:
```bash
brew install k6  # On macOS
sudo apt-get install k6  # On Ubuntu/Debian
```
### 3. Set Up Environment Variables
Create a .env file in the root directory of the project:
```bash
touch .env
```
Add the following line to the .env file, replacing your_actual_api_key_here with your real API key:
```bash
HISTORI_API_KEY=HISTORI_your_actual_api_key_here
```
### 4. Running the Load Test
To run the load test, use the following command:
```bash
source .env && k6 run rps_test.js
```
### 5. Output
The script provides detailed output about the performance of the endpoint, including:

Request duration
Response status
Rate of requests per second
Example output:

## Usage
- **Modify the target endpoint**: Update the URL in rps_test.js to target a different RPC endpoint if needed.
- **Adjust the load**: Modify the vus (virtual users) and duration in the options section of rps_test.js to change the load testing parameters.
- **Validate responses**: Modify the check function to validate the response status or content as per your requirements.
### Script Details
The main test script, rps_test.js, performs the following:

1. Retrieves the API key from the .env file.
2. Sends HTTP GET requests to the specified endpoint with the x-api-key header.
3. Checks if the response status is 200 and logs the performance metrics.

### Notes
- Ensure that the API key provided has the necessary permissions for the endpoint.
- Be mindful of rate limits and quotas on the target endpoint to avoid being blocked.

### Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions, feel free to contact the repository owner.


