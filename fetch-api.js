// fetchAPI로 서버 데이터를 가져오는 기본 템플릿. url 상수 선언, 유틸함수, crud 메서드를 담은 api 객체로 이루어짐.

/* ----- 데이터 정의
서버로부터 응답받은 데이터는 아래와 같음:
,
  "items": [
    {"id": 1, "name": "First Item" },
    {"id": 2, "name": "Second Item" },
    {"id": 3, "name": "Third Item" }
  ] 
*/
class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// ---- API 관련 로직
const baseUrl = 'http://localhost:3000';
const url = `${baseUrl}/items`;

const notFoundErrorUrl = 'https://httpstat.us/404';
const forbiddenErrorUrl = 'https://httpstat.us/403';
const serverErrorUrl = 'https://httpstat.us/500';

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the photos.';
    default:
      return 'There was an error retrieving the photos. Please try again.';
  }
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };

    console.log(
      `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
    );

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response) {
  return response.json();
}

export const api = { 
  getAll(page = 1, limit = 100) {
    return (
      fetch(`${url}?_page=${page}&_limit=${limit}`) 
        .then(checkStatus)
        .then(parseJSON)
        .catch((error) => {
          let errorMessage = translateStatusToErrorMessage(error);
          throw new Error(errorMessage);
        })
    );
  },
  add(item) {
    fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch(
        (error) => {
          let errorMessage = translateStatusToErrorMessage(error);
          throw new Error(errorMessage);
        }
      )
  },
  update(item) {
    fetch(`${url}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch(
        (error) => {
          let errorMessage = translateStatusToErrorMessage(error);
          throw new Error(errorMessage);
        }
      )
  },
  delete(id) {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch(
        (error) => {
          let errorMessage = translateStatusToErrorMessage(error);
          throw new Error(errorMessage);
        }
      )
  }
};

// ----- 랜덤한 id를 생성하는 유틸리티 함수
export function ID() {
  return '_' + Math.random().toString(36).substring(2, 9);
}
