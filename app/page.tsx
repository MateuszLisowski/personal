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
              Psychoterapia Gestalt · Psychologia
            </h1>
            <h2 className={styles.text}>Cześć, jestem Mateusz 🦊</h2>
            <h2 className={styles.text}>
              Jestem psychoterapeutą w trakcie szkolenia w nurcie Gestalt. Łączę
              psychologię, technologię i kreatywność, aby wspierać rozwój
              osobisty, pomagać w rozwiązywaniu trudności i odkrywaniu
              potencjału moich klientów. Pracuję również jako frontend
              developer, tworząc aplikacje biznesowe.
            </h2>
            <h2 className={styles.text}>
              Prowadzę również{" "}
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
              Najważniejsza jest dla mnie autentyczna relacja, w której możesz
              poczuć się zauważony i przyjęty takim, jakim jesteś. We współpracy
              skupiam się na szukaniu konkretnych rozwiązań. Ważna jest dla mnie
              uczciwość, szczerość oraz skupienie na tym, co faktycznie może
              pomóc Ci osiągnąć zmianę w Twoim życiu. Dbam o transparentność w
              procesie i w moich kompetencjach oraz o to, żeby nie kontynuować
              pracy na siłę, jeśli czuję, że jest dla Ciebie niekorzystna lub
              nie jestem w stanie Ci pomóc.
            </h2>
            <h2 className={styles.text}>
              Dlatego oferuję bezpłatną, 30-minutową konsultację, żebyś mógł
              sprawdzić, czy jestem odpowiedni dla Ciebie.
            </h2>
            <a
              href="https://calendly.com/mlmateuszlisowski/darmowa-30-minutowa-konsultacja"
              className={styles.button}
            >
              Darmowa konsultacja
            </a>
          </div>
        </section>
        <Newsletter />
      </main>
    </div>
  );
}
