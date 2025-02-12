let btn = document.getElementById("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click" , async ()=>{
  let link = await getImage();
   let img = document.getElementById("result");
  
   img.setAttribute("src" , link);
   console.log(link);
 
   
})


async function getImage(){
    try{
        let res = await axios.get(url);
        return  res.data.message;
    }catch(err){
        console.log("Error : " , err);
         return "No image Found"
    }
}