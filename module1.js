let emp = [];


exports.addEmp = (e) =>{

   obj = emp.find(x=>x.eid==e.eid);

   if(obj==undefined){
    emp.push(e);
    console.log(emp)
    return 'data added';
   }
   else{
    return 'duplicate data'

   }

}

exports.search = (e) =>{
   obj1 = emp.find(x=>x.eid==e.eid);
   if(obj1!=undefined){
       console.log(obj1);
    return "found";
   }
   else{
    console.log(obj1);
    return "not found";
   }
}