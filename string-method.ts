// 자바스크립트 문자열 관련 메서드 모음

// charAt: 문자열의 index번째에 있는 문자를 반환
const str = 'seagull';
console.log(str.charAt(0)); // 's'


// startsWith: 문자열이 특정 문자(열)로 시작하는지 검사
const files = [
    "20200505_Tom.jpg",
    "20200720_Peter.png",
    "20200820_Ben.hwp",
    "20200823_Ben.hwp",
    "20201030_Tom.pdf",
    "20201212_John.md",
    "20210131_Wanda.png",
    "20210309_Tony.jpg",
    "20210411_Monaca.jpeg",
    "20210509_Peter.html",
    "20210701_Simon.pdf",
    "20210808_Wanda.jsp",
    "20211201_Emma.gif"
];
const findFilesCreatedIn202103 = (files: string[]) => {
    return files.filter((file) => file.startsWith('202103'));
};
console.log(findFilesCreatedIn202103(files)); // ["20210309_Tony.jpg"] 


// concat: 문자열과 문자열을 합쳐 새로운 문자열로 반환
const mergedStr = ('cat').concat('dog'); // 'catdog'


// substring: 부분 문자열을 반환
const subStr = ('mongoose').substring(3, 6); // 'goo'


// split: 구분자를 기준으로 문자열을 문자열 배열로 변환.
// 아무 것도 넘겨주지 않으면 문자열 그대로 배열로 감쌈.
const splitStrToArray = 
    ('The quick brown fox jumps over the lazy dog.')
    .split(' '); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]


// slice: 문자열의 일부를 추출해 새 문자열을 반환
const createRandomID = (user='user') => {
    return user + '#' + Math.random().toString().slice(-6);
}
console.log(createRandomID()) // 'user#845023'


// indexOf, lastIndexOf" 문자열의 앞(뒤)에서부터 주어진 문자열과 일치하는 부분이 있으면 그 부분의 인덱스를 반환하고, 아니라면 -1을 반환
const getEmailSiteAndID = (email: string) => {
    const id = email.slice(0, email.indexOf('@'));
    const site = email.slice(email.indexOf('@') + 1, email.indexOf('.'));
    return [id, site];
};
console.log(getEmailSiteAndID('earth999@daum.net')) // ['earth999', 'daum']


// localeCompare(compareString, locales): 두 문자열을 정렬했을 때 인수쪽의 문자열이 앞에 있으면 양수, 뒤에 있으면 음수, 동등하면 0을 반환
// locale은 포맷 규칙을 설정함. (en, ko 등)
const sortedKoreanWords = (words: string[]) => {
    return words.sort((a, b) => a.localeCompare(b, 'ko')); 
};

console.log(
    sortedKoreanWords(['하마', '고양이', '호랑이', '토끼', '원숭이'])
    ); // // ["고양이", "원숭이", "토끼", "하마", "호랑이"]
