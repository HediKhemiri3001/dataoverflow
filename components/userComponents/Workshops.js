export default function Workshops({ workshops }) {
  return (
    <section id="workshops">
      <div className={style["workshops_slider"]}>
        {workshops.map((element) => {
          <WorkshopCard workshop={element} key={element._id}></WorkshopCard>;
        })}
      </div>
    </section>
  );
}
