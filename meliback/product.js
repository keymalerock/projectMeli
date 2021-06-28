function Product(id,title, price, thumbnail,condition,free_shipping,currency)
{
    this.id=id;
    this.title=title;
    this.price={"currency":currency,"amount":price,"decimals":0};
    this.picture= thumbnail;
    this.free_shipping= free_shipping;
    this.conditions= condition;
}
module.exports =Product;