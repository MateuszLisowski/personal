import Image from "next/image";
import Newsletter from "./newsletter";
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
              z muzyką ambient.
            </h2>
            <h2 className={styles.text}>
              We współpracy skupiam się na rozwiązywaniu problemów i szukaniu
              konkretnych rozwiązań. Ważna jest dla mnie uczciwość, bycie
              szczerym w tym, co widzę i czuję oraz skupienie na tym, co
              faktycznie może pomóc Ci osiągnąć zmianę w Twoim życiu. To także
              transparentność w procesie i w moich kompetencjach oraz brak
              trzymania na siłę, jeśli czuję, że to nie jest dla Ciebie pomocne
              lub nie jestem w stanie Ci pomóc. Najważniejsze jest dla mnie
              Twoje dobro. Dlatego oferuję bezpłatną, 30-minutową konsultację,
              żebyś mógł sprawdzić, czy to dla Ciebie.
            </h2>
            <a href="/o-mnie" className={styles.button}>
              Poznaj moją historię
            </a>
          </div>
        </section>
        <Newsletter />
      </main>
    </div>
  );
}
