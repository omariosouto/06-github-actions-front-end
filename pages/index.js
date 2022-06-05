import NextLink from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <NextLink href="/sobre">
        <a>Ir para a sobre</a>
      </NextLink>
    </div>
  );
}
