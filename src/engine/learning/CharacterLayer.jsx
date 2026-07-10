export default function CharacterLayer({ guru, pelajar, speaker }) {
  return (
    <>
      {guru && (
        <img
          src={guru}
          className={`learn-character learn-guru ${
            speaker === "guru" ? "active" : ""
          }`}
          alt="Guru"
        />
      )}

      {pelajar && (
        <img
          src={pelajar}
          className={`learn-character learn-pelajar ${
            speaker === "player" ? "active" : ""
          }`}
          alt="Pelajar"
        />
      )}
    </>
  );
}