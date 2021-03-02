const name = "Tom";
const userAge = 33;

const user = {
  name,
  age: userAge,
  location: "Nashville",
};

console.log(user);

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 3
};

// const label = product.label
// const stock = product.stock

// const { label: productLable, stock, rating = 5 } = product;
// console.log(productLable);
// console.log(stock);
// console.log(rating)

const transaction = (type,{label, stock}) => {
  console.log(type, label, stock)
}

transaction("order", product)