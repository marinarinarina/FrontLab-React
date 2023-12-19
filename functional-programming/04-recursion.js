/*
재귀 함수는 함수형 프로그래밍에서 반복문 대신 사용한다.
모든 분할정복 알고리즘에 사용할 수 있다.

ex. 파일이 디렉터리에 있는지 하위 디렉터리에 있는지 알려주는 함수
*/

/*
파일시스템 구조는 아래와 같음:
    home
    ├── andrea
    │   ├── funds.csv
    │   └── paper.pdf
    ├── john
    │   ├── logs
    │   │   ├── logs1
    │   │   ├── logs2
    │   │   ├── logs3
    │   │   └── logs4
    │   ├── summer1.jpg
    │   ├── summer2.jpg
    │   └── summer3.jpg
    ├── notes.txt
    └── todo.txt
*/

const tree = {
    name : "home",
    files : ["notes.txt","todo.txt"],
    subFolders: [{
        name : "andrea",
        files : ["paper.pdf","funds.csv"],
        subFolders: []
    },
    {
        name: "john",
        files : ["summer1.jpg","summer2.jpg", "summer3.jpg"],
        subFolders: [{
            name : "logs",
            files : ["logs1","logs2","logs3","logs4"],
            subFolders: []
        }]
    }]
};

const find = element =>
            tree =>
                {
                    if (tree.files.indexOf(element)!==-1){ // 이 폴더에 있으면 true 반환
                        return true;
                    }
                    else if (tree.subFolders.length !== 0){ // 하위 폴더에 있다면
                        const otherFolders = tree.subFolders.map(find(element)); // 모든 하위 폴더에 있는 element를 찾음
                        const found = otherFolders.reduce((a, b) => { return a || b; }, false); // element가 하위 폴더에 하나라도 있다면 true 반환
                        return found;
                    }else{
                        return false; // 이 폴더에도 없고 하위 폴더에도 없으면 false를 반환
                    }
                };

console.log("Is paper.pdf is here? : "+find("paper.pdf")(tree)); // true
console.log("Is user.txt is here? : "+find("user.txt")(tree)); // false
