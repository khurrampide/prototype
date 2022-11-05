class Account{
    fname="";
    lname="";
    address="";
}

Account.prototype.add = function(a,b)
{
    return a+b;
}

let m = new Account();
console.log(m.add(2,3));