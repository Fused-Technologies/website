# fusedtechnologies.com

The Fused Technologies marketing site, rebuilt from the original HighLevel/Growably site
as a static [Astro](https://astro.build) site.

## Editing content

Page text, images and links live in JSON files, separate from the layout:

| File | What it controls |
| --- | --- |
| `src/content/site.json` | Phone numbers, emails, navigation, footer links, social links |
| `src/content/home.json` | All homepage sections |
| `src/content/testimonials.json` | Client testimonials (used on several pages) |

A visual editor (TinaCMS) will be connected to these files so content can be changed
without touching code.

Images are in `public/images/`.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Deploying

Built for Netlify: connect this repo in Netlify and it will use the settings in
`netlify.toml` (build command `npm run build`, publish directory `dist`).

## Reference

`reference/` holds a snapshot of the original site (text, images and screenshots)
used as the source for this rebuild. It is not part of the published site.
