import styles from "../page.module.css";

export default function Contact() {
  return (
    <main className="flex flex-col flex-1 items-start justify-center font-sans">
      <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
      <h2>
        Oferuje spotkania online. W celu umówienia spotkania proszę kontaktować
        się telefonicznie, e-mailowo lub poprzez calendly (pierwsza konsultacja
        30-minutowa jest bezpłatna)
      </h2>
      <h2>605 104 075</h2>
      <h2>mlmateuszlisowski@gmail.com</h2>
      <h2>Białystok</h2>
      <a
        href="https://calendly.com/mateusz-lisowski/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Umów spotkanie
      </a>
    </main>
  );
}
