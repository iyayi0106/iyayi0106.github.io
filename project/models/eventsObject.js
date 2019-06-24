
class eventsObject {
    constructor() {
        
        this.title = "";
        this.isFree = "";
        this.description = "";
        this.contactName = "";
        this.contactNumber = "";
        this.contactEmail = "";
        this.contactEmail = "";
        this.datestart = "";
        this.dateend = "";
        this.timestart = "";
        this.timeend = "";
        
    }

    makeContent(dataItem) {
       
        this.title = dataItem.title;
        console.log(this.title);
        this.isFree = dataItem.isfree;
        console.log(this.isFree);
        this.description = dataItem.description;
        console.log(this.description);
        this.contactName = dataItem.contactname;
        console.log(this.contactName);
        this.contactNumber = dataItem.contacttelephonenumber;
        console.log(this.contactNumber);
        this.contactEmail = dataItem.contactemailaddress;
        console.log(this.contactEmail);
        this.datestart = dataItem.datestart;
        this.dateend = dataItem.dateend;
        this.timestart = dataItem.times[0].timestart;
        this.timeend = dataItem.times[0].timeend;
        
    }

}