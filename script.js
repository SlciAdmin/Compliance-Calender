'use strict';

// ── ALL COMPLIANCE DATA ──────────────────────────────────────────
const BASE_EVENTS = [
  // ── PROFESSIONAL TAX ──
  {act:'Professional Tax',state:'Gujarat',type:'Remittance',period:'Monthly',due_day:15,mode:'Online/Offline',priority:'HIGH'},
  {act:'Professional Tax',state:'Karnataka',type:'Remittance/Return',period:'Monthly',due_day:20,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'West Bengal',type:'Remittance',period:'Monthly',due_day:21,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'West Bengal',type:'Employer (PTEC) Return',period:'Annual',due_day:30,mode:'Online',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Maharashtra',type:'Remittance/Return',period:'Monthly',due_day:30,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Telangana',type:'Remittance/Return',period:'Monthly',due_day:10,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Andhra Pradesh',type:'Remittance',period:'Monthly',due_day:10,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Assam',type:'Remittance',period:'Monthly',due_day:30,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Assam',type:'Employer (PTEC) Return',period:'Annual',due_day:30,mode:'Online',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Madhya Pradesh',type:'Remittance/Return',period:'Monthly',due_day:10,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Orissa',type:'Remittance/Return',period:'Monthly',due_day:30,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Punjab',type:'Remittance',period:'Monthly',due_day:20,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Sikkim',type:'Remittance',period:'Monthly',due_day:15,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Sikkim',type:'Employer (PTEC) Return',period:'Annual',due_day:30,mode:'Online',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Tripura',type:'Remittance',period:'Monthly',due_day:15,mode:'Online/Offline',priority:'HIGH'},
  {act:'Professional Tax',state:'Tripura',type:'Employer (PTEC) Return',period:'Annual',due_day:30,mode:'Online/Offline',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Meghalaya',type:'Remittance/Return',period:'Monthly',due_day:30,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Meghalaya',type:'Employer (PTEC) Return',period:'Annual',due_day:30,mode:'Online',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Mizoram',type:'Remittance',period:'Monthly',due_day:15,mode:'Offline',priority:'HIGH'},
  {act:'Professional Tax',state:'Bihar',type:'Remittance',period:'Annual',due_day:15,mode:'Offline/Online',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Jharkhand',type:'Remittance/Return',period:'Quarterly',due_day:15,mode:'Online',priority:'HIGH'},
  {act:'Professional Tax',state:'Pondicherry',type:'Remittance',period:'Half Yearly',due_day:30,mode:'Offline',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Tamil Nadu',type:'Remittance/Return',period:'Half Yearly',due_day:30,mode:'Offline',priority:'MEDIUM'},
  {act:'Professional Tax',state:'Kerala',type:'Remittance/Return',period:'Half Yearly',due_day:30,mode:'Offline',priority:'MEDIUM'},
  // ── ESI ──
  {act:'ESI',state:'All States',type:'ESI Remittance — Challan',period:'Monthly',due_day:15,mode:'Online',priority:'HIGH'},
  // ── PF ──
  {act:'PF',state:'All States',type:'PF Remittance — Challan',period:'Monthly',due_day:15,mode:'Online',priority:'HIGH'},
  {act:'PF',state:'All States',type:'Statement of IW-1',period:'Monthly',due_day:15,mode:'Online',priority:'HIGH'},
  // ── WORKER WELFARE FUND ──
  {act:'Worker Welfare Fund',state:'Kerala',type:'Remittance for Kerala',period:'Monthly',due_day:5,mode:'Offline',priority:'HIGH'},
  {act:'Worker Welfare Fund',state:'Kerala',type:'Return for Kerala',period:'Monthly',due_day:10,mode:'Offline',priority:'HIGH'},
  // ── LABOUR WELFARE FUND ──
  {act:'Labour Welfare Fund',state:'Gujarat',type:'Remittance/Return',period:'Half Yearly',due_day:15,mode:'Manual',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Madhya Pradesh',type:'Remittance/Return',period:'Half Yearly',due_day:15,mode:'Manual',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Maharashtra',type:'Remittance/Return',period:'Half Yearly',due_day:15,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Delhi',type:'Remittance/Return',period:'Half Yearly',due_day:15,mode:'Manual',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'West Bengal',type:'Remittance/Return',period:'Half Yearly',due_day:15,mode:'Manual/Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Chattisgarh',type:'Remittance/Return',period:'Half Yearly',due_day:30,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Goa',type:'Remittance/Return',period:'Half Yearly',due_day:30,mode:'Manual',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Odisha',type:'Remittance/Return',period:'Half Yearly',due_day:15,mode:'Manual/Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Chandigarh',type:'Remittance',period:'Half Yearly',due_day:15,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Punjab',type:'Remittance',period:'Half Yearly',due_day:15,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Andhra Pradesh',type:'Remittance',period:'Annual',due_day:31,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Haryana',type:'Remittance',period:'Annual',due_day:31,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Karnataka',type:'Remittance',period:'Annual',due_day:15,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Telangana',type:'Remittance',period:'Annual',due_day:31,mode:'Online',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'Tamil Nadu',type:'Remittance',period:'Annual',due_day:31,mode:'Offline',priority:'MEDIUM'},
  {act:'Labour Welfare Fund',state:'ORISSA',type:'Remittance',period:'Annual',due_day:15,mode:'Offline',priority:'MEDIUM'},
  // ── GST ──
  {act:'GST',state:'All States',type:'GSTR-1 — Monthly Return',period:'Monthly',due_day:11,mode:'Online',priority:'HIGH'},
  {act:'GST',state:'All States',type:'GSTR-3B — Monthly Return',period:'Monthly',due_day:20,mode:'Online',priority:'HIGH'},
  // ── INCOME TAX ──
  {act:'Income Tax',state:'All States',type:'TDS Remittance — Challan',period:'Monthly',due_day:7,mode:'Online',priority:'HIGH'},
  {act:'Income Tax',state:'All States',type:'TDS Return (Quarterly)',period:'Quarterly',due_day:31,mode:'Online',priority:'HIGH'},
  // ── OTHER ──
  {act:'Other',state:'Kerala',type:'Shops & Estb. Quarterly Return',period:'Quarterly',due_day:30,mode:'Offline',priority:'MEDIUM'},
  {act:'Other',state:'All States',type:'Employment Exchange (ER-1)',period:'Quarterly',due_day:30,mode:'Online/Offline',priority:'MEDIUM'},
  {act:'Other',state:'All States',type:'Maternity Benefit — Annual Return',period:'Annual',due_day:21,mode:'Offline/Online',priority:'LOW'},
  {act:'Other',state:'All States',type:'Minimum Wages — Annual Return',period:'Annual',due_day:31,mode:'Offline/Online',priority:'MEDIUM'},
  {act:'Other',state:'All States',type:'Payment of Wages — Annual Return',period:'Annual',due_day:31,mode:'Offline/Online',priority:'MEDIUM'},
  {act:'Other',state:'All States',type:"Employee's Compensation — Annual Return",period:'Annual',due_day:31,mode:'Offline/Online',priority:'MEDIUM'},
  {act:'Other',state:'All States',type:'PoSH — Annual Return',period:'Annual',due_day:31,mode:'Offline/Online',priority:'MEDIUM'},
  {act:'Other',state:'All States',type:'NFH Annual Return (Form-I)',period:'Annual',due_day:30,mode:'Offline',priority:'LOW'},
  {act:'Other',state:'All States',type:'Contract Labour Annual Return — Principal',period:'Annual',due_day:15,mode:'Online/Offline',priority:'MEDIUM'},
];

// State list with periods that have data
const STATES = ['All States','Andhra Pradesh','Assam','Bihar','Chandigarh','Chattisgarh','Delhi','Goa','Gujarat','Haryana','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Meghalaya','Mizoram','Odisha','ORISSA','Orissa','Pondicherry','Punjab','Sikkim','Tamil Nadu','Telangana','Tripura','West Bengal'];

const MONTHS = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
const MON_SHORT = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ── STATE ────────────────────────────────────────────────────────
let curYear = 2026, curMonth = 4;
let selStates = ['All States'];
let selActs = ['ALL'];
let curView = 'calendar';
let compStatus = {};
let customEvents = [];
let gcalData = null;

try { compStatus = JSON.parse(localStorage.getItem('sc_status')||'{}'); } catch(e){}
try { customEvents = JSON.parse(localStorage.getItem('sc_custom')||'[]'); } catch(e){}

// ── HELPERS ──────────────────────────────────────────────────────
function statusKey(y,m,d,t){ return `${y}-${m}-${d}-${t.substring(0,40)}`; }
function isDone(y,m,d,t){ return !!compStatus[statusKey(y,m,d,t)]; }
function setDone(y,m,d,t,v){ const k=statusKey(y,m,d,t); if(v)compStatus[k]=true; else delete compStatus[k]; try{localStorage.setItem('sc_status',JSON.stringify(compStatus));}catch(e){} }

function daysUntil(y,m,d){ const today=new Date();today.setHours(0,0,0,0); const ev=new Date(y,m-1,d); return Math.ceil((ev-today)/(864e5)); }
function esc(s){ return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;'); }

function actClass(act){
  if(act==='Professional Tax') return 'pt';
  if(act==='ESI') return 'esi';
  if(act==='PF') return 'pf';
  if(act==='Worker Welfare Fund') return 'wwf';
  if(act==='Labour Welfare Fund') return 'lwf';
  if(act==='GST') return 'gst';
  if(act==='Income Tax') return 'it';
  return 'other';
}
function badgeClass(act){ return 'badge-'+actClass(act); }
function hdrClass(act){ return 'hdr-'+actClass(act); }
function actIcon(act){
  const m={'Professional Tax':'fa-id-card','ESI':'fa-shield-alt','PF':'fa-piggy-bank','Worker Welfare Fund':'fa-hands-helping','Labour Welfare Fund':'fa-balance-scale','GST':'fa-receipt','Income Tax':'fa-landmark','Other':'fa-file-alt'};
  return m[act]||'fa-tag';
}

function eventAppliesThisMonth(ev, year, month){
  const p = ev.period;
  if(p==='Monthly') return true;
  if(p==='Annual') return true;
  if(p==='Quarterly') return true;
  if(p==='Half Yearly') return true;
  return true;
}

function getEventsForDay(year, month, day){
  const stateFilter = selStates;
  const actFilter = selActs;

  let events = BASE_EVENTS.filter(ev => {
    const stateMatch = stateFilter.includes('All States') ||
      ev.state === 'All States' ||
      stateFilter.some(s => s === ev.state || ev.state.toLowerCase().includes(s.toLowerCase()));
    if(!stateMatch) return false;
    const actMatch = actFilter.includes('ALL') || actFilter.includes(ev.act);
    if(!actMatch) return false;
    if(ev.due_day !== day) return false;
    return eventAppliesThisMonth(ev, year, month);
  });

  const customs = customEvents.filter(e => {
    const d = new Date(e.date);
    return d.getFullYear()===year && d.getMonth()+1===month && d.getDate()===day;
  });

  return {events, customs};
}

function getAllEventsForMonth(year, month){
  const stateFilter = selStates;
  const actFilter = selActs;

  return BASE_EVENTS.filter(ev => {
    const stateMatch = stateFilter.includes('All States') ||
      ev.state === 'All States' ||
      stateFilter.some(s => s === ev.state || ev.state.toLowerCase().includes(s.toLowerCase()));
    if(!stateMatch) return false;
    const actMatch = actFilter.includes('ALL') || actFilter.includes(ev.act);
    if(!actMatch) return false;
    return eventAppliesThisMonth(ev, year, month);
  });
}

// ── RENDER SIDEBAR ────────────────────────────────────────────────
function renderStateList(filter){
  const list = document.getElementById('stateList');
  const filtered = STATES.filter(s => !filter || s.toLowerCase().includes(filter.toLowerCase()));
  list.innerHTML = filtered.map(s => {
    const active = selStates.includes(s);
    return `<button class="state-btn ${active?'active':''}" onclick="toggleState('${s}')">
      <span class="state-dot"></span>${s}
    </button>`;
  }).join('');
}

function toggleState(s){
  if(s==='All States'){
    selStates=['All States'];
  } else {
    selStates = selStates.filter(x=>x!=='All States');
    if(selStates.includes(s)) selStates = selStates.filter(x=>x!==s);
    else selStates.push(s);
    if(selStates.length===0) selStates=['All States'];
  }
  renderStateList(document.getElementById('stateSearch').value);
  renderAll();
  showToast(`Filter: ${selStates.join(', ')}`, 'info');
}

function renderMonthNav(){
  const nav = document.getElementById('monthNav');
  nav.innerHTML = MONTHS.slice(1).map((m,i) => {
    const mn = i+1;
    const active = mn===curMonth;
    return `<button class="month-btn ${active?'active':''}" onclick="curMonth=${mn};renderAll();renderMonthNav()">${m.substring(0,3)}</button>`;
  }).join('');
}

// ── CALENDAR RENDER ───────────────────────────────────────────────
function renderCalendar(){
  const grid = document.getElementById('calGrid');
  const today = new Date();
  const firstDay = new Date(curYear, curMonth-1, 1).getDay();
  const daysInMonth = new Date(curYear, curMonth, 0).getDate();
  const prevDays = new Date(curYear, curMonth-1, 0).getDate();

  document.getElementById('titleMonth').textContent = `${MONTHS[curMonth]} ${curYear}`;

  let html = '';
  let weekNum = 1;
  let dayCells = '';
  let dayCount = 0;

  html += `<div class="week-label">W${weekNum}</div>`;

  for(let i=firstDay-1; i>=0; i--){
    html += `<div class="cal-day other-month"><div class="day-num">${prevDays-i}</div></div>`;
    dayCount++;
  }

  for(let d=1; d<=daysInMonth; d++){
    if(dayCount>0 && dayCount%7===0){
      weekNum++;
      html += `<div class="week-label">W${weekNum}</div>`;
    }
    const dow = new Date(curYear, curMonth-1, d).getDay();
    const isToday = today.getDate()===d && today.getMonth()+1===curMonth && today.getFullYear()===curYear;
    const {events, customs} = getEventsForDay(curYear, curMonth, d);
    const allEv = [...events, ...customs.map(c=>({...c,_custom:true}))];
    const hasEv = allEv.length>0;

    const cls = ['cal-day',
      isToday?'today':'',
      hasEv?'has-events':'',
      dow===0?'sunday':dow===6?'saturday':''
    ].filter(Boolean).join(' ');

    let chips = '';
    const show = allEv.slice(0,3);
    show.forEach(ev => {
      const ac = ev._custom ? 'custom' : actClass(ev.act);
      const done = isDone(curYear, curMonth, d, ev._custom?ev.title:ev.type+'|'+ev.state);
      const label = ev._custom ? ev.title : `${ev.state!=='All States'?ev.state+': ':''}${ev.type}`;
      chips += `<span class="ev-chip ${ac} ${done?'complied':''}" title="${label}">${label}</span>`;
    });
    if(allEv.length>3) chips += `<span class="more-pill">+${allEv.length-3}</span>`;

    const dotStyle = allEv.length>0 ? 'display:flex' : 'display:none';
    html += `<div class="${cls}" data-day="${d}" onclick="openDayModal(${d})">
      <div class="day-num">${d}</div>
      ${chips}
      <div class="dot-count" style="${dotStyle}">${allEv.length}</div>
    </div>`;
    dayCount++;
  }

  const totalCells = Math.ceil((firstDay+daysInMonth)/7)*7;
  const remaining = totalCells - firstDay - daysInMonth;
  for(let i=1; i<=remaining; i++){
    if(dayCount%7===0){ weekNum++; html+=`<div class="week-label">W${weekNum}</div>`; }
    html += `<div class="cal-day other-month"><div class="day-num">${i}</div></div>`;
    dayCount++;
  }

  grid.innerHTML = html;
  updateStats();
}

// ── STATS ─────────────────────────────────────────────────────────
function updateStats(){
  const monthEvs = getAllEventsForMonth(curYear, curMonth);
  const today = new Date(); today.setHours(0,0,0,0);
  const in7 = new Date(today); in7.setDate(in7.getDate()+7);
  let high=0,done=0,due7=0,overdue=0;

  const days = new Set(monthEvs.map(e=>e.due_day));
  days.forEach(day => {
    const ev = new Date(curYear, curMonth-1, day);
    const evList = monthEvs.filter(e=>e.due_day===day);
    evList.forEach(e => {
      const k = e.type+'|'+e.state;
      if(isDone(curYear,curMonth,day,k)) done++;
      if(e.priority==='HIGH') high++;
      if(!isDone(curYear,curMonth,day,k)){
        if(ev<today) overdue++;
        else if(ev<=in7) due7++;
      }
    });
  });

  const total = monthEvs.length;
  document.getElementById('sTotal').textContent = total;
  document.getElementById('sHigh').textContent = high;
  document.getElementById('sDone').textContent = done;
  document.getElementById('sDue7').textContent = due7;
  document.getElementById('sOverdue').textContent = overdue;
}

// ── DAY MODAL ─────────────────────────────────────────────────────
function openDayModal(day){
  const {events, customs} = getEventsForDay(curYear, curMonth, day);
  const total = events.length + customs.length;
  if(total===0){ showToast('No compliance events on this date','info'); return; }

  const dows = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dateStr = `${dows[new Date(curYear,curMonth-1,day).getDay()]}, ${day} ${MONTHS[curMonth]} ${curYear}`;
  const du = daysUntil(curYear, curMonth, day);
  const dateISO = `${curYear}-${String(curMonth).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

  let badge = '';
  if(du<0) badge = `<span class="badge" style="background:var(--accent-light);color:var(--accent);margin-left:10px"><i class="fas fa-exclamation-triangle"></i> ${Math.abs(du)}d overdue</span>`;
  else if(du===0) badge = `<span class="badge" style="background:var(--orange-light);color:var(--orange);margin-left:10px"><i class="fas fa-bell"></i> Due Today!</span>`;
  else if(du<=7) badge = `<span class="badge" style="background:var(--orange-light);color:var(--orange);margin-left:10px"><i class="fas fa-clock"></i> ${du}d away</span>`;
  else badge = `<span class="badge" style="background:var(--green-light);color:var(--green);margin-left:10px"><i class="fas fa-calendar-check"></i> ${du}d away</span>`;

  document.getElementById('dayModalTitle').innerHTML = `<i class="fas fa-calendar-day" style="color:var(--accent)"></i> ${dateStr}${badge}`;
  document.getElementById('dayModalSub').textContent = `${total} compliance ${total===1?'event':'events'} scheduled`;

  let body = '';

  events.forEach((ev,idx) => {
    const ac = actClass(ev.act);
    const key = ev.type+'|'+ev.state;
    const done = isDone(curYear, curMonth, day, key);
    const pCls = ev.priority==='HIGH'?'prio-high':ev.priority==='LOW'?'prio-low':'prio-med';
    const pPill = ev.priority==='HIGH'?'<span class="prio-pill high">HIGH</span>':ev.priority==='LOW'?'<span class="prio-pill low">LOW</span>':'<span class="prio-pill med">MEDIUM</span>';
    const desc = `${ev.act} ${ev.type} for ${ev.state}. Period: ${ev.period}. Mode: ${ev.mode}.`;

    body += `<div class="ev-card ${pCls} ${done?'complied':''}" style="animation-delay:${idx*.07}s">
      <div class="ev-card-hdr">
        <h4>${ev.type}${pPill}</h4>
        <span class="badge ${badgeClass(ev.act)}">${ev.act}</span>
      </div>
      <div class="ev-card-body">
        <p>${desc}</p>
        <div class="meta-grid">
          <div class="meta-item"><i class="fas fa-map-marker-alt"></i><span><strong>State:</strong> ${ev.state}</span></div>
          <div class="meta-item"><i class="fas fa-redo"></i><span><strong>Period:</strong> ${ev.period}</span></div>
          <div class="meta-item"><i class="fas fa-calendar-day"></i><span><strong>Due:</strong> ${day} ${MON_SHORT[curMonth]}</span></div>
          <div class="meta-item"><i class="fas fa-laptop"></i><span><strong>Mode:</strong> ${ev.mode}</span></div>
        </div>
      </div>
      <div class="ev-card-foot">
        <div class="penalty-txt"><i class="fas fa-exclamation-triangle"></i><span>Non-compliance may attract interest & penalty under respective State Act</span></div>
        <div class="ev-card-actions">
          <button class="gcal-mini" onclick="openGcalDirect({title:'${esc(ev.act+': '+ev.type+' — '+ev.state)}',date:'${dateISO}',desc:'${esc(desc)}'})" title="Add to Google Calendar"><i class="fab fa-google"></i> GCal</button>
          <button class="complied-btn ${done?'done':''}" onclick="toggleDone(${curYear},${curMonth},${day},'${esc(key)}',this)"><i class="fas ${done?'fa-check-circle':'fa-circle'}"></i> ${done?'Complied':'Mark Done'}</button>
        </div>
      </div>
    </div>`;
  });

  customs.forEach((ev,idx) => {
    const done = isDone(curYear, curMonth, day, ev.title);
    const desc = ev.desc || 'Custom compliance event';
    body += `<div class="ev-card prio-custom ${done?'complied':''}" style="animation-delay:${(events.length+idx)*.07}s">
      <div class="ev-card-hdr">
        <h4>⭐ ${ev.title} <span class="prio-pill" style="background:var(--blue-light);color:var(--blue)">CUSTOM</span></h4>
        <span class="badge badge-custom">Custom</span>
      </div>
      <div class="ev-card-body">
        <p>${desc}</p>
        <div class="meta-grid">
          ${ev.state?`<div class="meta-item"><i class="fas fa-map-marker-alt"></i><span>${ev.state}</span></div>`:''}
          ${ev.act?`<div class="meta-item"><i class="fas fa-tag"></i><span>${ev.act}</span></div>`:''}
          ${ev.mode?`<div class="meta-item"><i class="fas fa-laptop"></i><span>${ev.mode}</span></div>`:''}
        </div>
      </div>
      <div class="ev-card-foot">
        <div class="penalty-txt"><i class="fas fa-info-circle" style="color:var(--blue)"></i><span>${ev.penalty||'Custom event'}</span></div>
        <div class="ev-card-actions">
          <button class="gcal-mini" onclick="openGcalDirect({title:'${esc(ev.title)}',date:'${ev.date}',desc:'${esc(desc)}'})" ><i class="fab fa-google"></i></button>
          <button class="btn btn-ghost btn-sm" onclick="deleteCustom('${ev.id}')" style="padding:6px 10px"><i class="fas fa-trash" style="color:var(--accent)"></i></button>
          <button class="complied-btn ${done?'done':''}" onclick="toggleDone(${curYear},${curMonth},${day},'${esc(ev.title)}',this)"><i class="fas ${done?'fa-check-circle':'fa-circle'}"></i> ${done?'Complied':'Mark Done'}</button>
        </div>
      </div>
    </div>`;
  });

  document.getElementById('dayModalBody').innerHTML = body;
  document.getElementById('dayModal').classList.add('open');

  document.getElementById('addAllGcal').onclick = () => {
    [...events,...customs].forEach((ev,i) => {
      setTimeout(()=>{
        const title = ev._custom?ev.title:ev.act+': '+ev.type+' — '+ev.state;
        openGcalDirect({title,date:dateISO,desc:''});
      }, i*900);
    });
    showToast(`Opening ${total} events in Google Calendar...`, 'info');
  };
}

function toggleDone(y,m,d,key,btn){
  const curr = isDone(y,m,d,key);
  setDone(y,m,d,key,!curr);
  btn.className = `complied-btn ${!curr?'done':''}`;
  btn.innerHTML = `<i class="fas ${!curr?'fa-check-circle':'fa-circle'}"></i> ${!curr?'Complied':'Mark Done'}`;
  showToast(!curr?'Marked as complied! ✅':'Unmarked',!curr?"success":"info");
  renderCalendar();
}

function deleteCustom(id){
  if(!confirm('Delete this custom event?')) return;
  customEvents = customEvents.filter(e=>e.id!==id);
  try{localStorage.setItem('sc_custom',JSON.stringify(customEvents));}catch(e){}
  document.getElementById('dayModal').classList.remove('open');
  renderCalendar();
  showToast('Event deleted','info');
}

// ── UPCOMING ──────────────────────────────────────────────────────
function renderUpcoming(){
  const days = parseInt(document.getElementById('upDaysFilter').value)||30;
  const today = new Date(); today.setHours(0,0,0,0);
  const cutoff = new Date(today); if(days>0) cutoff.setDate(cutoff.getDate()+days);

  let all = [];
  for(let mo=0; mo<6; mo++){
    let m = curMonth+mo; let y = curYear;
    if(m>12){m-=12;y++;}
    const daysInMonth = new Date(y,m,0).getDate();
    BASE_EVENTS.forEach(ev => {
      const stateMatch = selStates.includes('All States') || ev.state==='All States' || selStates.some(s=>s===ev.state);
      const actMatch = selActs.includes('ALL') || selActs.includes(ev.act);
      if(!stateMatch||!actMatch) return;
      if(ev.due_day>daysInMonth) return;
      const evDate = new Date(y,m-1,ev.due_day);
      if(evDate>=today && (days===0||evDate<=cutoff)){
        all.push({...ev,year:y,month:m,date:evDate});
      }
    });
  }

  const seen = new Set();
  all = all.filter(e=>{const k=`${e.year}-${e.month}-${e.due_day}-${e.type}-${e.state}`;if(seen.has(k))return false;seen.add(k);return true;});
  all.sort((a,b)=>a.date-b.date);

  customEvents.forEach(e=>{
    const ev = new Date(e.date);
    if(ev>=today&&(days===0||ev<=cutoff)) all.push({...e,_custom:true,year:ev.getFullYear(),month:ev.getMonth()+1,due_day:ev.getDate(),date:ev});
  });
  all.sort((a,b)=>a.date-b.date);

  if(all.length===0){
    document.getElementById('upList').innerHTML=`<div style="text-align:center;padding:50px;color:var(--text3)"><i class="fas fa-check-circle" style="font-size:2.5rem;color:var(--green);display:block;margin-bottom:12px"></i>All clear! No upcoming deadlines.</div>`;
    return;
  }

  document.getElementById('upList').innerHTML = all.slice(0,50).map((e,idx)=>{
    const du = daysUntil(e.year,e.month,e.due_day);
    const done = isDone(e.year,e.month,e.due_day,e._custom?e.title:e.type+'|'+e.state);
    const dlCls = du<0?'overdue':du<=7?'soon':'ok';
    const dlText = du<0?`${Math.abs(du)}d overdue`:du===0?'Today!':du+'d';
    const title = e._custom?e.title:e.act+': '+e.type;
    const dateISO = `${e.year}-${String(e.month).padStart(2,'0')}-${String(e.due_day).padStart(2,'0')}`;

    return `<div class="upcoming-item" style="opacity:${done?.6:1}">
      <div class="date-badge"><div class="d">${e.due_day}</div><div class="m">${MON_SHORT[e.month]}</div></div>
      <div class="up-info">
        <div class="up-title">${e._custom?'⭐ ':''}${title}</div>
        <div class="up-sub">
          <span class="badge ${badgeClass(e.act||'Other')}">${e.act||'Custom'}</span>
          <span>${e._custom?'':e.state}</span>
          <span>${MONTHS[e.month]} ${e.year}</span>
        </div>
      </div>
      <div class="up-right">
        <span class="days-badge ${dlCls}">${dlText}</span>
        <div style="display:flex;gap:5px;align-items:center">
          <button class="gcal-mini" style="font-size:.72rem;padding:4px 8px" onclick="openGcalDirect({title:'${esc(title)}',date:'${dateISO}',desc:''})" title="Add to Google Calendar"><i class="fab fa-google"></i></button>
          <label style="display:flex;align-items:center;gap:4px;font-size:.82rem;cursor:pointer;color:var(--text3)">
            <input type="checkbox" ${done?'checked':''} onchange="setDone(${e.year},${e.month},${e.due_day},'${esc(e._custom?e.title:e.type+'|'+e.state)}',this.checked);renderUpcoming()" style="accent-color:var(--green);cursor:pointer">
            <span>${done?'✅':'○'}</span>
          </label>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── CATEGORIES ────────────────────────────────────────────────────
function renderCategories(){
  const acts = ['Professional Tax','ESI','PF','Worker Welfare Fund','Labour Welfare Fund','GST','Income Tax','Other'];
  const stateFilter = selStates;
  const actFilter = selActs;

  const grid = document.getElementById('catGrid');
  let html = '';

  acts.forEach(act => {
    if(!actFilter.includes('ALL') && !actFilter.includes(act)) return;
    const evs = BASE_EVENTS.filter(e => {
      if(e.act!==act) return false;
      const stateMatch = stateFilter.includes('All States') || e.state==='All States' || stateFilter.some(s=>s===e.state);
      return stateMatch;
    });
    if(evs.length===0) return;

    html += `<div class="cat-card">
      <div class="cat-card-hdr ${hdrClass(act)}">
        <i class="fas ${actIcon(act)}"></i>
        <h4>${act}</h4>
        <span class="count">${evs.length}</span>
      </div>
      <div>
        ${evs.slice(0,8).map(ev=>`
          <div class="cat-row" onclick="openGcalDirect({title:'${esc(act+': '+ev.type+' — '+ev.state)}',date:'${curYear}-${String(curMonth).padStart(2,'0')}-${String(ev.due_day).padStart(2,'0')}',desc:''})">
            <span class="cat-dt">${ev.due_day}</span>
            <span class="cat-ev" title="${ev.type} — ${ev.state}">${ev.state!=='All States'?ev.state+': ':''}${ev.type}</span>
            <span class="cat-state">${ev.period}</span>
            <button class="gcal-mini" style="font-size:.65rem;padding:3px 7px;flex-shrink:0" onclick="event.stopPropagation();openGcalDirect({title:'${esc(act+': '+ev.type)}',date:'${curYear}-${String(curMonth).padStart(2,'0')}-${String(ev.due_day).padStart(2,'0')}',desc:''})"><i class="fab fa-google"></i></button>
          </div>`).join('')}
        ${evs.length>8?`<div style="padding:9px 18px;font-size:.78rem;color:var(--accent);font-weight:600">+${evs.length-8} more entries</div>`:''}
      </div>
    </div>`;
  });

  grid.innerHTML = html || `<div style="text-align:center;padding:40px;color:var(--text3)">No data for selected filters.</div>`;
}

// ── GOOGLE CALENDAR ───────────────────────────────────────────────
function openGcalDirect(ev){
  const d = ev.date.replace(/-/g,'');
  const title = encodeURIComponent(ev.title);
  const details = encodeURIComponent((ev.desc||'')+(ev.form?'\n\nForm: '+ev.form:'')+ '\n\nSource: India Labour Law Compliance Calendar');
  const remind = '&add=reminder&minutes_before=1440';
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${d}/${d}&details=${details}${remind}`;
  window.open(url,'_blank');
  showToast('Opening Google Calendar...','success');
}

function openGcalModal(ev){
  gcalData = ev;
  document.getElementById('gcalPrev').innerHTML = `
    <div style="font-weight:600;font-size:.92rem;margin-bottom:5px;color:var(--text)">${ev.title}</div>
    <div style="font-size:.8rem;color:var(--text3)"><i class="fas fa-calendar" style="color:var(--accent)"></i> ${ev.date}</div>`;
  document.getElementById('gcalModal').classList.add('open');
}

document.getElementById('confirmGcal').onclick = () => {
  if(!gcalData) return;
  openGcalDirect(gcalData);
  document.getElementById('gcalModal').classList.remove('open');
};

// ── ADD CUSTOM EVENT ──────────────────────────────────────────────
function saveCustomEvent(){
  const title = document.getElementById('cTitle').value.trim();
  const date = document.getElementById('cDate').value;
  if(!title||!date){ showToast('Title and Date are required','error'); return null; }
  const ev = {
    id:Date.now().toString(),
    title,date,
    state: document.getElementById('cState').value||'Custom',
    act: document.getElementById('cAct').value,
    priority: document.getElementById('cPriority').value,
    mode: document.getElementById('cMode').value,
    desc: document.getElementById('cDesc').value,
    penalty: document.getElementById('cPenalty').value,
    _custom:true,
  };
  customEvents.push(ev);
  try{localStorage.setItem('sc_custom',JSON.stringify(customEvents));}catch(e){}
  document.getElementById('addModal').classList.remove('open');
  clearAddForm();
  renderCalendar();
  showToast('Custom event added! 🎉','success');
  return ev;
}

function clearAddForm(){
  ['cTitle','cDate','cState','cMode','cDesc','cPenalty'].forEach(id=>document.getElementById(id).value='');
}

document.getElementById('saveEvBtn').onclick = saveCustomEvent;
document.getElementById('saveGcalBtn').onclick = ()=>{
  const ev = saveCustomEvent();
  if(ev) openGcalDirect({title:ev.title,date:ev.date,desc:ev.desc||''});
};

// ── VIEW SWITCHING ────────────────────────────────────────────────
function switchView(v){
  curView = v;
  document.querySelectorAll('.view-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(v==='calendar'?'calPanel':v==='upcoming'?'upPanel':'catPanel').classList.add('active');
  document.querySelector(`[data-view="${v}"]`).classList.add('active');
  if(v==='calendar') renderCalendar();
  else if(v==='upcoming') renderUpcoming();
  else renderCategories();
  if(window.innerWidth<=900){
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
    document.getElementById('menuBtn').classList.remove('open');
  }
}

document.querySelectorAll('.tab-btn').forEach(b=>{
  b.addEventListener('click',()=>switchView(b.dataset.view));
});

// ── ACT FILTER TOGGLE ─────────────────────────────────────────────
document.getElementById('actFilters').addEventListener('click', e=>{
  const tag = e.target.closest('.act-tag');
  if(!tag) return;
  const act = tag.dataset.act;
  if(act==='ALL'){
    selActs=['ALL'];
  } else {
    selActs = selActs.filter(a=>a!=='ALL');
    if(selActs.includes(act)) selActs = selActs.filter(a=>a!==act);
    else selActs.push(act);
    if(selActs.length===0) selActs=['ALL'];
  }
  document.querySelectorAll('.act-tag').forEach(t=>{
    t.classList.toggle('active', selActs.includes(t.dataset.act)||(selActs.includes('ALL')&&t.dataset.act==='ALL'));
  });
  renderAll();
});

// ── NAV ───────────────────────────────────────────────────────────
document.getElementById('prevBtn').onclick = ()=>{
  curMonth--; if(curMonth<1){curMonth=12;curYear--;} renderAll(); renderMonthNav();
};
document.getElementById('nextBtn').onclick = ()=>{
  curMonth++; if(curMonth>12){curMonth=1;curYear++;} renderAll(); renderMonthNav();
};

// ── MODALS ────────────────────────────────────────────────────────
document.getElementById('closeDayModal').onclick = ()=>document.getElementById('dayModal').classList.remove('open');
document.getElementById('closeAddModal').onclick = ()=>{document.getElementById('addModal').classList.remove('open');clearAddForm();};
document.getElementById('cancelAddModal').onclick = ()=>{document.getElementById('addModal').classList.remove('open');clearAddForm();};
document.getElementById('closeGcalModal').onclick = ()=>document.getElementById('gcalModal').classList.remove('open');
document.getElementById('cancelGcal').onclick = ()=>document.getElementById('gcalModal').classList.remove('open');
document.getElementById('addEvBtn').onclick = ()=>{
  document.getElementById('cDate').value = `${curYear}-${String(curMonth).padStart(2,'0')}-15`;
  document.getElementById('addModal').classList.add('open');
  setTimeout(()=>document.getElementById('cTitle').focus(),300);
};
['dayModal','addModal','gcalModal'].forEach(id=>{
  document.getElementById(id).addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
});

// ── SIDEBAR ───────────────────────────────────────────────────────
document.getElementById('menuBtn').onclick = function(){
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sidebarOverlay');
  sb.classList.toggle('open');
  ov.classList.toggle('open');
  this.classList.toggle('open');
};
document.getElementById('sidebarOverlay').onclick = ()=>{
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
  document.getElementById('menuBtn').classList.remove('open');
};

// ── STATE SEARCH ──────────────────────────────────────────────────
document.getElementById('stateSearch').oninput = function(){renderStateList(this.value);};

// ── DARK MODE ─────────────────────────────────────────────────────
function setTheme(dark){
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  try{localStorage.setItem('sc_theme',dark?'dark':'light');}catch(e){}
}
const savedTheme = (()=>{try{return localStorage.getItem('sc_theme');}catch(e){return null;}})();
if(savedTheme==='dark') setTheme(true);
document.getElementById('themeToggle').onclick = ()=>{
  const dark = document.documentElement.getAttribute('data-theme')==='dark';
  setTheme(!dark);
  showToast(dark?'☀️ Light mode':'🌙 Dark mode','info');
};

// ── UPCOMING FILTER ───────────────────────────────────────────────
document.getElementById('upDaysFilter').onchange = renderUpcoming;

// ── TOAST ─────────────────────────────────────────────────────────
function showToast(msg, type='info'){
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className=`toast ${type}`;
  const icons={success:'fa-check-circle',error:'fa-exclamation-circle',info:'fa-info-circle'};
  t.innerHTML=`<i class="fas ${icons[type]||'fa-info-circle'} ti"></i><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>{t.style.transition='all .3s';t.style.opacity='0';t.style.transform='translateX(110%)';setTimeout(()=>t.remove(),350);},3200);
}

// ── KEYBOARD ─────────────────────────────────────────────────────
document.addEventListener('keydown', e=>{
  if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'));
  if(!e.target.matches('input,select,textarea')){
    if(e.key==='ArrowLeft') document.getElementById('prevBtn').click();
    if(e.key==='ArrowRight') document.getElementById('nextBtn').click();
  }
});

// ── RENDER ALL ────────────────────────────────────────────────────
function renderAll(){
  if(curView==='calendar') renderCalendar();
  else if(curView==='upcoming') renderUpcoming();
  else renderCategories();
}

// ── INIT ──────────────────────────────────────────────────────────
(function init(){
  const now = new Date();
  curYear = now.getFullYear();
  curMonth = now.getMonth()+1;

  renderStateList('');
  renderMonthNav();
  renderCalendar();

  setTimeout(()=>showToast('StatuPro loaded! Select a state from sidebar to filter. ✅','success'),800);
})();