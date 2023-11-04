{
  // 
  // type assertion
  let anything: any;
  anything = 222;
  (anything as number).



  const kgToGm = (value: string | number) => {
    if (typeof value === 'string') {
      const conNum = parseFloat(value) * 1000;
      return conNum;
    }
  }
  // 


  type customError = {
    message:string
  }


  try{

  }catch(error){
    console.log(error as customError).message)
  }
  

  
}