import { Comment } from "./Comment";
import styles from "./Post.module.css";



export function Post(author) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.nome}</strong>
            <span>{author.cargo}</span>
          </div>
        </div>
        <time title="10 de setembro as 9:44h" dateTime="2024/09/10 09:44:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala Gelare !!!</p>
        <p>Amanhã faremos uma viagem para Bienal</p>
        <p>
            <a href="#">#bienaldolivrosp</a>{' '}
            <a href="#">#eteccidadedoliro</a>{' '}
            <a href="#">#vemoaraetec</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback !</strong>
        <textarea placeholder='deixe um comentario'></textarea>
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/> 
      </div>
    </article>
  );
}
