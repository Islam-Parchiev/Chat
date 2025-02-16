import React from 'react';
import styles from './styles.module.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactElement | string;
    type?: "button" | "submit" | "reset";
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
    return (
        <button className={styles.Index} {...props}>
            {children}
        </button>
    );
};
