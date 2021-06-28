function PackSearch(arrayItems,categoria,name, lastname)
{
    this.author={"name":name,"lastname":lastname}
    this.categories=categoria;
    this.items=arrayItems;

}
module.exports =PackSearch;