(function(){
  var BODY_KEY='jae_body_logs_v1';

  function lsGet(k,d){try{var v=localStorage.getItem(k);return v==null?d:JSON.parse(v);}catch(e){return d;}}
  function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function todayKey(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  function logs(){return lsGet(BODY_KEY,[]).sort(function(a,b){return new Date(b.date)-new Date(a.date);});}
  function setLogs(a){lsSet(BODY_KEY,a.slice(0,500));if(typeof syncPush==='function')syncPush(BODY_KEY,a.slice(0,500));}
  function n(v,d){return Number.isFinite(v)?Number(v).toFixed(d):'—';}
  function first(f,a){return a.slice().reverse().find(function(x){return Number.isFinite(x[f]);});}
  function last(f,a){return a.find(function(x){return Number.isFinite(x[f]);});}
  function avg7(f,a){var vals=a.filter(function(x){return Number.isFinite(x[f]);}).slice(0,7).map(function(x){return x[f];});return vals.length?vals.reduce(function(s,x){return s+x;},0)/vals.length:NaN;}
  function stat(v,k){return '<div class="stat"><div class="v num">'+v+'</div><div class="k">'+k+'</div></div>';}
  function diff(v){return !Number.isFinite(v)?'—':((v>0?'+':'')+v.toFixed(1));}

  function injectStyles(){
    if(document.getElementById('lifeosPatchStyles'))return;
    var s=document.createElement('style');s.id='lifeosPatchStyles';
    s.textContent='.bodygrid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.bodygrid .field input{padding:10px 11px}.bodychart{border:1px solid var(--line2);border-radius:14px;background:var(--surface);padding:13px 10px 8px;margin-top:10px}.bodychart svg{width:100%;height:auto;display:block}.bodylog{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--line)}.bodylog b{font-size:13.5px}.bodylog small{display:block;color:var(--muted);font-size:11.5px}.bodylog .x{margin-left:auto;color:var(--faint);font-size:18px;padding:2px 6px}.bodyhint{font-size:12px;color:var(--muted);margin-top:8px}';
    document.head.appendChild(s);
  }

  function bodyChart(a){
    var pts=a.slice().reverse().filter(function(x){return Number.isFinite(x.weight)||Number.isFinite(x.waist);}).slice(-30);
    if(!pts.length)return '<div class="empty">Add weight and waist to start the graph.</div>';
    var W=320,H=160,pl=34,pr=14,pt=14,pb=22,vals=[];
    pts.forEach(function(p){if(Number.isFinite(p.weight))vals.push(p.weight);if(Number.isFinite(p.waist))vals.push(p.waist);});
    var mn=Math.min.apply(null,vals),mx=Math.max.apply(null,vals);if(mn===mx){mn-=1;mx+=1;}var pad=(mx-mn)*.15;mn-=pad;mx+=pad;
    var xx=function(i){return pl+(pts.length===1?(W-pl-pr)/2:i*(W-pl-pr)/(pts.length-1));};
    var yy=function(v){return pt+(1-(v-mn)/(mx-mn))*(H-pt-pb);};
    var grid='';for(var i=0;i<4;i++){var y=pt+i*(H-pt-pb)/3;var val=mx-(mx-mn)*i/3;grid+='<line x1="'+pl+'" y1="'+y.toFixed(1)+'" x2="'+(W-pr)+'" y2="'+y.toFixed(1)+'" stroke="rgba(255,255,255,.07)"/><text x="'+(pl-6)+'" y="'+(y+3).toFixed(1)+'" fill="rgba(255,255,255,.42)" font-size="9" text-anchor="end">'+val.toFixed(1)+'</text>';}
    function path(f){var p='';pts.forEach(function(x,i){if(Number.isFinite(x[f]))p+=(p?'L':'M')+xx(i).toFixed(1)+' '+yy(x[f]).toFixed(1)+' ';});return p;}
    function dots(f,c){var out='';pts.forEach(function(x,i){if(Number.isFinite(x[f]))out+='<circle cx="'+xx(i).toFixed(1)+'" cy="'+yy(x[f]).toFixed(1)+'" r="3.5" fill="'+c+'"/>';});return out;}
    return '<svg viewBox="0 0 '+W+' '+H+'">'+grid+'<path d="'+path('weight')+'" fill="none" stroke="#6c8cff" stroke-width="2.5"/><path d="'+path('waist')+'" fill="none" stroke="#ffcf5d" stroke-width="2.5"/>'+dots('weight','#6c8cff')+dots('waist','#ffcf5d')+'</svg><div class="chartlegend"><span><i class="ln"></i>Weight kg</span><span><i class="ln" style="background:#ffcf5d"></i>Waist in</span></div>';
  }

  function renderBodyProgress(){
    injectStyles();
    var host=document.getElementById('bodyProgressBox');if(!host)return;
    var a=logs(),lw=last('weight',a),fw=first('weight',a),lws=last('waist',a),fws=first('waist',a);
    var wd=lw&&fw?lw.weight-fw.weight:NaN,waistd=lws&&fws?lws.waist-fws.waist:NaN,av=avg7('weight',a);
    var recent='';
    a.slice(0,5).forEach(function(x){var dt=new Date(x.date+'T00:00:00');recent+='<div class="bodylog"><div><b>'+dt.toLocaleDateString(undefined,{day:'numeric',month:'short'})+'</b><small>'+n(x.weight,2)+' kg · '+n(x.waist,1)+' in</small></div><button class="x" onclick="delBodyLog(\''+x.date+'\')">×</button></div>';});
    host.innerHTML='<div class="stats">'+stat(lw?n(lw.weight,2):'—','Weight')+stat(lws?n(lws.waist,1):'—','Waist')+stat(Number.isFinite(av)?n(av,2):'—','7-day avg')+stat(diff(wd),'kg change')+stat(diff(waistd),'waist change')+stat(a.length,'logs')+'</div><div class="card" style="margin-top:12px"><div class="bodygrid"><div class="field"><label>Weight kg</label><input id="bodyWeightIn" type="number" step="0.05" inputmode="decimal" placeholder="63.4"></div><div class="field"><label>Waist in</label><input id="bodyWaistIn" type="number" step="0.1" inputmode="decimal" placeholder="31.5"></div></div><button class="cta" style="margin-top:11px" onclick="saveBodyLog()">Save weight + waist</button><div class="bodyhint">Keep it simple: morning, after bathroom, before food.</div></div><div class="bodychart">'+bodyChart(a)+'</div>'+recent;
  }

  window.saveBodyLog=function(){
    var w=parseFloat((document.getElementById('bodyWeightIn')||{}).value);
    var waist=parseFloat((document.getElementById('bodyWaistIn')||{}).value);
    if(!Number.isFinite(w)&&!Number.isFinite(waist)){if(typeof toast==='function')toast('Add weight or waist first');return;}
    var date=todayKey();var a=logs().filter(function(x){return x.date!==date;});
    a.unshift({date:date,weight:Number.isFinite(w)?w:null,waist:Number.isFinite(waist)?waist:null});
    setLogs(a);
    if(typeof pushRemote==='function')pushRemote({type:'body',date:date,weight:Number.isFinite(w)?w:null,waist:Number.isFinite(waist)?waist:null});
    if(typeof toast==='function')toast('Body progress saved');
    renderBodyProgress();
  };
  window.delBodyLog=function(date){setLogs(logs().filter(function(x){return x.date!==date;}));renderBodyProgress();};

  function addBodyToProgress(){
    var prog=document.getElementById('progress');if(!prog||document.getElementById('bodyProgressBox'))return;
    var marker=document.createElement('div');
    marker.innerHTML='<div class="sectit">Body progress</div><div id="bodyProgressBox"></div>';
    var ex=document.getElementById('exProg');
    if(ex&&ex.parentNode)ex.parentNode.insertBefore(marker,ex.previousElementSibling||ex);
    else prog.appendChild(marker);
    renderBodyProgress();
  }

  function moveTaskInputTop(){
    var today=document.getElementById('today');if(!today)return;
    var taskIn=document.getElementById('planTaskIn'),taskList=document.getElementById('planTasks');if(!taskIn||!taskList)return;
    var addrow=taskIn.closest('.addrow');if(!addrow)return;
    var sect=[].slice.call(today.querySelectorAll('.sectit')).find(function(x){return x.textContent.indexOf('Add your own task')>=0;});
    if(!sect||sect.dataset.moved)return;
    sect.dataset.moved='1';
    var anchor=today.querySelector('.fhead');
    if(anchor&&anchor.nextSibling){today.insertBefore(taskList,anchor.nextSibling);today.insertBefore(addrow,taskList);today.insertBefore(sect,addrow);} 
  }

  function patchRenderSetWeight(){
    if(window.__lifeosSetPatch||typeof renderSet!=='function')return;window.__lifeosSetPatch=true;
    var oldRender=renderSet;
    window.renderSet=function(){
      oldRender.apply(this,arguments);
      try{
        if(!window.S)return;
        var prev=S.log&&S.log[S.ei]&&S.log[S.ei].sets&&S.log[S.ei].sets[S.log[S.ei].sets.length-1];
        if(prev&&document.getElementById('wIn'))document.getElementById('wIn').value=prev.kg;
      }catch(e){}
    };
  }

  function patchProgress(){
    if(window.__lifeosProgressPatch||typeof openProgress!=='function')return;window.__lifeosProgressPatch=true;
    var old=openProgress;
    window.openProgress=function(){old.apply(this,arguments);addBodyToProgress();};
  }

  function patchToday(){
    if(window.__lifeosTodayPatch||typeof renderToday!=='function')return;window.__lifeosTodayPatch=true;
    var old=renderToday;
    window.renderToday=function(){old.apply(this,arguments);moveTaskInputTop();};
  }

  function patchAll(){patchRenderSetWeight();patchProgress();patchToday();moveTaskInputTop();if(window.VIEW==='progress')addBodyToProgress();}
  patchAll();
  setTimeout(patchAll,400);
  setTimeout(patchAll,1200);
})();
