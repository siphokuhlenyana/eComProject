function CreateItem(id,name,category,image,description,price){
    this.id=id 
    this.name=name 
    this.category=category 
    this.image=image 
    this.description =description 
    this.price=price 
}

let item1 = new CreateItem(1 ,"Mocha","Dresses","https://siphokuhlenyana.github.io/eComPics/Mocha.png","This dresses can be easily worn to any event ,Da Gama Textiles Fabric ,3 Cats Original ShweShwe and a pleated bottomline.Cold water wash and do not bleach !.", 1400.00)

let item2=new CreateItem(2,"LillyFlow","Dresses","https://siphokuhlenyana.github.io/eComPics/LillyFlow.png","", 2000.00)

let item3=new CreateItem(3,"TableMat","Kitchenware","https://siphokuhlenyana.github.io/eComPics/TableMat.jpeg","", 450.00)

let item4=new  CreateItem(4,"Overflow","Dresses","https://siphokuhlenyana.github.io/eComPics/Overflow.JPG","", 3400.90)

let item5=new CreateItem(5,"RelyOn","T-shirts","https://siphokuhlenyana.github.io/eComPics/Tshirt.jpeg","", 250.49)

let cart=[item1,item2,item3,item4,item5]

localStorage.setItem('Cart',JSON.stringify(cart))
let div=document.querySelector("#prod")

let heading=document.querySelector('#heading')
heading.textContent= "Products"


cart.forEach(item =>{
    div.innerHTML += `
    <div class="card" id="card" style="width: 18rem;height: 18rem;">
    <img id="images" src='${item.image}'>
    <div class="card-body">
     
    </div>
  </div>

  <div id="buttons>
      
      </div>

  `
  })
//  <button id="view">View</button>
//       <button class="buy" value="${item.id}">Buy</button>


let input=document.querySelector('input')
let button=document.querySelector("#sort")
let btn=document.querySelector("#search")


function searchItems(){

}