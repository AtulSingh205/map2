// ------------------------extractlengthstringelemnet---------------------
let arr=["dog","elephent"]
let brr=arr.map((item,value)=>{
    return item.length
})
console.log(brr)

// -------------------------extractfirstleter------------------------
let string=["Atul","Singh"]
let extract=string.map((item,value)=>{
    return item[0]
})
console.log(extract)

// -------------------------extractfulname------------------------------
let name=[{fname: "Atul",lname:"Singh"}]
let  merge=name.map((item,value)=>{
    return item.fname+""+item.lname
})
console.log(merge)

// ------------------------name + length---------------------
let animal=["Lion","cat"]
let count=animal.map((item,value)=>{
    return{
        name:item,
        length:item.length
    }
})
console.log(count)

// ---------------------addnewkeyvalue-------------
let obj=[
{name:"Rahul",age :15},
{name:"Karan",age :21},
{name:"Amit",age :20},
]
let update=obj.map((item,value)=>{
    return{
       adult:item.age>18?true:false
    }
})
console.log(update)