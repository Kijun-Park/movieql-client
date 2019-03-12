import AplloClient from "apollo-boost";

const client = new AplloClient({
  uri: "http://localhost:4000/"
});

export default client;
