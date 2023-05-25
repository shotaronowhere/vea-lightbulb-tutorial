# Vea Lightbulb Tutorial

`lightbulb` is a simple demo of [Vea](https://github.com/kleros/veahttps://github.com/kleros/vea)'s cross-chain message passing system. Specifically passing messages between:

- Arbitrum Goerli -> Goerli
- Arbitrum Goerli -> Chiado

It deploys 2 contracts for each chain pair - one to the destination chain (Goerli/Chiado), and another to the sending chain (Arbitrum Goerli), and has the sending contract contract send a message to the receiving contract to be executed automatically.

The script and contracts demonstrate how to interact with Vea's bridge contracts to create cross-chain messages, and how to calculate proofs to relay messages.

[Click here](docs.vea.ninja/) for more info on cross-chain messaging with Vea.

### Run Deploy Contracts:

```
yarn lightbulb
```

## Config Environment Variables

Set the values shown in `.env-sample` as environmental variables. To copy it into a `.env` file:

```bash
cp .env-sample .env
```

(you'll still need to edit some variables, i.e., `PRIVKEY`)

<p align="left">
  <img width="350" height="150" src= "./assets/vea.avif" />
</p>