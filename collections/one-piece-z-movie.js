// One Piece Movie Z - Vocabulary Data
// Essential vocabulary from One Piece Movie Z featuring common pronouns, nouns, verbs, and expressions

const onePieceZMovieVocabulary = {
  pronouns: [
    { japanese: "俺", romaji: "ore", english: "I (male casual)" },
    { japanese: "私", romaji: "watashi", english: "I (neutral/polite)" },
    { japanese: "お前", romaji: "omae", english: "you" },
    { japanese: "おめえ", romaji: "omee", english: "you (rough)" },
    { japanese: "あいつ", romaji: "aitsu", english: "that guy" },
    { japanese: "みんな", romaji: "minna", english: "everyone" },
    { japanese: "一同", romaji: "ichidō", english: "all present" },
    { japanese: "わし", romaji: "washi", english: "I (older men)" },
    { japanese: "人", romaji: "hito", english: "person" },
    { japanese: "将校", romaji: "shōkō", english: "officer" },
    { japanese: "大佐", romaji: "taisa", english: "colonel" },
    { japanese: "海兵", romaji: "kaihei", english: "marine soldier" },
    { japanese: "海軍", romaji: "kaigun", english: "navy" },
    { japanese: "手下", romaji: "teshita", english: "henchman" },
    { japanese: "先生", romaji: "sensei", english: "teacher" }
  ],
  nouns: [
    { japanese: "世界", romaji: "sekai", english: "world" },
    { japanese: "海", romaji: "umi", english: "sea" },
    { japanese: "宝", romaji: "takara", english: "treasure" },
    { japanese: "秘宝", romaji: "hihō", english: "secret treasure" },
    { japanese: "海賊", romaji: "kaizoku", english: "pirate" },
    { japanese: "海賊王", romaji: "kaizoku-ō", english: "Pirate King" },
    { japanese: "船", romaji: "fune", english: "ship" },
    { japanese: "島", romaji: "shima", english: "island" },
    { japanese: "戦い", romaji: "tatakai", english: "battle" },
    { japanese: "武器", romaji: "buki", english: "weapon" },
    { japanese: "力", romaji: "chikara", english: "power" },
    { japanese: "正義", romaji: "seigi", english: "justice" },
    { japanese: "命", romaji: "inochi", english: "life" },
    { japanese: "心", romaji: "kokoro", english: "heart, spirit" },
    { japanese: "仲間", romaji: "nakama", english: "comrades" }
  ],
  verbs: [
    { japanese: "食らえ", romaji: "kurae", english: "take this!" },
    { japanese: "戦う", romaji: "tatakau", english: "to fight" },
    { japanese: "守る", romaji: "mamoru", english: "to protect" },
    { japanese: "助ける", romaji: "tasukeru", english: "to help" },
    { japanese: "行く", romaji: "iku", english: "to go" },
    { japanese: "来る", romaji: "kuru", english: "to come" },
    { japanese: "見る", romaji: "miru", english: "to see" },
    { japanese: "聞く", romaji: "kiku", english: "to listen / ask" },
    { japanese: "言う", romaji: "iu", english: "to say" },
    { japanese: "知る", romaji: "shiru", english: "to know" },
    { japanese: "信じる", romaji: "shinjiru", english: "to believe" },
    { japanese: "立つ", romaji: "tatsu", english: "to stand" },
    { japanese: "倒す", romaji: "taosu", english: "to defeat" },
    { japanese: "守り抜く", romaji: "mamorinuku", english: "to protect to the end" },
    { japanese: "生きる", romaji: "ikiru", english: "to live" }
  ],
  expressions: [
    { japanese: "これ", romaji: "kore", english: "this" },
    { japanese: "それ", romaji: "sore", english: "that" },
    { japanese: "あれ", romaji: "are", english: "that (over there)" },
    { japanese: "ここ", romaji: "koko", english: "here" },
    { japanese: "そこ", romaji: "soko", english: "there" },
    { japanese: "今", romaji: "ima", english: "now" },
    { japanese: "何", romaji: "nani", english: "what" },
    { japanese: "何だ", romaji: "nanda", english: "what is it?" },
    { japanese: "そうだ", romaji: "sō da", english: "that's right" },
    { japanese: "大丈夫", romaji: "daijōbu", english: "it's okay" },
    { japanese: "そうか", romaji: "sō ka", english: "I see" },
    { japanese: "じゃあ", romaji: "jaa", english: "well then..." },
    { japanese: "だから", romaji: "dakara", english: "so, therefore" },
    { japanese: "もし", romaji: "moshi", english: "if" },
    { japanese: "なぜ", romaji: "naze", english: "why" }
  ]
};

// Export for use in bingo game
if (typeof module !== 'undefined' && module.exports) {
  module.exports = onePieceZMovieVocabulary;
}