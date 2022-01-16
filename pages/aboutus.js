import Head from "next/head";
import MemberCard from "../components/MemberCard";
import style from "./aboutus.module.css";
import Layout from "../components/Layout";
const MEMBERS = [
  {
    name: "Fatma Chaouech",
    alt: "Fatma Chaouech's photo",
    about: "Chairwoman",
    src: "/../public/members/fatma.jpg",
  },
  {
    name: "Oumayma Rjab",
    alt: "Oumayma's photo",
    about: "Vice-Chairwoman",
    src: "/../public/members/oumayma.jpg",
  },
  {
    name: "Karim Boubaker",
    alt: "Karim's photo",
    about: "Media Manager",
    src: "/../public/members/karim.jpg",
  },
  {
    name: "Mahdi Ghorbel",
    alt: "Mahdi's photo",
    about: "Sponsoring Manager",
    src: "/../public/members/mahdi.jpg",
  },
  {
    name: "Med Hedi Khemiri",
    alt: "Hedi's photo",
    about: "Webmaster",
    src: "/../public/members/hedi.jpg",
  },
  {
    name: "Eya Soussi",
    alt: "Eya's photo",
    about: "Human Ressources Manager",
    src: "/../public/members/eya.jpg",
  },
  {
    name: "Hela Khadhar",
    alt: "Hela's photo",
    about: "Logistic Manager",
    src: "/../public/members/hela.jpg",
  },
  {
    name: "Dali Selmi",
    alt: "Dali's photo",
    about: "General Secretary",
    src: "/../public/members/dali.jpg",
  },
  {
    name: "Ramy Kammoun",
    alt: "Ramy's photo",
    about: "Communications Manager",
    src: "/../public/members/ramy.jpg",
  },
  {
    name: "Wassim Henia",
    alt: "Wassim's photo",
    about: "Training Manager",
    src: "/../public/members/wassim.jpg",
  },
];

export default function AboutUs() {
  return (
    <Layout>
      <div className={style["container"]}>
        <Head>
          <title>About Us - Data Overflow</title>
        </Head>
        <main>
          <p>About our club</p>
          <div className={style["members_container"]}>
            {MEMBERS.map((member) => {
              return (
                <MemberCard member={member} key={member.name}></MemberCard>
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
}
