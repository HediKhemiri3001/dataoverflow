import Head from "next/head";
import MemberCard from "../components/userComponents/MemberCard";
import style from "/styles/aboutus.module.css";
import Layout from "../components/userComponents/Layout";
const MEMBERS = [
  {
    name: "Fatma Chaouech",
    alt: "Fatma Chaouech's photo",
    about: "Chairwoman",
    src: "/members/fatma.jpg",
  },
  {
    name: "Oumayma Rjab",
    alt: "Oumayma's photo",
    about: "Vice-Chairwoman",
    src: "/members/oumayma.jpg",
  },
  {
    name: "Karim Boubaker",
    alt: "Karim's photo",
    about: "Media Manager",
    src: "/members/karim.jpg",
  },
  {
    name: "Mahdi Ghorbel",
    alt: "Mahdi's photo",
    about: "Sponsoring Manager",
    src: "/members/mahdi.jpg",
  },
  {
    name: "Med Hedi Khemiri",
    alt: "Hedi's photo",
    about: "Webmaster",
    src: "/members/hedi.jpg",
  },
  {
    name: "Eya Soussi",
    alt: "Eya's photo",
    about: "Human Ressources Manager",
    src: "/members/eya.jpg",
  },
  {
    name: "Hela Khadhar",
    alt: "Hela's photo",
    about: "Logistic Manager",
    src: "/members/hela.jpg",
  },
  {
    name: "Dali Selmi",
    alt: "Dali's photo",
    about: "General Secretary",
    src: "/members/dali.jpg",
  },
  {
    name: "Ramy Kammoun",
    alt: "Ramy's photo",
    about: "Communications Manager",
    src: "/members/ramy.jpg",
  },
  {
    name: "Wassim Henia",
    alt: "Wassim's photo",
    about: "Training Manager",
    src: "/members/wassim.jpg",
  },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About us - Data Overflow</title>
      </Head>
      <Layout>
        <div className={style["container"]}></div>
      </Layout>
    </>
  );
}
