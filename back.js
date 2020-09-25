function change1()
 {
   a=document.getElementById("2").value;
   b=document.getElementById("9").value;
   c=parseFloat((b-(a/2))/1000);
   document.getElementById("12").value=c;
   return document.getElementById("12").value;
  }
  function change2()
 {
    a=document.getElementById("15").value;
    b=document.getElementById("16").value;
    c=parseFloat((1.5*a)+(1.5*b));
    document.getElementById("17").value=c;
    document.getElementById("18").value=c;
    return document.getElementById("18").value;
  }
  function change3()
 {
    a=document.getElementById("12").value;
    b=document.getElementById("20").value;
    c=parseFloat(a*b);
    document.getElementById("22").value=c;
    return document.getElementById("22").value;
  }
  function change4()
 {
    a=document.getElementById("12").value;
    b=document.getElementById("21").value;
    c=parseFloat(a*b);
    document.getElementById("23").value=c;
    return document.getElementById("23").value;
  }
  function change5()
 {
    a=document.getElementById("24").value;
    c=parseFloat((0.6323*a)+26);
    document.getElementById("25").value=c;
    return document.getElementById("25").value;
  }
  function change6()
 {
    a=document.getElementById("16").value;
    c=parseFloat(1.5*a);
    document.getElementById("26").value=c;
    return document.getElementById("26").value;
  }
  function change7()
 {
    a=document.getElementById("25").value;
    b=document.getElementById("26").value;
    c=parseFloat((a/b)*100);
    document.getElementById("27").value=c;
    return document.getElementById("27").value;
  }
  function change8()
 {
    a=document.getElementById("28").value;
    c=parseFloat((0.2046*a)+130);
    document.getElementById("29").value=c;
    return document.getElementById("29").value;
  }
  function change9()
 {
    a=document.getElementById("29").value;
    b=document.getElementById("25").value;
    c=parseFloat(a-b);
    document.getElementById("30").value=c;
    return document.getElementById("30").value;
  }
  function change10()  {
    document.getElementById("31").value=document.getElementById("18").value;
    document.getElementById("33").value=document.getElementById("18").value;
    return document.getElementById("31").value, document.getElementById("33").value;
  }
  function change11()  {
    a=document.getElementById("30").value;
    b=document.getElementById("31").value;
    c=parseFloat((a/b)*100);
    document.getElementById("32").value=c;
    return document.getElementById("32").value;
  }
  function change12()  {
    a=document.getElementById("29").value;
    b=document.getElementById("33").value;
    c=parseFloat((a/b)*100);
    document.getElementById("34").value=c;
    return document.getElementById("34").value;
  }
  function change13()  {
    a=document.getElementById("35").value;
    b=parseFloat((0.6323*a)+26);
    document.getElementById("36").value=b;
    return document.getElementById("36").value;
  }
  function change14()  {
    a=document.getElementById("14").value;
    c=parseFloat(1.5*a);
    document.getElementById("37").value=c;
    return document.getElementById("37").value;
  }
  function change15()  {
    a=document.getElementById("36").value;
    b=document.getElementById("37").value;
    c=parseFloat((a/b)*100);
    document.getElementById("38").value=c;
    return document.getElementById("38").value;
  }
  function change16()  {
    a=document.getElementById("39").value;
    c=parseFloat((0.2046*a)+130);
    document.getElementById("40").value=c;
    return document.getElementById("40").value;
  }
  function change17()  {
    a=document.getElementById("40").value;
    b=document.getElementById("36").value;
    c=parseFloat(a-b);
    document.getElementById("41").value=c;
    return document.getElementById("41").value;
  }
  function change18()  {
    document.getElementById("42").value=document.getElementById("17").value;
    document.getElementById("43").value=document.getElementById("17").value;
    return document.getElementById("42").value,document.getElementById("43").value
  }
  function change19()  {
    a=document.getElementById("40").value;
    b=document.getElementById("43").value;
    c=parseFloat((a/b)*100);
    document.getElementById("44").value=c;
    return document.getElementById("44").value;
  }
  function change20()  {
    a=document.getElementById("14").value;
    c=parseFloat(0.4*(1.2*a));
    document.getElementById("45").value=c;
    return document.getElementById("45").value;
  }
  function change21()  {
    a=document.getElementById("13").value;
    b=document.getElementById("14").value;
    c=parseFloat(0.5*((1.25*a)+(0.25*b)));
    document.getElementById("46").value=c;
    return document.getElementById("46").value;
  }
  function change22()  {
    a=parseFloat(document.getElementById("36").value);
    b=parseFloat(document.getElementById("45").value);
    c=parseFloat(a+b);
    document.getElementById("47").value=c;
    return document.getElementById("47").value;
  }
  function change23()  {
    a=parseFloat(document.getElementById("47").value);
    b=parseFloat(document.getElementById("37").value);
    c=parseFloat((a/b)*100);
    document.getElementById("48").value=c;
    return document.getElementById("48").value;
  }
  function change24()  {
    a=parseFloat(document.getElementById("46").value);
    b=parseFloat(document.getElementById("40").value);
    c=parseFloat(a+b);
    document.getElementById("49").value=c;
    return document.getElementById("49").value;
  }
  function change25()  {
    a=parseFloat(document.getElementById("14").value);
    b=parseFloat(document.getElementById("17").value);
    c=parseFloat(a+b);
    document.getElementById("50").value=c;
    return document.getElementById("50").value;
  }
  function change26()  {
    a=parseFloat(document.getElementById("49").value);
    b=parseFloat(document.getElementById("50").value);
    c=parseFloat((a/b)*100);
    document.getElementById("51").value=c;
    return document.getElementById("51").value;
  }
  function r(event) {
    event.preventDefault();
    parseFloat(document.getElementById("25").value)<parseFloat(document.getElementById("26").value)?(document.getElementById("r1").value)="Pass":(document.getElementById("r1").value)="Fail";
    parseFloat(document.getElementById("30").value)<parseFloat(document.getElementById("31").value)?(document.getElementById("r2").value)="Pass":(document.getElementById("r2").value)="Fail";
    parseFloat(document.getElementById("29").value)<parseFloat(document.getElementById("33").value)?(document.getElementById("r3").value)="Pass":(document.getElementById("r3").value)="Fail";
    parseFloat(document.getElementById("36").value)<parseFloat(document.getElementById("37").value)?(document.getElementById("r4").value)="Pass":(document.getElementById("r4").value)="Fail";
    parseFloat(document.getElementById("40").value)<parseFloat(document.getElementById("43").value)?(document.getElementById("r5").value)="Pass":(document.getElementById("r5").value)="Fail";
    parseFloat(document.getElementById("47").value)<parseFloat(document.getElementById("37").value)?(document.getElementById("r6").value)="Pass":(document.getElementById("r6").value)="Fail";
    parseFloat(document.getElementById("49").value)<parseFloat(document.getElementById("50").value)?(document.getElementById("r7").value)="Pass":(document.getElementById("r7").value)="Fail";
  }
  function show(event) {
    event.preventDefault();
    document.getElementById("submit").style.display="none";
    document.getElementById("check").style.display="block";
  }
  function result() {
    document.getElementsByName("j2")[0].style.display="block";
    a1=document.getElementById("27").value;
    b1=document.getElementById("32").value;
    c1=document.getElementById("34").value;
    d1=document.getElementById("38").value;
    e1=document.getElementById("42").value;
    f1=document.getElementById("48").value;
    g1=document.getElementById("51").value;
    a=document.getElementById("r1").value;
    b=document.getElementById("r2").value;
    c=document.getElementById("r3").value;
    d=document.getElementById("r4").value;
    e=document.getElementById("r5").value;
    f=document.getElementById("r6").value;
    g=document.getElementById("r7").value
    document.getElementById("res1").value=a;
    document.getElementById("res2").value=b;
    document.getElementById("res3").value=c;
    document.getElementById("res4").value=d;
    document.getElementById("res5").value=e;
    document.getElementById("res6").value=f;
    document.getElementById("res7").value=g;
    document.getElementById("uti1").value=a1;
    document.getElementById("uti2").value=b1;
    document.getElementById("uti3").value=c1;
    document.getElementById("uti4").value=d1;
    document.getElementById("uti5").value=e1;
    document.getElementById("uti6").value=f1;
    document.getElementById("uti7").value=g1;
    return document.getElementById("res1").value,document.getElementById("res2").value,
    document.getElementById("res3").value,document.getElementById("res4").value,
    document.getElementById("res5").value,document.getElementById("res6").value,
    document.getElementById("res7").value,document.getElementById("res1").value,
    document.getElementById("uti1").value,document.getElementById("uti2").value,
    document.getElementById("uti3").value,document.getElementById("uti4").value,
    document.getElementById("uti5").value,document.getElementById("uti6").value,
    document.getElementById("uti7").value;
  }

const KKS=document.getElementById("1");
const RP=document.getElementById("2"); 
const PW=document.getElementById("3");
const Trun=document.getElementById("4"); 
const Trun_Wall=document.getElementById("5"); 
const DT=document.getElementById("6"); 
const DP=document.getElementById("7");
const DPH=document.getElementById("8");
const TL=document.getElementById("9");
const TF=document.getElementById("10");
const num=document.getElementById("11");
const Eff=document.getElementById("12");
const fc=document.getElementById("13");
const fh=document.getElementById("14");
const fc2=document.getElementById("15");
const fh2=document.getElementById("16");
const fa=document.getElementById("17");
const fa2=document.getElementById("18");
const Load_P_N=document.getElementById("19");
const Load_VL_N=document.getElementById("20");
const Load_VC_N=document.getElementById("21");
const Longitudinal_ML_Nm=document.getElementById("22");
const Circumfrential_MC_Nm=document.getElementById("23");
const Pl_WRC=document.getElementById("24");
const Pl_FE=document.getElementById("25");
const Pl_Allowable=document.getElementById("26");
const Util1=document.getElementById("27");
const Result1=document.getElementById("r1");
const PL_Q_WRC=document.getElementById("28"); 
const PL_Q_FE=document.getElementById("29");
const Q=document.getElementById("30");
const Q_Allowable=document.getElementById("31");
const Util2=document.getElementById("32");
const Result2=document.getElementById("r2");
const PM_PL_Q=document.getElementById("33");
const Util3=document.getElementById("34");
const Result3=document.getElementById("r3");
const Pl_WRC2=document.getElementById("35");
const Pl_FE2=document.getElementById("36");
const Pm_Pl=document.getElementById("37");
const Util4=document.getElementById("38");
const Result4=document.getElementById("r4");
const Pm_PL_Q_WRC=document.getElementById("39");
const Pm_PL_Q_FE=document.getElementById("40");
const Q_Header=document.getElementById("41"); 
const Q_Allowable_Header=document.getElementById("42");
const PM_PL_Q_Allowable_Header=document.getElementById("43");
const Util5=document.getElementById("44");
const Result5=document.getElementById("r5");
const HDR_SUS_OCC=document.getElementById("45");
const HDR_Pipe=document.getElementById("46");
const Total_Stresses_HDR=document.getElementById("47");
const Util6=document.getElementById("48");
const Result6=document.getElementById("r6");
const Total_HDR_Pipe=document.getElementById("49");
const Allowable_Total_Header=document.getElementById("50");
const Util7=document.getElementById("51");
const Result7=document.getElementById("r7");
const submit=document.getElementById("submit");
const check=document.getElementById("check");

const database=firebase.database();
const rootRef=database.ref('/user');
check.addEventListener('click',(e)=>{
  e.preventDefault();
          database.ref('/user '+ KKS.value).push({
          KKS:KKS.value,
          RP:RP.value,
          PW:PW.value,
          Trun:Trun.value,
          Trun_Wall:Trun_Wall.value,
          DT:DT.value,
          DP:DP.value,
          DPH:DPH.value,
          TL:TL.value,
          TF:TF.value,
          num:num.value,
          Eff:Eff.value,
          fc:fc.value,
          fh:fh.value, 
          fc2:fc2.value,
          fh2:fh2.value,
          fa:fa.value,
          fa2:fa2.value,
          Load_P_N:Load_P_N.value,
          Load_VL_N:Load_VL_N.value,
          Load_VC_N:Load_VC_N.value,
          Longitudinal_ML_Nm:Longitudinal_ML_Nm.value,
          Circumfrential_MC_Nm:Circumfrential_MC_Nm.value,
          Pl_WRC:Pl_WRC.value, 
          Pl_FE:Pl_FE.value, 
          Pl_Allowable:Pl_Allowable.value,
          Util1:Util1.value,
          Result1:Result1.value,
          PL_Q_WRC:PL_Q_WRC.value,
          PL_Q_FE:PL_Q_FE.value,
          Q:Q.value,
          Q_Allowable:Q_Allowable.value,
          Util2:Util2.value,
          Result2:Result2.value,
          PM_PL_Q:PM_PL_Q.value, 
          Util3:Util3.value,
          Result3:Result3.value,
          Pl_WRC2:Pl_WRC2.value,
          Pl_FE2:Pl_FE2.value,
          Pm_Pl:Pm_Pl.value,
          Util4:Util4.value,
          Result4:Result4.value,
          Pm_PL_Q_WRC:Pm_PL_Q_WRC.value,
          Pm_PL_Q_FE:Pm_PL_Q_FE.value,
          Q_Header:Q_Header.value, 
          Q_Allowable_Header:Q_Allowable_Header.value,
          PM_PL_Q_Allowable_Header:PM_PL_Q_Allowable_Header.value,
          Util5:Util5.value,
          Result5:Result5.value,
          HDR_SUS_OCC:HDR_SUS_OCC.value,
          HDR_Pipe:HDR_Pipe.value,
          Total_Stresses_HDR:Total_Stresses_HDR.value, 
          Util6:Util6.value,
          Result6:Result6.value,
          Total_HDR_Pipe:Total_HDR_Pipe.value,
          Allowable_Total_Header:Allowable_Total_Header.value,
          Util7:Util7.value,
          Result7:Result7.value
      });
      result();
      document.getElementById('link').scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
    
