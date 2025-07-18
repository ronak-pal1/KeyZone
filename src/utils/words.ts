const words: string[] = [
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "I",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "me",
  "when",
  "make",
  "can",
  "like",
  "time",
  "no",
  "just",
  "him",
  "know",
  "take",
  "people",
  "into",
  "year",
  "your",
  "good",
  "some",
  "could",
  "them",
  "see",
  "other",
  "than",
  "then",
  "now",
  "look",
  "only",
  "come",
  "its",
  "over",
  "think",
  "also",
  "back",
  "after",
  "use",
  "two",
  "how",
  "our",
  "work",
  "first",
  "well",
  "way",
  "even",
  "new",
  "want",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",
  "ability",
  "able",
  "above",
  "accept",
  "according",
  "account",
  "across",
  "act",
  "action",
  "activity",
  "actually",
  "add",
  "address",
  "administration",
  "admit",
  "adult",
  "affect",
  "again",
  "against",
  "age",
  "agency",
  "agent",
  "ago",
  "agree",
  "agreement",
  "ahead",
  "air",
  "allow",
  "almost",
  "alone",
  "along",
  "already",
  "although",
  "always",
  "American",
  "among",
  "amount",
  "analysis",
  "animal",
  "another",
  "answer",
  "anyone",
  "anything",
  "appear",
  "apply",
  "approach",
  "area",
  "argue",
  "arm",
  "around",
  "arrive",
  "art",
  "article",
  "artist",
  "ask",
  "assume",
  "attack",
  "attention",
  "attorney",
  "audience",
  "author",
  "authority",
  "available",
  "avoid",
  "away",
  "baby",
  "bad",
  "bag",
  "ball",
  "bank",
  "bar",
  "base",
  "beat",
  "beautiful",
  "become",
  "bed",
  "before",
  "begin",
  "behavior",
  "behind",
  "believe",
  "benefit",
  "best",
  "better",
  "between",
  "beyond",
  "big",
  "bill",
  "billion",
  "bit",
  "black",
  "blood",
  "blue",
  "board",
  "body",
  "book",
  "born",
  "both",
  "box",
  "boy",
  "break",
  "bring",
  "brother",
  "budget",
  "build",
  "building",
  "business",
  "buy",
  "call",
  "camera",
  "campaign",
  "cancer",
  "candidate",
  "capital",
  "car",
  "card",
  "care",
  "career",
  "carry",
  "case",
  "catch",
  "cause",
  "cell",
  "center",
  "central",
  "century",
  "certain",
  "certainly",
  "chair",
  "challenge",
  "chance",
  "change",
  "character",
  "charge",
  "check",
  "child",
  "choice",
  "choose",
  "church",
  "citizen",
  "city",
  "civil",
  "claim",
  "class",
  "clear",
  "clearly",
  "close",
  "coach",
  "cold",
  "collection",
  "college",
  "color",
  "commercial",
  "common",
  "community",
  "company",
  "compare",
  "computer",
  "concern",
  "condition",
  "conference",
  "Congress",
  "consider",
  "consumer",
  "contain",
  "continue",
  "control",
  "cost",
  "country",
  "couple",
  "course",
  "court",
  "cover",
  "create",
  "crime",
  "cultural",
  "culture",
  "cup",
  "current",
  "customer",
  "cut",
  "dark",
  "data",
  "daughter",
  "dead",
  "deal",
  "debate",
  "decade",
  "decide",
  "decision",
  "deep",
  "defense",
  "degree",
  "deliver",
  "demand",
  "department",
  "depend",
  "describe",
  "design",
  "despite",
  "detail",
  "determine",
  "develop",
  "development",
  "die",
  "difference",
  "different",
  "difficult",
  "dinner",
  "direction",
  "director",
  "discover",
  "discuss",
  "discussion",
  "disease",
  "doctor",
  "dog",
  "door",
  "down",
  "draw",
  "dream",
  "drive",
  "drop",
  "drug",
  "during",
  "each",
  "early",
  "east",
  "easy",
  "eat",
  "economic",
  "economy",
  "edge",
  "education",
  "effect",
  "effort",
  "eight",
  "either",
  "election",
  "else",
  "employee",
  "end",
  "energy",
  "enjoy",
  "enough",
  "enter",
  "entire",
  "environment",
  "especially",
  "establish",
  "evening",
  "event",
  "ever",
  "every",
  "evidence",
  "exactly",
  "example",
  "executive",
  "exist",
  "expect",
  "experience",
  "expert",
  "explain",
  "eye",
  "face",
  "fact",
  "factor",
  "fail",
  "fall",
  "family",
  "far",
  "fast",
  "father",
  "fear",
  "federal",
  "feel",
  "feeling",
  "few",
  "field",
  "fight",
  "figure",
  "fill",
  "film",
  "final",
  "finally",
  "financial",
  "find",
  "fine",
  "finger",
  "finish",
  "fire",
  "firm",
  "fish",
  "five",
  "floor",
  "fly",
  "focus",
  "follow",
  "food",
  "foot",
  "force",
  "foreign",
  "forget",
  "form",
  "former",
  "forward",
  "four",
  "free",
  "friend",
  "from",
  "front",
  "full",
  "fund",
  "future",
  "game",
  "garden",
  "gas",
  "general",
  "generation",
  "girl",
  "glass",
  "goal",
  "government",
  "great",
  "green",
  "ground",
  "group",
  "grow",
  "growth",
  "guess",
  "gun",
  "guy",
  "hair",
  "half",
  "hand",
  "hang",
  "happen",
  "happy",
  "hard",
  "head",
  "health",
  "hear",
  "heart",
  "heat",
  "heavy",
  "help",
  "herself",
  "high",
  "himself",
  "history",
  "hit",
  "hold",
  "home",
  "hope",
  "hospital",
  "hot",
  "hotel",
  "hour",
  "house",
  "however",
  "huge",
  "human",
  "hundred",
  "husband",
  "idea",
  "identify",
  "image",
  "imagine",
  "impact",
  "important",
  "improve",
  "include",
  "including",
  "income",
  "increase",
  "indeed",
  "indicate",
  "individual",
  "industry",
  "information",
  "inside",
  "instead",
  "institution",
  "interest",
  "interesting",
  "international",
  "interview",
  "into",
  "investment",
  "involve",
  "issue",
  "item",
  "itself",
  "job",
  "join",
  "journey",
  "judge",
  "judgment",
  "jump",
  "junior",
  "jury",
  "just",
  "justice",
  "keep",
  "key",
  "kid",
  "kill",
  "kind",
  "kitchen",
  "know",
  "knowledge",
  "land",
  "language",
  "large",
  "last",
  "late",
  "later",
  "laugh",
  "law",
  "lawyer",
  "lay",
  "lead",
  "leader",
  "leadership",
  "learn",
  "least",
  "leave",
  "left",
  "leg",
  "legal",
  "less",
  "let",
  "letter",
  "level",
  "lie",
  "life",
  "light",
  "like",
  "likely",
  "limit",
  "line",
  "list",
  "listen",
  "little",
  "live",
  "local",
  "location",
  "long",
  "look",
  "lose",
  "loss",
  "lot",
  "love",
  "low",
  "machine",
  "magazine",
  "main",
  "maintain",
  "major",
  "majority",
  "make",
  "man",
  "manage",
  "management",
  "manager",
  "many",
  "market",
  "marriage",
  "material",
  "matter",
  "may",
  "maybe",
  "mean",
  "measure",
  "media",
  "medical",
  "meet",
  "meeting",
  "member",
  "memory",
  "mention",
  "message",
  "method",
  "middle",
  "might",
  "military",
  "million",
  "mind",
  "minute",
  "miss",
  "mission",
  "model",
  "modern",
  "moment",
  "money",
  "month",
  "more",
  "morning",
  "most",
  "mother",
  "motion",
  "move",
  "movement",
  "movie",
  "much",
  "music",
  "must",
  "myself",
  "name",
  "nation",
  "national",
  "natural",
  "nature",
  "near",
  "nearly",
  "necessary",
  "need",
  "network",
  "never",
  "new",
  "news",
  "newspaper",
  "next",
  "nice",
  "night",
  "noisy",
  "none",
  "nor",
  "normal",
  "north",
  "note",
  "nothing",
  "notice",
  "now",
  "number",
  "occur",
  "off",
  "offer",
  "office",
  "officer",
  "official",
  "often",
  "oil",
  "old",
  "once",
  "one",
  "only",
  "onto",
  "open",
  "operation",
  "opinion",
  "opportunity",
  "option",
  "order",
  "organization",
  "other",
  "others",
  "our",
  "out",
  "outside",
  "over",
  "own",
  "owner",
  "page",
  "pain",
  "painting",
  "paper",
  "parent",
  "part",
  "participant",
  "particular",
  "particularly",
  "partner",
  "party",
  "pass",
  "past",
  "patient",
  "pattern",
  "pay",
  "peace",
  "people",
  "per",
  "perform",
  "performance",
  "perhaps",
  "period",
  "person",
  "personal",
  "phone",
  "physical",
  "pick",
  "picture",
  "piece",
  "place",
  "plan",
  "plant",
  "play",
  "player",
  "PM",
  "point",
  "police",
  "policy",
  "political",
  "politics",
];

export const getWords = () => {

    const WORD_LEN = words.length;

    let str = "";

    for(let i=0; i<=25;i++)
        str += words[Math.floor(Math.random()*WORD_LEN)] + " "


    return str.trim();
};
