// ════════════════════════════════════════
// VERIFIED VIDEO LINKS
// ════════════════════════════════════════
const videos = {
  "Double KB Swing":               "https://www.youtube.com/watch?v=noBo4K9dIWE",
  "KB Push Press":                 "https://www.youtube.com/watch?v=W9NlTHkK1iU",
  "Double Front Squat":            "https://www.youtube.com/watch?v=6XghYOzny8U",
  "Renegade Row":                  "https://www.youtube.com/watch?v=iuRRj6_Bqlg",
  "KB Goblet Squat":               "https://www.youtube.com/watch?v=tOAZDLFzdLE",
  "KB Plank Pull-Through":         "https://www.youtube.com/watch?v=rWS8IGcIEy8",
  "Single-Arm KB Swing":           "https://www.youtube.com/watch?v=B8vULipJrlI",
  "KB High Pull":                  "https://www.youtube.com/watch?v=mP1BHxBeAEM",
  "KB Alternating Deadlift":       "https://www.youtube.com/watch?v=4SFg7GaKI0A",
  "KB Windmill":                   "https://www.youtube.com/watch?v=1N1Qs9FO4GU",
  "Suitcase Carry":                "https://www.youtube.com/watch?v=UzjGxukrI5k",
  "KB Halo":                       "https://www.youtube.com/watch?v=tOAZDLFzdLE",
  "KB Romanian Deadlift":          "https://www.youtube.com/watch?v=Uc5rP5xs7qQ",
  "KB Clean":                      "https://www.youtube.com/watch?v=fRdlDRkAT-w",
  "Single-Arm KB Row":             "https://www.youtube.com/watch?v=8gg400ddt-g",
  "KB Sumo Deadlift":              "https://www.youtube.com/watch?v=4n4zj1S-Sxg",
  "KB Swing":                      "https://www.youtube.com/watch?v=noBo4K9dIWE",
  "KB Goblet Reverse Lunge":       "https://www.youtube.com/watch?v=gWN9epxFqX8",
  "Double KB Floor Press":         "https://www.youtube.com/watch?v=B340QckIfJM",
  "KB Z-Press":                    "https://www.youtube.com/watch?v=G4BenUf6fLU",
  "KB Clean + Press":              "https://www.youtube.com/watch?v=fRdlDRkAT-w",
  "KB Front Squat":                "https://www.youtube.com/watch?v=6XghYOzny8U",
  "KB Goblet Lateral Lunge":       "https://www.youtube.com/watch?v=4Ctuu0Xe7Vc",
  "Hand-to-Hand Swing":            "https://www.youtube.com/watch?v=Msrehun897g",
  "KB Around the World":           "https://www.youtube.com/watch?v=N4mMVG8S5Kg",
  "KB Dead Clean":                 "https://www.youtube.com/watch?v=72_6md1Dcx0",
  "KB Overhead Carry":             "https://www.youtube.com/watch?v=54POVWkWjEs",
  "Double KB Push Press":          "https://www.youtube.com/watch?v=W9NlTHkK1iU",
  "KB Squat to Press":             "https://www.youtube.com/watch?v=gjr-QAdsq4o",
  "KB Snatch":                     "https://www.youtube.com/watch?v=H9kD2Aqlssc",
  "Bottoms-Up Press":              "https://www.youtube.com/watch?v=k5PcL_WIx94",
  "KB Single-Leg RDL":             "https://www.youtube.com/watch?v=-w3gokw_s7w",
  "Double KB Clean":               "https://www.youtube.com/watch?v=fRdlDRkAT-w",
  "Suitcase + Overhead Carry":     "https://www.youtube.com/watch?v=54POVWkWjEs",
  "KB Squat + Row Complex":        "https://www.youtube.com/watch?v=8gg400ddt-g",
  "Turkish Get-Up":                "https://www.youtube.com/watch?v=lpltjWHd0ek",
  "KB Pistol Squat (Assisted)":    "https://www.youtube.com/watch?v=vq5-vdgJc0I",
  "Bottoms-Up Carry":              "https://www.youtube.com/watch?v=Ch46ZRTrsR8",
  "KB Snatch + Windmill":          "https://www.youtube.com/watch?v=H9kD2Aqlssc",
  "Double KB Front Squat":         "https://www.youtube.com/watch?v=6XghYOzny8U",
  "KB Clean + Front Squat":        "https://www.youtube.com/watch?v=fRdlDRkAT-w",
  "KB Snatch Complex":             "https://www.youtube.com/watch?v=E5CUdkcNT98",
  "Turkish Get-Up + Press":        "https://www.youtube.com/watch?v=lpltjWHd0ek",
  "Double KB Snatch":              "https://www.youtube.com/watch?v=E5CUdkcNT98",
  "KB Full Complex":               "https://www.youtube.com/watch?v=fRdlDRkAT-w",
};

const tagColors = {
  "STRENGTH + POWER":    "#e8550a",
  "CONDITIONING + CORE": "#0077b6",
  "PULL + BURN":         "#7b2d8b",
};

// ════════════════════════════════════════
// 6-PHASE WORKOUT DATA — 3-DAY FORMAT
// Day 1: Strength + Power
// Day 2: Conditioning + Core
// Day 3: Pull + Burn
// ════════════════════════════════════════
const allPhases = [
  {
    id:1, label:"Phase 1", weeks:"Wks 1–3",
    title:"Foundation", load:"2×40 lb",
    focus:"Establish movement patterns. Rest fully. Every rep is a technique rep.",
    sessions:[
      { id:"D1", tag:"STRENGTH + POWER", blocks:[
        { title:"Power Block — 15 min", sets:[
          {move:"Double KB Swing",    sets:"5×10",     load:"2×40 lb", note:"Hip hinge — drive with glutes, not back"},
          {move:"KB Push Press",      sets:"4×5/side", load:"40 lb",   note:"Leg drive initiates — arm locks out overhead"},
        ]},
        { title:"Strength Superset — 20 min", sets:[
          {move:"Double Front Squat", sets:"4×6",      load:"2×40 lb", note:"Elbows high — brace hard before descent"},
          {move:"Renegade Row",       sets:"4×5/side", load:"2×40 lb", note:"Zero hip rotation — core must win"},
        ]},
        { title:"Finisher — 8 min EMOM", sets:[
          {move:"KB Goblet Squat",       sets:"8 reps", load:"40 lb", note:"Odd minutes — sit deep"},
          {move:"KB Plank Pull-Through", sets:"8/side", load:"40 lb", note:"Even minutes — hips stay square"},
        ]},
      ]},
      { id:"D2", tag:"CONDITIONING + CORE", blocks:[
        { title:"Ballistic Circuit — 20 min (4 rounds)", sets:[
          {move:"Single-Arm KB Swing",    sets:"12/side",    load:"40 lb", note:"Switch hands each set — crisp hip snap"},
          {move:"KB High Pull",           sets:"8/side",     load:"40 lb", note:"Elbow leads — not the wrist"},
          {move:"KB Alternating Deadlift",sets:"10/side",    load:"40 lb", note:"Full hinge — neutral spine throughout"},
        ]},
        { title:"Core Triplet — 12 min (3 rounds)", sets:[
          {move:"KB Windmill",    sets:"5/side",        load:"40 lb", note:"3s lowering — slow and deliberate"},
          {move:"Suitcase Carry", sets:"40 yards/side", load:"40 lb", note:"Tall posture — never lean into the bell"},
          {move:"KB Halo",        sets:"8/direction",   load:"40 lb", note:"Controlled arc — shoulder mobility focus"},
        ]},
      ]},
      { id:"D3", tag:"PULL + BURN", blocks:[
        { title:"Hinge + Pull Block — 20 min", sets:[
          {move:"KB Romanian Deadlift", sets:"4×8",      load:"2×40 lb", note:"Hamstring tension at bottom — don't round"},
          {move:"KB Clean",             sets:"5×4/side", load:"40 lb",   note:"Vertical path — punch elbow through rack"},
          {move:"Single-Arm KB Row",    sets:"4×8/side", load:"40 lb",   note:"Full scapular retraction at top"},
          {move:"KB Sumo Deadlift",     sets:"4×6",      load:"2×40 lb", note:"Wide stance — drive knees out hard"},
        ]},
        { title:"Complex Finisher — 3 rounds (rest 90s)", sets:[
          {move:"KB Clean + Press",       sets:"4/side",  load:"40 lb",   note:"No pause between clean and press"},
          {move:"KB Front Squat",         sets:"4 reps",  load:"2×40 lb", note:"Rack tight — elbows stay up"},
          {move:"KB Swing",               sets:"10 reps", load:"40 lb",   note:"Power reset every single rep"},
          {move:"KB Goblet Lateral Lunge",sets:"5/side",  load:"40 lb",   note:"Adductor stretch at bottom"},
        ]},
      ]},
    ],
  },
  {
    id:2, label:"Phase 2", weeks:"Wks 4–6",
    title:"Volume + First Rotation", load:"2×40 lb",
    focus:"Add volume. Retire 6 moves. Introduce fresh patterns. Shorten rest by 10s.",
    sessions:[
      { id:"D1", tag:"STRENGTH + POWER", blocks:[
        { title:"Power Block — 18 min", sets:[
          {move:"Double KB Swing",    sets:"6×10",     load:"2×40 lb", note:"Added set — maintain hip snap quality"},
          {move:"Double KB Push Press",sets:"5×5",     load:"2×40 lb", note:"Both bells — full lockout every rep"},
        ]},
        { title:"Strength Superset — 22 min", sets:[
          {move:"Double Front Squat", sets:"5×6",      load:"2×40 lb", note:"Added set — 3s eccentric"},
          {move:"KB Dead Clean",      sets:"4×5/side", load:"40 lb",   note:"Reset from floor each rep — explosive hip"},
        ]},
        { title:"Finisher — 10 min EMOM", sets:[
          {move:"KB Goblet Squat",     sets:"10 reps", load:"40 lb", note:"Odd minutes — 2 more reps"},
          {move:"KB Around the World", sets:"8/dir",   load:"40 lb", note:"Even minutes — new move, control the arc"},
        ]},
      ]},
      { id:"D2", tag:"CONDITIONING + CORE", blocks:[
        { title:"Ballistic Circuit — 20 min (4 rounds)", sets:[
          {move:"Hand-to-Hand Swing",     sets:"20 reps",    load:"40 lb", note:"Release and catch — stay rhythmic"},
          {move:"KB High Pull",           sets:"10/side",    load:"40 lb", note:"2 more reps per set"},
          {move:"KB Alternating Deadlift",sets:"12/side",    load:"40 lb", note:"2 more reps — maintain hip hinge"},
        ]},
        { title:"Core Triplet — 12 min (3 rounds)", sets:[
          {move:"KB Windmill",      sets:"6/side",        load:"40 lb", note:"Added rep — still 3s down"},
          {move:"KB Overhead Carry",sets:"40 yds/side",   load:"40 lb", note:"New carry — full lockout overhead"},
          {move:"KB Halo",          sets:"10/dir",        load:"40 lb", note:"Added reps — smooth deliberate circles"},
        ]},
      ]},
      { id:"D3", tag:"PULL + BURN", blocks:[
        { title:"Hinge + Pull Block — 22 min", sets:[
          {move:"KB Romanian Deadlift",sets:"5×8",      load:"2×40 lb", note:"Added set — feel the stretch"},
          {move:"KB Dead Clean",       sets:"5×5/side", load:"40 lb",   note:"Dead start — max hip drive each rep"},
          {move:"Single-Arm KB Row",   sets:"5×8/side", load:"40 lb",   note:"Added set — squeeze at top"},
          {move:"KB Sumo Deadlift",    sets:"5×6",      load:"2×40 lb", note:"Added set — full lockout"},
        ]},
        { title:"Complex Finisher — 4 rounds (rest 80s)", sets:[
          {move:"KB Clean + Press",       sets:"5/side",  load:"40 lb",   note:"Added rep per side"},
          {move:"KB Front Squat",         sets:"5 reps",  load:"2×40 lb", note:"Added rep — elbows stay up"},
          {move:"KB Swing",               sets:"12 reps", load:"40 lb",   note:"Added reps — power reset each one"},
          {move:"KB Squat to Press",      sets:"6/side",  load:"40 lb",   note:"New — squat drives the press overhead"},
        ]},
      ]},
    ],
  },
  {
    id:3, label:"Phase 3", weeks:"Wks 7–9",
    title:"Intensity + Second Rotation", load:"Swings/DL: 53 lb · Press/Squat: 40 lb",
    focus:"53 lb enters on ballistics and deadlifts. Snatch and Bottoms-Up Press introduced. Single-leg work begins.",
    sessions:[
      { id:"D1", tag:"STRENGTH + POWER", blocks:[
        { title:"Power + Skill Block — 18 min", sets:[
          {move:"KB Snatch",          sets:"5×5/side", load:"40 lb",   note:"New — punch through at top, soft lockout"},
          {move:"Double KB Push Press",sets:"5×5",     load:"2×40 lb", note:"Own the dip-drive — leg power initiates"},
        ]},
        { title:"Strength Superset — 20 min", sets:[
          {move:"Double Front Squat", sets:"4×6",      load:"2×40 lb", note:"Reset volume — heavier loading next phase"},
          {move:"Bottoms-Up Press",   sets:"3×5/side", load:"30 lb",   note:"New — grip and shoulder stability challenge"},
        ]},
        { title:"Finisher — 8 min EMOM", sets:[
          {move:"KB Snatch",           sets:"5/side",  load:"40 lb", note:"Odd minutes — explosive hip"},
          {move:"KB Around the World", sets:"10/dir",  load:"40 lb", note:"Even minutes — control the bell path"},
        ]},
      ]},
      { id:"D2", tag:"CONDITIONING + CORE", blocks:[
        { title:"Ballistic Circuit — 20 min (4 rounds)", sets:[
          {move:"Hand-to-Hand Swing",   sets:"20 reps",   load:"53 lb", note:"Heavier bell — same crisp rhythm"},
          {move:"KB High Pull",         sets:"8/side",    load:"53 lb", note:"Heavier — control the top position"},
          {move:"KB Single-Leg RDL",    sets:"6/side",    load:"40 lb", note:"New — balance and hamstring focus"},
        ]},
        { title:"Core Triplet — 12 min (3 rounds)", sets:[
          {move:"KB Windmill",             sets:"5/side",      load:"40 lb", note:"Back to baseline vol — perfect form"},
          {move:"KB Overhead Carry",       sets:"50 yds/side", load:"40 lb", note:"10 more yards — lockout tight"},
          {move:"Suitcase + Overhead Carry",sets:"30 yds each",load:"40 lb", note:"New combo — both carries one pass"},
        ]},
      ]},
      { id:"D3", tag:"PULL + BURN", blocks:[
        { title:"Hinge + Pull Block — 20 min", sets:[
          {move:"KB Romanian Deadlift",sets:"4×8",      load:"2×53 lb", note:"Heavier bell — hamstring stretch every rep"},
          {move:"Double KB Clean",     sets:"4×4",      load:"2×40 lb", note:"New — bilateral clean, rack position tight"},
          {move:"Single-Arm KB Row",   sets:"4×8/side", load:"53 lb",   note:"Heavier — full pull to armpit"},
          {move:"KB Sumo Deadlift",    sets:"4×6",      load:"2×53 lb", note:"Heavier — drive the floor away"},
        ]},
        { title:"Complex Finisher — 3 rounds (rest 90s)", sets:[
          {move:"KB Snatch",             sets:"5/side",  load:"40 lb",   note:"Open with power"},
          {move:"Double Front Squat",    sets:"5 reps",  load:"2×40 lb", note:"Into the rack — sit deep"},
          {move:"KB Squat + Row Complex",sets:"6 reps",  load:"40 lb",   note:"New — squat, stand, row, repeat"},
          {move:"KB Goblet Lateral Lunge",sets:"6/side", load:"40 lb",   note:"Close with mobility — deep stretch"},
        ]},
      ]},
    ],
  },
  {
    id:4, label:"Phase 4", weeks:"Wk 10",
    title:"Deload", load:"Same as Phase 3 — cut volume 40%",
    focus:"Drop 1–2 sets from everything. Same weight. Same reps per set. Sleep well. This is where gains consolidate.",
    sessions:[
      { id:"D1", tag:"STRENGTH + POWER", blocks:[
        { title:"Power Block — reduced", sets:[
          {move:"KB Snatch",           sets:"3×5/side", load:"40 lb",   note:"Deload — 2 fewer sets, focus on precision"},
          {move:"Double KB Push Press", sets:"3×5",     load:"2×40 lb", note:"Deload — quality over quantity"},
        ]},
        { title:"Strength — reduced", sets:[
          {move:"Double Front Squat",  sets:"3×6",      load:"2×40 lb", note:"Deload — perfect every rep"},
          {move:"Bottoms-Up Press",    sets:"2×5/side", load:"30 lb",   note:"Deload — feel the stability demand"},
        ]},
        { title:"Easy flush — 5 min", sets:[
          {move:"KB Halo",        sets:"2×8/dir",      load:"40 lb", note:"Shoulder mobility — easy and slow"},
          {move:"Suitcase Carry", sets:"2×30 yds/side",load:"40 lb", note:"Light carry — posture check only"},
        ]},
      ]},
      { id:"D2", tag:"CONDITIONING + CORE", blocks:[
        { title:"Easy Ballistic — 15 min (3 rounds)", sets:[
          {move:"Single-Arm KB Swing",sets:"10/side",   load:"40 lb", note:"Deload — relax the grip, feel the hip"},
          {move:"KB High Pull",       sets:"6/side",    load:"40 lb", note:"Deload — light and controlled"},
          {move:"KB Single-Leg RDL",  sets:"5/side",    load:"40 lb", note:"Balance focus — no grinding"},
        ]},
        { title:"Core — 10 min (2 rounds)", sets:[
          {move:"KB Windmill",      sets:"4/side",       load:"40 lb", note:"Deload — slow and deliberate"},
          {move:"KB Overhead Carry",sets:"30 yds/side",  load:"40 lb", note:"Deload — posture check"},
          {move:"KB Around the World",sets:"6/dir",      load:"40 lb", note:"Deload — mobility flush"},
        ]},
      ]},
      { id:"D3", tag:"PULL + BURN", blocks:[
        { title:"Hinge + Pull — reduced", sets:[
          {move:"KB Romanian Deadlift",sets:"3×6",      load:"2×53 lb", note:"Deload — 2 fewer sets"},
          {move:"Double KB Clean",     sets:"3×3",      load:"2×40 lb", note:"Deload — feel the rack position"},
          {move:"Single-Arm KB Row",   sets:"3×6/side", load:"53 lb",   note:"Deload — full range only"},
          {move:"KB Sumo Deadlift",    sets:"3×5",      load:"2×53 lb", note:"Deload — no grinding reps"},
        ]},
        { title:"Light Complex — 2 rounds only", sets:[
          {move:"KB Snatch",             sets:"4/side",  load:"40 lb",   note:"Deload — easy power"},
          {move:"Double Front Squat",    sets:"4 reps",  load:"2×40 lb", note:"Deload — perfect mechanics"},
          {move:"KB Goblet Lateral Lunge",sets:"5/side", load:"40 lb",   note:"Deload — adductor flush"},
        ]},
      ]},
    ],
  },
  {
    id:5, label:"Phase 5", weeks:"Wks 11–14",
    title:"Advanced + Full Rotation", load:"Swings/DL: 53–62 lb · Press/Squat: 53 lb",
    focus:"Turkish Get-Up enters. Pistol squat progressions begin. Heaviest loads yet across all lifts.",
    sessions:[
      { id:"D1", tag:"STRENGTH + POWER", blocks:[
        { title:"Skill + Power Block — 20 min", sets:[
          {move:"Turkish Get-Up",     sets:"3×2/side", load:"40 lb",   note:"New — own every position, 60s per rep minimum"},
          {move:"KB Snatch",          sets:"5×6/side", load:"40 lb",   note:"Added rep — stay explosive throughout"},
        ]},
        { title:"Strength Superset — 20 min", sets:[
          {move:"Double KB Front Squat",sets:"4×6",    load:"2×53 lb", note:"Heavier — rack position critical at 6'6\""},
          {move:"Bottoms-Up Press",   sets:"4×5/side", load:"35 lb",   note:"Heavier bell — zero grip compromise"},
        ]},
        { title:"Finisher — 10 min EMOM", sets:[
          {move:"KB Snatch",                 sets:"6/side", load:"40 lb", note:"Odd minutes — max power"},
          {move:"KB Pistol Squat (Assisted)",sets:"4/side", load:"26 lb", note:"Even minutes — counterweight assist"},
        ]},
      ]},
      { id:"D2", tag:"CONDITIONING + CORE", blocks:[
        { title:"Ballistic Circuit — 20 min (4 rounds)", sets:[
          {move:"Hand-to-Hand Swing",   sets:"20 reps",   load:"62 lb", note:"Peak swing load — maximum hip power"},
          {move:"KB Snatch",            sets:"6/side",    load:"40 lb", note:"Added reps — crisp punch-through"},
          {move:"KB Single-Leg RDL",    sets:"8/side",    load:"40 lb", note:"Added reps — own the balance"},
        ]},
        { title:"Core Triplet — 12 min (3 rounds)", sets:[
          {move:"KB Snatch + Windmill", sets:"3/side",       load:"40 lb", note:"New combo — snatch up, windmill back down"},
          {move:"Bottoms-Up Carry",     sets:"30 yds/side",  load:"35 lb", note:"New — inverted bell, supreme stability"},
          {move:"KB Around the World",  sets:"10/dir",       load:"40 lb", note:"Shoulder mobility maintenance"},
        ]},
      ]},
      { id:"D3", tag:"PULL + BURN", blocks:[
        { title:"Hinge + Skill Block — 22 min", sets:[
          {move:"Turkish Get-Up",        sets:"3×2/side", load:"40 lb",   note:"Skill focus — every position deliberate"},
          {move:"KB Romanian Deadlift",  sets:"4×8",      load:"2×62 lb", note:"Heaviest yet — control every inch"},
          {move:"Double KB Clean",       sets:"4×5",      load:"2×40 lb", note:"Added rep — rack punch stays crisp"},
          {move:"KB Clean + Front Squat",sets:"4×4/side", load:"40 lb",   note:"New complex — clean feeds the squat"},
        ]},
        { title:"Complex Finisher — 4 rounds (rest 90s)", sets:[
          {move:"KB Snatch",                 sets:"5/side",   load:"40 lb",   note:"Power opener"},
          {move:"Double KB Front Squat",     sets:"5 reps",   load:"2×53 lb", note:"Heavier squat"},
          {move:"Bottoms-Up Press",          sets:"4/side",   load:"35 lb",   note:"Stability press"},
          {move:"KB Pistol Squat (Assisted)",sets:"4/side",   load:"26 lb",   note:"Strength closer"},
        ]},
      ]},
    ],
  },
  {
    id:6, label:"Phase 6", weeks:"Wks 15–18",
    title:"Peak — Full Power", load:"Swings/DL: 62 lb · Press/Squat: 53 lb · TGU: 53 lb",
    focus:"Heaviest loads. Most complex movements. Repeat this phase indefinitely by adding load.",
    sessions:[
      { id:"D1", tag:"STRENGTH + POWER", blocks:[
        { title:"Skill + Power Block — 22 min", sets:[
          {move:"Turkish Get-Up",      sets:"4×2/side",      load:"53 lb",   note:"Peak TGU — every position still perfect"},
          {move:"KB Snatch Complex",   sets:"4×(5+5)/side",  load:"40 lb",   note:"Snatch 5 reps, hold overhead, 5 windmills"},
        ]},
        { title:"Strength Superset — 20 min", sets:[
          {move:"Double KB Front Squat",sets:"5×5",          load:"2×53 lb", note:"Peak squat load — 3s eccentric always"},
          {move:"Bottoms-Up Press",    sets:"4×6/side",      load:"40 lb",   note:"Peak BU press — zero wobble"},
        ]},
        { title:"Finisher — 12 min EMOM", sets:[
          {move:"KB Snatch",                 sets:"8/side", load:"40 lb", note:"Odd minutes — max power output"},
          {move:"KB Pistol Squat (Assisted)",sets:"5/side", load:"26 lb", note:"Even minutes — strength and balance"},
        ]},
      ]},
      { id:"D2", tag:"CONDITIONING + CORE", blocks:[
        { title:"Ballistic Circuit — 20 min (5 rounds)", sets:[
          {move:"Double KB Swing",      sets:"12 reps",   load:"2×62 lb", note:"Peak double swing — max hip power"},
          {move:"KB Snatch",            sets:"8/side",    load:"40 lb",   note:"Added reps — keep the punch-through"},
          {move:"KB Single-Leg RDL",    sets:"8/side",    load:"53 lb",   note:"Heavier — balance is fully earned now"},
        ]},
        { title:"Core Triplet — 12 min (3 rounds)", sets:[
          {move:"Turkish Get-Up + Press",sets:"2/side",      load:"53 lb", note:"TGU with an extra press at the top"},
          {move:"Bottoms-Up Carry",     sets:"40 yds/side",  load:"40 lb", note:"Heavier carry — supreme stability"},
          {move:"KB Snatch + Windmill", sets:"4/side",       load:"40 lb", note:"Snatch up, windmill down — fluid chain"},
        ]},
      ]},
      { id:"D3", tag:"PULL + BURN", blocks:[
        { title:"Hinge + Skill — 22 min", sets:[
          {move:"Turkish Get-Up",        sets:"4×2/side", load:"53 lb",   note:"Peak TGU load — deliberate and slow"},
          {move:"KB Romanian Deadlift",  sets:"5×8",      load:"2×62 lb", note:"Peak hinge load — feel every inch"},
          {move:"Double KB Clean",       sets:"5×5",      load:"2×53 lb", note:"Heavier double clean — rack stays crisp"},
          {move:"KB Clean + Front Squat",sets:"5×4/side", load:"53 lb",   note:"Heavier complex — peak pull + squat"},
        ]},
        { title:"Peak Complex — 4 rounds (rest 90s)", sets:[
          {move:"KB Full Complex",            sets:"(C+P+Sq) ×4/side", load:"53 lb",   note:"Clean + Press + Squat chained — one fluid movement"},
          {move:"Double KB Snatch",           sets:"5 reps",           load:"2×40 lb", note:"Bilateral explosive power — hardest move in program"},
          {move:"KB Pistol Squat (Assisted)", sets:"5/side",           load:"26 lb",   note:"Strength finisher — go deep"},
        ]},
      ]},
    ],
  },
];

// ════════════════════════════════════════
// PLAN DATA — 3-DAY FORMAT
// ════════════════════════════════════════
const planPhases = [
  {
    weeks:"Wks 1–3", title:"Phase 1 — Foundation",
    focus:"3 days/week. 2×40 lb throughout. Master every pattern before adding load or complexity.",
    sessions:[
      {label:"Day 1 — Strength + Power", exercises:[
        {name:"Double KB Swing",    detail:"5×10 · 2×40",   badge:""},
        {name:"KB Push Press",      detail:"4×5/side · 40", badge:""},
        {name:"Double Front Squat", detail:"4×6 · 2×40",    badge:""},
        {name:"Renegade Row",       detail:"4×5/side · 2×40",badge:""},
        {name:"EMOM Finisher",      detail:"8 min",          badge:"", note:"Goblet Squat / Plank Pull-Through alternating"},
      ]},
      {label:"Day 2 — Conditioning + Core", exercises:[
        {name:"Single-Arm Swing",   detail:"4×12/side · 40", badge:""},
        {name:"KB High Pull",       detail:"4×8/side · 40",  badge:""},
        {name:"KB Alt Deadlift",    detail:"4×10/side · 40", badge:""},
        {name:"KB Windmill",        detail:"3×5/side · 40",  badge:""},
        {name:"Suitcase Carry",     detail:"3×40 yds · 40",  badge:""},
        {name:"KB Halo",            detail:"3×8/dir · 40",   badge:""},
      ]},
      {label:"Day 3 — Pull + Burn", exercises:[
        {name:"KB Romanian DL",     detail:"4×8 · 2×40",    badge:""},
        {name:"KB Clean",           detail:"5×4/side · 40", badge:""},
        {name:"Single-Arm KB Row",  detail:"4×8/side · 40", badge:""},
        {name:"KB Sumo Deadlift",   detail:"4×6 · 2×40",   badge:""},
        {name:"Complex Finisher",   detail:"3 rounds · 90s rest", badge:"", note:"Clean+Press / Front Squat / Swing / Lateral Lunge"},
      ]},
    ],
  },
  {
    weeks:"Wks 4–6", title:"Phase 2 — Volume + First Rotation",
    focus:"Retire KB Clean, Single-Arm Swing, Halo, Plank Pull-Through, Z-Press, Lateral Lunge. Introduce 6 new moves. Add sets.",
    sessions:[
      {label:"Day 1 — What Changed", exercises:[
        {name:"Double KB Push Press",  detail:"5×5 · 2×40",    badge:"new",     note:"Bilateral push — replaces single-arm Push Press"},
        {name:"KB Dead Clean",         detail:"4×5/side · 40",  badge:"new",     note:"Dead start — replaces KB Clean"},
        {name:"KB Around the World",   detail:"8/dir · 40",     badge:"new",     note:"Replaces Plank Pull-Through in EMOM"},
        {name:"Double KB Swing",       detail:"6×10",           badge:"updated", note:"Added set"},
        {name:"Double Front Squat",    detail:"5×6",            badge:"updated", note:"Added set"},
      ]},
      {label:"Day 2 — What Changed", exercises:[
        {name:"Hand-to-Hand Swing",   detail:"4×20 · 40",        badge:"new",     note:"Replaces Single-Arm Swing — adds hand release skill"},
        {name:"KB Overhead Carry",    detail:"3×40 yds/side · 40",badge:"new",    note:"Replaces Suitcase Carry — overhead stability"},
        {name:"KB High Pull",         detail:"4×10/side",        badge:"updated", note:"+2 reps per set"},
        {name:"KB Alt Deadlift",      detail:"4×12/side",        badge:"updated", note:"+2 reps per set"},
      ]},
      {label:"Day 3 — What Changed", exercises:[
        {name:"KB Dead Clean",        detail:"5×5/side · 40",   badge:"new",     note:"Dead start — replaces KB Clean"},
        {name:"KB Squat to Press",    detail:"4×6/side · 40",   badge:"new",     note:"New finisher move — squat drives the press"},
        {name:"KB Romanian DL",       detail:"5×8",             badge:"updated", note:"Added set"},
        {name:"Single-Arm KB Row",    detail:"5×8/side",        badge:"updated", note:"Added set"},
        {name:"KB Sumo DL",           detail:"5×6",             badge:"updated", note:"Added set"},
        {name:"Complex goes 4 rounds",detail:"rest 80s",        badge:"updated", note:"+1 round, -10s rest"},
      ]},
    ],
  },
  {
    weeks:"Wks 7–9", title:"Phase 3 — Intensity + Second Rotation",
    focus:"53 lb enters on swings, deadlifts, and carries. Snatch, Bottoms-Up Press, and single-leg work all begin.",
    sessions:[
      {label:"Day 1 — What Changed", exercises:[
        {name:"KB Snatch",            detail:"5×5/side · 40",   badge:"new",     note:"Replaces Double KB Swing in power block"},
        {name:"Bottoms-Up Press",     detail:"3×5/side · 30",   badge:"new",     note:"Replaces Renegade Row — grip + shoulder stability"},
        {name:"Retired: Renegade Row",detail:"",                 badge:"retired", note:"Returns in Phase 6 as Full Complex"},
      ]},
      {label:"Day 2 — What Changed", exercises:[
        {name:"Hand-to-Hand Swing",   detail:"4×20 · 53 lb",    badge:"updated", note:"Heavier bell — same rhythm"},
        {name:"KB High Pull",         detail:"4×8/side · 53 lb",badge:"updated", note:"Heavier bell"},
        {name:"KB Single-Leg RDL",    detail:"4×6/side · 40",   badge:"new",     note:"Replaces KB Alt Deadlift — unilateral demand"},
        {name:"Suitcase + Overhead",  detail:"combo carry",      badge:"new",     note:"Both carry patterns in one set"},
      ]},
      {label:"Day 3 — What Changed", exercises:[
        {name:"Double KB Clean",      detail:"4×4 · 2×40",      badge:"new",     note:"Replaces KB Dead Clean — bilateral power"},
        {name:"KB Romanian DL",       detail:"4×8 · 2×53 lb",   badge:"updated", note:"Heavier bell"},
        {name:"KB Sumo DL",           detail:"4×6 · 2×53 lb",   badge:"updated", note:"Heavier bell"},
        {name:"Single-Arm KB Row",    detail:"4×8/side · 53 lb",badge:"updated", note:"Heavier bell"},
        {name:"Snatch opens complex", detail:"replaces Clean+Press",badge:"new",  note:"More athletic demand in finisher"},
      ]},
    ],
  },
  {
    weeks:"Wk 10", title:"Phase 4 — Deload",
    focus:"Cut all volume by 40%. Same weights, same reps per set. No new exercises. Sleep 8 hours. Gains happen here.",
    sessions:[
      {label:"All 3 Sessions", exercises:[
        {name:"All main lifts",    detail:"3 sets only",  badge:"", note:"Drop 1–2 sets from everything"},
        {name:"All rest periods",  detail:"90–120s",      badge:"", note:"Extend rest — don't push the pace"},
        {name:"Finishers",         detail:"Skip or halve",badge:"", note:"Cut rounds in half or skip entirely"},
        {name:"Focus",             detail:"Perfection",   badge:"", note:"Every rep flawless — skill refinement week"},
        {name:"Recovery",          detail:"Priority",     badge:"", note:"Sleep, nutrition, and soft tissue work"},
      ]},
    ],
  },
  {
    weeks:"Wks 11–14", title:"Phase 5 — Advanced + Full Rotation",
    focus:"Turkish Get-Up at 40 lb. Pistol squat progressions begin. All press/squat loads move to 53 lb. Swings/DL hit 62 lb.",
    sessions:[
      {label:"Day 1 — What Changed", exercises:[
        {name:"Turkish Get-Up",         detail:"3×2/side · 40",   badge:"new",     note:"Replaces KB Around the World — peak skill move"},
        {name:"Double KB Front Squat",  detail:"4×6 · 2×53 lb",   badge:"updated", note:"Heavier bell — critical rack position at 6'6\""},
        {name:"Bottoms-Up Press",       detail:"4×5/side · 35 lb",badge:"updated", note:"Heavier bell"},
        {name:"KB Pistol Squat (Assisted)",detail:"EMOM · 26 lb", badge:"new",     note:"Replaces KB Goblet Squat in EMOM"},
      ]},
      {label:"Day 2 — What Changed", exercises:[
        {name:"Hand-to-Hand Swing",    detail:"4×20 · 62 lb",     badge:"updated", note:"Peak swing load"},
        {name:"KB Snatch + Windmill",  detail:"3×3/side · 40",    badge:"new",     note:"Replaces KB Around the World — linked skill combo"},
        {name:"Bottoms-Up Carry",      detail:"3×30 yds · 35",    badge:"new",     note:"Replaces KB Overhead Carry — inverted bell"},
      ]},
      {label:"Day 3 — What Changed", exercises:[
        {name:"Turkish Get-Up",         detail:"3×2/side · 40",   badge:"new",     note:"Added as skill primer in pull block"},
        {name:"KB Romanian DL",         detail:"4×8 · 2×62 lb",   badge:"updated", note:"Peak hinge load"},
        {name:"KB Clean + Front Squat", detail:"4×4/side · 40",   badge:"new",     note:"Replaces KB Squat to Press — linked complex"},
        {name:"Pistol Squat in complex",detail:"4/side · 26 lb",  badge:"new",     note:"Replaces KB Goblet Lateral Lunge"},
        {name:"Retired: Goblet Lunge",  detail:"",                 badge:"retired", note:"Replaced by pistol squat progression"},
      ]},
    ],
  },
  {
    weeks:"Wks 15–18", title:"Phase 6 — Peak Performance",
    focus:"Heaviest loads across everything. Double KB Snatch enters. TGU hits 53 lb. Repeat indefinitely adding load.",
    sessions:[
      {label:"Day 1 — What Changed", exercises:[
        {name:"Turkish Get-Up",        detail:"4×2/side · 53 lb", badge:"updated", note:"TGU hits peak load"},
        {name:"KB Snatch Complex",     detail:"4×(5+5)/side",     badge:"new",     note:"Snatch 5 reps → hold → 5 windmills"},
        {name:"Double KB Front Squat", detail:"5×5 · 2×53 lb",   badge:"updated", note:"Added set at peak load"},
        {name:"Bottoms-Up Press",      detail:"4×6/side · 40",   badge:"updated", note:"Peak BU press load"},
      ]},
      {label:"Day 2 — What Changed", exercises:[
        {name:"Double KB Swing",       detail:"5×12 · 2×62 lb",  badge:"updated", note:"Returns — double bell at peak load"},
        {name:"Turkish Get-Up + Press",detail:"3×2/side · 53",   badge:"new",     note:"TGU with overhead press at top"},
        {name:"KB Single-Leg RDL",     detail:"5×8/side · 53 lb",badge:"updated", note:"Heavier — full balance mastery"},
      ]},
      {label:"Day 3 — What Changed", exercises:[
        {name:"KB Full Complex",       detail:"4×(C+P+Sq)×4/side · 53",badge:"new",   note:"Clean+Press+Squat chained — replaces individual moves"},
        {name:"Double KB Snatch",      detail:"4×5 · 2×40",      badge:"new",     note:"Bilateral explosive peak — hardest move in program"},
        {name:"Double KB Clean",       detail:"5×5 · 2×53 lb",   badge:"updated", note:"Heavier double clean"},
        {name:"KB Romanian DL",        detail:"5×8 · 2×62 lb",   badge:"updated", note:"Peak hinge — added set"},
        {name:"TGU at 53 lb",          detail:"4×2/side",         badge:"updated", note:"Peak TGU in pull session too"},
      ]},
    ],
  },
];

// ════════════════════════════════════════
// STATE
// ════════════════════════════════════════
let activePhaseIdx = 0;
let activeSession = 'D1';
let expandedBlock = null;
let expandedPlanPhase = null;
let workoutLog = JSON.parse(localStorage.getItem('kbLog') || '[]');

// ════════════════════════════════════════
// NAV
// ════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
  if (id === 'log') renderLog();
  if (id === 'progress') renderProgress();
  if (id === 'plan') renderPlan();
}

// ════════════════════════════════════════
// PHASE SELECTOR
// ════════════════════════════════════════
function renderPhaseSelector() {
  const sel = document.getElementById('phase-selector');
  sel.innerHTML = allPhases.map((p, i) => `
    <button onclick="switchPhase(${i})" style="
      flex-shrink:0;padding:8px 14px;border-radius:10px;border:none;cursor:pointer;
      font-family:'DM Mono',monospace;font-size:11px;font-weight:500;letter-spacing:1px;
      background:${i === activePhaseIdx ? 'var(--orange)' : 'var(--bg2)'};
      color:${i === activePhaseIdx ? '#fff' : 'var(--text3)'};
      border:1px solid ${i === activePhaseIdx ? 'var(--orange)' : 'var(--border)'};
      transition:all .2s;
    ">${p.label}</button>
  `).join('');
}

function switchPhase(i) {
  activePhaseIdx = i;
  activeSession = 'D1';
  expandedBlock = null;
  renderPhaseSelector();
  renderPhaseBanner();
  renderSessionTabs();
  renderBlocks();
}

function renderPhaseBanner() {
  const p = allPhases[activePhaseIdx];
  document.getElementById('phase-banner').innerHTML = `
    <div class="phase-banner">
      <div>
        <div class="phase-banner-label">${p.weeks} · ${p.load}</div>
        <div class="phase-banner-title">${p.title}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:3px;">${p.focus}</div>
      </div>
      <div class="phase-banner-right">P${p.id}</div>
    </div>
  `;
}

// ════════════════════════════════════════
// SESSION TABS
// ════════════════════════════════════════
function switchSession(sid) {
  activeSession = sid;
  expandedBlock = null;
  renderSessionTabs();
  renderBlocks();
}

function renderSessionTabs() {
  const phase = allPhases[activePhaseIdx];
  const labels = { D1:'Day 1', D2:'Day 2', D3:'Day 3' };
  document.getElementById('session-tabs').innerHTML = phase.sessions.map(s => {
    const c = tagColors[s.tag];
    const a = s.id === activeSession;
    return `<button class="session-btn ${a ? 'active' : ''}" onclick="switchSession('${s.id}')"
      style="border-color:${a ? c : 'var(--border)'}">
      <div class="sid" style="color:${c}">${labels[s.id]}</div>
      <div class="stag">${s.tag}</div>
    </button>`;
  }).join('');
}

// ════════════════════════════════════════
// BLOCKS
// ════════════════════════════════════════
function toggleBlock(idx) {
  expandedBlock = expandedBlock === idx ? null : idx;
  renderBlocks();
}

function renderBlocks() {
  const phase = allPhases[activePhaseIdx];
  const session = phase.sessions.find(s => s.id === activeSession);
  const color = tagColors[session.tag];
  document.getElementById('blocks-container').innerHTML = session.blocks.map((block, bi) => {
    const isOpen = expandedBlock === bi;
    const exRows = block.sets.map(ex => {
      const url = videos[ex.move];
      const watchBtn = url ? `<a class="watch-btn" href="${url}" target="_blank" rel="noopener"
        style="color:${color};border-color:${color}55;background:${color}18">▶ WATCH</a>` : '';
      return `<div class="ex-row">
        <div>
          <div class="ex-name">${ex.move}</div>
          ${ex.note ? `<div class="ex-note">${ex.note}</div>` : ''}
          <div class="ex-actions">
            ${watchBtn}
            <button class="timer-btn" onclick="openTimer('${ex.move.replace(/'/g,"\\'")}')">⏱ REST</button>
          </div>
        </div>
        <div class="ex-right">
          <div class="ex-sets" style="color:${color}">${ex.sets}</div>
          <div class="ex-load">${ex.load}</div>
        </div>
      </div>`;
    }).join('');
    return `<div class="block-wrap">
      <button class="block-header ${isOpen ? 'open' : ''}" onclick="toggleBlock(${bi})"
        style="border-color:${isOpen ? color : 'var(--border)'}">
        <div>
          <div class="block-num" style="color:${color}">Block ${bi + 1}</div>
          <div class="block-title">${block.title}</div>
        </div>
        <div class="block-chevron" style="background:${isOpen ? color : 'var(--bg3)'}">${isOpen ? '−' : '+'}</div>
      </button>
      ${isOpen ? `<div class="block-body" style="border-color:${color}">${exRows}</div>` : ''}
    </div>`;
  }).join('');
}

// ════════════════════════════════════════
// PLAN
// ════════════════════════════════════════
function togglePlanPhase(i) {
  expandedPlanPhase = expandedPlanPhase === i ? null : i;
  renderPlan();
}

function renderPlan() {
  const badgeMap = {
    new:     '<span class="new-badge">NEW</span>',
    updated: '<span class="updated-badge">UPDATED</span>',
    retired: '<span class="retired-badge">RETIRED</span>',
    '': '',
  };
  document.getElementById('plan-phases').innerHTML = planPhases.map((phase, pi) => {
    const isOpen = expandedPlanPhase === pi;
    return `<div class="plan-phase">
      <div class="plan-phase-header ${isOpen ? 'open' : ''}" onclick="togglePlanPhase(${pi})">
        <div style="flex:1;">
          <div class="plan-phase-wk">${phase.weeks}</div>
          <div class="plan-phase-title">${phase.title}</div>
          <div class="plan-phase-focus">${phase.focus}</div>
        </div>
        <div class="block-chevron" style="background:${isOpen ? 'var(--orange)' : 'var(--bg3)'};margin-left:10px;flex-shrink:0;">${isOpen ? '−' : '+'}</div>
      </div>
      ${isOpen ? `<div class="plan-phase-body">
        ${phase.sessions.map(sess => `
          <div class="plan-session">
            <div class="plan-session-label">${sess.label}</div>
            ${sess.exercises.map(ex => `
              <div class="plan-ex">
                <div class="plan-ex-row">
                  <div class="plan-ex-name">${ex.name}${badgeMap[ex.badge] || ''}</div>
                  ${ex.detail ? `<div class="plan-ex-detail">${ex.detail}</div>` : ''}
                </div>
                ${ex.note ? `<div class="plan-ex-note">${ex.note}</div>` : ''}
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>` : ''}
    </div>`;
  }).join('');
}

// ════════════════════════════════════════
// REST TIMER
// ════════════════════════════════════════
let timerDuration = 60, timerRemaining = 60, timerRunning = false, timerInterval = null;
const CIRC = 628;

function setPreset(sec, btn) {
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  timerDuration = sec; timerRemaining = sec; timerRunning = false;
  clearInterval(timerInterval);
  document.getElementById('timer-toggle-btn').textContent = 'Start';
  updateTimerDisplay();
}
function openTimer(name) {
  document.getElementById('timer-exercise-name').textContent = name;
  timerRemaining = timerDuration; timerRunning = false;
  clearInterval(timerInterval);
  document.getElementById('timer-toggle-btn').textContent = 'Start';
  updateTimerDisplay();
  document.getElementById('timer-overlay').classList.add('visible');
}
function closeTimer() {
  clearInterval(timerInterval); timerRunning = false;
  document.getElementById('timer-overlay').classList.remove('visible');
}
function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval); timerRunning = false;
    document.getElementById('timer-toggle-btn').textContent = 'Resume';
  } else {
    timerRunning = true;
    document.getElementById('timer-toggle-btn').textContent = 'Pause';
    timerInterval = setInterval(() => {
      timerRemaining--;
      updateTimerDisplay();
      if (timerRemaining <= 0) {
        clearInterval(timerInterval); timerRunning = false;
        document.getElementById('timer-toggle-btn').textContent = 'Start';
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        timerRemaining = timerDuration;
        setTimeout(updateTimerDisplay, 300);
      }
    }, 1000);
  }
}
function updateTimerDisplay() {
  const pct = timerRemaining / timerDuration, offset = CIRC * (1 - pct);
  const prog = document.getElementById('timer-progress');
  prog.style.strokeDashoffset = offset;
  prog.classList.toggle('urgent', timerRemaining <= 10);
  document.getElementById('timer-number').textContent =
    timerRemaining >= 60
      ? Math.floor(timerRemaining / 60) + ':' + String(timerRemaining % 60).padStart(2, '0')
      : timerRemaining;
}

// ════════════════════════════════════════
// LOG
// ════════════════════════════════════════
function logWorkout() {
  const phase = allPhases[activePhaseIdx];
  const session = phase.sessions.find(s => s.id === activeSession);
  const dayLabels = { D1:'Day 1', D2:'Day 2', D3:'Day 3' };
  const entry = {
    date: new Date().toLocaleDateString('en-US', {weekday:'short',month:'short',day:'numeric',year:'numeric'}),
    session: dayLabels[activeSession],
    tag: session.tag,
    phase: phase.label,
  };
  workoutLog.unshift(entry);
  localStorage.setItem('kbLog', JSON.stringify(workoutLog));
  renderLog();
  showPage('log');
}

function renderLog() {
  const c = document.getElementById('log-list');
  if (!workoutLog.length) {
    c.innerHTML = `<div class="log-empty"><span class="big">🏋️</span>No workouts logged yet.<br>Complete a session and tap<br>"Log Today's Session."</div>`;
    return;
  }
  c.innerHTML = workoutLog.map(e => `
    <div class="log-entry">
      <div class="log-entry-date">${e.date}</div>
      <div class="log-entry-session">${e.phase || ''} · ${e.session}</div>
      <div class="log-entry-detail">${e.tag}</div>
    </div>
  `).join('');
}

// ════════════════════════════════════════
// PROGRESS
// ════════════════════════════════════════
function renderProgress() {
  const total = workoutLog.length;
  const target = 54; // 18 weeks × 3 sessions
  const pct = Math.min(100, Math.round((total / target) * 100));
  const weeksDone = Math.floor(total / 3);
  const currentPhase = total < 9 ? 1 : total < 18 ? 2 : total < 27 ? 3 : total < 30 ? 4 : total < 42 ? 5 : 6;

  document.getElementById('progress-content').innerHTML = `
    <div class="prog-card">
      <div class="prog-card-label">Overall Progress</div>
      <div class="prog-stat-row">
        <div class="prog-stat"><div class="ps-label">Sessions</div><div class="ps-val">${total}</div><div class="ps-unit">logged</div></div>
        <div class="prog-stat"><div class="ps-label">Weeks</div><div class="ps-val">${weeksDone}</div><div class="ps-unit">complete</div></div>
        <div class="prog-stat"><div class="ps-label">Program</div><div class="ps-val">${pct}%</div><div class="ps-unit">of 18 wks</div></div>
      </div>
      <div class="prog-bar-wrap">
        <div class="prog-bar-label"><span>18-Week Completion</span><span>${pct}%</span></div>
        <div class="prog-bar-track"><div class="prog-bar-fill" style="width:${pct}%"></div></div>
      </div>
    </div>
    <div class="prog-card" style="margin-top:10px;">
      <div class="prog-card-label">Current Phase</div>
      <div style="font-size:13px;color:var(--text2);line-height:1.6;">
        ${total===0 ? '🔴 Not started — go get your first session in.' :
          currentPhase===1 ? '🟡 <strong>Phase 1 — Foundation:</strong> Master the patterns. 2×40 lb.' :
          currentPhase===2 ? '🟠 <strong>Phase 2 — Volume:</strong> Added sets, first 6 new moves.' :
          currentPhase===3 ? '🟢 <strong>Phase 3 — Intensity:</strong> 53 lb on swings/DL. Snatch begins.' :
          currentPhase===4 ? '🔵 <strong>Phase 4 — Deload:</strong> Rest up. This is where gains happen.' :
          currentPhase===5 ? '🟣 <strong>Phase 5 — Advanced:</strong> Turkish Get-Up. Pistol squat. 62 lb.' :
                             '🔴 <strong>Phase 6 — Peak:</strong> Double snatch. TGU at 53 lb. Max load.'}
      </div>
    </div>
    <div class="prog-card" style="margin-top:10px;">
      <div class="prog-card-label">Session Breakdown</div>
      ${['Day 1','Day 2','Day 3'].map(day => {
        const count = workoutLog.filter(e => e.session === day).length;
        const max = Math.max(...['Day 1','Day 2','Day 3'].map(d => workoutLog.filter(e => e.session===d).length), 1);
        const p = Math.round((count/max)*100);
        return `<div class="prog-bar-wrap" style="margin-bottom:10px;">
          <div class="prog-bar-label"><span>${day}</span><span>${count} sessions</span></div>
          <div class="prog-bar-track"><div class="prog-bar-fill" style="width:${p}%"></div></div>
        </div>`;
      }).join('')}
    </div>`;
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
renderPhaseSelector();
renderPhaseBanner();
renderSessionTabs();
renderBlocks();
renderLog();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
