

/////Хэрэв бүртгэлгүй бол бүртгүүлэх товчыг дарж бүртгэл үүснэ
const burtguulehButton=document.querySelector(".burtguulehUg");
//Хэрэв бүртгүүлэх товчийг дарвал бүртгүүлэх хэсэгрүү шилжинэ
burtguulehButton.addEventListener("click",()=>{
document.querySelector(".nevtrehHeseg").style.display="none";
document.querySelector(".burtguulehHeseg").style.display="block";
});
//// Бүртгэлтэй бол нэвтрэх руу буцана
const nevtrehruuButsah=document.querySelector("#nevtrehButsah");
nevtrehruuButsah.addEventListener("click",()=>{
document.querySelector(".burtguulehHeseg").style.display="none";
document.querySelector(".nevtrehHeseg").style.display="block";
})

///Хувь хүн албан байгуулагаар хаяг нээх хэсгийн товч
const huvihunTovc=document.getElementById("huvihun");
const baiguulagaTovc=document.getElementById("baiguulaga");

huvihunTovc.addEventListener("click",()=>{
document.getElementById('baiguulagiinNerHeseg').style.display="none";
if((document.getElementsByClassName("ovogniiHeseg")[0].style.display="none")&&(document.getElementsByClassName("nerniiHeseg")[0].style.display="none"))
{
    huvihunTovc.style.borderBottom="1px solid #03d010";
    baiguulagaTovc.style.borderBottom="none";
    document.getElementsByClassName("ovogniiHeseg")[0].style.display="flex";
    document.getElementsByClassName("nerniiHeseg")[0].style.display="flex";
}
});
baiguulagaTovc.addEventListener("click",()=>{
    baiguulagaTovc.style.borderBottom="1px solid #03d010";
    huvihunTovc.style.borderBottom="none";
    document.getElementById('baiguulagiinNerHeseg').style.display="flex";
    document.getElementsByClassName("ovogniiHeseg")[0].style.display="none";
    document.getElementsByClassName("nerniiHeseg")[0].style.display="none";
})