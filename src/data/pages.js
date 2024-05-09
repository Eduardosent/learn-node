import { Controller, Db, Env, Final, FirstStep, Model, Structure, View, Websockets } from "../pages";

export const pages = [
    {name:'Primeros pasos con Node y Express', route:'/first-steps', component:FirstStep, level:1},
    {name:'Estructura del Proyecto API REST MVC', route:'/structure', component:Structure, level:1},
    {name:'Variables de entorno', route:'/env', component:Env, level:1},
    {name:'Conección a la base de datos', route:'/db', component:Db, level:1},
    {name:'Modelo', route:'/model', component:Model, level:1},
    {name:'Controlador', route:'/controller', component:Controller, level:1},
    {name:'Vista o Ruta', route:'/view', component:View, level:1},
    {name:'Vista final del proyecto', route:'/final', component:Final, level:1},
    {name:'Websockets', route:'/websockets', component:Websockets, level:2},
];