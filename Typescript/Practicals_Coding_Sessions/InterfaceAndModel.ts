interface Card {
    no:number;
    expiry:Date;
    bank?:string;
    cvv:string;
    readonly type:string;
    getCardInfo():void;
    

}
interface Discount {
    discountPercentage:number;
}
interface DynamicKey {
    [key:string]:string;
}

interface CrditCard extends Card{
   
    creditlimit:string
}
interface DebitCard extends Card{
   
    sufficient:string
}
interface GiftCard extends Card{

    limitAmount:string
}

interface Dictionary {
  [key: string]:number;
}

const phoneDictionary:Dictionary = {name:100,age:10,price:1000}

const creditCard:CrditCard = {no:10,cvv:"134",type:"General",expiry:new Date(),creditlimit:"10000",getCardInfo:()=>{console.log("It's Credit Card")}} 
const debitCard:DebitCard = {no:10,bank:"PNB",cvv:"134",type:"General",expiry:new Date(),sufficient:"10000",getCardInfo:()=>{console.log("It's Debit Card")}} 
//debitCard.type="asdas"
console.log(creditCard);
console.log(debitCard);

creditCard.getCardInfo();
debitCard.getCardInfo();



class GoldCard implements Card{
    no: number;
    expiry: Date;
    bank?: string | undefined;
    cvv: string;
    type: string;

   
    constructor(no:number,expiry:Date,bank:string|undefined,cvv:string,type:string){
        this.bank=bank;
        this.no=no;
        this.expiry=expiry;
        this.cvv=cvv;
        this.type=type;
    }

    getCardInfo(): void {

        console.log("It's Gold Card",this);
    }

}

const goldCard:GoldCard = new GoldCard(10,new Date(),"General","testing","10000");
console.log(goldCard); 