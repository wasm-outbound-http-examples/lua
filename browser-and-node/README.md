# Use Wasmoon to send HTTP(s) requests from inside WASM

This example uses binary build of [Wasmoon](https://github.com/ceifa/wasmoon)

## Instructions for this devcontainer

### Preparation

1. Open this repo in devcontainer, e.g. using Github Codespaces.
   Type or copy/paste following commands to devcontainer's terminal.

2. `cd` into this example's folder:

```sh
cd browser-and-node
```

3. Install Wasmoon using `npm`:

```sh
npm install wasmoon
```

### Test with Node.js

```sh
node src/httpget.mjs
```

### Test with Deno

Optionally you can also test with Deno.

1. Install Deno:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. Perform the test:

```sh
~/.deno/bin/deno run --allow-read --allow-net src/httpget.mjs 
```

### Test with browser

1. Install `webpack`:

```sh
npm install webpack-cli
```

2. Run `webpack` to build a web bundle:

```sh
npx webpack
```

This creates a `dist` folder with 100k JS bundle `main.js` inside it.

3. Run simple HTTP server to temporarily publish project to Web:

```sh
python3 -m http.server
```

Codespace will show you "Open in Browser" button. Just click that button or 
obtain web address from "Forwarded Ports" tab.

6. As `index.html` loaded into browser, refer to browser developer console 
to see the results.

### Finish

Perform your own experiments if desired.
