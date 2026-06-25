const DATA = {
  "meta": {
    "title": "Jae Aesthetic 6-Day Split",
    "startWeight": 63.0,
    "waist": 32.0,
    "startDate": "25-Jun",
    "cardio": "30 min incline walk daily after lifting (10–12% incline, 4.5–5.5 km/h)"
  },
  "schedule": [
    {"date": "22-Jun", "day": "Mon", "workout": "Upper A (Heavy)", "cardio": "30 min incline walk"},
    {"date": "23-Jun", "day": "Tue", "workout": "Lower + Delts", "cardio": "30 min incline walk"},
    {"date": "24-Jun", "day": "Wed", "workout": "Arms + Delts", "cardio": "30 min incline walk"},
    {"date": "25-Jun", "day": "Thu", "workout": "Upper B (Volume)", "cardio": "30 min incline walk"},
    {"date": "26-Jun", "day": "Fri", "workout": "Arms + Shoulders", "cardio": "30 min incline walk"},
    {"date": "27-Jun", "day": "Sat", "workout": "Legs + Upper Chest", "cardio": "30 min incline walk"},
    {"date": "28-Jun", "day": "Sun", "workout": "Rest + Mobility", "cardio": "Optional easy walk"}
  ],
  "workoutOrder": [
    "Upper A (Heavy)",
    "Lower + Delts",
    "Arms + Delts",
    "Upper B (Volume)",
    "Arms + Shoulders",
    "Legs + Upper Chest"
  ],
  "restDefaults": {
    "Upper A (Heavy)": 90,
    "Lower + Delts": 90,
    "Arms + Delts": 60,
    "Upper B (Volume)": 60,
    "Arms + Shoulders": 60,
    "Legs + Upper Chest": 90
  },
  "tiers": {
    "Heavy": {
      "rest": 120,
      "hint": "Heavy compounds \u2014 90\u2013120 sec rest. Focus on strength."
    },
    "Hypertrophy": {
      "rest": 90,
      "hint": "Build \u2014 controlled tempo, push close to failure."
    },
    "Pump": {
      "rest": 60,
      "hint": "Pump \u2014 high reps, short rest, chase the burn."
    }
  },
  "workSpots": [
    {"name": "Third Wave Coffee \u2014 Rajajinagar", "area": "Rajajinagar (near Vijayanagar)", "type": "Cafe", "cost": "Buy a coffee (~\u20b9250)", "note": "Closest to home, fast wifi, laptops welcome, techie regulars.", "maps": "Third Wave Coffee Rajajinagar Bangalore"},
    {"name": "Starbucks \u2014 Orion Mall", "area": "Rajajinagar / Brigade Gateway", "type": "Cafe", "cost": "Buy a coffee", "note": "AC, outlets, very long-stay friendly, 10 min from Vijayanagar.", "maps": "Starbucks Orion Mall Rajajinagar"},
    {"name": "BHIVE Workspace \u2014 Koramangala", "area": "Koramangala", "type": "Coworking", "cost": "Day pass ~\u20b9300 (promos \u20b975)", "note": "Heart of the startup scene \u2014 founders, tech folks, events. Great to network.", "maps": "BHIVE Workspace Koramangala"},
    {"name": "WeWork Galaxy \u2014 Residency Road", "area": "Central / MG Road", "type": "Coworking", "cost": "Day pass", "note": "Premium, unlimited coffee, dense tech/startup crowd, phone booths.", "maps": "WeWork Galaxy Residency Road Bangalore"},
    {"name": "91springboard \u2014 Koramangala", "area": "Koramangala", "type": "Coworking", "cost": "Day pass", "note": "Big community + frequent founder/startup events to meet people.", "maps": "91springboard Koramangala"},
    {"name": "Paper & Pie \u2014 Indiranagar", "area": "Indiranagar", "type": "Cafe", "cost": "Buy a coffee", "note": "Quiet, plug points everywhere, creative/startup crowd.", "maps": "Paper and Pie Indiranagar"},
    {"name": "Beanlore \u2014 HSR Layout", "area": "HSR Layout", "type": "Cafe", "cost": "Buy a coffee", "note": "Work-friendly specialty cafe, lots of engineers/founders.", "maps": "Beanlore HSR Layout"},
    {"name": "Atta Galatta \u2014 Koramangala", "area": "Koramangala", "type": "Cafe / Bookstore", "cost": "Buy a coffee", "note": "Quiet, free wifi, good for deep focus blocks.", "maps": "Atta Galatta Koramangala"},
    {"name": "GoFloaters / myHQ (app)", "area": "Citywide", "type": "Day-pass finder", "cost": "\u20b9200\u2013\u20b91000/day", "note": "Book the nearest desk on-demand \u2014 compare spots near you each day.", "maps": "GoFloaters Bangalore"}
  ],
  "food": {
    "kcalGoal": 1940,
    "proteinGoal": 150,
    "carbGoal": 254,
    "fatGoal": 42,
    "waterGoal": 10,
    "coffeeGoal": 2,
    "meals": [
      {"name": "Oats + whey (pre-gym)", "kcal": 362, "protein": 25, "carbs": 50, "fat": 8, "pre": true},
      {"name": "Whey shake (post-workout)", "kcal": 130, "protein": 25, "carbs": 4, "fat": 2},
      {"name": "Rice + chicken (home, 9:45)", "kcal": 362, "protein": 25, "carbs": 50, "fat": 8},
      {"name": "Rice + chicken (spot)", "kcal": 362, "protein": 25, "carbs": 50, "fat": 8},
      {"name": "Rice + chicken (spot)", "kcal": 362, "protein": 25, "carbs": 50, "fat": 8},
      {"name": "Dinner", "kcal": 362, "protein": 25, "carbs": 50, "fat": 8}
    ],
    "supps": [
      {"name": "Creatine 5g", "when": "Daily \u00b7 anytime (post-workout)"},
      {"name": "HMB 3g", "when": "Pre-workout"},
      {"name": "Magnesium", "when": "Evening \u00b7 before bed"}
    ]
  },
  "workouts": {
    "Upper A (Heavy)": [
      {"exercise": "Incline DB Press", "tier": "Heavy", "sets": 4, "repTarget": "6-8", "rest": 120, "startKg": 17.5, "nextKg": 17.5},
      {"exercise": "Chest Supported Row", "tier": "Heavy", "sets": 4, "repTarget": "6-8", "rest": 120, "startKg": 40.0, "nextKg": 40.0},
      {"exercise": "Lat Pulldown", "tier": "Hypertrophy", "sets": 3, "repTarget": "8-10", "rest": 90, "startKg": 45.0, "nextKg": 45.0},
      {"exercise": "Machine Shoulder Press", "tier": "Hypertrophy", "sets": 3, "repTarget": "8-10", "rest": 90, "startKg": 30.0, "nextKg": 30.0},
      {"exercise": "Lateral Raise", "tier": "Pump", "sets": 4, "repTarget": "12-15", "rest": 60, "startKg": 7.5, "nextKg": 7.5},
      {"exercise": "Overhead Tricep Extension", "tier": "Hypertrophy", "sets": 4, "repTarget": "10-12", "rest": 60, "startKg": 12.5, "nextKg": 12.5},
      {"exercise": "Cable Curl", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 60, "startKg": 15.0, "nextKg": 15.0}
    ],
    "Lower + Delts": [
      {"exercise": "Leg Press", "tier": "Heavy", "sets": 4, "repTarget": "8-10", "rest": 120, "startKg": 90.0, "nextKg": 90.0},
      {"exercise": "Romanian Deadlift", "tier": "Heavy", "sets": 3, "repTarget": "8-10", "rest": 120, "startKg": 40.0, "nextKg": 40.0},
      {"exercise": "Leg Curl", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 90, "startKg": 30.0, "nextKg": 30.0},
      {"exercise": "Leg Extension", "tier": "Pump", "sets": 3, "repTarget": "12-15", "rest": 60, "startKg": 35.0, "nextKg": 35.0},
      {"exercise": "Lateral Raise", "tier": "Pump", "sets": 5, "repTarget": "15-20", "rest": 45, "startKg": 7.5, "nextKg": 7.5},
      {"exercise": "Rear Delt Fly", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 45, "startKg": 10.0, "nextKg": 10.0},
      {"exercise": "Shrugs", "tier": "Hypertrophy", "sets": 4, "repTarget": "12-15", "rest": 60, "startKg": 30.0, "nextKg": 30.0}
    ],
    "Arms + Delts": [
      {"exercise": "Overhead Tricep Extension", "tier": "Hypertrophy", "sets": 4, "repTarget": "10-12", "rest": 60, "startKg": 12.5, "nextKg": 12.5},
      {"exercise": "Rope Pushdown", "tier": "Pump", "sets": 4, "repTarget": "12-15", "rest": 60, "startKg": 22.5, "nextKg": 22.5},
      {"exercise": "DB Curl", "tier": "Hypertrophy", "sets": 4, "repTarget": "10-12", "rest": 60, "startKg": 10.0, "nextKg": 10.0},
      {"exercise": "Hammer Curl", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 60, "startKg": 10.0, "nextKg": 10.0},
      {"exercise": "Lateral Raise", "tier": "Pump", "sets": 5, "repTarget": "15-20", "rest": 45, "startKg": 7.5, "nextKg": 7.5},
      {"exercise": "Rear Delt Fly", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 45, "startKg": 10.0, "nextKg": 10.0},
      {"exercise": "Face Pull", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 45, "startKg": 20.0, "nextKg": 20.0}
    ],
    "Upper B (Volume)": [
      {"exercise": "Incline DB Press", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 90, "startKg": 15.0, "nextKg": 15.0},
      {"exercise": "Machine Chest Press", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 90, "startKg": 35.0, "nextKg": 35.0},
      {"exercise": "Chest Supported Row", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 90, "startKg": 35.0, "nextKg": 35.0},
      {"exercise": "Lat Pulldown", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 90, "startKg": 40.0, "nextKg": 40.0},
      {"exercise": "Pec Deck", "tier": "Pump", "sets": 3, "repTarget": "15", "rest": 60, "startKg": 30.0, "nextKg": 30.0},
      {"exercise": "Lateral Raise", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 45, "startKg": 7.5, "nextKg": 7.5},
      {"exercise": "Face Pull", "tier": "Pump", "sets": 3, "repTarget": "15-20", "rest": 45, "startKg": 20.0, "nextKg": 20.0}
    ],
    "Arms + Shoulders": [
      {"exercise": "Overhead Tricep Extension", "tier": "Hypertrophy", "sets": 4, "repTarget": "10-12", "rest": 60, "startKg": 12.5, "nextKg": 12.5},
      {"exercise": "Rope Pushdown", "tier": "Pump", "sets": 4, "repTarget": "12-15", "rest": 60, "startKg": 22.5, "nextKg": 22.5},
      {"exercise": "Incline Curl", "tier": "Hypertrophy", "sets": 4, "repTarget": "10-12", "rest": 60, "startKg": 9.0, "nextKg": 9.0},
      {"exercise": "Hammer Curl", "tier": "Hypertrophy", "sets": 3, "repTarget": "10-12", "rest": 60, "startKg": 10.0, "nextKg": 10.0},
      {"exercise": "Lateral Raise", "tier": "Pump", "sets": 5, "repTarget": "15-20", "rest": 45, "startKg": 7.5, "nextKg": 7.5},
      {"exercise": "Rear Delt Fly", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 45, "startKg": 10.0, "nextKg": 10.0},
      {"exercise": "Shrugs", "tier": "Hypertrophy", "sets": 4, "repTarget": "12-15", "rest": 60, "startKg": 30.0, "nextKg": 30.0}
    ],
    "Legs + Upper Chest": [
      {"exercise": "Leg Press", "tier": "Hypertrophy", "sets": 4, "repTarget": "10-12", "rest": 90, "startKg": 80.0, "nextKg": 80.0},
      {"exercise": "Leg Curl", "tier": "Pump", "sets": 3, "repTarget": "12-15", "rest": 60, "startKg": 25.0, "nextKg": 25.0},
      {"exercise": "Leg Extension", "tier": "Pump", "sets": 3, "repTarget": "15", "rest": 60, "startKg": 30.0, "nextKg": 30.0},
      {"exercise": "Incline DB Press", "tier": "Hypertrophy", "sets": 4, "repTarget": "10-12", "rest": 90, "startKg": 15.0, "nextKg": 15.0},
      {"exercise": "Lateral Raise", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 45, "startKg": 7.5, "nextKg": 7.5},
      {"exercise": "Rear Delt Fly", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 45, "startKg": 10.0, "nextKg": 10.0},
      {"exercise": "Calf Raise", "tier": "Pump", "sets": 4, "repTarget": "15-20", "rest": 60, "startKg": 40.0, "nextKg": 40.0}
    ]
  }
};

const GIFMAP = {
  "Incline DB Press": "https://media.giphy.com/media/l1AsAMOkYglte48XC/giphy.gif",
  "Lat Pulldown": "https://media.giphy.com/media/l41Yy4J96L62C85DG/giphy.gif",
  "Flat DB Press": "https://media.giphy.com/media/l1AsAMOkYglte48XC/giphy.gif",
  "Seated Cable Row": "https://media.giphy.com/media/3o7TKuylrX8kT7XhVS/giphy.gif",
  "Seated DB Shoulder Press": "https://media.giphy.com/media/l2JdZov5B1Isp4g1y/giphy.gif",
  "DB Curl": "https://media.giphy.com/media/3oEjI105mm85K474Oc/giphy.gif",
  "Triceps Pushdown": "https://media.giphy.com/media/l3q2K1M6y849DeCg8/giphy.gif",
  "Leg Press": "https://media.giphy.com/media/3o7TKoHNuT8yPLsp68/giphy.gif",
  "Romanian Deadlift": "https://media.giphy.com/media/l2Je7AeF1lcg9SQQU/giphy.gif",
  "Leg Curl": "https://media.giphy.com/media/1034EEGrn91Sr6/giphy.gif",
  "Leg Extension": "https://media.giphy.com/media/1034EEGrn91Sr6/giphy.gif",
  "Standing Calf Raise": "https://media.giphy.com/media/10g0vdfm1N29sA/giphy.gif",
  "Cable Crunch": "https://media.giphy.com/media/3o7TKuylrX8kT7XhVS/giphy.gif",
  "Machine Chest Press": "https://media.giphy.com/media/l1AsAMOkYglte48XC/giphy.gif",
  "Chest Supported Row": "https://media.giphy.com/media/3o7TKuylrX8kT7XhVS/giphy.gif",
  "Pec Deck": "https://media.giphy.com/media/10g0vdfm1N29sA/giphy.gif",
  "Wide Lat Pulldown": "https://media.giphy.com/media/l41Yy4J96L62C85DG/giphy.gif",
  "Lateral Raise": "https://media.giphy.com/media/10g0vdfm1N29sA/giphy.gif",
  "Hammer Curl": "https://media.giphy.com/media/3oEjI105mm85K474Oc/giphy.gif",
  "Rope Pushdown": "https://media.giphy.com/media/l3q2K1M6y849DeCg8/giphy.gif",
  "Goblet Squat": "https://media.giphy.com/media/3o7TKoHNuT8yPLsp68/giphy.gif",
  "Leg Extension ": "https://media.giphy.com/media/1034EEGrn91Sr6/giphy.gif",
  "Hip Thrust / Glute Bridge": "https://media.giphy.com/media/3o7TKoHNuT8yPLsp68/giphy.gif",
  "Calf Raise": "https://media.giphy.com/media/10g0vdfm1N29sA/giphy.gif",
  "Hanging Knee Raise": "https://media.giphy.com/media/3o7TKuylrX8kT7XhVS/giphy.gif",
  "One-arm DB Row": "https://media.giphy.com/media/3o7TKuylrX8kT7XhVS/giphy.gif",
  "Cable Fly": "https://media.giphy.com/media/10g0vdfm1N29sA/giphy.gif",
  "Rear Delt Fly": "https://media.giphy.com/media/10g0vdfm1N29sA/giphy.gif",
  "Incline DB Curl": "https://media.giphy.com/media/3oEjI105mm85K474Oc/giphy.gif",
  "Incline Curl": "https://media.giphy.com/media/3oEjI105mm85K474Oc/giphy.gif",
  "Overhead Tricep Extension": "https://media.giphy.com/media/l3q2K1M6y849DeCg8/giphy.gif",
  "Overhead Triceps Extension": "https://media.giphy.com/media/l3q2K1M6y849DeCg8/giphy.gif",
  "Cable Curl": "https://media.giphy.com/media/3oEjI105mm85K474Oc/giphy.gif",
  "Machine Shoulder Press": "https://media.giphy.com/media/l2JdZov5B1Isp4g1y/giphy.gif",
  "Shrugs": "https://media.giphy.com/media/pPhyAv5t9V8djXxgJH/giphy.gif",
  "Face Pull": "https://media.giphy.com/media/3o7TKHKjrDyqphX9C0/giphy.gif"
};

const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIER_REST = { Heavy: 120, Hypertrophy: 90, Pump: 60 };
const COLORS = ['amber', 'red', 'green', 'purple', 'blue', 'pink', 'indigo', 'teal'];

// Load cached sheet-pulled plan if it exists
const cachedPlan = lsGet('jae_remote_plan', null);
if (cachedPlan) {
  Object.assign(DATA, cachedPlan);
}

function todayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function lsGet(k, def) {
  try {
    const v = localStorage.getItem(k);
    return v == null ? def : JSON.parse(v);
  } catch (e) {
    return def;
  }
}

function lsSet(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (e) {}
}

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function disp(t) {
  if (!t) return '';
  var p = String(t).split(':');
  var h = +p[0], m = +p[1] || 0;
  var ap = h < 12 ? 'AM' : 'PM';
  var h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return h12 + ':' + String(m).padStart(2, '0') + ' ' + ap;
}

function pmin(t) {
  if (!t) return null;
  var p = String(t).split(':');
  return (+p[0]) * 60 + (+p[1] || 0);
}

function nowMin() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

function dateStr() {
  return new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'short' });
}

function topReps(t) {
  t = String(t);
  const m = t.match(/(\d+)\s*-\s*(\d+)/);
  if (m) return parseInt(m[2]);
  const s = t.match(/(\d+)/);
  return s ? parseInt(s[1]) : 10;
}

function exRest(e) {
  return e.rest || TIER_REST[e.tier] || 90;
}

function estMin(w) {
  let s = 0, rt = 0;
  (DATA.workouts[w] || []).forEach(e => {
    s += e.sets;
    rt += e.sets * exRest(e);
  });
  return Math.max(1, Math.round((s * 38 + rt) / 60));
}

function isRest(w) {
  return !w || /rest/i.test(w);
}

function todayWorkoutName() {
  const wd = WD[new Date().getDay()];
  const row = (DATA.schedule || []).find(s => s.day === wd);
  return row ? row.workout : null;
}

function fmtTier(t) {
  return t === 'Hypertrophy' ? 'Build' : t;
}

function fmtK(n) {
  n = Math.round(n || 0);
  return n >= 10000 ? (Math.round(n / 100) / 10) + 'k' : n;
}

function fmtDur(sec) {
  var m = Math.floor((sec || 0) / 60);
  var h = Math.floor(m / 60);
  return h > 0 ? (h + 'h ' + (m % 60) + 'm') : (m + 'm');
}

function defaultCfg() {
  var F = DATA.food || {};
  return {
    flow: [
      { id: 'wake', emoji: '🌅', time: '06:30', title: 'Wake up', color: 'amber', subs: ['Drink water + isabgol', 'Freshen up', 'Gym clothes on', 'Pack gym bag (whey, shaker, towel, SPF)'] },
      { id: 'workout', emoji: '🏋️', time: '07:00', title: 'Workout + walk', color: 'red', action: 'gym', subs: ['HMB 3g (pre-workout)', 'Train \u00b7 Jae Aesthetic split', 'Incline walk \u00b7 30 min', 'Whey right after', 'Shower + SPF'] },
      { id: 'refuel', emoji: '🍳', time: '09:45', title: 'Refuel at home', color: 'green', subs: ['Isabgol before meal', 'Creatine 5g', 'Carb + chicken meal + coffee'] },
      { id: 'nap', emoji: '😴', time: '10:00', title: 'Nap', color: 'purple', subs: ['Short reset before deep work'] },
      { id: 'work', emoji: '💼', time: '11:00', title: 'Deep work \u00b7 11\u20136', color: 'blue', action: 'work', subs: ['Always apply (your countries)', 'Press Start to track hours', 'Meals 4 & 5 here'] },
      { id: 'unwind', emoji: '🎬', time: '18:00', title: 'Unwind', color: 'pink', subs: ['Enjoy a show', 'Dinner', 'Relax'] },
      { id: 'sleep', emoji: '🌙', time: '22:00', title: 'Sleep', color: 'indigo', subs: ['Magnesium before bed', 'Wind down', 'Lights out'] }
    ],
    habits: [{ k: 'overload', e: '🔥', l: 'Progressive overload' }, { k: 'spf', e: '🧴', l: 'SPF applied' }, { k: 'isabgol', e: '💊', l: 'Isabgol pre-meal' }, { k: 'nap', e: '😴', l: 'Nap taken' }, { k: 'wentOut', e: '🛴', l: 'Went out to work' }],
    countries: ['UK', 'Saudi Arabia', 'Canada', 'Australia', 'Germany', 'India'],
    meals: (F.meals || []).map(function (m) { return { name: m.name, kcal: m.kcal || 0, protein: m.protein || 0, carbs: m.carbs || 0, fat: m.fat || 0 }; }),
    supps: (F.supps || []).map(function (s) { return { name: s.name, when: s.when || '' }; }),
    goals: { kcal: F.kcalGoal || 2000, protein: F.proteinGoal || 150, carb: F.carbGoal || 250, fat: F.fatGoal || 60, water: F.waterGoal || 10, coffee: F.coffeeGoal || 2 }
  };
}

function cfg() {
  var c = lsGet('jae_cfg_v2', null);
  if (!c) {
    c = defaultCfg();
    lsSet('jae_cfg_v2', c);
  }
  c.flow = c.flow || [];
  c.habits = c.habits || [];
  c.countries = c.countries || [];
  c.meals = c.meals || [];
  c.supps = c.supps || [];
  c.goals = c.goals || defaultCfg().goals;
  return c;
}

function saveCfg(c) {
  lsSet('jae_cfg_v2', c);
  syncPush('jae_cfg_v2', c);
}

function resetCfg() {
  if (!confirm('Reset your daily flow, habits, meals and countries to the defaults? Your workout/meal history is kept.')) return;
  lsSet('jae_cfg_v2', defaultCfg());
  toast('Setup reset to defaults');
  setTimeout(() => { window.location.href = 'index.html'; }, 800);
}

let EDIT = false;
function toggleEdit() {
  EDIT = !EDIT;
  const btn = document.getElementById('editBtn');
  if (btn) btn.classList.toggle('on', EDIT);
  if (typeof refresh === 'function') refresh();
  toast(EDIT ? 'Edit mode on \u2014 tap fields to change' : 'Saved');
}

function showBack(fn) {
  const btn = document.getElementById('backBtn');
  if (btn) {
    btn.style.display = '';
    btn.onclick = (typeof fn === 'string') ? () => window[fn]() : fn;
  }
}

function hideBack() {
  const btn = document.getElementById('backBtn');
  if (btn) btn.style.display = 'none';
}

function ringSvg(pct, val, sub, sz) {
  sz = sz || 58;
  const r = 45, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(1, pct)));
  return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="8"/><circle cx="50" cy="50" r="45" fill="none" stroke="#6c8cff" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg><div class="rc"><b>' + val + '</b><s>' + sub + '</s></div>';
}

function stat(v, k) {
  return '<div class="stat"><div class="v num">' + v + '</div><div class="k">' + k + '</div></div>';
}

function toast(m) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = m;
  t.style.opacity = '1';
  clearTimeout(t._h);
  t._h = setTimeout(() => { t.style.opacity = '0'; }, 2400);
}

function streak(hist) {
  if (!hist.length) return 0;
  var days = {};
  hist.forEach(function (h) {
    days[new Date(h.date).toDateString()] = 1;
  });
  var n = 0;
  var d = new Date();
  for (; ;) {
    if (days[d.toDateString()]) {
      n++;
      d.setDate(d.getDate() - 1);
    } else {
      if (n === 0 && d.toDateString() === new Date().toDateString()) {
        d.setDate(d.getDate() - 1);
        continue;
      }
      break;
    }
  }
  return n;
}

/* ===== SYNC (Google Sheet) ===== */
var DEFAULT_SYNC = 'https://script.google.com/macros/s/AKfycbw-fxMLTemW6_dYqfKlysguCh_bC0pcsX3s9wf9w4kDHl-uwmquWAGbfaALLJOCKMmH/exec';
function syncUrl() {
  var v = localStorage.getItem('jae_sync_url');
  return (v != null && v !== '') ? v : DEFAULT_SYNC;
}
function syncMeta() { return lsGet('jae_meta', {}); }
function syncStamp(k) {
  var m = syncMeta();
  var t = Date.now();
  m[k] = t;
  lsSet('jae_meta', m);
  return t;
}
var _pushSet = {}, _pushTimer = null;
function syncPush(key, val) {
  var ts = syncStamp(key);
  _pushSet[key] = { key: key, value: val, updated: ts };
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(flushPush, 1200);
}
function _postKV(batch) {
  var u = syncUrl();
  if (!u) {
    var q = lsGet('jae_pending2', []);
    lsSet('jae_pending2', q.concat(batch));
    return;
  }
  fetch(u, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ kv: batch }) }).then(function () {
    lsSet('jae_sync_last', new Date().toISOString());
    if (typeof refreshSyncStatus === 'function') refreshSyncStatus();
  }).catch(function () {
    var q = lsGet('jae_pending2', []);
    lsSet('jae_pending2', q.concat(batch));
  });
}
function flushPush() {
  var keys = Object.keys(_pushSet);
  if (!keys.length) return;
  var batch = keys.map(function (k) { return _pushSet[k]; });
  _pushSet = {};
  _postKV(batch);
}
function flushPush2() {
  var u = syncUrl();
  if (!u) return;
  var q = lsGet('jae_pending2', []);
  if (!q.length) return;
  lsSet('jae_pending2', []);
  _postKV(q);
}
function jsonp(url, action, cb) {
  var fn = '__cb' + Math.floor(Math.random() * 1e9);
  var s = document.createElement('script');
  var done = false;
  function cleanup() {
    clearTimeout(to);
    try { delete window[fn]; } catch (_) { }
    if (s.parentNode) s.parentNode.removeChild(s);
  }
  var to = setTimeout(function () {
    if (done) return;
    done = true;
    cleanup();
    cb(new Error('timeout'));
  }, 12000);
  window[fn] = function (data) {
    if (done) return;
    done = true;
    cleanup();
    cb(null, data);
  };
  s.onerror = function () {
    if (done) return;
    done = true;
    cleanup();
    cb(new Error('network'));
  };
  s.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'action=' + action + '&callback=' + fn;
  document.body.appendChild(s);
}
function pullAll(notify) {
  var u = syncUrl();
  if (!u) {
    if (notify) toast('Add your sync URL first');
    return;
  }
  jsonp(u, 'pull', function (err, j) {
    if (err) {
      if (notify) toast('Could not reach sheet — using saved data');
      return;
    }
    if (!j || !j.ok) {
      if (notify) toast('Unexpected response from sheet');
      return;
    }
    var meta = syncMeta();
    var changed = false;
    (j.items || []).forEach(function (it) {
      if (!it || !it.key) return;
      var lt = meta[it.key] || 0;
      if ((it.updated || 0) > lt) {
        lsSet(it.key, it.value);
        meta[it.key] = it.updated;
        changed = true;
      }
    });
    lsSet('jae_meta', meta);
    if (j.plan && j.plan.workouts) {
      lsSet('jae_remote_plan', j.plan);
      Object.assign(DATA, j.plan);
      changed = true;
    }
    lsSet('jae_sync_last', new Date().toISOString());
    if (typeof refreshSyncStatus === 'function') refreshSyncStatus();
    if (changed) {
      if (typeof refresh === 'function') refresh();
      else if (window.location.pathname.indexOf('gym.html') >= 0 && typeof renderGym === 'function') renderGym();
      else if (window.location.pathname.indexOf('progress.html') >= 0 && typeof openProgress === 'function') openProgress();
    }
    if (notify) toast('Synced ✓');
  });
}
function testSync() {
  var u = document.getElementById('syncUrl').value.trim();
  if (!u) {
    toast('Paste a URL first');
    return;
  }
  jsonp(u, 'pull', function (err, j) {
    if (err) {
      toast('✗ Failed — set deployment access to "Anyone"');
      return;
    }
    toast(j && j.ok ? ('✓ Connected · ' + ((j.items || []).length) + ' records') : 'Reached server, unexpected response');
  });
}
function queueAdd(p) {
  var q = lsGet('jae_pending', []);
  q.push(p);
  lsSet('jae_pending', q);
}
function pushRemote(payload) {
  var u = syncUrl();
  if (!u) {
    queueAdd(payload);
    return;
  }
  fetch(u, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }).then(function () {
    lsSet('jae_sync_last', new Date().toISOString());
  }).catch(function () {
    queueAdd(payload);
  });
}
function flushQueue() {
  var u = syncUrl();
  if (!u) return;
  var q = lsGet('jae_pending', []);
  if (!q.length) return;
  lsSet('jae_pending', []);
  q.forEach(function (p) {
    pushRemote(p);
  });
}
function pushDay() {
  const k = 'jae_plan_' + todayKey();
  let s = lsGet(k, null);
  if (!s) return;
  var c = cfg();
  var done = (s.tasks || []).filter(function (t) { return t.done; }).length;
  var hb = s.habits || {};
  var habits = c.habits.filter(function (h) { return hb[h.k]; }).map(function (h) { return h.l; }).join(', ');
  pushRemote({
    type: 'day',
    date: todayKey(),
    tasksDone: done,
    tasksTotal: (s.tasks || []).length,
    tasks: (s.tasks || []).map(function (t) { return (t.done ? '[x] ' : '[ ] ') + t.tx; }).join(' | '),
    habits: habits
  });
}
function pushWork() {
  const k = 'jae_work_' + todayKey();
  let s = lsGet(k, null);
  if (!s) return;
  var c = cfg();
  var done = c.countries.filter(function (n) { return s.applied && s.applied[n]; });
  var apps = 'Always apply ' + done.length + '/' + c.countries.length + ' (' + done.join(', ') + ')';
  pushRemote({
    type: 'work',
    date: todayKey(),
    spot: '',
    focus: s.focus || 0,
    worked: Math.round((s.workedSec || 0) / 60),
    apps: apps,
    notes: (s.notes || '').slice(0, 4000)
  });
}
function pushFood() {
  const k = 'jae_food_' + todayKey();
  let s = lsGet(k, null);
  if (!s) return;
  var c = cfg();
  var kcal = 0, prot = 0;
  c.meals.forEach(function (m, i) {
    if (s.meals && s.meals[i]) {
      kcal += m.kcal || 0;
      prot += m.protein || 0;
    }
  });
  var eaten = c.meals.filter(function (m, i) { return s.meals && s.meals[i]; }).map(function (m) { return m.name; }).join(' | ');
  pushRemote({
    type: 'food',
    date: todayKey(),
    kcal: kcal,
    protein: prot,
    water: s.water || 0,
    coffee: s.coffee || 0,
    meals: eaten
  });
}

// Global initialization
if (syncUrl()) {
  pullAll(false);
  flushQueue();
  flushPush2();
}
window.addEventListener('online', function () {
  flushQueue();
  flushPush2();
  pullAll(false);
});
document.addEventListener('visibilitychange', function () {
  if (!document.hidden) pullAll(false);
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () { });
  });
}
