import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/8572296?s=460&u=3d66041b9972a3e2fe50cc444ba4bfbdd7aea9f2&v=4"
          alt="santanarscs"
        />
        <div>
          <strong>Raphael Santana</strong>
          <span>Quimica </span>
        </div>
      </header>
      <p>
        Qui aliquip eiusmod mollit aliquip. <br /> Excepteur voluptate esse
        eiusmod ex incididunt ad tempor laboris magna ullamco. Quis aliqua ad
        sint anim adipisicing excepteur ea sunt quis adipisicing dolor duis
        ipsum mollit.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsappp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
