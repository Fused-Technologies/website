# fusedtechnologies.com

The Fused Technologies marketing site, rebuilt from the original HighLevel/Growably site
as a static [Astro](https://astro.build) site.

## Editing content

Page text, images and links live in JSON files, separate from the layout:

| File | What it controls |
| --- | --- |
| `src/content/site.json` | Phone numbers, emails, navigation, footer links, social links |
| `src/content/home.json` | All homepage sections |
| `src/content/pages/*.json` | About, Security-First IT, VoIP, Reviews, Support Center and booking pages |
| `src/content/testimonials.json` | Client testimonials (used on several pages) |
| `src/content/blog/*.md` | Blog posts (one Markdown file per post) |
| `src/content/legal/*.md` | Privacy Policy and SMS Privacy Policy |

To add a blog post, copy an existing file in `src/content/blog/`, change the details at
the top (title, date, category, image) and replace the text. The file name becomes the
address: `my-post.md` is published at `/blog/b/my-post`.

A visual editor (TinaCMS) will be connected to these files so content can be changed
without touching code.

Images are in `public/images/`.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Forms

The booking form (`/schedule-an-appointment`) and the blog "We Can Help" form use
[Netlify Forms](https://docs.netlify.com/forms/setup/). Once the site is on Netlify,
submissions appear under **Site → Forms**; turn on email notifications there.
The sidebar "Schedule an Appointment Today" form passes the visitor's name and email
to the booking form.

## Deploying

Built for Netlify: connect this repo in Netlify and it will use the settings in
`netlify.toml` (build command `npm run build`, publish directory `dist`).

## Reference

`reference/` holds a snapshot of the original site (text, images and screenshots)
used as the source for this rebuild. It is not part of the published site.
