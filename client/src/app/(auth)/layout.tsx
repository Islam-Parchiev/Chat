
import styles from './styles.module.scss'
export default function AuthenticationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className={styles.wrapper}>
                    {children}</div>
        
            </body>
        </html>
    );
}
