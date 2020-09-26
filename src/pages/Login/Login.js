import React, { useState } from 'react';
import './Login.css';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

const Login = () => {

     const [ user, setUser ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ passwordError, setPasswordError ] = useState(false);
     const [ isLogin, setIsLogin ] = useState(false);
     const [hasError, setHasError] = useState(false);

       function handleChange(name, value) {
         if(name === 'usuario') {
           setUser(value);
           setHasError(false);
         } else {
             if(value.length < 5){
               setPasswordError(true);
               setHasError(false);
             }else{
              setPasswordError(false);
              setPassword(value)
              setHasError(false);
             }
              
         }
       };
         
         function ifMatch(param){
          if(param.user.length > 0 && param.password.length > 0){
           if(param.user === 'Juan Pablo' && param.password === '200308'){
               const { user, password} = param;
               let ac = { user, password };
               let account = JSON.stringify(ac);
               localStorage.setItem('accont', account);
               setIsLogin(true);
           } else{
             setIsLogin(false);
             setHasError(true);
           }
          } else {
            setIsLogin(false);
            setHasError(true);
          }
         }

         function handleSubmit() {
           let account = {user, password}
           if(account) {
             ifMatch(account)
           }
         }
       
    return (
        <div className='login-container text-primary' >
        { isLogin ?
          <div className='home-container'>
         <h1>Bienvenido {user}!</h1>
         <label> Usuario y contraseña validos </label>
         </div>
           :
          <div className='login-conten'>
          <Title text='Iniciar sesión' />
          <br/>
          <br/>
          { hasError &&
          <label className='label-alert'>Su contraseña o usuario estan mal, o no existen.</label>
          }
          <Label text='Usuario'/>
           <Input 
           attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su usuario'
           }}
           handleChange={handleChange}
           />
          <Label text='Contraseña'/>
          <Input 
           attribute={{
            id: 'contraseña',
            name: 'contraseña',
            type: 'password',
            placeholder: 'Ingrese su contraseña'
           }}
           handleChange={handleChange}
           param={passwordError}
           />
           { passwordError &&
           <label className='label-error'>
             Contraseña invalida o incorrecta
           </label>
           }
           <div className= 'submit-button-container'>
           <button onClick={handleSubmit} className='submit-button'>
             Iniciar sesión 
           </button>
           </div>
        </div>
        }
        </div>
    )
};

export default Login;