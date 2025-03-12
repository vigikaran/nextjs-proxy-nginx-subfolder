import styles from "./page.module.css";
import { hello } from '../actions';

export default async function Home() {
  const message = await hello();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{message}</h1>
      </main>
    </div>
  );
}
