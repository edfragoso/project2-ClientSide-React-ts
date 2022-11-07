import FormCreatePerfil from "components/FormCreatePerfil";
import NavCrud from "components/NavCrud";

export default function CreatePerfil() {
  return (
    <>
      <header>
        <NavCrud />
      </header>
      <main>
        <FormCreatePerfil />
      </main>
    </>
  );
}
