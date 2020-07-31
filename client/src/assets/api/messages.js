import axios from "axios";

const getByEmail = (email) => {
  return axios
    .get("/form/aForm/read", { email: email })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getAllMessages = () =>
  axios.get("/form/aForm/readAll", (res) =>
    console.debug(`getAllMessages: \n${res}`)
  );

const formTest = () => axios.get("/form", (data) => console.debug(`formTest: \n${data}`));

export { getByEmail, getAllMessages, formTest };
