import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/JoaoBalacobaco.png"
          />
          <div className={styles.authorInfo}>
            <strong>João Paulo</strong>
            <span>gostoso</span>
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
    </article>
  );
}
