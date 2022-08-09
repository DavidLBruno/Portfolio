import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.css';

export default function(){
    return(
        <div className={styles.bodyNav}>
            <div className={styles.bodyButtons}>
                <Link to='/' className={styles.buttons} style={{textDecoration:"none",}}>Home</Link>
                <Link to='/about' className={styles.buttons} style={{textDecoration:"none"}}>Sobre mi</Link>
                <Link to='/projects' className={styles.buttons} style={{textDecoration:"none"}}>Proyectos</Link>
                <Link to='/contact' className={styles.buttons} style={{textDecoration:"none"}}>Contacto</Link>
            </div>
        </div>
    );
};