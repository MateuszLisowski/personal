import styles from "../page.module.css";

export default function Offer() {
  return (
    <main className="flex flex-col items-center justify-center font-sans p-10 mt-40">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Oferta
      </h1>

      <p className="text-lg mb-6 text-center text-gray-700">
        Zapraszam osoby, które:
      </p>

      <ul className="list-disc list-inside mb-10 text-gray-700 text-lg space-y-2">
        <li>chcą lepiej rozumieć i wyrażać swoje emocje</li>
        <li>doświadczają trudności w relacjach z innymi</li>
        <li>przeżywają kryzysy życiowe lub poszukują sensu</li>
        <li>
          chcą rozwijać samoświadomość i umiejętności radzenia sobie ze stresem
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Darmowa konsultacja indywidualna
          </h2>

          <p className="text-gray-700 mb-4">
            Spotkanie zapoznawcze, podczas którego możemy porozmawiać o Twojej
            sytuacji, potrzebach i oczekiwaniach. To okazja, aby sprawdzić, czy
            nasza współpraca będzie dla Ciebie pomocna i komfortowa. Konsultacja
            trwa 30 minut i jest bezpłatna.
          </p>

          <p className="text-gray-700">
            <strong>Czas trwania:</strong> 30 minut
          </p>

          <p className="text-gray-700">
            <strong>Miejsce:</strong> Online (google meet)
          </p>

          <div className="flex justify-center mt-auto">
            <a
              href="https://calendly.com/mlmateuszlisowski/darmowa-30-minutowa-konsultacja"
              className={styles.button}
            >
              Umów się
            </a>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Konsultacja indywidualna
          </h2>

          <p className="text-gray-700 mb-4">
            Spotkania nastawione na refleksję i lepsze poznanie siebie.
            Pozwalają zrozumieć swoje emocje i sytuację życiową oraz ustalić
            indywidualne cele rozwojowe.
          </p>

          <p className="text-gray-700">
            <strong>Czas trwania:</strong> 50 minut
          </p>

          <p className="text-gray-700">
            <strong>Miejsce:</strong> Online (google meet)
          </p>

          <div className="flex justify-center mt-auto">
            <a
              href="https://calendly.com/mlmateuszlisowski/darmowa-30-minutowa-konsultacja"
              className={styles.button}
            >
              Umów się
            </a>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Program autorski: Wyrażanie emocji przez muzykę
          </h2>

          <p className="text-gray-700 mb-6">
            Warsztaty lub cykle spotkań, podczas których uczestnicy eksplorują
            swoje emocje poprzez śpiew, improwizację i produkcję muzyki. Celem
            jest lepsze zrozumienie siebie, rozwijanie kreatywności oraz
            bezpieczne wyrażanie emocji w kreatywny sposób. Celem jest
            pogłębienie kontaktu z emocjami, a także rozwój relacji z samym sobą
            i innymi.
          </p>

          <p className="text-gray-700 mb-4">Oferta dla:</p>

          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li>Pojedynczej osoby</li>
            <li>Pary</li>
            <li>Przyjaciół</li>
            <li>Rodziny</li>
            <li>Grupy</li>
          </ul>

          <div className="flex justify-center mt-auto">
            <a href="/kontakt" className={styles.button}>
              Kontakt
            </a>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Warsztaty rozwojowe
          </h2>

          <p className="text-gray-700 mb-6">
            Interaktywne spotkania grupowe, w których uczestnicy ćwiczą
            uważność, komunikację i radzenie sobie z emocjami poprzez praktyczne
            ćwiczenia. Warsztaty są okazją do poznania nowych perspektyw i
            wzmocnienia kompetencji interpersonalnych.
          </p>

          <div className="flex justify-center mt-auto">
            <a href="/kontakt" className={styles.button}>
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
