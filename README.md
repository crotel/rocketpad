# 🚀 rocketpad

### What is this?
A webapp which allows you to create mini essays/websites and publish them to the distributed web via IPFS.

### Why did I make it?
1. I needed something to write/publish documents to IPFS
2. I thought I would make something for the [Hashnode + Vercel Hackathon](https://townhall.hashnode.com/announcing-hashnode-hackathon-powered-by-vercel)

### Installation

**Publicly:**

You can view this at [rocketpad.vercel.app](https://rocketpad.vercel.app) or [rocketpad.now.sh](https://rocketpad.now.sh) or [rocketpad.aboutdavid.me](https://rocketpad.aboutdavid.me)


**On your own daemon:**
```bash
ipfs pin add /ipns/rocketpad.aboutdavid.me
```
This will give you the latest version of rocketpad. You will get an output that looks something like this:

```
pinned QmP3kpJFWpFpq18LYLDSoXLs92TrE9DYLxWUxBcUYKJwfR recursively
```

Take that hash (the thing that looks like `QmP3kpJFWpFpq18LYLDSoXLs92TrE9DYLxWUxBcUYKJwfR`) and visit `http://localhost:8080/ipfs/[OUTPUT HASH]`

Now you can use RocketPad offline. Make sure to use the [IPFS Companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch) chrome extension for the best experience!