import axios from "axios";

export const getBooks = () => {
  return axios.get(
    `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbsoojae10291105001&QueryType=BlogBest&MaxResults=1&start=1&SearchTarget=Book&output=JS&Version=20131101`
  );
};
