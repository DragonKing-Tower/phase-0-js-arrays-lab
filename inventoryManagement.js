// Write your code here
const products = ["Laptop","Phone","Headphones","Monitor"]

//function to console log 1st item in products
function logFirstProduct(){
  console.log(products[0])
}

//Function to add new product
function addProduct(porductName){
  products.push(porductName)
}

//Function to change name of a product
function updateProductName(position,newName){
  products[position]=newName
}

//Function to remove final product
function removeLastProduct(){
  products.pop()
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
