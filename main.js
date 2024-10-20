document.addEventListener("DOMContentLoaded", ()=>{
    const eList = document.createElement("ul");
    document.querySelector("main").appendChild(eList);

    function getEmails(){
        for(let i=0;i<10;i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response)=>{
                    const email = response.data.response;
                    const listEl = document.createElement("li");
                    listEl.textContent = email;
                    eList.appendChild(listEl);
                })
                .catch((error)=>{console.log(error);})
                .then(()=>{})
        }
    }
    getEmails();
})


// "albumId": 1,
// "id": 1,
// "title": "accusamus beatae ad facilis cum similique qui sunt",
// "url": "https://via.placeholder.com/600/92c952",
// "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// },

function getUser(){
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then((response)=>{
        
    })
    .catch((error)=>{console.log(`error ${error}`);})
    .then(()=>{})
}