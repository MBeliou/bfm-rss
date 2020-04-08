# bfm-rss
Easily parse the bfmtv rss feed

## Installation
```sh
npm install bfm-rss --save

yarn add bfm-rss
```


## Usage

##### Typescript
```ts
import { BFMParser, Topic } from "bfm-rss";

const parser = new bfm.BFMParser()

parser.parseTopic(Topic.Smartphone).then(data => console.log(data));
```



## Tests

```sh
npm run test

yarn test
```