import {LuaFactory} from 'wasmoon';

(async () => {
    const factory = new LuaFactory();
    const lua = await factory.createEngine();

    try {
        lua.global.set('fetch', (url) => fetch(url));

        await lua.doString(`
  local resp = fetch('https://httpbin.org/anything'):await()
  local text = resp:text():await()
  print(text)
        `);
    } finally {
        lua.global.close();
    }
})();
