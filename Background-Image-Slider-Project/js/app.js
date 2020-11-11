let url = ["img/contBcg-0.jpeg", "img/contBcg-1.jpeg", "img/contBcg-2.jpeg", "img/contBcg-3.jpeg", "img/contBcg-4.jpeg"];
let div = document.getElementById("yuh");


for(let i = 0; i < url.length; i++){
    function rightClick(){
      console.log("Right Clicked");
      div.style.backgroundImage = `url(${url[i+=1]})`;
}

    function leftClick(){
      console.log("Left Clicked");
      div.style.backgroundImage = `url(${url[i--]})`;
}
}