import React from 'react';
import styles from './styles.module.scss';

interface Props extends React.HTMLProps<HTMLInputElement> {
    labelText?: string | null;
}
export const Input: React.FC<Props> = ({ labelText, ...props }) => {
    return (
        <label className={styles.Label}>
            {labelText && <h4>{labelText}</h4>}
            <input {...props} className={styles.Input} />
        </label>
    );
};
