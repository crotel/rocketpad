# 🚀 rocketpad
___
https://file.coffee/u/TvdMzMruzr.mp4


This is RocketPad. RocketPad allows you to create notes/mini-essays/ using quill's WYSIWYG editor and blast them into space using InterPlanetary File System (IPFS). No setup required™
### What is this?
A webapp which allows you to create mini essays/websites and publish them to the distributed web via IPFS.

### Why did I make it?
I needed something to write/publish documents to IPFS and I was just bord I guess `¯\_(ツ)_/¯`

### Features:
Works offline: Your rendered documents/mini-essays work offline because all icons/images are stored offline

### How to use it
1. [Visit the site](https://rocketpad.glitch.me) ([or via your local IPFS gateway](http://localhost/ipns/rocketpad.aboutdavid.me))
2. Write something. Markdown **is** supported!
3. Set a title, description, and icon (all are optional)
4. Click "Create". You have copied your document to the clipboard! Share it with your friends!

### Buttons
- Create: Renders/copies your essay to clipboard
- Save Draft: Copies an edit link to your clipboard.
- Download: The same thing as the create button, but it downloads instead of uploads.

### Use on your own daemon:
```bash
ipfs pin add /ipns/rocketpad.aboutdavid.me
```
This will give you the latest version of rocketpad. You will get an output that looks something like this:

```
pinned QmUvxeH81GVxHP4yBmK6YCc3aNFAXC5i1yKZx5ibgHbHaB recursively
```

Take that hash (the thing that looks like `QmUvxeH81GVxHP4yBmK6YCc3aNFAXC5i1yKZx5ibgHbHaB`) and visit `http://localhost:8080/ipfs/[OUTPUT HASH]`

### Thanks
- @benborgers for his [emoji cdn](https://emojicdn.elk.sh/)
- Stackoverflow for allowing me to allow me to borrow their code (if the code police come, tell them i'm not here!)
- IPFS for creating a better web

[Twitter](https://twitter.com/UpscaleDavid/status/1357862556845690882) | [Github](https://github.com/aboutDavid/rocketpad) | [Glitch](https://glitch.com/edit/#!/rocketpad)