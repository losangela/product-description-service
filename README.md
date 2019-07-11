# Scaling up back end for Nordstroms application

I forked the legacy code of a microservice component of the product description of a full stack Nordstroms application, and scaled up the back end to handle 10 million pieces of data and handle 4500 RPS with 0% latency rate.

### Installing Dependencies

From within the root directory:

- npm install
- npm run build
- npm start

### Appendix

- 4500 RPS hit with 0% latency rate. Used raw postgres, nginx, and redis: http://bit.ly/2Y00Wuf
- A full journal detailing myself working on this repo can be found here: https://docs.google.com/document/d/1CHmtH6TADg9EVkvn4L-aYNvCowNQZBaqkQSTKp7cBGk/edit?usp=sharing
