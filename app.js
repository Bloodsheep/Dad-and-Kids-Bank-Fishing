
const spots = [
  {
    id:"river-grove",
    name:"River Grove Park",
    area:"Kingwood • West Fork / Lake Houston",
    lat:30.0287, lon:-95.2098,
    address:"1075 Woodland Hills Dr, Kingwood, TX 77339",
    source:"https://www.kingwoodserviceassociation.org/kingwoodservice/sub_category_list.asp?category=12&title=River+Grove",
    summary:"Closest 'quick trip' option. Fish the river-facing shoreline, bulkhead/boardwalk edges and current seams. White bass are a spring-run bonus; catfish and sunfish are the dependable kid pivots.",
    target:"Catfish / bluegill • white bass in spring",
    bait:"Worm under bobber + small jig",
    zone:"Current edges, shade, drop-offs, structure",
    fit:"Quick-trip favorite",
    hours:"KSA access; typically opens around 7 AM",
    openStart:7, openEnd:20,
    bestSpots:[
      {rank:"START HERE",name:"Boardwalk / river-facing edge",why:"The park's boardwalk is an easy, defined place to get the kids fishing immediately. Work the edge, shade and any visible current seam.",target:"Bluegill, catfish, seasonal white/yellow bass",cast:"Parallel to the edge first; then fan-cast toward moving water."},
      {rank:"TRY NEXT",name:"Boat-ramp / current-transition area",why:"Boat access creates a depth change and harder edge. Stay clear of launching traffic and fish the quieter side of the transition.",target:"Catfish, bass, roaming white bass",cast:"Bottom bait toward deeper water; jig/spoon across current."},
      {rank:"BACKUP",name:"Shaded shoreline / bulkhead pockets",why:"Walk the accessible bank and stop at shade, wood, small eddies or any place the current visibly changes.",target:"Sunfish, bass, catfish",cast:"Worm close to cover; do not overlook water right at your feet."}
    ],
    access:[
      "Kingwood/KSA park: use the required K sticker and follow posted parking/access rules.",
      "Morning planner will not recommend a 5–7 AM arrival because access typically starts later.",
      "River current and bank conditions can change after rain."
    ],
    fish:[
      ["🐟","White bass","SPRING BEST","Small silver spoon, jig or Road Runner; focus on moving water."],
      ["🐈","Blue / channel catfish","GOOD","Cut bait, shrimp or prepared bait on bottom."],
      ["🌞","Bluegill","GOOD","Small hook + worm under a bobber near cover."],
      ["🎣","Largemouth bass","FAIR","Small spinnerbait, swimbait or soft plastic around shade."]
    ],
    kidPlan:[
      "Put one kid on a worm-and-bobber rig immediately.",
      "Dad works a small white/silver jig or spoon for roaming white bass.",
      "If no bites in 15–20 minutes, move down the bank or switch one rod to bottom bait.",
      "During the spring run, prioritize current seams and the river channel influence."
    ]
  },
  {
    id:"deussen",
    name:"Alexander Deussen Park",
    area:"Lake Houston • South shore",
    lat:29.91056, lon:-95.15275,
    address:"12303 Sonnier St, Houston, TX 77044",
    source:"https://www.hcp1.net/DeussenPark",
    summary:"Very family-friendly public lake access with fishing piers/shoreline, parking, picnic space and room for the kids. It is one of the easiest places here to arrive, fish immediately and move between pier and bank.",
    target:"Catfish / bluegill / crappie",
    bait:"Worm under bobber + catfish bottom rig",
    zone:"Pier shade, riprap, drop-offs and wind-blown shoreline",
    fit:"Easiest family setup",
    hours:"6 AM–9 PM Mar–Oct; 6 AM–7 PM Nov–Feb",
    openStart:6, openEnd:21,
    bestSpots:[
      {rank:"START HERE",name:"Fishing pier / renovated T-Pier area",why:"The most obvious kid-friendly structure: easy footing, deeper water within casting range and shade/edges that hold bait.",target:"Bluegill, crappie, catfish",cast:"Worm beside structure; bottom rig just beyond the pier; jig vertically/diagonally."},
      {rank:"TRY NEXT",name:"Wind-blown shoreline",why:"Deussen has lots of shoreline. If a manageable breeze is pushing into one bank, bait often follows it.",target:"Bluegill, bass, roaming white bass",cast:"Fan-cast the first drop and any riprap or hard edge."},
      {rank:"BACKUP",name:"Protected shoreline near boat-access coves",why:"When the main lake is rough, protected water is easier for kids and can hold shallow panfish and bass.",target:"Bluegill, largemouth bass, catfish",cast:"Worm under bobber near cover; small spinner along the edge."}
    ],
    access:[
      "Public park with fishing pier/shoreline access.",
      "Morning starts at 6 AM. Summer evening access runs to 9 PM; winter closes at 7 PM.",
      "Great backup when bathrooms, easy parking and a maintained shoreline matter most."
    ],
    fish:[
      ["🐈","Blue catfish","GOOD","Bottom rig with cut bait or prepared bait."],
      ["🌞","Bluegill","FAIR–GOOD","Worms around shade and hard structure."],
      ["🐟","White bass","SPRING / ROAMING","Small spoons or jigs when schools move within casting range."],
      ["🎣","Largemouth bass","FAIR","Work shoreline cover at first/last light."]
    ],
    kidPlan:[
      "Start at the pier or easiest shoreline access instead of hiking around.",
      "Give the kids worms under bobbers while you set one catfish rod.",
      "Cast a spoon/jig every few minutes for any schooling fish.",
      "If wind is pushing bait toward one bank, fish that bank first."
    ]
  },
  {
    id:"stubblefield",
    name:"Stubblefield Lake Recreation Area",
    area:"North Lake Conroe • West Fork",
    lat:30.5597, lon:-95.6377,
    address:"Forest Service Rd 216, Huntsville, TX 77340",
    source:"https://tpwd.texas.gov/fishboat/fish/recreational/lakes/conroe/",
    summary:"A more outdoorsy bank-fishing trip where the upper Lake Conroe / West Fork setting gives you a mix of big bluegill, catfish, bass and a real white-bass/hybrid possibility in the right season.",
    target:"Bluegill / catfish • white bass seasonal",
    bait:"Nightcrawler + small shad-style lure",
    zone:"Bridge/current edges, deeper bends, shoreline drop-offs",
    fit:"Best adventure feel",
    hours:"Open year-round; verify current forest notices",
    openStart:5, openEnd:22,
    bestSpots:[
      {rank:"START HERE",name:"Boat-ramp / easy shoreline access",why:"Start where access is simplest before committing the kids to a longer walk. Work the nearby depth change and shoreline breaks.",target:"Bluegill, channel catfish, bass",cast:"Worm near cover; bottom bait toward deeper water."},
      {rank:"TRY NEXT",name:"West Fork current edge",why:"The upper-lake river setting is the interesting part here. Look for where moving water meets slower water rather than casting blindly into hard current.",target:"Seasonal white bass, catfish, bass",cast:"Small shad jig/spoon across the seam; bottom bait in the slower pocket."},
      {rank:"BACKUP",name:"Campground shoreline / deeper bend",why:"Use visible bends, shade and drop-offs as your move spot when the first access area is quiet.",target:"Bluegill, catfish, bass",cast:"Nightcrawler near bottom and small lure along the contour."}
    ],
    access:[
      "National-forest setting: download directions before leaving; cell service can be spotty.",
      "Bank access is available, but terrain is more natural than a city/state-park pier.",
      "Lake Conroe has special largemouth-bass rules; use the official source before keeping fish."
    ],
    fish:[
      ["🌞","Bluegill","EXCELLENT","Lake Conroe is known for unusually large bluegill; worms/crickets near bottom."],
      ["🐈","Channel catfish","EXCELLENT","Cut shad, worms or stink bait; strong year-round option."],
      ["🐟","White / hybrid bass","SEASONAL","Shad-style jigs/spoons; upper river can matter in spring."],
      ["🎣","Largemouth bass","EXCELLENT LAKE","Early/late: shad imitation or soft plastic."]
    ],
    kidPlan:[
      "Start with worms because Lake Conroe's bluegill are a legitimate target, not just a backup.",
      "Set one bottom rod for channel catfish.",
      "Use a small spoon or shad jig on the third rod if you see bait flicking or current.",
      "Stay together — this is a more natural shoreline than Deussen or a state-park pier."
    ]
  },
  {
    id:"livingston",
    name:"Lake Livingston State Park",
    area:"Lake Livingston • family day trip",
    lat:30.656897, lon:-95.001093,
    address:"300 Park Road 65, Livingston, TX 77351",
    source:"https://tpwd.texas.gov/state-parks/lake-livingston",
    summary:"The strongest dedicated white-bass destination in this list, with a fishing pier, bank access, bathrooms and family facilities. It is farther, but it is the location I’d pick when catching a white bass is the actual mission.",
    target:"White bass / catfish / perch",
    bait:"Small spoon / jig + worms",
    zone:"Fishing pier, wind-blown points, shoreline breaks",
    fit:"White-bass mission",
    hours:"6 AM–10 PM",
    openStart:6, openEnd:22,
    bestSpots:[
      {rank:"START HERE",name:"Lighted fishing pier",why:"This is the simplest high-confidence family starting point in the park: safe footing, lake access and multiple depths without wandering.",target:"White bass, catfish, perch",cast:"Jig/spoon outward for white bass; worm or bottom bait around the pier."},
      {rank:"TRY NEXT",name:"Shoreline beside the pier / day-use area",why:"If the pier is crowded or dead, walk the nearby bank and target the first visible point, hard edge or wind-blown pocket.",target:"Perch, catfish, bass",cast:"Worm near cover; bottom rig on the first drop."},
      {rank:"BACKUP",name:"Protected cove / shoreline break",why:"On windy days, trade open-water reach for calmer kid-friendly water and fish whatever structure is reachable from shore.",target:"Sunfish, bass, catfish",cast:"Small bobber rig close to cover; jig any brush or hard edge."}
    ],
    access:[
      "State park: daily entrance fee; children 12 and under are free.",
      "Park is open 6 AM–10 PM, matching most of both preferred windows.",
      "Day-use reservations are recommended because the park can reach capacity."
    ],
    fish:[
      ["🐟","White bass","EXCELLENT WATERBODY","Small spoons, Road Runners and shad-pattern jigs."],
      ["🐈","Catfish","GOOD","Bottom bait from pier/bank."],
      ["🌞","Perch / sunfish","GOOD FOR KIDS","Worm under bobber by pier/cover."],
      ["🎣","Crappie / bass","POSSIBLE","Small jigs near structure."]
    ],
    kidPlan:[
      "If white bass are the goal, start with small flashy jigs/spoons at first light.",
      "Always keep one kid rod rigged with a worm to preserve bite probability.",
      "If white bass are absent, switch quickly to catfish/perch instead of grinding.",
      "Use the pier first for an easy setup; explore bank spots only if the pier is slow."
    ]
  },
  {
    id:"huntsville",
    name:"Huntsville State Park — Lake Raven",
    area:"Huntsville • Lake Raven",
    lat:30.628404, lon:-95.525921,
    address:"565 Park Road 40 W, Huntsville, TX 77340",
    source:"https://tpwd.texas.gov/state-parks/huntsville",
    summary:"Not a white-bass trip — and that’s exactly why it belongs here. Lake Raven is an excellent 'kids need bites' option with fishing piers and especially strong largemouth bass and sunfish opportunities.",
    target:"Bluegill / redear / largemouth bass",
    bait:"Nightcrawler under bobber",
    zone:"Fishing piers, hydrilla edges, openings in shoreline vegetation",
    fit:"Best kid-bite backup",
    hours:"6 AM–10 PM",
    openStart:6, openEnd:22,
    bestSpots:[
      {rank:"START HERE",name:"Fishing pier / open pocket",why:"Hydrilla limits bank access on much of Lake Raven, so the pier or another obvious open pocket is the easiest family start.",target:"Bluegill, redear, bass",cast:"Nightcrawler near the vegetation edge; topwater/soft plastic outside it."},
      {rank:"TRY NEXT",name:"Accessible hydrilla edge",why:"TPWD specifically points anglers to the vegetation edge. Find an opening where the kids can cast without constantly fouling weeds.",target:"Largemouth bass, redear sunfish",cast:"Topwater at first/last light; worm or cricket beside the edge."},
      {rank:"BACKUP",name:"Second pier / cleared bank opening",why:"Rather than forcing a bad weed-choked bank, move to the next maintained access opening and reset the same simple rigs.",target:"Sunfish, crappie, catfish",cast:"Fish vertically or tight to structure before casting long."}
    ],
    access:[
      "State park with fishing piers, cleaning stations, bathrooms and easy family infrastructure.",
      "Park hours are 6 AM–10 PM; day-use reservations are recommended at busy times.",
      "Alligators live here; keep children close and do not let them play at the waterline."
    ],
    fish:[
      ["🌞","Bluegill / redear","EXCELLENT","Nightcrawlers or crickets; Lake Raven can grow large redear."],
      ["🎣","Largemouth bass","EXCELLENT","Topwater just after sunup / before sundown; soft plastic at vegetation edge."],
      ["🐟","Crappie","PRESENT","Small jigs around pier structure and openings."],
      ["🐈","Catfish","PRESENT","Bottom rig if the panfish bite slows."]
    ],
    kidPlan:[
      "Fish a pier or obvious opening in the vegetation.",
      "Start every kid with a nightcrawler under a small bobber.",
      "Dad can throw topwater or a small soft plastic along the hydrilla edge.",
      "This is a 'catch something fun' location — do not spend the trip hunting white bass."
    ]
  },
  {
    id:"lhwp",
    name:"Lake Houston Wilderness Park",
    area:"New Caney • Peach / Caney Creek",
    lat:30.14776, lon:-95.16885,
    address:"25840 FM 1485, New Caney, TX 77357",
    source:"https://www.houstontx.gov/parks/lakehoustonpark.html",
    summary:"Close-to-home creek fishing with a true woods/adventure feel. Best when the memory is as much about exploring with Dad as catching fish. Access hours make it a 7 AM-ish morning choice rather than a true 5 AM start.",
    target:"Sunfish / bass / catfish",
    bait:"Worm + small spinner/jig",
    zone:"Creek bends, deeper holes, shade, current seams",
    fit:"Explore + fish",
    hours:"Day use begins around 7 AM; closes by dusk/posted time",
    openStart:7, openEnd:20,
    bestSpots:[
      {rank:"START HERE",name:"Peach Creek Overlook area",why:"A defined, family-friendly access point beside Peach Creek. Start in slower water next to current rather than the fastest flow.",target:"Sunfish, catfish, bass",cast:"Worm into slack water/eddy; spinner or jig along the current edge."},
      {rank:"TRY NEXT",name:"Peach Creek sand-bank / bend",why:"Bends and sand-bank edges create changes in depth and current. Only use stable, open bank where footing is safe.",target:"Catfish, sunfish, seasonal white/yellow bass",cast:"Bottom bait in the deeper bend; small jig through the seam."},
      {rank:"BACKUP",name:"Caney Creek / other ranger-confirmed access",why:"If Peach Creek is muddy, high or unproductive, ask the ranger desk which creek access is currently easiest and open for kids.",target:"Sunfish, crappie, bass, catfish",cast:"Start with the same worm rig and let the water tell you whether to move."}
    ],
    access:[
      "Peach Creek, Caney Creek and the San Jacinto River follow state fishing rules.",
      "Lake Dabney and Lake Isabel are catch-and-release only.",
      "Natural waterways can change after rain; trails/banks can be muddy and wildlife encounters are possible."
    ],
    fish:[
      ["🌞","Sunfish","GOOD KID TARGET","Worms around slack water and woody cover."],
      ["🎣","Bass","POSSIBLE","Small spinner/jig around current breaks and cover."],
      ["🐈","Catfish","POSSIBLE","Bottom bait in deeper holes."],
      ["🐟","White bass","SPRING POSSIBILITY","Moving-water presentation when fish push into tributaries."]
    ],
    kidPlan:[
      "Treat this as a fishing + exploring trip rather than a numbers-only trip.",
      "Start with worms in slower water beside current.",
      "Try a small spinner/jig in creek bends and current seams.",
      "If the water is high, muddy or fast after rain, choose a developed lake/pier location instead."
    ]
  }
];

const $ = s => document.querySelector(s);
const locSel = $("#locationSelect");
const dateSel = $("#dateSelect");
let period = "morning";
let weatherCache = {};
let displayMode = localStorage.getItem("kidFishingDisplayMode") || "auto";

spots.forEach(s=>{
  const o=document.createElement("option");
  o.value=s.id; o.textContent=`${s.name} — ${s.fit}`;
  locSel.appendChild(o);
});

function getDateFromChoice(){
  const now=new Date();
  const v=dateSel.value;
  if(v==="0") return now;
  if(v==="1"){const d=new Date(now);d.setDate(d.getDate()+1);return d;}
  const target=v==="sat"?6:0;
  const d=new Date(now);
  let add=(target-d.getDay()+7)%7;
  if(add===0 && now.getHours()>12) add=7;
  d.setDate(d.getDate()+add);
  return d;
}
function ymd(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}

function seasonWhiteBassBoost(d){
  const m=d.getMonth()+1;
  return (m>=2 && m<=4) ? 15 : (m===1 || m===5 ? 7 : -6);
}
function openingForDate(s,dateObj){
  let start=s.openStart, end=s.openEnd, label=s.hours;
  if(s.id==="deussen"){
    const m=dateObj.getMonth()+1;
    end=(m>=3 && m<=10)?21:19;
    label=(m>=3 && m<=10)?"6 AM–9 PM (summer hours)":"6 AM–7 PM (winter hours)";
  }
  if(s.id==="river-grove"){
    const day=dateObj.getDay();
    end=(day===0 || day===5 || day===6)?22:20;
    label=`7 AM–${end===22?"10 PM":"8 PM"} (typical posted schedule)`;
  }
  return {start,end,label};
}
function calcAccessWindow(s,dateObj){
  const desired=period==="morning"?[5,10]:[17,22];
  const open=openingForDate(s,dateObj);
  const start=Math.max(desired[0],open.start);
  const end=Math.min(desired[1],open.end);
  return start<end ? [start,end] : null;
}
function formatHour(h){
  const suffix=h>=12?"PM":"AM";
  const n=h%12||12; return `${n} ${suffix}`;
}
function scoreConditions(s, datum, dateObj){
  let score=70;
  if(!datum) return 62;
  const wind=datum.wind ?? 8, rain=datum.rain ?? 0, temp=datum.temp ?? 75;
  if(wind<=8) score+=8; else if(wind<=14) score+=3; else if(wind>=20) score-=18; else score-=6;
  if(rain<=20) score+=5; else if(rain>=60) score-=20; else score-=6;
  if(temp>=55 && temp<=88) score+=6; else if(temp>96 || temp<42) score-=15; else score-=4;
  const window=calcAccessWindow(s,dateObj);
  if(!window) score-=35;
  else {
    const hrs=window[1]-window[0];
    if(hrs>=4) score+=5; else if(hrs<=2) score-=8;
  }
  if((s.id==="river-grove" || s.id==="livingston" || s.id==="stubblefield" || s.id==="lhwp")) score += seasonWhiteBassBoost(dateObj)/3;
  return Math.max(10,Math.min(96,Math.round(score)));
}
function scoreLabel(n){
  if(n>=85)return["Excellent family window","Go if you can — conditions and access line up well."];
  if(n>=72)return["Good family window","A solid trip. Start simple and adjust after the first 15–20 minutes."];
  if(n>=58)return["Worth a short trip","Go for the memory, but keep expectations flexible and pivot to easy bites."];
  return["Choose another spot/window","Access or weather makes this a lower-confidence kid trip."];
}
function mapsLink(s){return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}`}

function setDisplayMode(mode, statusText){
  displayMode=mode;
  localStorage.setItem("kidFishingDisplayMode",mode);
  const root=document.documentElement;
  const btn=$("#brightnessBtn");
  const now=new Date();
  let effective=mode;
  if(mode==="auto"){
    const h=now.getHours()+now.getMinutes()/60;
    effective=(h<6.5 || h>=19.5)?"dim":"bright";
  }
  root.dataset.display=effective;
  if(btn){
    const label=mode==="auto"?`🌗 Auto • ${effective==="dim"?"Low light":"Daylight"}`:(mode==="bright"?"☀️ Bright":"🌙 Dim");
    btn.textContent=statusText || label;
    btn.title="Auto changes the dashboard display for daylight vs low-light use. Tap to override.";
  }
}
function cycleDisplayMode(){
  const next=displayMode==="auto"?"bright":displayMode==="bright"?"dim":"auto";
  setDisplayMode(next);
}
function updateAutoDisplayFromSun(weather,dateObj){
  if(displayMode!=="auto") return;
  const today=ymd(new Date());
  if(ymd(dateObj)!==today || !weather?.sunrise || !weather?.sunset){ setDisplayMode("auto"); return; }
  const now=new Date();
  const sunrise=new Date(weather.sunrise);
  const sunset=new Date(weather.sunset);
  const low=now < new Date(sunrise.getTime()-30*60000) || now > new Date(sunset.getTime()+30*60000);
  document.documentElement.dataset.display=low?"dim":"bright";
  const btn=$("#brightnessBtn");
  if(btn) btn.textContent=`🌗 Auto • ${low?"Low light":"Daylight"}`;
}

async function fetchWeather(s,dateObj){
  const key=`${s.id}-${ymd(dateObj)}-${period}`;
  if(weatherCache[key]) return weatherCache[key];
  const date=ymd(dateObj);
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${s.lat}&longitude=${s.lon}&hourly=temperature_2m,precipitation_probability,wind_speed_10m&daily=sunrise,sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FChicago&start_date=${date}&end_date=${date}`;
  try{
    const r=await fetch(url); const j=await r.json();
    const desired=period==="morning"?[5,10]:[17,22];
    const vals=[];
    j.hourly.time.forEach((t,i)=>{
      const hr=Number(t.slice(11,13));
      if(hr>=desired[0] && hr<desired[1]) vals.push({
        temp:j.hourly.temperature_2m[i],
        rain:j.hourly.precipitation_probability[i],
        wind:j.hourly.wind_speed_10m[i]
      });
    });
    const avg=k=>Math.round(vals.reduce((a,v)=>a+(v[k]??0),0)/Math.max(1,vals.length));
    const d={temp:avg("temp"),rain:Math.max(...vals.map(v=>v.rain??0)),wind:avg("wind"),sunrise:j.daily?.sunrise?.[0],sunset:j.daily?.sunset?.[0]};
    weatherCache[key]=d; return d;
  }catch(e){return null;}
}

function renderSpot(s,dateObj,weather){
  $("#spotName").textContent=s.name;
  $("#spotSummary").textContent=`${s.area}. ${s.summary}`;
  $("#bestTarget").textContent=s.target;
  $("#startBait").textContent=s.bait;
  $("#fishZone").textContent=s.zone;
  $("#fitBadge").textContent=s.fit;
  $("#mapsBtn").href=mapsLink(s);
  $("#sourceBtn").href=s.source;

  $("#kidPlan").innerHTML=s.kidPlan.map(x=>`<li>${x}</li>`).join("");
  const openInfo=openingForDate(s,dateObj);
  $("#accessList").innerHTML=[`<strong>Posted/typical access:</strong> ${openInfo.label}`,...s.access].map(x=>`<li>${x}</li>`).join("");
  $("#bestSpots").innerHTML=(s.bestSpots||[]).map(x=>`<article class="spot-card">
    <div class="spot-rank">${escapeHtml(x.rank)}</div>
    <h3>${escapeHtml(x.name)}</h3>
    <p>${escapeHtml(x.why)}</p>
    <div class="spot-meta"><strong>Target:</strong> ${escapeHtml(x.target)}<br><strong>Cast:</strong> ${escapeHtml(x.cast)}</div>
  </article>`).join("");

  const month=dateObj.getMonth()+1;
  $("#fishCards").innerHTML=s.fish.map(([e,n,r,d])=>{
    let rr=r;
    if(n.toLowerCase().includes("white") && !(month>=2 && month<=4) && r.includes("SPRING")) rr="LOW NOW • SPRING TARGET";
    return `<div class="fish-card"><div class="emoji">${e}</div><h3>${n}</h3><p>${d}</p><span class="rating">${rr}</span></div>`
  }).join("");

  const window=calcAccessWindow(s,dateObj);
  const score=scoreConditions(s,weather,dateObj);
  const [lab,reason]=scoreLabel(score);
  $("#scoreNumber").textContent=score;
  $("#scoreLabel").textContent=lab;
  $("#scoreReason").textContent=reason;
  $("#scoreRing").style.background=`conic-gradient(var(--accent) ${score*3.6}deg,var(--ring-track) 0deg)`;
  const w=weather||{};
  const winText=window?`${formatHour(window[0])}–${formatHour(window[1])}`:"No overlap";
  $("#weatherStrip").innerHTML=`
    <div><strong>${w.temp??"--"}°</strong><span>Avg temp</span></div>
    <div><strong>${w.wind??"--"} mph</strong><span>Avg wind</span></div>
    <div><strong>${w.rain??"--"}%</strong><span>Max rain</span></div>
    <div><strong>${winText}</strong><span>Usable access</span></div>`;
}
async function refresh(){
  const s=spots.find(x=>x.id===locSel.value)||spots[0];
  const d=getDateFromChoice();
  renderSpot(s,d,null);
  const w=await fetchWeather(s,d);
  renderSpot(s,d,w);
  updateAutoDisplayFromSun(w,d);
}
locSel.addEventListener("change",refresh);
dateSel.addEventListener("change",refresh);
document.querySelectorAll(".seg").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".seg").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); period=b.dataset.period; refresh();
}));

$("#brightnessBtn")?.addEventListener("click",cycleDisplayMode);
setDisplayMode(displayMode);
setInterval(()=>{ if(displayMode==="auto") setDisplayMode("auto"); }, 5*60*1000);

function renderMemories(){
  const items=JSON.parse(localStorage.getItem("kidFishingMemories")||"[]");
  $("#memoryList").innerHTML=items.length?items.slice().reverse().map(m=>`
    <div class="memory-entry"><strong>${escapeHtml(m.kid)} — ${escapeHtml(m.catch)}</strong>
    <small>${escapeHtml(m.date)} • ${escapeHtml(m.spot)}</small>
    <p>${escapeHtml(m.note)}</p></div>`).join(""):`<p class="muted">No memories saved yet. That’s what the next trip is for.</p>`;
}
function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
$("#memoryForm").addEventListener("submit",e=>{
  e.preventDefault();
  const kid=$("#memoryKid").value.trim(), catchx=$("#memoryCatch").value.trim(), note=$("#memoryNote").value.trim();
  if(!kid || !catchx) return;
  const s=spots.find(x=>x.id===locSel.value)||spots[0];
  const items=JSON.parse(localStorage.getItem("kidFishingMemories")||"[]");
  items.push({kid,catch:catchx,note,spot:s.name,date:new Date().toLocaleDateString()});
  localStorage.setItem("kidFishingMemories",JSON.stringify(items));
  e.target.reset(); renderMemories();
});
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
renderMemories();
refresh();
