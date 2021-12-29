

  export const loginInputFormRules = (required : boolean , name : string)  =>{
    return ([
       {
         required: required,
         message: `Please input your ${name}!`,
       },
     ])
   }
