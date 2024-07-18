export const enum KV_NAMESPACE {
  BILI_BANNER_STORE = 1,
}

export const NAMEPACE_OBJ_MAP = {
  [KV_NAMESPACE.BILI_BANNER_STORE]: {
    name: 'BILI_BANNER_STORE',
    url: 'https://kv-accessor.zhonghuaremistinker.workers.dev/',
  },
};

export async function access(name: KV_NAMESPACE) {
  const obj = NAMEPACE_OBJ_MAP[name];
  const url = obj.url + `?name=${obj.name}&method=list`;
  const data = await fetch(url).then((_) =>
    _.json<{ keys: { name: string; value: string }[] }>()
  );
  if (!data) throw 'access failed!';
  return {
    list() {
      return data.keys;
    },
    async get(key: string) {
      const url = obj.url + `?name=${obj.name}&method=get&key=${key}`;
      return fetch(url).then((_) => _.json());
    },
    async put(key: string, value: string) {
      const url = obj.url + `?name=${obj.name}&method=put&key=${key}&value=${value}`;
      return fetch(url).then((_) => _.json());
    },
    async delete(key: string) {
      const url = obj.url + `?name=${obj.name}&method=delete&key=${key}`;
      return fetch(url).then((_) => _.json());
    },
  };
}
