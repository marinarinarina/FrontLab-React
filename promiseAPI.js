// Promise.all은 프라미스가 하나라도 거절되면 전체를 거절
// Promise.all 활용 - id를 기준으로 장바구니 목록을 불러오는 함수
const users = ['user#845023', 'user#456323', 'user#901241', 'user#629529'];
const userIDs = users.map(user => user.slice(user.indexOf('#') + 1,)); // ["845023", "456323", "901241", "629529"] 


const requests = userIDs.map(id => fetch(`https://api.github.com/users/${id}`));

Promise.all(requests)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(users => users.forEach(user => alert(user)));

/* es2020 이상에서만 사용 가능.
Promise.allSettled: 모든 프라미스가 처리될 때까지 기다렸다가 그 결과(객체)를 담은 배열을 반환.
객체엔 다음과 같은 정보가 담김:
{
    status: "fulfilled" | "rejected"
    value(프라미스가 성공한 경우) | reason(프라미스가 실패한 경우)
}
여러 요청 중 하나가 실패해도 다른 요청 결과는 필요할 때 사용
*/
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/Violet-Bora-Lee',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { 
    console.log(results);
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
