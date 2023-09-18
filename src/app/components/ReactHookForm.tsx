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

formstate:{isDirty,touchFields,isSubmitted,isSubmittedSuccessfull,isValid mode="onChange",isSubmitting} have to provide default value 

const {setValue} = useForm()
button onClick={()=>setValue("firstname","billy")}

const {reset} = useForm()
<button onClick={()=>reset()}> or reset({firstname:'bill'})
use reset inside useeffect when isSubmitSuccessfull


const {trigger} = useForm()
<button onClick={()=>trigger()}> or trigger("firstname")
use reset inside useeffect when isSubmitSuccessfull



*/
/*
install next-auth
app>api>auth>[...nextauth]>route.ts
src>utils>auth.js > authOptions
src>providers>AuthProvider.tsx 
cloud.google.com>console>create new project>apis and services>credentials>create credentials>Oauth client id>application,app name ,urls ,authorized redirect uris>api/auth/callback/google
add nextauth_url and nextauth_secret to .env file
sign in with google and sign out with google

generate mongo url

goto next0auth doc and install dependency

npx prisma init --datasource-provider mongodb

copy paste schema

add adapter

npx prisma generate, prisma migrate for relational db

inside utils connect.js prisma client

npx prisma studio 

write new model and again do prisma generate
*/
