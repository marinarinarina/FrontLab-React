// fetchAPI로 서버 데이터를 가져오는 기본 템플릿. url 상수 선언, 유틸함수, crud 메서드를 담은 api 객체로 이루어짐.

const baseUrl = 'http://localhost:3000';
const url = `${baseUrl}/photos?_page=1&_limit=10`;

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
      fetch(`${url}?_page=${page}&_limit=${limit}`) // url의 엔드포인트
        .then(checkStatus)
        .then(parseJSON)
        .catch((error) => {
          let errorMessage = translateStatusToErrorMessage(error);
          throw new Error(errorMessage);
        })
    );
  },
  /*
  var data = {
    albumId: 1,
    title: 'Another Photo',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  }; 
  */
  create(data) {
    fetch(url, {
      method: 'POST',
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
  /*
  var data = {
    title: 'Another Updated Photo',
  }; 
  */
  update(data) {
    fetch(notFoundErrorUrl, {
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
  /* 
  삭제할 아이템을 엔드포인트로 넘겨줌. ex. 5001번 아이템을 삭제하시오 
  url 예시: 'http://localhost:3000/photos/5001';
  */
  delete(id) {
    fetch(`${baseUrl}/photos?id=${id}`, {
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
