const LoadData =async () =>{
    const response= await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const data=await response.json();
    const phone=data.data;
    disPlayPhones(phone);
}
const disPlayPhones= phone =>{
    const CardContainer=document.getElementById("Card_container");
     phone.forEach(Phone => {
        console.log(phone)
         const div=document.createElement("div");
        div.classList=`card w-96 bg-gray-100 shadow-xl`;
         div.innerHTML=`<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title">Shoes!</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions justify-end">
             <button class="btn btn-primary">Buy Now</button>
           </div>
         </div>`;
         CardContainer.appendChild(div);
     });
}
LoadData();