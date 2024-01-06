// 예제 - 프로그래머스 로또 최고 순위와 최저 순위 (https://school.programmers.co.kr/learn/courses/30/lessons/77484)
function compose(...fns) {
    return (...args) => {
        return fns.reduceRight(
            (res, fn) => [fn.call(null, ...res)],
            args
        )[0];
    };
}

function pipe(...fns) {
    return (...args) => {
        return fns.reverse().reduceRight(
            (res, fn) => [fn.call(null, ...res)],
            args
        )[0];
    };
}

function solution(lottos, win_nums) {
    const findLottoCntCb = ([correntCnt, unknownCnt], lotto) => {
        if(lotto === 0) {
            unknownCnt++;
        } else {
            if(win_nums.indexOf(lotto) !== -1) correntCnt++;
        }
        return [correntCnt, unknownCnt];
    };
    
    const findLottoCnt = (lottoNumArr, winNumArr) => lottoNumArr.reduce(findLottoCntCb, [0, 0]);
    
    const matchRanking = (ranking, [correntCnt, unknownCnt]) => {
        const ranking = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
        return [ranking[correntCnt + unknownCnt], ranking[correntCnt]]
    }
 
    return pipe(
        findLottoCnt,
        matchRanking,
    )(lottos, win_nums);
}
