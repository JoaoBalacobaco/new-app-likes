import styles from "./app.module.css";
import "./global.css";
import { Sidebar } from "./componets/Sidebar";
import { Header } from "./componets/Header";
import { Post } from "./componets/Post";

//author: {avatarUrl: "", nome:"", cargo:""}
//dataPublicacao: Date
//content: string

const posts = [
  {
    Id: 1,
    author: {
      avatarUrl: "https://github.com/JoaoBalacobaco.png",
      nome: "Rojerio Furlan",
      cargo: "Professor da Etec",
    },
    content: [
      { type: "paragraph", content: "Fala Galera😍!!!" },
      { type: "paragraph", content: "Amanhã faremos uma viagem para Bienal" },
      { type: "link", content: "oul.com.br" },
    ],
    dataPublicacao: new Date("2024/10/01 09:44:00"),
  },
  {
    Id: 2,
    author: {
      avatarUrl: "https://github.com/henryqui.png",
      nome: "Henryqui gabriel",
      cargo: "aluno da Etec",
    },
    content: [
      { type: "paragraph", content: "Fala Galera💋!!!" },
      { type: "paragraph", content: "Amanhã faremos uma viagem para Bienal" },
      { type: "link", content: "g1.com.br" },
    ],
    dataPublicacao: new Date("2024/11/05 10:26:00"),
  },
];

export function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                dataPublicacao={post.dataPublicacao}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
