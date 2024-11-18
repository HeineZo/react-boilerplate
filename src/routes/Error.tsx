import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1>Oh oh..</h1>
          <h6>Sorry but an unexpected error has occured 🧐</h6>
        </div>
        <p>{error.statusText || error.message}</p>
      </section>
    </main>
  );
}
