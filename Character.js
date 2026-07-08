const vowels = document.getElementById("vowels");
const GeneBtn = document.getElementById("geneBtn");

// 1. Initial Consonants (Choseong) - 19 total (14 Basic + 5 Double)
const CHOSEONG = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 
  'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

// 2. Vowels (Jungseong) - 21 total (10 Basic + 11 Combined)
const JUNGSEONG = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 
  'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

// 3. Final Consonants (Jongseong / Batchim) - 28 total (Index 0 = No Batchim)
const JONGSEONG = [
  '',   'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 
  'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const HANGUL_BASE = 0xAC00; // '가' in Unicode

/**
 * Generates all 588 syllable variations for a given consonant
 */
function buildConsonantArray(cIndex) {
  const syllables = [];
  for (let v = 0; v < JUNGSEONG.length; v++) {
    for (let j = 0; j < JONGSEONG.length; j++) {
      const unicodePoint = HANGUL_BASE + (cIndex * 588) + (v * 28) + j;
      syllables.push(String.fromCharCode(unicodePoint));
    }
  }
  return syllables;
}

// Build arrays for all 19 consonants (Includes basic, double, and all batchim)
const ㄱ = buildConsonantArray(0);
const ㄲ = buildConsonantArray(1);
const ㄴ = buildConsonantArray(2);
const ㄷ = buildConsonantArray(3);
const ㄸ = buildConsonantArray(4);
const ㄹ = buildConsonantArray(5);
const ㅁ = buildConsonantArray(6);
const ㅂ = buildConsonantArray(7);
const ㅃ = buildConsonantArray(8);
const ㅅ = buildConsonantArray(9);
const ㅆ = buildConsonantArray(10);
const ㅇ = buildConsonantArray(11);
const ㅈ = buildConsonantArray(12);
const ㅉ = buildConsonantArray(13);
const ㅊ = buildConsonantArray(14);
const ㅋ = buildConsonantArray(15);
const ㅌ = buildConsonantArray(16);
const ㅍ = buildConsonantArray(17);
const ㅎ = buildConsonantArray(18);

// Full Dataset Array
const Korean_vowels = [
  ㄱ, ㄲ, ㄴ, ㄷ, ㄸ, ㄹ, ㅁ, ㅂ, ㅃ, ㅅ,
  ㅆ, ㅇ, ㅈ, ㅉ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ
];

function generaterandomvowels() {
  const random_array = Korean_vowels[Math.floor(Math.random() * Korean_vowels.length)];
  const random_character = random_array[Math.floor(Math.random() * random_array.length)];

  vowels.textContent = random_character;
}

GeneBtn.textContent = "Generate";
GeneBtn.addEventListener("click", generaterandomvowels);