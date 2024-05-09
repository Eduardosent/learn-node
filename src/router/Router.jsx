import { BrowserRouter ,Routes, Route, Navigate} from 'react-router-dom'
import { Home, Websockets, FirstStep, Env, Db, Model, Controller, View, Structure, Final } from '../pages'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='/' Component={Home} />
            <Route path='/first-steps' Component={FirstStep} />
            <Route path='/structure' Component={Structure}/>
            <Route path='/env' Component={Env}/>
            <Route path='/db' Component={Db}/>
            <Route path='/model' Component={Model}/>
            <Route path='/controller' Component={Controller}/>
            <Route path='/view' Component={View}/>
            <Route path='/final' Component={Final}/>
            <Route path='/websockets' Component={Websockets}/>
        </Routes>
        </BrowserRouter>
    )
}