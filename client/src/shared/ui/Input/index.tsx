import React from 'react';
import styles from './styles.module.scss';

interface Props extends React.HTMLProps<HTMLInputElement> {
    children?: React.ReactElement | string | null;
}
export const Input: React.FC<Props> = ({ children, ...props }) => {
    return (
        <label className={styles.Label}>
            {children && <h4>{children}</h4>}
            <h4>Test</h4>
            <input {...props} className={styles.Input} />
        </label>
    );
};
