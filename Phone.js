const LoadData =async (phonesBrand) =>{
    const response= await fetch(`https://openapi.programming-hero.com/api/phones?search=${phonesBrand}`);
    const data=await response.json();
    const phone=data.data;
    disPlayPhones(phone);
}
const disPlayPhones= phone =>{
    const CardContainer=document.getElementById("Card_container");
    // clear the old search 
    CardContainer.innerText="";
    // show all button hide 
    const Show=document.getElementById("displayContainer");
    if(phone.length<15){
      Show.classList.add("hidden");
    }
    else{
      Show.classList.remove("hidden");
    }
    // disply only 15 from all reseult 
    phone=phone.slice(0,12);
     phone.forEach(Phone => {
         const div=document.createElement("div");
        div.classList=`card w-96 bg-gray-100 shadow-xl p-8 border border-gray-300`;
         div.innerHTML=`<figure><img src="${Phone.image}" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title">|${Phone.phone_name}</h2>
           <p>There are many variations of passages of available, but the majority have suffered</p>
           <div class="card-actions justify-center">
             <button onclick="ShowModal('${Phone.slug}')" class="btn btn-primary">Show Details</button>
           </div>
         </div>`;
         CardContainer.appendChild(div);
     });
    loadingSpinner(false);
     
}

// Search Button
const SearchText=()=>{
    const CatchId=document.getElementById("Intput_text");
    const CatchIdValue=CatchId.value;
    CatchId.value="";
    LoadData(CatchIdValue);
    loadingSpinner(true);
    
}

// LoadingSpinner 
const loadingSpinner=(isLoading)=>{
  const Loading=document.getElementById("lodingSpinner");
  if(isLoading){
    Loading.classList.remove("hidden");
  }
  else{
    Loading.classList.add("hidden");
  }
}

const ShowModal=async(id)=>{
 console.log(id);
//  load singlephone data 
  const response=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data=await response.json();
  const phone=data.data;
  console.log(phone);
  showDeails(phone);
}

// show deails 
function showDeails(PhoneD){
  const detaisId=document.getElementById("MakeOun");
  detaisId.innerHTML=`
  <img class="text-center" src="${PhoneD.image}"/>
  <h2 class="text-3xl font-semibold my-4">${PhoneD.name}</h2>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
  <p>Storage: <span>${PhoneD.mainFeatures.storage}</span></p>
  <p><span>Display Size :</span>${PhoneD.mainFeatures.displaySize}</p>
  <p><span>Cheapset :</span>${PhoneD.mainFeatures.chipSet}</p>
  <p><span>memory :</span>${PhoneD.mainFeatures.memory}</p>
  <p><span>Slag :</span>${PhoneD.slug}</p>
  <p><span>Brand :</span>${PhoneD.brand}</p>
  <p><span>Release Date :</span>${PhoneD.releaseDate
  }</p>
  <p><span>Gps :</span>${PhoneD.others.GPS}</p>
  `;
  
  show_Details_modal.showModal();

}




// show details button 
function showDetails(){
  console.log("Show Details");
}