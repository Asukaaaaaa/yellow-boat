import { Meta, Title } from "@solidjs/meta";
import { onMount } from "solid-js";
import Counter from "~/components/Counter";
import '~/components/bili-banner';
import { access, KV_NAMESPACE } from "~/workers/kv-accessor";

export default function Home() {
  onMount(async () => {
    const inst = await access(KV_NAMESPACE.BILI_BANNER_STORE);
    const keys = inst.list();
    const data = await inst.get(keys[0].name);
    console.log('dididi', keys, data);
  });
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
