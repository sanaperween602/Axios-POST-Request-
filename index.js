// async function  main(){
//   const response=await fetch("https://sum-server.100xdevs.com/todos");
//   const json=await response.json();
//   console.log(json.todos.length);

const axios =require ("axios");
async function main(){
    const response=await axios(
        {
            url:"https://httpdump.app/dumps/391df09d-3e76-458c-8553-d1bcb0b9732c",
            method:"POST",
            headers:{
                Authorization:"Bearer 333"
            },
            data:{
                username:"sana "
            }
        },
        
    );
    console.log(response.data);
}
main();