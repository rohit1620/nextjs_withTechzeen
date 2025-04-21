import Image from "next/image";
import styles from "./page.module.css";
import EventFunctionEvents from "@/components/EventFunctionEvents";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Rohit Kumar malav</h1>
        {/* <EventFunctionEvents /> */}
      </main>
      
    </div>
  );
}
