# SSA-WEDDING

Build a world-class, cinematic luxury wedding invitation website.

IMPORTANT:

I have provided a video of a wedding website I created previously. Use that uploaded video as a VISUAL AND INTERACTION REFERENCE for the overall experience, pacing, transitions, sections, atmosphere, and premium feel.

Do NOT simply copy the previous website.

Instead, study the reference and create a significantly more refined, elegant, cinematic and technically polished version.

The goal is to create something that feels like a bespoke luxury wedding film combined with an interactive digital invitation — NOT a normal wedding template.

==================================================

1. CORE EXPERIENCE

   ==================================================

The website should feel like a cinematic journey.

The visitor should feel as if they are entering a private royal wedding celebration.

The experience should progress naturally:

PRELOADER

→

CLOSED ROYAL CURTAINS

→

CURTAINS OPEN

→

LUXURY WEDDING WORLD REVEALED

→

HERO INVITATION

→

COUPLE STORY

→

WEDDING EVENTS

→

VENUE

→

GALLERY

→

COUNTDOWN

→

RSVP

→

FINAL BLESSING / CLOSING SCENE

Every section should feel connected.

Avoid the feeling of scrolling through unrelated cards.

The entire website should feel like ONE continuous cinematic experience.

==================================================

2. VISUAL DIRECTION

Create an extremely premium visual identity inspired by:

- Royal Indian palace architecture

- Contemporary luxury wedding cinematography

- High-fashion editorial design

- Luxury invitation stationery

- Champagne gold

- Deep burgundy / wine

- Warm ivory

- Antique gold

- Soft candlelight

- Marble

- Silk

- Velvet

- Crystal

- Jasmine and white roses

- Subtle traditional Indian motifs

Color direction:

Primary:

Deep Burgundy / Wine

Secondary:

Antique Champagne Gold

Background:

Warm Ivory / Pearl

Supporting:

Muted Rose

Warm Beige

Dark Espresso

DO NOT make the website excessively colorful.

Luxury should come from:

typography,

spacing,

lighting,

texture,

motion,

composition,

and restraint.

==================================================

3. TYPOGRAPHY

Use an elegant editorial serif for names and major headings.

Use a refined modern sans-serif for supporting information.

Potential typography direction:

Display:

Cormorant Garamond / Playfair Display / Bodoni-style editorial serif

Body:

Inter / Manrope / DM Sans

Use typography with sophisticated hierarchy.

Large names.

Very generous whitespace.

Elegant letter spacing.

Small uppercase labels.

Avoid generic wedding-template typography.

Names should feel like luxury fashion editorial typography.

==================================================

4. OPENING CINEMATIC EXPERIENCE

The first screen must be completely immersive.

Before showing the actual invitation, display a grand pair of luxurious burgundy velvet curtains.

The curtains should fill the entire viewport.

The scene should feel like entering a royal theatre.

Use the provided curtain-opening video if available.

If the video is intended to be generated separately, design the website so the generated video can be easily inserted as:

/public/assets/curtain-opening.mp4

The video should:

- fill the viewport

- preserve cinematic composition

- autoplay

- be muted

- play once

- remain visually seamless

- transition into the hero without a visible hard cut

Do NOT display browser video controls.

The opening experience:

0–1 sec:

Dark luxurious atmosphere.

1–3 sec:

Closed velvet curtains.

3–7 sec:

Curtains slowly open.

Warm golden light emerges.

7–9 sec:

Royal wedding environment is revealed.

9–10 sec:

Hold the final frame.

Then transition seamlessly into the invitation.

Add a subtle cinematic crossfade / opacity transition between the video and hero.

IMPORTANT:

Do not immediately expose the entire website underneath the video.

The curtain scene should genuinely feel like an entrance.

==================================================

5. OPTIONAL SKIP EXPERIENCE

Provide a very subtle:

"ENTER INVITATION"

or

"SKIP INTRO"

control.

It must be elegant and almost invisible.

Position:

bottom-right or bottom-center.

Small typography.

Low opacity.

On hover:

slightly increase opacity.

If clicked:

smoothly transition directly into the hero.

Remember the visitor's preference with sessionStorage so the cinematic intro does not repeatedly interrupt them during the same session.

==================================================

6. PRELOADER

Create a minimal luxury preloader.

Do not use a generic spinner.

Instead:

Display a small monogram or elegant wedding initials.

Example:

A

&

S

or the actual initials once provided.

Animate:

opacity

+

slight scale

+

letter spacing

Then smoothly transition into the curtain scene.

Preloader should be extremely short and only exist while required assets load.

==================================================

7. HERO SECTION

After the curtains open, reveal the main invitation.

Hero should feel like a luxury wedding invitation card brought to life.

Composition:

Small eyebrow:

"WITH THE BLESSINGS OF OUR FAMILIES"

Large names:

[BRIDE NAME]

&

[GROOM NAME]

Then:

"INVITE YOU TO CELEBRATE THEIR WEDDING"

Date.

Location.

A subtle ornamental divider.

Use layered depth:

background architecture

+

soft particles

+

floral foreground

+

typography

+

gold light

Create a subtle parallax effect.

The names should have the strongest visual emphasis.

==================================================

8. HERO ANIMATION

Use Framer Motion / Motion for React.

Do not animate everything simultaneously.

Use a sophisticated sequence:

Background:

slow opacity reveal

Architecture:

scale from 1.04 → 1

Flowers:

translate upward slightly

Small text:

fade + upward movement

Names:

fade + slight upward movement + tracking animation

Date:

delayed reveal

Decorative elements:

slow ornamental motion

Use custom easing curves.

Prefer:

cubic-bezier-style smooth easing

and spring animations only where appropriate.

Avoid bouncy UI animations.

Luxury motion is slow, controlled and intentional.

==================================================

9. SCROLL EXPERIENCE

Scrolling should feel cinematic.

Use Framer Motion / Motion for:

scroll-linked reveals

parallax

scale

opacity

clip-path transitions

mask reveals

text reveals

image reveals

Use Intersection Observer or Motion's viewport APIs efficiently.

Do not animate every DOM element.

Prioritize hero elements and major transitions.

==================================================

10. SECTION TRANSITIONS

Each section should visually transition into the next.

Examples:

Hero:

soft gold fade

Story:

large editorial image slowly revealed through a mask

Events:

ornamental line expands

Gallery:

images slide / reveal through elegant clipping

Venue:

map section emerges through a paper/card transition

RSVP:

background gradually darkens

Final:

return to warm ivory / burgundy atmosphere

Avoid abrupt section changes.

==================================================

11. OUR STORY

Create an editorial couple story section.

Use a large image and elegant typography.

Layout should be asymmetrical and magazine-like.

Example:

"OUR STORY"

Then:

"Two paths.

One beautiful beginning."

Then a short story.

Use scroll animation where the image reveals through a soft clip-path mask.

Text should reveal progressively.

Do not overanimate.

==================================================

12. WEDDING EVENTS

Create a premium event timeline.

Possible events:

ENGAGEMENT

MEHENDI

SANGEET

WEDDING

RECEPTION

Each event should have:

date

time

venue

short description

dress code if provided

Design it as an elegant vertical timeline rather than generic cards.

A thin gold line should connect events.

As the visitor scrolls:

the line progressively illuminates.

Each event enters with:

opacity

translateY

subtle scale

Use different visual treatment for the main wedding event.

==================================================

13. MAIN WEDDING EVENT

The wedding should receive special treatment.

Make it visually dominant.

Use:

large date

ceremonial ornament

venue

time

Possible phrase:

"THE BEGINNING OF FOREVER"

or another elegant phrase.

Create subtle glowing gold particles / light effects.

Keep the effects extremely restrained.

==================================================

14. COUNTDOWN

Create a luxury countdown.

Display:

DAYS

HOURS

MINUTES

SECONDS

Use large editorial numerals.

Animate number changes subtly.

Do not use excessive ticking animations.

Countdown should be fully functional using the actual wedding date.

Handle timezone correctly.

When countdown reaches zero:

replace it with:

"THE DAY HAS ARRIVED"

==================================================

15. VENUE

Create a sophisticated venue section.

Include:

venue name

address

date

time

Provide:

"VIEW LOCATION"

button.

Use an elegant location icon.

If map integration is used, keep it visually consistent with the design.

Do not make Google Maps visually dominate the page.

==================================================

16. GALLERY

Create a cinematic editorial gallery.

Do NOT use a generic 3-column grid.

Use an asymmetric masonry-style composition.

Mix:

portrait images

landscape images

square images

Images should have varying sizes.

On scroll:

images reveal through masks.

On hover:

very subtle scale 1.03.

Click:

open an elegant full-screen lightbox.

Lightbox should support:

previous

next

close

keyboard navigation

swipe on mobile

Add a dark translucent cinematic background.

==================================================

17. IMAGE PERFORMANCE

Optimize all images.

Use:

lazy loading

responsive image sizes

modern formats where possible

appropriate dimensions

Do not load every gallery image immediately.

Hero assets should load first.

Gallery assets should load progressively.

==================================================

18. RSVP

Create a premium RSVP experience.

The RSVP section should not look like a generic web form.

Use elegant inputs:

Name

Phone / Email

Number of guests

Attendance

Message

Use floating labels or sophisticated minimal labels.

Buttons:

"JOYFULLY ACCEPT"

"REGRETFULLY DECLINE"

On submit:

show a beautiful confirmation state.

Example:

"Thank you for celebrating this beautiful beginning with us."

Do not use browser alert dialogs.

==================================================

19. MUSIC

Create an optional ambient music control.

Do NOT autoplay audio without user interaction.

Use a subtle circular music control.

When activated:

animate the icon gently.

Show:

Music On

or

Music Off

Use an audio element with proper cleanup.

==================================================

20. MICRO-INTERACTIONS

Add premium micro-interactions:

buttons:

subtle magnetic movement

hover:

underline animation

gold buttons:

soft light sweep

links:

animated underline

gallery:

subtle zoom

cursor:

optional custom luxury cursor on desktop only

IMPORTANT:

Disable expensive cursor effects on mobile.

Do not make interactions distracting.

==================================================

21. ORNAMENTS

Use subtle Indian-inspired ornamental patterns.

Possible motifs:

paisley

floral line art

mandala-inspired geometry

arch shapes

fine gold borders

Use them sparingly.

Do not make the website look like a traditional invitation card from the early 2000s.

The target is:

MODERN ROYAL LUXURY.

==================================================

22. BACKGROUND EFFECTS

Use subtle:

gold dust particles

floating flower petals

soft light leaks

grain texture

ambient glow

But performance comes first.

Use CSS / lightweight canvas where appropriate.

Respect:

prefers-reduced-motion.

When reduced motion is enabled:

remove parallax

remove large movement

reduce particles

use simple fades.

==================================================

23. RESPONSIVE DESIGN

Mobile is the PRIMARY EXPERIENCE.

The site must look exceptional on:

iPhone

Android

small phones

large phones

tablets

laptops

desktop

large monitors

The cinematic curtain opening must remain correctly composed on portrait screens.

Do not simply shrink the desktop design.

Create intentional mobile layouts.

For mobile:

reduce ornament complexity

simplify navigation

maintain large typography

preserve visual hierarchy

keep buttons thumb-friendly

==================================================

24. NAVIGATION

Create a minimal floating navigation.

Desktop:

Home

Our Story

Events

Gallery

Venue

RSVP

Mobile:

minimal hamburger / menu button.

Navigation should appear only after the intro.

Use a glass / translucent luxury treatment.

Navigation should not dominate the design.

==================================================

25. FIXED MOBILE ACTIONS

On mobile, consider a minimal bottom action bar containing:

RSVP

Location

Music

Keep it elegant.

Do not let it cover important content.

==================================================

26. TECHNICAL STACK

Build using:

React

TypeScript

Vite

Tailwind CSS

Use:

Framer Motion / Motion for React

Use TanStack libraries only where they provide meaningful value.

For example:

TanStack Query for remote data or RSVP API integration if needed.

Do NOT add TanStack libraries just for the sake of mentioning them.

Use:

React Router if multiple routes are actually required.

Otherwise keep the invitation as a high-quality single-page experience.

Use reusable components.

Suggested structure:

src/

components/

IntroCurtain.tsx

Preloader.tsx

Navigation.tsx

Hero.tsx

Story.tsx

Events.tsx

Countdown.tsx

Venue.tsx

Gallery.tsx

RSVP.tsx

MusicControl.tsx

Footer.tsx

hooks/

useCountdown.ts

useScrollProgress.ts

useMediaQuery.ts

data/

wedding.ts

gallery.ts

assets/

Keep wedding information separated from presentation.

==================================================

27. DATA CONFIGURATION

Create a central wedding configuration object.

Example:

const wedding = {

bride: "",

groom: "",

date: "",

time: "",

venue: "",

address: "",

story: "",

mapUrl: "",

musicUrl: ""

}

Events should also be data-driven.

Gallery should be data-driven.

This will make it easy to replace placeholder content later.

==================================================

28. PLACEHOLDER CONTENT

Until I provide the actual details, use elegant placeholders:

BRIDE NAME

GROOM NAME

WEDDING DATE

WEDDING VENUE

Do not invent real personal information.

Make it obvious in the code where I should replace the placeholders.

==================================================

29. ACCESSIBILITY

Implement:

semantic HTML

ARIA labels

keyboard navigation

focus states

accessible forms

alt text

reduced motion support

The website should remain usable without animation.

==================================================

30. PERFORMANCE

Performance is extremely important.

Target:

90+ Lighthouse performance where realistically possible.

Use:

lazy loading

code splitting where useful

compressed assets

preload only critical assets

poster image for video

requestAnimationFrame only when necessary

avoid excessive DOM nodes

avoid continuous expensive animations

GPU-friendly transforms

opacity / transform instead of layout-heavy animations

The curtain video should not cause the entire website to become slow.

Load the actual invitation content intelligently behind / after the intro.

==================================================

31. SEO

Include:

proper title

meta description

Open Graph metadata

Twitter/X metadata

theme color

favicon

semantic headings

Example title:

"BRIDE & GROOM — A Celebration of Love"

Make this configurable.

==================================================

32. SOCIAL SHARING

Prepare the site for sharing through:

WhatsApp

Instagram

Facebook

iMessage

etc.

Create appropriate Open Graph preview metadata.

==================================================

33. FINAL CLOSING SECTION

End the experience emotionally.

Use:

"With love,

[BRIDE] & [GROOM]"

Then wedding date.

Add a subtle ornamental element.

Background should return to the deep burgundy / warm ivory palette.

Create a final slow fade.

==================================================

34. DESIGN QUALITY BAR

This is extremely important.

Do not create:

generic SaaS UI

generic wedding template

generic Bootstrap cards

generic gradients

cheap-looking animations

excessive glassmorphism

overly bright colors

huge buttons

random decorative elements

emoji-based design

template-like sections

Every element should feel intentional.

The visual standard should be comparable to:

luxury fashion websites

high-end wedding cinematography

premium editorial magazines

luxury hotel websites

bespoke invitation studios

Think:

"Apple-level interaction polish + luxury Indian wedding cinematography + editorial fashion design."

==================================================

35. MOTION QUALITY BAR

Motion should feel expensive.

Use:

slow reveals

precise timing

layered choreography

natural easing

scroll-linked depth

mask transitions

subtle parallax

micro-interactions

Avoid:

bounce

spin

random floating

excessive zoom

constant movement

overlapping animations

animation for decoration's sake

A visitor should notice the EXPERIENCE, not the animation code.

==================================================

36. CURTAIN VIDEO INTEGRATION

The uploaded reference video is approximately a 37-second portrait video.

Use it as a reference for the previous site's visual experience.

For the NEW curtain intro, architect the site so I can replace the intro asset with a generated cinematic curtain-opening video.

Expected asset:

/public/assets/curtain-opening.mp4

Also create:

/public/assets/curtain-poster.webp

Use the poster while the video is loading.

Do not crop important curtain content incorrectly.

Use:

object-fit: cover

but intelligently handle portrait screens.

==================================================

37. CINEMATIC TRANSITION

The most important transition in the entire website is:

CURTAIN VIDEO

→

HERO

Do not simply remove the video.

Instead:

At the end of the video:

1. detect video ending

2. slightly brighten the final frame

3. crossfade into hero

4. simultaneously reveal hero typography

5. introduce subtle golden particles

6. transition focus from cinematic scene to invitation typography

The transition should feel like the camera has entered the wedding venue.

==================================================

38. DESKTOP EXPERIENCE

On desktop, use the additional screen space for:

large typography

layered photography

architectural compositions

subtle parallax

wide negative space

Do not stretch mobile layouts across desktop.

==================================================

39. MOBILE EXPERIENCE

Mobile should feel like a luxury digital invitation.

Prioritize:

large names

beautiful photography

easy RSVP

easy location access

smooth vertical storytelling

Keep animations lightweight.

Maintain at least 44px touch targets.

==================================================

40. FINAL DEVELOPMENT REQUIREMENT

Before considering the site complete:

Test every section.

Test mobile.

Test desktop.

Test video autoplay behavior.

Test video fallback.

Test if the user skips the intro.

Test countdown.

Test gallery lightbox.

Test RSVP validation.

Test keyboard navigation.

Test reduced-motion mode.

Test slow network behavior.

Test if the video fails to load.

There should always be a graceful fallback.

==================================================

41. IMPORTANT FINAL INSTRUCTION

Use the uploaded previous wedding-site video as inspiration and reference.

Analyze its visual language and experience.

Then BUILD SOMETHING BETTER.

Do not reproduce it pixel-for-pixel.

Improve:

typography

spacing

composition

transitions

animation

responsiveness

performance

accessibility

interaction design

visual hierarchy

The final result should feel like a bespoke, award-winning digital wedding invitation.

The visitor should have the feeling:

"I've never seen a wedding invitation website like this before."

Start by implementing the complete experience rather than creating only a static landing page.

Make all major sections functional.

Use placeholder wedding information until I provide the real details.

Most importantly:

MAKE IT FEEL CINEMATIC.

MAKE IT FEEL ROYAL.

MAKE IT FEEL EXPENSIVE.

MAKE IT FEEL EMOTIONAL.

MAKE IT FEEL EFFORTLESS.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sadiyaweds.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/efd70470-d98a-48a7-9ac6-90b69564f6c1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
