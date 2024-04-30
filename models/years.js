const years = [];

module.exports= class Year{

    constructor(year_name){
        this.name = name;
    }
    save(){
        years.push(this);
    }
    static getAll(){
        return years;
    }
}
