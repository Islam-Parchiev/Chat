import { Input } from "@/shared/ui/Input";
import styles from "./page.module.css";
import { Button } from "@/shared/ui/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button>Test</Button>
      <Input placeholder="Test" />
    </div>
  );
}
