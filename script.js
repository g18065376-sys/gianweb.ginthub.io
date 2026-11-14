function  login(){
  let input = document.getElementById("data").value
  
  if(input === "BGSPD" ){
    window.location.href ="utama.html";
  } else if(input === ""){
    document.getElementById("nama").innerHTML = "wajib di isi! ";
  }else{
    document.getElementById("nama").innerHTML ="password anda salah,coba lagi ";
  }
}