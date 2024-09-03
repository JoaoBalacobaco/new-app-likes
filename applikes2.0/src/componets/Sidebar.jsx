import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?w=500&auto=format&fit=crop&q=20&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdmFsbyUyMGVtb3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <div className={styles.profile}>
            <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/149329719?s=400&u=f70d81c0f94c72994af66b65b8bd9f1edba519ee&v=4" alt="" />
            <strong>João Paulo</strong>
            <span>Gostoso</span>
        </div>
        <footer>
            
            <a href="#"><PencilLine size={20}/> Editar seu Perfil</a>
        </footer>
        </aside>
    );
}