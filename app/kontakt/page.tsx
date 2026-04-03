import styles from "../page.module.css";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center font-sans px-6 py-20 mt-40">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md border border-gray-200 p-8 flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Kontakt
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Oferuję spotkania online. Jeśli chcesz się umówić, możesz skontaktować
          się ze mną telefonicznie (proszę o zostawienie wiadomości, oddzwonię),
          mailowo lub skorzystać z kalendarza. Pierwsza konsultacja (30 minut)
          jest bezpłatna.
        </p>

        <div className="flex flex-col gap-3 text-gray-800 text-lg">
          <span>📞 605 104 075</span>
          <span>✉️ mlmateuszlisowski@gmail.com</span>
          <span>📍 Białystok</span>
        </div>

        <div className="flex justify-center pt-4">
          <a
            href="https://calendar.app.google/339E18Tf4Ngw5DvK8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Umów spotkanie
          </a>
        </div>
      </div>
    </main>
  );
}
