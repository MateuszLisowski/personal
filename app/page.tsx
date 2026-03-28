import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main
        className={
          styles.main +
          "flex flex-col items-center justify-center w-full flex-1 text-center"
        }
      >
        <section className={styles.content + " mt-25 flex"}>
          <Image
            src="/moje-zdjecie.jpg"
            alt="moje zdjecie"
            width={600}
            height={600}
            className={styles.image}
          />
          <div className={styles.textContent}>
            <h1 className={styles.heading}>
              Psychoterapeuta w szkoleniu Gestalt · Student psychologii ·
              Frontend Developer · Wolontariusz
            </h1>
            <h2 className={styles.text}>Cześć, jestem Mateusz 🦊</h2>
            <h2 className={styles.text}>
              Jestem psychoterapeutą w trakcie szkolenia Gestalt, studentem
              psychologii i frontend developerem. Prowadziłem staże dla
              praktykantów i zespoły programistyczne, działam jako wolontariusz
              telefonu zaufania i angażuję się w projekty nonprofit. Łączę
              psychologię, technologię i kreatywność, aby wspierać rozwój
              osobisty, rozwiązywanie problemów i odkrywanie potencjału moich
              klientów. Najważniejsza jest dla mnie autentyczna relacja, w
              której możesz poczuć się zauważony i przyjęty takim, jakim jesteś.
            </h2>
            <h2 className={styles.text}>
              Równocześnie rozwijam swoją kreatywną stronę. Tworzę muzykę,
              improwizuję, śpiewam i zajmuję się produkcją, prowadząc{" "}
              <a
                href="https://www.youtube.com/@EndlessAmbient4Life"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.youtubeLink}
              >
                kanał na YouTube
              </a>{" "}
              z muzyką ambient. Ta praktyka pozwala mi lepiej dostrzegać niuanse
              w emocjach i wspierać innych w rozwijaniu własnej ekspresji.
            </h2>
            <h2 className={styles.text}>
              We współpracy skupiam się na rozwiązywaniu problemów i szukaniu
              konkretnych rozwiązań. Ważna jest dla mnie uczciwość i wnoszenie
              realnej wartości, czyli bycie szczerym w tym, co widzę i czuję w
              naszej pracy, oraz skupienie na tym, co faktycznie pomaga Ci
              lepiej rozumieć siebie i radzić sobie z tym, co dla Ciebie trudne.
              To także transparentność w procesie i w moich kompetencjach oraz
              brak trzymania na siłę, jeśli czuję, że to nie jest dla Ciebie
              pomocne lub nie jestem w stanie Ci pomóc. Najważniejsze jest dla
              mnie Twoje dobro.
            </h2>
            <a href-="/about" className={styles.button}>
              Poznaj moją historię
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
