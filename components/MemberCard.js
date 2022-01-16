import styles from "./MemberCard.module.css";
import Image from "next/image";

export default function MemberCard(props) {
  return (
    <div className={styles.card}>
      <Image
        src={props.member.src}
        alt={props.member.alt}
        className={styles.avatar}
        width={150}
        height={150}
      />
      <h1 className={styles.name}>{props.member.name}</h1>
      <p className={styles.about}>{props.member.about}</p>
    </div>
  );
}
