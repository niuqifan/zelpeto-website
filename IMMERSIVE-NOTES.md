# ZELPETO local immersive prototype

Preview: http://127.0.0.1:4175/ (run `node preview-motion.cjs` from the parent workspace if needed).

Local only. No publication or GitHub push.

Three photographic layers provide pointer parallax and a sticky scroll sequence. Natural page scrolling is retained. Pet hotspots open collection cards. The motion control and system reduced-motion preference provide a static alternative. Mobile uses a shorter sequence and adjusted framing.

Implementation: index.html, immersive.css, immersive.js. Previous experiment: motion-v1.html with hero-motion.css/js.

## Assets and generation prompts

Source reference: ../assets/hero-hd.png. Generated PNG originals are retained under ../assets/immersive-{room,pets,foliage}.png. WebP delivery copies are assets/scene-{room,pets,foliage}.webp, all 2172 × 724. Pets and foliage retain alpha transparency. These are AI-generated illustrative images.

Room prompt: Edit the supplied photo into a clean background plate. Remove all four animals, their shadows, bird perch and lizard rock. Reconstruct the cream rug and room naturally. Preserve the wide 3:1 camera perspective, sunlight, cream wall, bookcase, window, sofa and green plant. Empty warm sunlit room, no text.

Pets prompt: Extract the golden retriever, tabby cat, cockatiel with wooden perch and bearded dragon with rock into one transparent compositing layer. Preserve original positions, relative sizes, lighting, fur, feathers, paws and tails. Keep the left 30 percent empty. Remove room, rug and furniture to true alpha. No painted checkerboard or text. Same wide 3:1 composition.

Foliage prompt: Photorealistic transparent foreground frame for a warm sunlit pet home. Wide 3:1 canvas, a few softly defocused olive-green leaves and thin stems entering from extreme edges and lower corners. Center 80 percent transparent. Warm sunlight, restrained natural framing, no pot, ground, animals or text, true alpha.

## Verification

Browser checked: image decoding, desktop scroll progression and different layer transforms, cat hotspot dialog and collection URL, Escape dismissal, skip-to-category anchor, motion toggle, 390px mobile framing and all four mobile hotspots, no horizontal overflow. Viewport override reset after testing.
