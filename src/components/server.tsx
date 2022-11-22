import axios from "axios";
async function sendServer( server, url, content, method ) {
  var res = async () => console.log(server, url, content);
  axios
    .post(server + url, {
      content,
    })
    .then((res) => {
      return { data: res.data, error: false };
    })
    .catch((err) => {
      return { data: err.message, error: true };
    });
  return await res();
}

export default sendServer;
