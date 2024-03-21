const LoadData =async (phonesBrand) =>{
    const response= await fetch(`https://openapi.programming-hero.com/api/phones?search=${phonesBrand}`);
    const data=await response.json();
    const phone=data.data;
    disPlayPhones(phone);
}
const disPlayPhones= phone =>{
    const CardContainer=document.getElementById("Card_container");
    CardContainer.innerText="";
     phone.forEach(Phone => {
        
         const div=document.createElement("div");
        div.classList=`card w-96 bg-gray-100 shadow-xl p-8`;
         div.innerHTML=`<figure><img src="${Phone.image}" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title">|${Phone.phone_name}</h2>
           <p>There are many variations of passages of available, but the majority have suffered</p>
           <div class="card-actions justify-center">
             <button class="btn btn-primary">Show Details</button>
           </div>
         </div>`;
         CardContainer.appendChild(div);
     });
}

const SearchText=()=>{
    const CatchId=document.getElementById("Intput_text");
    const CatchIdValue=CatchId.value;
    CatchId.value="";
    LoadData(CatchIdValue);
    
}
