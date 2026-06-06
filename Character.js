const vowels=document.getElementById("vowels");
const GeneBtn=document.getElementById("geneBtn");


const ㅇ=['아','야', '어', '여', '오', '요', '우', '유', '으', '이'];
const ㄱ=["가", "갸", "거", "겨", "고", "교", "구", "규", "그", "기"];
const ㄴ=["나", "냐", "너", "녀", "노", "뇨", "누", "뉴", "느", "니"];
const ㄷ=  ["다", "댜", "더", "뎌", "도", "됴", "두", "듀", "드", "디"];
const ㄹ=["라", "랴", "러", "려", "로", "료", "루", "류", "르", "리"];
const ㅁ=["마", "먀", "머", "며", "모", "묘", "무", "뮤", "므", "미"];



const Korean_vowels= [ㅇ,ㄱ,ㄴ,ㄷ,ㄹ,ㅁ];


function generaterandomvowels(){
const random_array= Korean_vowels[Math.floor(Math.random()*Korean_vowels.length)];
const random_character=random_array[Math.floor(Math.random()*random_array.length)];

vowels.textContent=random_character;
}

GeneBtn.textContent="Generate";

GeneBtn.addEventListener("click",generaterandomvowels)