

   const viewBtn = document.querySelector('.share-more');
   const  popup = document.querySelector('.popup');
  const  close = popup.querySelector('.close');
  
  
  
   viewBtn.onclick =()=>{
       popup.classList.toggle("show");
   }
  
   close.onclick = ()=>{
       viewBtn.click();
   }
  
  


//Get the button
let mybutton = document.getElementById("btn-back-to-top");


mybutton.onclick= ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

































// const videoButton = document.getElementsByClassName('youtube-link');

// videoButton.addEventListener("click", myFunction);

// function myFunction() {
//     let videodiv = document.createElement('video');
//     videodiv.src = 'https://youtu.be/FLd00Bx4tOk';
//     video.autoplay = true;
//     document.getElementsByClassName('video-div').appendChild(videodiv);

// }




// let shareButton = document.getElementById('share-button');
 
// shareButton.onclick = ()=>{

   

//     // var element = document.getElementById("popup-div");
//     // element.classList.toggle("popup-div");
     

//     alert( `share this link with your friends` );
   
  
// }
















     // document.getElementById('share-div').appendChild();
 // alert('share this recipe with your friends');

    // let textbox = document.createElement('div');

 
    // textbox.id = 'info'; 
    // textbox.src = " "
    
    // textbox.innerHTML = 'share this link';

//     shareButton.id = "newsharediv";
// shareButton.innerHTML = "share this recipe link ";

// document.getElementsByClassName('share-div').appendChild(shareButton);






