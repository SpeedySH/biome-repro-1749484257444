// Файл с проблемами форматирования
export   const formatText =   (text:string,   options?:   {trim:boolean,uppercase:boolean})   =>   {
    let result   =   text;
    
    if(options?.trim){
        result=result.trim()
    }
    
    if(options?.uppercase)
    {
        result   =   result.toUpperCase();
    }
    
    return     result;
};

export const   calculateSum   =   (   numbers:   number[]   )   =>   {
    let   sum   =   0;
    for(let i=0;i<numbers.length;i++){
      sum+=numbers[i];
    }
    return   sum;
}

export function   processData(data:any,   callback:(result:any)=>void)   {
const   processed   =   {
    ...data,
    timestamp:   new   Date().toISOString(),
    processed:   true
};
    callback(processed);
}
