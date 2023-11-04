{
  //2-4: Generic with Interface

  interface developer{
    name:string;
    computer:{
      brand:string;
      model:string;
      realeseYear:number;
    }
  }

  interface poorDeveloper:developer<>{
    name:string;
    computer:{
      brand:string;
      model:string;
      realeseYear:number;
    }
  }

  //
}