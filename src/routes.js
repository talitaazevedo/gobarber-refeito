import {Router} from 'express';
const routes = new Router();
import User from './app/models/User';


routes.get('/', async (req,res)=>{
  const user = await User.create({
    name: 'Talita',
    email: 'talita.azevedo360@gmail.com',
    password_hash:'1234',


  });
  return res.json(user);

});

export default routes;

