// import axios from "axios";

import axios from "axios";

// export const getDataFromServer = async () => {
//   const response_data = await axios.get("http://172.30.1.39:4000/test");
//   return response_data.data;
// };

export const getBooks = () => {
  return axios.get(
    `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbsoojae10291105001&QueryType=BlogBest&MaxResults=1&start=1&SearchTarget=Book&output=JS&Version=20131101`
  );
};
// const aaa = JSON.parse(bookApi.request._response);
