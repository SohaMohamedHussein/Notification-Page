const unRead=document.querySelectorAll(".unread");
const unread=document.getElementById("Num");
const markAll=document.getElementById("marked");

            /**count How unRead message */
unread.innerText=unRead.length;


                /**add Eventlister When click the unread message */
unRead.forEach((message) =>{
    message.addEventListener("click",()=>{
        message.classList.remove("unread");
        const newMessage=document.querySelectorAll(".unread");
        unread.innerText=newMessage.length;
    })
})

                /**add Eventlister When click the (Mark all as read) */
markAll.addEventListener("click", ()=>{
    unRead.forEach((message)=>{
        message.classList.remove("unread");
        const newMessage=document.querySelectorAll(".unread");
        unread.innerText=newMessage.length;
    })
})

