function isItGood(order){
 return order.items
.reduce((prev, now)=>  prev + (now.quantity * now.price), 0)
}
module.exports = isItGood;