function Productdetail(id,title, price, thumbnail,condition,free_shipping,currency,sold_quantity)
{
    this.id=id;
    this.title=title;
    this.price={"currency":currency,"amount":price,"decimals":0};
    this.picture= thumbnail;
    this.conditions= condition;
    this.free_shipping= free_shipping;
    this.sold_quantity= sold_quantity;
}

module.exports =Productdetail;