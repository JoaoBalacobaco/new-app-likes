import styles from './Comment.module.css';
import { ThumbsUp, Trash,} from '@phosphor-icons/react';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/JoaoBalacobaco.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jodo Paulo Gosotoso</strong>
                            <time title="10 de setembro as 9:44h" dateTime="2024/09/10 09:44:00">Há 1h Atlas</time>
                        </div>
                        <button title='Excluir Comentario'>
                            <Trash></Trash>
                        </button> 
                    </header>
                <p>parabemns !!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}></ThumbsUp>
                        Curti <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}