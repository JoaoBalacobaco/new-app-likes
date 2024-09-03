import {Post} from "./Post"
import { Header } from "./componets/Header";
import styles from "./app.module.css"
import './global.css';
import { Sidebar } from "./componets/Sidebar";

export function App() {
  return (
  <div>
    <Header></Header>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      <Post
      author="Machado de assis"
      coment="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
  
   <Post
      author="Castro Alves"
      coment="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
  
    <Post
      author="Padre Antonio Vieira"
      coment="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
      </main>
    </div>
  </div>
  )
}