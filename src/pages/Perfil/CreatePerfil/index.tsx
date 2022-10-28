import FormCreatePerfil from "components/FormCreatePerfil";
import NavCrudPerfil from "components/NavCrudPerfil";

export default function CreatePerfil() {
  return (
    <>
      <header>
        <NavCrudPerfil />
      </header>
      <main>
        <FormCreatePerfil />
      </main>
    </>
  );
}
