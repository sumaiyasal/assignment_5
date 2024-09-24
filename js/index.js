function getid(id){
    return document.getElementById(id);
}
function getidtext(id){
    return document.getElementById(id).innerText;
}
function getvalue(id){
    return document.getElementById(id).value;
}
function clearinput(id){
    return document.getElementById(id).value='';
}
function addmoney(id,totalamount,damount){

    document.getElementById(id).innerText=parseInt(totalamount)+parseInt(damount);
    
}
function decresemoney(id,totaltk,damount){
    document.getElementById(id).innerText=parseInt(totaltk) - parseInt(damount);
}

function addDiv(amount,location,time,transiction){
    const newElement=document.createElement('div');
      newElement.innerHTML=`
      <div class="border-2 rounded-lg p-6 space-y-6 mb-4">
       <p>
       ${amount} Taka is Donated For ${location}
       </p>
       <p class="text-base font-light text-[#111111B3]">Date : ${time}</p>
      </div>
    `
      transiction.appendChild(newElement);  
}
window.addEventListener('scroll', function() {
    const header = getid('header');
    const headerDiv=getid('headerDiv');
    if (window.scrollY) {
        header.classList.add('backdrop-blur-lg');
        headerDiv.classList.add('bg-opacity-20');   
    } else {
        header.classList.remove('backdrop-blur-lg');
        headerDiv.classList.remove('bg-opacity-20');
    }
    
});
//noakhali flood donation button 
document.getElementById('noakhaliBtn').addEventListener('click',function(){
      const damount=getvalue('noadonate');
      const totaltk=getidtext('totaltk');
      const location1=getidtext('location1');
      const transiction=getid('transiction');
      const totalamount=getidtext('namount');
      if(isNaN(damount) || damount<0||damount>totaltk ||damount.length<=0){
        alert('invalid donate amount');
        clearinput("noadonate");
        return;
      }       
      addmoney('namount',totalamount,damount);
      clearinput("noadonate");
      decresemoney("totaltk",totaltk,damount);
      my_modal_5.showModal();
      const time = new Date();
      addDiv(damount,location1,time,transiction)    
});

// feni flood donation button 
document.getElementById('fenidonation').addEventListener('click',function(){
    const damount=getvalue('fdonate');
    const totaltk=getidtext('totaltk');
    const location2=getidtext('location2');
    const transiction=getid('transiction');
    const totalamount=getidtext('famount');
    if(isNaN(damount) || damount<0||damount>totaltk ||damount.length<=0){
      alert('invalid donate amount');
      clearinput("fdonate");
      return;
    }       
    addmoney('famount',totalamount,damount);
    clearinput("fdonate");
    decresemoney("totaltk",totaltk,damount);
    my_modal_5.showModal();
    const time = new Date();
    addDiv(damount,location2,time,transiction)    
   
});

// quota movement donation button
document.getElementById('quotabtn').addEventListener('click',function(){
    const damount=getvalue('quotadonate');
    const totaltk=getidtext('totaltk');
    const location3=getidtext('location3');
    const transiction=getid('transiction');
    const totalamount=getidtext('quotaamount');
    if(isNaN(damount) || damount<0||damount>totaltk ||damount.length<=0){
      alert('invalid donate amount');
      clearinput("quotadonate");
      return;
    }       
    addmoney('quotaamount',totalamount,damount);
    clearinput("quotadonate");
    decresemoney("totaltk",totaltk,damount);
    my_modal_5.showModal();
    const time = new Date();
    addDiv(damount,location3,time,transiction)    
   
});

document.getElementById('donation').addEventListener('click',function(){
    active('donate','donation','bg-primary');

})
document.getElementById('history').addEventListener('click',function(event){
    active('transiction','history','bg-white');

})
function active(id1,id2,bg){
    const donation=getid('donation');
    const history=getid('history');
    const donate=getid('donate');
    const transiction=getid('transiction');
    donation.classList.remove('bg-primary',bg);
    history.classList.remove('bg-primary',bg);
    donate.classList.add('hidden');
    transiction.classList.add('hidden');
    id1=getid(id1);
    id2=getid(id2);

    id2.classList.add("bg-primary");
    id1.classList.remove("hidden");

}