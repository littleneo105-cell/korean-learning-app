const meaninglist=document.getElementById("meainglist")
const meanings=[
  '아이 = ကလေး',
  '이 = နှစ် (၂)',
  '오 = ငါး (၅)',
  '오이 = သခွားသီး',
  '우유 = နို့',
  '가구 = ပရိဘောဂ',
    '고기 = အသား',
  '구 = ကိုး (၉)',
  '구두 = ဖိနပ်',
  '가다 = သွားသည်',
  '오다 = လာသည်',
  '나 = ငါ',
  '너 = နင်',
  '누나 = အစ်မ (ယောကျ်ားက ခေါ်သော)',
  '라디오 = ရေဒီယို',
  '다리 = ခြေထောက်',
  '나라 = နိုင်ငံ',
  '드라마 = ဒရာမာ',
  '거미 = ပင့်ကူ',
  '우리 = ငါတို့'
]
meanings.forEach(item=>{
    const li=document.createElement("li");
    li.textContent=item;
    meaninglist.appendChild(li);
})