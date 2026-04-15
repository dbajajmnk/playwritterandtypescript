var phoneDictionary = { name: 100, age: 10, price: 1000 };
var creditCard = { no: 10, cvv: "134", type: "General", expiry: new Date(), creditlimit: "10000", getCardInfo: function () { console.log("It's Credit Card"); } };
var debitCard = { no: 10, bank: "PNB", cvv: "134", type: "General", expiry: new Date(), sufficient: "10000", getCardInfo: function () { console.log("It's Debit Card"); } };
//debitCard.type="asdas"
console.log(creditCard);
console.log(debitCard);
creditCard.getCardInfo();
debitCard.getCardInfo();
var GoldCard = /** @class */ (function () {
    function GoldCard(no, expiry, bank, cvv, type) {
        this.bank = bank;
        this.no = no;
        this.expiry = expiry;
        this.cvv = cvv;
        this.type = type;
    }
    GoldCard.prototype.getCardInfo = function () {
        console.log("It's Gold Card", this);
    };
    return GoldCard;
}());
var goldCard = new GoldCard(10, new Date(), "General", "testing", "10000");
console.log(goldCard);
