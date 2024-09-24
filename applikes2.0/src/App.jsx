
import styles from "./app.module.css"
import './global.css';
import { Sidebar } from "./componets/Sidebar";
import { Header } from "./componets/Header";
import { Post } from "./componets/Post";

export function App() {
  return (
  <div>
    <Header></Header>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post></Post>
        <Post></Post>
      </main>
    </div>
  </div>
  )
}