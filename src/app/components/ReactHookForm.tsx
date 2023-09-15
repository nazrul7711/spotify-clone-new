import React from "react";

const ReactHookForm = () => {
  return <div>ReactHookForm</div>;
};

export default ReactHookForm;

/*
import {useForm} from 'react-hook-form'

import {register,handleSubmit,formState:{errors}} = useForm<someFormProps>(defaultValues:{firstname:"seekha",lastname:'sharma'})

{...register("firstname",{required:"this is needed"})}

{...register("firstname",{minLength:{
  value:4,
  message:"minimum length is four"
}})}

errors.firstname.message 

const {watch} = useForm()
let firstname = watch("firstname")

{...register("firstname",{validate:(value)=>value==="bill"})}

{...register("age",{valueAsNumber:true})}

const [firstname,lastname] = watch(['firstname','lastname'])

useEffect(()=>{const subscribe=watch((data)=>console.log(data)) return ()=>subscribe.unsubscribe()},[watch])

let firstname = watch('firstname')
<p>firstname!=='bill' ? 'this is fake':"ok"</p>
*/
