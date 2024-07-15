import { Meta, Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import '~/components/bili-banner';

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <Meta name="referrer" content="no-referrer" />
      <h1>Hello world!</h1>
      <Counter />
      <bili-banner />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
