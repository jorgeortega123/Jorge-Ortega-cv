import axios from "axios";
async function sendServer(server: string, url: string, content: string) {
  content = JSON.stringify(content)
  var res = async () => {
    axios
      .post(server + url, {text: content})
      .then((res) => {
        return { data: res.data, error: false };
      })
      .catch((err) => {
        return { data: err.message, error: true };
      });
  };

  return await res();
}

export default sendServer;
