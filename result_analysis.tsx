import { useState, useMemo } from "react";

const raw = [
  [1,"731123106001","ABHINANTH K K","","B+","B+","A","A","B+","B+","O","O","O"],
  [2,"731123106002","ABITHA A","","A","B+","A+","A","B+","A","A+","O","O"],
  [3,"731123106003","ARUNTHATHI M","","A+","A","A+","A","A+","A","O","O","O"],
  [4,"731123106004","AZHAGU MURUGAN S","","B+","B+","A","A","B+","B+","A+","O","O"],
  [5,"731123106005","BAFINA A","","B+","B+","A","A","B+","B","A+","O","O"],
  [6,"731123106006","BALA DEVIKHA M","","B+","U","A","A","B+","B+","O","O","A+"],
  [7,"731123106007","BARATH N","","B+","B+","A","A","U","B+","O","O","O"],
  [8,"731123106008","BHARATHI S","","B+","B+","A","A","A+","B+","A+","O","O"],
  [9,"731123106009","BHARATHI S","","B+","U","B+","A","U","B","A+","O","A+"],
  [10,"731123106010","CATHERIN JERSHA J S","","B+","A","A","A","B+","A","A+","O","O"],
  [11,"731123106011","DEVAPRAKASAM G","","U","U","A","A","B","U","A+","O","O"],
  [12,"731123106012","DHARANI S","A","B+","B+","A+","A","B+","B+","A+","O","O"],
  [13,"731123106013","DHARSHINI A","","A","B+","A+","A","B+","A","A+","O","O"],
  [14,"731123106014","DHINOSHNI K","","A","A","A+","A","A","A","O","O","O"],
  [15,"731123106015","GNANESHKANTHAN S","A","B+","U","B+","A","B+","B+","A+","O","O"],
  [16,"731123106016","GOPIKA M","","A+","B+","A","A","A","B+","O","O","O"],
  [17,"731123106017","HARINI P","","A","B+","B","A","B","B+","O","O","O"],
  [18,"731123106018","JAYAPRIYA T","","O","B+","A+","A","A","B+","A+","O","O"],
  [19,"731123106019","JAYASHREE D","","A+","B+","A","B+","B","B","A+","O","O"],
  [20,"731123106020","JEEVANANTHAM D","","A+","B+","A","A","B+","B","A+","O","O"],
  [21,"731123106021","JEEVIKA JENNY C A","","A+","B+","A","A","B+","B+","O","O","O"],
  [22,"731123106022","KAVISELVAM E","A","O","B+","A","A","A","B+","A+","O","O"],
  [23,"731123106023","KAYALVIZHI M","","A+","B","A","A","B+","B+","A+","O","O"],
  [24,"731123106024","KAYALVIZHI V","A+","O","B+","A","A","B+","A","O","O","O"],
  [25,"731123106025","KISHORE KUMAR S","","A+","U","B+","A","B","B","O","O","O"],
  [26,"731123106026","KRITHIK ROSHAN K M","","U","U","U","B+","U","U","A+","O","O"],
  [27,"731123106028","MADHAN C","A","A","B+","B+","A","B+","B+","O","O","O"],
  [28,"731123106029","MADHAN T N","","B+","U","A","A","B","B","A+","O","O"],
  [29,"731123106030","MADHUMITHA S","","A","A","A+","A","A","B+","A+","O","O"],
  [30,"731123106031","MICHAEL RAJ A","","U","B","B+","A","B","U","A+","O","O"],
  [31,"731123106032","NAGA ARJUN M","A","A","B+","O","A","B+","B+","A+","O","O"],
  [32,"731123106033","NAGASHUNMUGAM S","A+","A","B","A","A","B+","B+","A+","O","O"],
  [33,"731123106034","NELSI JEBA SELVA D","","A+","B+","A+","A","B+","B+","A+","O","O"],
  [34,"731123106035","NIHITHA V","","A+","B+","A","A","B+","B+","A+","O","O"],
  [35,"731123106036","NITEESH RAJ B K","","A+","B+","A","A","B+","B","O","O","O"],
  [36,"731123106037","PRIYADHARSHINI R","","A","B+","A","A","B+","B","A+","O","O"],
  [37,"731123106038","PRIYADHARSHINI S","","O","A","A+","A","A","B","A+","O","O"],
  [38,"731123106039","RAGHUL R A","","A","B+","A","A","A","B+","O","O","O"],
  [39,"731123106040","RENUKADEVI K","","O","B+","A","A","B+","B+","A+","O","O"],
  [40,"731123106041","RITHANI M","","B+","B+","A","A","B+","B","A+","O","O"],
  [41,"731123106042","SANJAY K","","U","U","U","B+","U","B","O","O","O"],
  [42,"731123106043","SANJEEV M","","U","U","U","B+","U","U","A+","A+","O"],
  [43,"731123106044","SATHYAPRIYA M","","B+","B+","A","A","A","B+","A+","O","O"],
  [44,"731123106045","SHEK ALLAVUDHIN BATSHA N","","U","B+","B+","A","B","C","A","O","A+"],
  [45,"731123106046","SIVA KUMAR L","","U","B","B+","B+","U","B","A+","O","A+"],
  [46,"731123106047","SOWRESH R","","U","U","B+","U","U","U","A","O","O"],
  [47,"731123106048","SRI DHARSHIKA S","","B+","B+","A","A","B+","B+","A+","O","O"],
  [48,"731123106049","SRIRAMPRASATH A","A+","B+","B+","A+","A","A","B+","A+","O","O"],
  [49,"731123106050","SUDHARSHAN A","","U","U","U","U","U","U","A+","O","A+"],
  [50,"731123106051","THAHIFA FATHIMA A","","B+","U","A","A","A","A","O","O","O"],
  [51,"731123106052","THARUN KUMAR P","","B+","B+","O","A","B","B","A+","O","O"],
  [52,"731123106053","THIRISHA K","","B+","U","A","A","B+","B+","A+","O","O"],
  [53,"731123106054","VAISHNAVI G P","B+","B+","B+","A","A","A","B+","A+","O","O"],
  [54,"731123106055","YAZHINI T","","B+","A","A","A","A","B","A","O","O"],
  [55,"731123106301","GOKULAPRIYA B","","A","B+","A","A","U","U","A+","A+","O"],
  [56,"731123106303","SHUNMUGALAKSHMI V","","B+","U","U","B+","U","U","A+","O","A+"],
  [57,"731123106701","MOHAMMED THOUFIQ A","","B+","U","A","A","B+","B","A+","O","O"],
  [58,"731123106702","JAYASHREE S","","B+","U","A","A","B+","B+","A+","O","O"],
  [59,"731123106703","SATHYA G","A+","A","B+","A+","A","A","B","A+","O","O"],
  [60,"731123106704","SARVEESH KAARTHIC R","","A","A","A+","B+","A+","B+","A+","O","O"],
  [61,"731123106705","DHANUSHKUMAR M","","B+","U","B+","B+","B","B","A+","A+","O"],
];

const subjectCodes = ["CBM368","CEC333","CEC359","CEC364","EC3501","EC3551","EC3552","EC3561","MX3084","NM1063"];
const subjectNames = {
  CBM368:"Therapeutic Equipment",
  CEC333:"Advanced Wireless Communication",
  CEC359:"Underwater Instrumentation System",
  CEC364:"Wireless Broadband Networks",
  EC3501:"Wireless Communication",
  EC3551:"Transmission Lines & RF Systems",
  EC3552:"VLSI and Chip Design",
  EC3561:"VLSI Laboratory",
  MX3084:"Disaster Risk Reduction",
  NM1063:"Naan Muthalvan"
};

const gradeColors = {
  O:"#00c853","A+":"#00e676",A:"#69f0ae",
  "B+":"#40c4ff",B:"#82b1ff",C:"#ffab40",U:"#ff5252","":" #444"
};
function gradeColor(g){return gradeColors[g]||"#888";}

const students = raw.map(r=>({
  sno:r[0],regno:r[1],name:r[2],
  grades:{
    CBM368:r[3],CEC333:r[4],CEC359:r[5],CEC364:r[6],
    EC3501:r[7],EC3551:r[8],EC3552:r[9],EC3561:r[10],MX3084:r[11],NM1063:r[12]
  }
}));

function failedSubjects(s){return subjectCodes.filter(c=>s.grades[c]==="U");}
function studentPass(s){return Object.values(s.grades).every(g=>g===""||g!=="U");}

function subjectStats(code){
  const appeared=students.filter(s=>s.grades[code]!=="");
  const passed=appeared.filter(s=>s.grades[code]!=="U");
  const dist={};
  ["O","A+","A","B+","B","C","U"].forEach(g=>{dist[g]=0;});
  appeared.forEach(s=>{const g=s.grades[code];if(g!=="")dist[g]=(dist[g]||0)+1;});
  return {appeared:appeared.length,passed:passed.length,passPercent:appeared.length?((passed.length/appeared.length)*100).toFixed(1):"-",dist};
}

const TABS=["Overview","Students","Subjects","Toppers"];

export default function App(){
  const [tab,setTab]=useState("Overview");
  const [search,setSearch]=useState("");
  const [sortCol,setSortCol]=useState("sno");
  const [sortDir,setSortDir]=useState(1);
  const [selectedStudent,setSelectedStudent]=useState(null);
  const [selectedSubject,setSelectedSubject]=useState(null);

  const totalStudents=students.length;
  const allPassStudents=students.filter(studentPass).length;
  const overallPassPct=((allPassStudents/totalStudents)*100).toFixed(1);
  const uStudents=students.filter(s=>failedSubjects(s).length>0).length;

  const filteredStudents=useMemo(()=>{
    let arr=[...students];
    if(search){const q=search.toLowerCase();arr=arr.filter(s=>s.name.toLowerCase().includes(q)||s.regno.includes(q));}
    arr.sort((a,b)=>{
      if(sortCol==="sno")return sortDir*(a.sno-b.sno);
      if(sortCol==="name")return sortDir*a.name.localeCompare(b.name);
      if(sortCol==="fails")return sortDir*(failedSubjects(a).length-failedSubjects(b).length);
      return 0;
    });
    return arr;
  },[search,sortCol,sortDir]);

  const subStats=useMemo(()=>subjectCodes.map(c=>({code:c,...subjectStats(c)})),[]);

  const toppers=useMemo(()=>[...students].filter(s=>failedSubjects(s).length===0)
    .sort((a,b)=>{
      const aO=subjectCodes.filter(c=>a.grades[c]==="O").length;
      const bO=subjectCodes.filter(c=>b.grades[c]==="O").length;
      if(bO!==aO)return bO-aO;
      const aAp=subjectCodes.filter(c=>a.grades[c]==="A+").length;
      const bAp=subjectCodes.filter(c=>b.grades[c]==="A+").length;
      return bAp-aAp;
    }).slice(0,10),[]);

  const gradeDist=useMemo(()=>{
    const d={O:0,"A+":0,A:0,"B+":0,B:0,C:0,U:0};
    students.forEach(s=>subjectCodes.forEach(c=>{const g=s.grades[c];if(g!==""&&d[g]!==undefined)d[g]++;}));
    return d;
  },[]);

  function handleSort(col){
    if(sortCol===col)setSortDir(d=>-d);
    else{setSortCol(col);setSortDir(1);}
  }

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#0f0c29,#302b63,#24243e)",color:"#fff",fontFamily:"'Segoe UI',sans-serif",paddingBottom:40}}>
      {/* Header */}
      <div style={{background:"linear-gradient(90deg,#6a11cb,#2575fc)",padding:"28px 32px 20px",boxShadow:"0 4px 30px #0008"}}>
        <div style={{fontSize:11,letterSpacing:3,color:"#c5cae9",textTransform:"uppercase",marginBottom:4}}>Government College of Engineering Erode</div>
        <div style={{fontSize:22,fontWeight:700,letterSpacing:1}}>ECE — Batch 2027 · V Semester Result Analysis</div>
        <div style={{fontSize:13,color:"#b0bec5",marginTop:4}}>Academic Year 2025–26 &nbsp;|&nbsp; Electronics & Communication Engineering</div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:4,padding:"18px 32px 0",borderBottom:"1px solid #ffffff18"}}>
        {TABS.map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{background:tab===t?"linear-gradient(90deg,#6a11cb,#2575fc)":"transparent",border:"1px solid "+(tab===t?"transparent":"#ffffff30"),color:"#fff",padding:"8px 22px",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:tab===t?700:400,fontSize:14,transition:"all .2s"}}>
            {t}
          </button>
        ))}
      </div>

      <div style={{padding:"28px 32px"}}>

      {/* OVERVIEW */}
      {tab==="Overview" && <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:16,marginBottom:28}}>
          {[
            {label:"Total Students",value:totalStudents,icon:"👨‍🎓",color:"#6a11cb"},
            {label:"Overall Pass",value:allPassStudents,icon:"✅",color:"#00c853"},
            {label:"Pass Percentage",value:overallPassPct+"%",icon:"📊",color:"#2575fc"},
            {label:"Students with Arrear",value:uStudents,icon:"⚠️",color:"#ff5252"},
            {label:"Subjects",value:10,icon:"📚",color:"#ff9800"},
          ].map(k=>(
            <div key={k.label} style={{background:`linear-gradient(135deg,${k.color}22,${k.color}44)`,border:`1px solid ${k.color}55`,borderRadius:14,padding:"18px 20px",display:"flex",flexDirection:"column",gap:6,boxShadow:`0 4px 20px ${k.color}22`}}>
              <div style={{fontSize:24}}>{k.icon}</div>
              <div style={{fontSize:28,fontWeight:800,color:"#fff"}}>{k.value}</div>
              <div style={{fontSize:12,color:"#b0bec5",textTransform:"uppercase",letterSpacing:1}}>{k.label}</div>
            </div>
          ))}
        </div>

        <div style={{background:"#ffffff0a",border:"1px solid #ffffff15",borderRadius:16,padding:"22px 24px",marginBottom:22}}>
          <div style={{fontWeight:700,fontSize:16,marginBottom:16,color:"#90caf9"}}>📈 Overall Grade Distribution</div>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            {["O","A+","A","B+","B","C","U"].map(g=>{
              const count=gradeDist[g]||0;
              const total=Object.values(gradeDist).reduce((a,b)=>a+b,0);
              const pct=total?((count/total)*100).toFixed(1):0;
              return (
                <div key={g} style={{flex:"1 1 80px",minWidth:70,textAlign:"center"}}>
                  <div style={{height:90,display:"flex",alignItems:"flex-end",justifyContent:"center",marginBottom:6}}>
                    <div style={{width:44,background:`linear-gradient(180deg,${gradeColor(g)},${gradeColor(g)}88)`,height:`${Math.max(6,pct)}%`,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:4}}>
                      <span style={{fontSize:10,fontWeight:700,color:"#fff"}}>{count}</span>
                    </div>
                  </div>
                  <div style={{fontWeight:700,fontSize:15,color:gradeColor(g)}}>{g}</div>
                  <div style={{fontSize:11,color:"#90a4ae"}}>{pct}%</div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{background:"#ffffff0a",border:"1px solid #ffffff15",borderRadius:16,padding:"22px 24px"}}>
          <div style={{fontWeight:700,fontSize:16,marginBottom:16,color:"#90caf9"}}>📋 Subject-wise Pass Percentage</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {subStats.map(s=>{
              const pct=parseFloat(s.passPercent)||0;
              const color=pct>=90?"#00c853":pct>=75?"#40c4ff":pct>=60?"#ffab40":"#ff5252";
              return (
                <div key={s.code} style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:50,fontSize:11,color:"#90a4ae",flexShrink:0}}>{s.code}</div>
                  <div style={{flex:1,fontSize:13,minWidth:120}}>{subjectNames[s.code]}</div>
                  <div style={{flex:2,background:"#ffffff15",borderRadius:99,height:8,overflow:"hidden"}}>
                    <div style={{width:`${pct}%`,height:"100%",background:`linear-gradient(90deg,${color},${color}aa)`,borderRadius:99}}/>
                  </div>
                  <div style={{width:52,textAlign:"right",fontWeight:700,color,fontSize:14}}>{s.passPercent}%</div>
                  <div style={{width:100,textAlign:"right",fontSize:12,color:"#90a4ae"}}>{s.passed}/{s.appeared} passed</div>
                </div>
              );
            })}
          </div>
        </div>
      </>}

      {/* STUDENTS */}
      {tab==="Students" && <>
        <div style={{display:"flex",gap:12,marginBottom:18,alignItems:"center",flexWrap:"wrap"}}>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍  Search by name or register no..." style={{flex:1,minWidth:200,background:"#ffffff15",border:"1px solid #ffffff30",borderRadius:10,padding:"10px 16px",color:"#fff",fontSize:14,outline:"none"}}/>
          <span style={{fontSize:13,color:"#90a4ae"}}>{filteredStudents.length} students</span>
        </div>
        <div style={{overflowX:"auto",borderRadius:14,border:"1px solid #ffffff15"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:13}}>
            <thead>
              <tr style={{background:"linear-gradient(90deg,#6a11cb44,#2575fc44)"}}>
                {[["sno","#"],["name","Name"],["fails","Arrears"]].map(([col,lbl])=>(
                  <th key={col} onClick={()=>handleSort(col)} style={{padding:"12px 14px",textAlign:"left",cursor:"pointer",userSelect:"none",whiteSpace:"nowrap",color:"#90caf9",fontWeight:700}}>
                    {lbl} {sortCol===col?(sortDir===1?"▲":"▼"):""}
                  </th>
                ))}
                {subjectCodes.map(c=><th key={c} style={{padding:"12px 8px",textAlign:"center",color:"#90caf9",fontSize:11,fontWeight:600,whiteSpace:"nowrap"}}>{c}</th>)}
                <th style={{padding:"12px 10px",color:"#90caf9",fontSize:11}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((s,i)=>{
                const fails=failedSubjects(s).length;
                const pass=fails===0;
                return (
                  <tr key={s.regno} onClick={()=>setSelectedStudent(s)} style={{background:i%2===0?"#ffffff05":"transparent",cursor:"pointer",borderBottom:"1px solid #ffffff08"}}
                    onMouseEnter={e=>e.currentTarget.style.background="#ffffff15"}
                    onMouseLeave={e=>e.currentTarget.style.background=i%2===0?"#ffffff05":"transparent"}>
                    <td style={{padding:"10px 14px",color:"#90a4ae"}}>{s.sno}</td>
                    <td style={{padding:"10px 14px",fontWeight:600}}>{s.name}</td>
                    <td style={{padding:"10px 14px",color:fails>0?"#ff5252":"#00c853",fontWeight:700}}>{fails||"–"}</td>
                    {subjectCodes.map(c=>{
                      const g=s.grades[c];
                      return <td key={c} style={{padding:"8px 6px",textAlign:"center"}}>
                        {g===""?<span style={{color:"#444",fontSize:11}}>–</span>:
                        <span style={{background:gradeColor(g)+"33",border:`1px solid ${gradeColor(g)}66`,color:gradeColor(g),borderRadius:6,padding:"2px 7px",fontWeight:700,fontSize:12}}>{g}</span>}
                      </td>;
                    })}
                    <td style={{padding:"10px 10px",textAlign:"center"}}>
                      <span style={{background:pass?"#00c85322":"#ff525222",border:`1px solid ${pass?"#00c853":"#ff5252"}`,color:pass?"#00c853":"#ff5252",borderRadius:20,padding:"3px 10px",fontSize:11,fontWeight:700}}>
                        {pass?"PASS":"ARREAR"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {selectedStudent && (
          <div style={{position:"fixed",inset:0,background:"#000a",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,padding:16}} onClick={()=>setSelectedStudent(null)}>
            <div onClick={e=>e.stopPropagation()} style={{background:"linear-gradient(135deg,#1a1a2e,#16213e)",border:"1px solid #ffffff22",borderRadius:20,padding:28,maxWidth:520,width:"100%",boxShadow:"0 20px 60px #000c"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:18}}>
                <div>
                  <div style={{fontWeight:800,fontSize:20}}>{selectedStudent.name}</div>
                  <div style={{fontSize:12,color:"#90a4ae",marginTop:3}}>{selectedStudent.regno}</div>
                </div>
                <span style={{background:failedSubjects(selectedStudent).length===0?"#00c85322":"#ff525222",border:`1px solid ${failedSubjects(selectedStudent).length===0?"#00c853":"#ff5252"}`,color:failedSubjects(selectedStudent).length===0?"#00c853":"#ff5252",borderRadius:20,padding:"5px 14px",fontSize:13,fontWeight:700}}>
                  {failedSubjects(selectedStudent).length===0?"PASS":"ARREAR"}
                </span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                {subjectCodes.filter(c=>selectedStudent.grades[c]!=="").map(c=>{
                  const g=selectedStudent.grades[c];
                  return <div key={c} style={{background:"#ffffff0a",borderRadius:10,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",border:`1px solid ${gradeColor(g)}33`}}>
                    <div>
                      <div style={{fontSize:11,color:"#90a4ae"}}>{c}</div>
                      <div style={{fontSize:12,fontWeight:600,marginTop:2}}>{subjectNames[c].slice(0,22)}</div>
                    </div>
                    <span style={{fontWeight:800,fontSize:18,color:gradeColor(g)}}>{g}</span>
                  </div>;
                })}
              </div>
              <div style={{marginTop:18,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:13,color:"#90a4ae"}}>Arrear subjects: <b style={{color:"#ff5252"}}>{failedSubjects(selectedStudent).length||"None"}</b></span>
                <button onClick={()=>setSelectedStudent(null)} style={{background:"#ffffff15",border:"1px solid #ffffff30",color:"#fff",padding:"8px 20px",borderRadius:10,cursor:"pointer"}}>Close</button>
              </div>
            </div>
          </div>
        )}
      </>}

      {/* SUBJECTS */}
      {tab==="Subjects" && <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:16}}>
          {subStats.map(s=>{
            const pct=parseFloat(s.passPercent)||0;
            const color=pct>=90?"#00c853":pct>=75?"#40c4ff":pct>=60?"#ffab40":"#ff5252";
            return (
              <div key={s.code} onClick={()=>setSelectedSubject(selectedSubject===s.code?null:s.code)} style={{background:"#ffffff08",border:`1px solid ${color}44`,borderRadius:16,padding:"18px 20px",cursor:"pointer",transition:"all .2s",boxShadow:selectedSubject===s.code?`0 0 0 2px ${color}`:"none"}}
                onMouseEnter={e=>e.currentTarget.style.background="#ffffff12"}
                onMouseLeave={e=>e.currentTarget.style.background="#ffffff08"}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                  <div>
                    <div style={{fontSize:11,color:"#90a4ae",letterSpacing:1}}>{s.code}</div>
                    <div style={{fontWeight:700,fontSize:15,marginTop:3}}>{subjectNames[s.code]}</div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:26,fontWeight:800,color}}>{s.passPercent}%</div>
                    <div style={{fontSize:11,color:"#90a4ae"}}>Pass Rate</div>
                  </div>
                </div>
                <div style={{display:"flex",gap:8,fontSize:12,color:"#90a4ae",marginBottom:12}}>
                  <span>Appeared: <b style={{color:"#fff"}}>{s.appeared}</b></span>
                  <span>·</span>
                  <span>Passed: <b style={{color:"#00c853"}}>{s.passed}</b></span>
                  <span>·</span>
                  <span>Failed: <b style={{color:"#ff5252"}}>{s.appeared-s.passed}</b></span>
                </div>
                <div style={{display:"flex",gap:3,height:8,borderRadius:99,overflow:"hidden"}}>
                  {["O","A+","A","B+","B","C","U"].map(g=>{
                    const c=s.dist[g]||0;
                    const w=s.appeared?((c/s.appeared)*100):0;
                    return w>0?<div key={g} style={{width:`${w}%`,background:gradeColor(g)}} title={`${g}: ${c}`}/>:null;
                  })}
                </div>
                {selectedSubject===s.code && (
                  <div style={{marginTop:14,display:"flex",gap:6,flexWrap:"wrap"}}>
                    {["O","A+","A","B+","B","C","U"].map(g=>{
                      const c=s.dist[g]||0;
                      if(!c)return null;
                      return <span key={g} style={{background:gradeColor(g)+"22",border:`1px solid ${gradeColor(g)}55`,color:gradeColor(g),borderRadius:20,padding:"3px 12px",fontSize:13,fontWeight:700}}>{g}: {c}</span>;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>}

      {/* TOPPERS */}
      {tab==="Toppers" && <>
        <div style={{marginBottom:20,color:"#90a4ae",fontSize:14}}>🏆 Top 10 students by grade performance (no arrears) — ranked by O count, then A+ count</div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {toppers.map((s,i)=>{
            const medal=i===0?"🥇":i===1?"🥈":i===2?"🥉":"⭐";
            const color=i===0?"#ffd700":i===1?"#c0c0c0":i===2?"#cd7f32":"#6a11cb";
            const oCount=subjectCodes.filter(c=>s.grades[c]==="O").length;
            const apCount=subjectCodes.filter(c=>s.grades[c]==="A+").length;
            return (
              <div key={s.regno} style={{background:"#ffffff08",border:`1px solid ${color}44`,borderRadius:14,padding:"16px 20px",display:"flex",alignItems:"center",gap:16,boxShadow:`0 2px 16px ${color}18`}}>
                <div style={{fontSize:28,width:36}}>{medal}</div>
                <div style={{width:28,textAlign:"center",fontWeight:800,color:"#90a4ae",fontSize:15}}>#{i+1}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700,fontSize:16}}>{s.name}</div>
                  <div style={{fontSize:12,color:"#90a4ae",marginTop:2}}>{s.regno}</div>
                  <div style={{display:"flex",gap:4,marginTop:8,flexWrap:"wrap"}}>
                    {subjectCodes.filter(c=>s.grades[c]!=="").map(c=>{
                      const gr=s.grades[c];
                      return <span key={c} style={{background:gradeColor(gr)+"22",color:gradeColor(gr),border:`1px solid ${gradeColor(gr)}55`,borderRadius:6,padding:"1px 8px",fontSize:11,fontWeight:700}}>{gr}</span>;
                    })}
                  </div>
                </div>
                <div style={{textAlign:"right",display:"flex",flexDirection:"column",gap:6}}>
                  <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
                    <span style={{background:"#00c85322",border:"1px solid #00c853",color:"#00c853",borderRadius:20,padding:"3px 12px",fontSize:12,fontWeight:700}}>O × {oCount}</span>
                    <span style={{background:"#00e67622",border:"1px solid #00e676",color:"#00e676",borderRadius:20,padding:"3px 12px",fontSize:12,fontWeight:700}}>A+ × {apCount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>}

      </div>
    </div>
  );
}
