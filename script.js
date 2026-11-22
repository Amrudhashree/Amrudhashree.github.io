/* ==========================================================================
   Amrudha Shree: Playable Studio Workbench & Atelier Edition Script
   Zero-dependency, static GitHub-Pages-safe JS
   ========================================================================== */

(() => {
  'use strict';

  const MAKER_NOTES = {
    all: 'A growing collection of handmade oil and acrylic paintings, crochet, knotted macramé, glazed ceramics, wool felting, and mixed media.',
    featured: 'A hand-picked selection of my favorite pieces across canvas, wool, knotted cotton cord, clay, and thread.',
    painting: 'Oil portraits, acrylic scenes, and pencil sketches exploring light, color, and quiet moments.',
    crochet: 'Loop by loop: turning yarn into dresses, lace shrugs, cozy baskets, headbands, and plush friends.',
    macrame: 'Knotted cotton cord: hanging plant cradles, braided pillow covers, and plush toy hammocks.',
    ceramics: 'Hand-shaped clay and glazed ceramics: pinch bowls, carved leaf dishes, sculpted floral pieces, and a handmade paint palette.',
    'mixed-media': 'Working with string art, paper texture, wool felting, pressed flowers in resin, and 3D filament pen sculptures.'
  };

  /**
   * Curated studio catalog referencing ./assets/gallery/{thumbs,full}/<slug>.jpg
   * Image URLs are safely built via getThumbUrl() / getFullUrl() + encodeURI().
   */
  const ARTWORKS = [
    // Paintings & Sketches (18 items)
    {
      file: 'gaze-of-the-himalayan-sun.jpg',
      category: 'painting',
      title: 'Tibetan Man Portrait',
      medium: 'Signed Oil on Canvas',
      featured: true,
      desc: 'Signed original oil portrait on canvas of a Tibetan man in a crimson shirt catching warm light against a soft blue-green background.'
    },
    {
      file: 'terracotta-poise.jpg',
      category: 'painting',
      title: 'Woman in Burnt Orange',
      medium: 'Acrylic on Canvas',
      featured: true,
      desc: 'Portrait of a woman with a low bun and gold hoop earring glancing over her shoulder against a warm burnt-orange background.'
    },
    {
      file: 'beneath-the-surface-of-courage.jpg',
      category: 'painting',
      title: 'Girl & Lion Underwater',
      medium: 'Acrylic Painting',
      featured: true,
      desc: 'Turquoise split-level painting showing a quiet gaze between a girl underwater and a lion dipping toward the surface.'
    },
    {
      file: 'rain-kissed-boulevard.jpg',
      category: 'painting',
      title: 'Rainy Night Park Bench',
      medium: 'Textured Acrylic Night Scene',
      featured: true,
      desc: 'Night painting of an empty bench along a wet tree-lined path reflecting warm orange and blue streetlamps.'
    },
    {
      file: 'sunlit-cobblestones-bougainvillea.jpg',
      category: 'painting',
      title: 'Blue Door & Bougainvillea',
      medium: 'Watercolor & Ink',
      featured: true,
      desc: 'Sunlit street scene painting with stone steps, warm yellow walls, a bright blue door, and blooming pink bougainvillea.'
    },
    {
      file: 'unbridled-breakaway.jpg',
      category: 'painting',
      title: 'Leaping Black Horse',
      medium: '3D Framed Acrylic',
      featured: false,
      desc: 'Acrylic painting where a black stallion leaps right across the bright orange painted border frame.'
    },
    {
      file: 'basket-of-twilight-blooms.jpg',
      category: 'painting',
      title: 'White Basket of Flowers',
      medium: 'Floral Acrylic Painting',
      featured: false,
      desc: 'Woven white basket filled with daisies, purple lilacs, and green leaves against a dark plum background.'
    },
    {
      file: 'quiet-evening-under-the-pergola.jpg',
      category: 'painting',
      title: 'Couple Under String Lights',
      medium: 'Small Canvas on Easel',
      featured: true,
      desc: 'Small square canvas on a tabletop wooden easel showing a couple in black and gold clothes standing under warm string lights.'
    },
    {
      file: 'aura-of-tranquility.jpg',
      category: 'painting',
      title: 'Golden Buddha Portrait',
      medium: 'Acrylic on Canvas',
      featured: false,
      desc: 'Warm golden-ochre portrait of Buddha with closed eyes, softly framed against a crimson halo and dark background.'
    },
    {
      file: 'golden-bokeh-awakening.jpg',
      category: 'painting',
      title: 'Meditation in Golden Light',
      medium: 'Framed Acrylic Silhouette',
      featured: false,
      desc: 'Calm meditating silhouette framed by warm red borders and glowing amber-gold circles of light.'
    },
    {
      file: 'scarlet-waltz.jpg',
      category: 'painting',
      title: 'Dancer in a Red Dress',
      medium: 'Gouache & Watercolor',
      featured: false,
      desc: 'Painting capturing a dancer turning in a flowing red and rose-pink dress against a pale blue background.'
    },
    {
      file: 'little-coops.jpg',
      category: 'painting',
      title: 'Puppy Named Coops',
      medium: 'Pastel & Colored Pencil',
      featured: false,
      desc: 'Soft portrait drawing of a cream Labrador puppy peeking over a wooden crate labeled "COOPS" on a deep green background.'
    },
    {
      file: 'midnight-treehouse-prowler.jpg',
      category: 'painting',
      title: 'Ginger Kitten on a Branch',
      medium: 'Acrylic Animal Painting',
      featured: false,
      desc: 'Ginger-and-white tabby kitten holding onto a dark tree branch against a teal night sky.'
    },
    {
      file: 'crimson-dusk-the-stag.jpg',
      category: 'painting',
      title: 'Deer at Sunset',
      medium: 'Landscape Acrylic Painting',
      featured: false,
      desc: 'Framed silhouette of a stag standing on high mountain ridges beneath a glowing orange-red sunset sky.'
    },
    {
      file: 'caravan-at-sundown.jpg',
      category: 'painting',
      title: 'Camel Caravan at Sunset',
      medium: 'Desert Acrylic Painting',
      featured: false,
      desc: 'Desert landscape silhouette of camels crossing sand dunes under a bright golden-orange evening sky.'
    },
    {
      file: 'outlaw-of-the-amber-horizon.jpg',
      category: 'painting',
      title: 'Rider on the Ridge',
      medium: 'Silhouette Acrylic Painting',
      featured: false,
      desc: 'Dark silhouette of a lone horseman paused above layered ridges against a warm amber-to-crimson sky.'
    },
    {
      file: 'purest-giggle.jpg',
      category: 'painting',
      title: 'Laughing Baby Sketch',
      medium: 'Charcoal & Graphite Pencil',
      featured: true,
      desc: 'Pencil and charcoal portrait drawing capturing the joyful laugh of a baby resting on patterned cushions.'
    },
    {
      file: 'freckled-reverie.jpg',
      category: 'painting',
      title: 'Freckled Portrait Study',
      medium: 'Framed Portrait Illustration',
      featured: true,
      desc: 'Framed portrait illustration of a freckled woman with dark wavy hair, red lips, and soft brushed grey borders.'
    },

    // Crochet (11 items)
    {
      file: 'prism-stripe-tunic-dress.jpg',
      category: 'crochet',
      title: 'Striped Crochet Dress',
      medium: 'Wearable Crochet Apparel',
      featured: true,
      desc: 'Handmade short-sleeved crochet tunic dress with pastel-to-coral horizontal stripes and a bright magenta neckline trim.'
    },
    {
      file: 'terracotta-ivory-lace-bolero.jpg',
      category: 'crochet',
      title: 'Terracotta Lace Crochet Shrug',
      medium: 'Wearable Crochet',
      featured: true,
      desc: 'Sleeveless terracotta-rose crochet shrug made with textured stitches, a front tie, and scalloped cream lace edging.'
    },
    {
      file: 'crimson-puff-stitch-laptop-sleeve.jpg',
      category: 'crochet',
      title: 'Burgundy Crochet Laptop Sleeve',
      medium: 'Textured Crochet Tech Bag',
      featured: true,
      desc: 'Cushioned burgundy-red crochet laptop sleeve worked in a soft V-puff stitch pattern with a full zipper.'
    },
    {
      file: 'the-makers-burgundy-nest.jpg',
      category: 'crochet',
      title: 'Burgundy Yarn Storage Basket',
      medium: 'Chunky T-Shirt Yarn Crochet',
      featured: false,
      desc: 'Sturdy handmade burgundy crochet storage basket holding colorful balls of yarn, wooden hooks, and buttons.'
    },
    {
      file: 'cozy-teal-crocheted-toy-basket.jpg',
      category: 'crochet',
      title: 'Teal Crochet Toy Basket',
      medium: 'T-Shirt Yarn Crochet Basket',
      featured: true,
      desc: 'Sturdy rectangular deep-teal crochet basket styled in a sunny corner holding plush toys and wooden blocks.'
    },
    {
      file: 'rosette-crowned-navy-elephant.jpg',
      category: 'crochet',
      title: 'Navy Crochet Elephant',
      medium: 'Crochet Plush Toy',
      featured: true,
      desc: 'Handmade navy-blue crocheted elephant with bright pink inner ears and a small flower crown sitting on a woven mat.'
    },
    {
      file: 'little-masha-in-folk-magenta.jpg',
      category: 'crochet',
      title: 'Crochet Masha Doll',
      medium: 'Crochet Doll & Lace Doily',
      featured: false,
      desc: 'Detailed crochet Masha doll wearing a bright pink headscarf and patterned dress standing on a cream crochet doily.'
    },
    {
      file: 'terracotta-ribbed-crochet-headband.jpg',
      category: 'crochet',
      title: 'Terracotta Crochet Headband',
      medium: 'Wearable Cotton Crochet',
      featured: true,
      desc: 'Soft terracotta ribbed cotton crochet headband worked in a stretchy knit-like stitch.'
    },
    {
      file: 'midnight-mandala-lace-halter-top.jpg',
      category: 'crochet',
      title: 'Black Lace Crochet Halter Top',
      medium: 'Wearable Crochet Apparel',
      featured: true,
      desc: 'Hand-crocheted black lacy halter top joined together from circular floral medallions with scalloped hem edges.'
    },
    {
      file: 'everlasting-magenta-bloom.jpg',
      category: 'crochet',
      title: 'Crochet Rose Bouquet',
      medium: 'Crochet Flower Gift',
      featured: false,
      desc: 'Soft crocheted rose with layered pink petals and green leaves wrapped in kraft paper and ribbon.'
    },
    {
      file: 'orchid-wing-charm.jpg',
      category: 'crochet',
      title: 'Crochet Butterfly Keychain',
      medium: 'Small Crochet Charm',
      featured: false,
      desc: 'Chunky bright pink and black scalloped crochet butterfly keychain photographed on natural linen cloth.'
    },

    // Macramé (5 items)
    {
      file: 'botanical-canopy-five-knotted-suspensions.jpg',
      category: 'macrame',
      title: 'Five Macramé Plant Hangers',
      medium: 'Knotted Cotton Macramé',
      featured: true,
      desc: 'Set of five handmade cream cotton macramé plant hangers finished with square knots and dark blue dipped tassels.'
    },
    {
      file: 'ivory-twist-succulent-cradle.jpg',
      category: 'macrame',
      title: 'Cream Macramé Succulent Hanger',
      medium: 'Spiral-Knot Macramé',
      featured: false,
      desc: 'Cream cotton macramé hanger with twisted spiral cords and a full tassel holding a small potted succulent.'
    },
    {
      file: 'nordic-indigo-slate-winter-hanger.jpg',
      category: 'macrame',
      title: 'Blue & Grey Macramé Hanger',
      medium: 'Two-Tone Braided Macramé',
      featured: false,
      desc: 'Navy-blue and slate-grey cotton macramé plant hanger knotted in a sturdy crisscross basket with a long fringe tail.'
    },
    {
      file: 'rosewood-lattice-cushion.jpg',
      category: 'macrame',
      title: 'Woven Macramé Pillow Cover',
      medium: 'Braided Cord Macramé',
      featured: true,
      desc: 'Textured throw pillow cover hand-woven from crimson, coral, and blush-pink cotton macramé cords.'
    },
    {
      file: 'cloud-hammock-plush-toy-cradle.jpg',
      category: 'macrame',
      title: 'Macramé Toy Hammock',
      medium: 'Hand-Knotted Cotton Macramé',
      featured: true,
      desc: 'Corner hanging hammock knitted from thick cream cotton macramé cord with diamond mesh and fringe tassels for holding plush toys.'
    },

    // Clay & Ceramics (7 items)
    {
      file: 'the-painters-stoneware-palette-quiver.jpg',
      category: 'ceramics',
      title: 'Ceramic Paint Palette & Brush Holder',
      medium: 'Hand-Shaped Ceramic Tool',
      featured: true,
      desc: 'Handmade dark-bronze glazed ceramic paint palette with a built-in brush holder cup for painting tools.'
    },
    {
      file: 'tidal-leaf-fluted-dish.jpg',
      category: 'ceramics',
      title: 'Turquoise Leaf Ceramic Dish',
      medium: 'Carved & Glazed Clay',
      featured: true,
      desc: 'Hand-shaped catchall dish with a wavy rim, pressed leaf vein patterns, and glossy turquoise-blue glaze.'
    },
    {
      file: 'porcelain-garden-in-lavender-stone.jpg',
      category: 'ceramics',
      title: 'Lavender Ceramic Flower Bowl',
      medium: 'Hand-Sculpted Ceramic Florals',
      featured: false,
      desc: 'Speckled lavender ceramic bowl filled with handmade glazed ceramic roses, daisies, and leaves.'
    },
    {
      file: 'cerulean-lagoon-hexagonal-vessel.jpg',
      category: 'ceramics',
      title: 'Blue Six-Sided Ceramic Bowl',
      medium: 'Glazed Ceramic Vessel',
      featured: false,
      desc: 'Six-sided handmade ceramic bowl coated in layered ocean blue, turquoise, and speckled glazes.'
    },
    {
      file: 'cobalt-horizon-flared-bowl.jpg',
      category: 'ceramics',
      title: 'Blue-Trimmed Ceramic Bowl',
      medium: 'Glazed Ceramic Bowl',
      featured: false,
      desc: 'Wide glazed ceramic bowl with a speckled cream finish, blue rim accent, and deep indigo base.'
    },
    {
      file: 'hammered-bronze-chalice-bowl.jpg',
      category: 'ceramics',
      title: 'Bronze Glazed Pinch Bowl',
      medium: 'Hand-Pinched Ceramic Bowl',
      featured: false,
      desc: 'Organic pinch-formed ceramic bowl finished with a textured metallic bronze luster glaze.'
    },
    {
      file: 'earth-ember-stoneware-bowl.jpg',
      category: 'ceramics',
      title: 'Warm Brown Ceramic Bowl',
      medium: 'Glazed Clay Bowl',
      featured: false,
      desc: 'Low hand-shaped ceramic bowl finished in a warm chestnut-brown and iron-speckled glaze.'
    },

    // Mixed Media (7 items)
    {
      file: 'woven-kinship.jpg',
      category: 'mixed-media',
      title: 'Circular String Art Portrait',
      medium: 'String & Thread Art',
      featured: true,
      desc: 'Circular black-and-white portrait woven by stretching intersecting black threads across perimeter pins.'
    },
    {
      file: 'classical-grace-in-silk.jpg',
      category: 'mixed-media',
      title: 'Classical Dancer Doll',
      medium: 'Clay & Silk Doll Craft',
      featured: true,
      desc: 'Handcrafted Indian classical dancer doll with a hand-painted clay face, gold ornaments, and draped purple silk fabric.'
    },
    {
      file: 'suspended-blooms-of-forever.jpg',
      category: 'mixed-media',
      title: 'Pressed Flower Resin Heart',
      medium: 'Botanical Resin Art',
      featured: false,
      desc: 'Clear heart-shaped resin arch preserving dried rose petals, yellow flowers, and a suspended photo charm.'
    },
    {
      file: 'tidal-whisper-paper-wings.jpg',
      category: 'mixed-media',
      title: 'Ocean Tissue & Butterfly Art',
      medium: 'Textured Tissue Paper Collage',
      featured: true,
      desc: 'Circular wall piece made from crumpled blue ocean tissue paper, small coastal stones, and 3D white paper butterflies.'
    },
    {
      file: 'little-hatched-chick-in-a-red-scarf.jpg',
      category: 'mixed-media',
      title: 'Wool Felted Chick',
      medium: 'Needle-Felted Wool Sculpture',
      featured: true,
      desc: 'Needle-felted miniature yellow chick sitting in a white wool eggshell with a red scarf and tiny hat.'
    },
    {
      file: 'geometric-brew.jpg',
      category: 'mixed-media',
      title: 'Coffee Barista Stencil Art',
      medium: 'Stencil & Paper-Cut Art',
      featured: false,
      desc: 'Black-and-white stencil cutout artwork of a barista serving coffee over a white geometric background.'
    },
    {
      file: 'violet-wireframe-profile.jpg',
      category: 'mixed-media',
      title: 'Purple 3D Pen Sculpture',
      medium: '3D Filament Pen Craft',
      featured: false,
      desc: 'Free-standing purple wireframe portrait head drawn freehand using a 3D filament pen.'
    }
  ];

  const PIGMENTS = {
    terracotta: { name: 'Terracotta Clay', hex: '#C86D51', soft: 'rgba(200, 109, 81, 0.16)' },
    cerulean: { name: 'Cerulean Blue', hex: '#3B7A8C', soft: 'rgba(59, 122, 140, 0.16)' },
    ochre: { name: 'Himalayan Ochre', hex: '#C4862C', soft: 'rgba(196, 134, 44, 0.16)' },
    sage: { name: 'Eucalyptus Sage', hex: '#5E7A68', soft: 'rgba(94, 122, 104, 0.16)' },
    mulberry: { name: 'Mulberry Rose', hex: '#A8586B', soft: 'rgba(168, 88, 107, 0.16)' }
  };

  function showStudioToast(msg) {
    const el = document.getElementById('toast');
    if (el) {
      el.textContent = msg;
      el.hidden = false;
      clearTimeout(showStudioToast._timer);
      showStudioToast._timer = setTimeout(() => {
        el.hidden = true;
      }, 2400);
      return;
    }
    const bar = document.createElement('div');
    bar.className = 'toast';
    bar.setAttribute('role', 'status');
    bar.setAttribute('aria-live', 'polite');
    bar.textContent = msg;
    document.body.appendChild(bar);
    setTimeout(() => bar.remove(), 2400);
  }

  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleLabel = document.getElementById('theme-toggle-label');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  function resolveArtworkFile(itemOrFile) {
    if (typeof itemOrFile === 'object' && itemOrFile !== null) {
      return itemOrFile.file || '';
    }
    return String(itemOrFile || '');
  }

  function getThumbUrl(itemOrFile) {
    return encodeURI(`./assets/gallery/thumbs/${resolveArtworkFile(itemOrFile)}`);
  }

  function getFullUrl(itemOrFile) {
    return encodeURI(`./assets/gallery/full/${resolveArtworkFile(itemOrFile)}`);
  }

  function getImageUrl(itemOrFile) {
    return getFullUrl(itemOrFile);
  }

  /* ------------------------------------------------------------------------
     Theme & Studio Pigment Persistence
  ------------------------------------------------------------------------ */
  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem('amrudha-studio-theme');
    } catch (_) {
      saved = null;
    }
    applyTheme(saved === 'dark' ? 'dark' : 'light');

    themeToggleBtn?.addEventListener('click', () => {
      const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem('amrudha-studio-theme', next);
      } catch (_) {}
    });
  }

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#1C1917' : '#FBF8F3');
    }
    if (themeToggleLabel) {
      themeToggleLabel.textContent = theme === 'dark' ? 'Daylight' : 'Evening';
    }
  }

  function applyStudioPigment(key) {
    const p = PIGMENTS[key] || PIGMENTS.terracotta;
    htmlEl.style.setProperty('--studio-accent', p.hex);
    htmlEl.style.setProperty('--studio-accent-soft', p.soft);
    const nameEl = document.getElementById('active-pigment-name');
    if (nameEl) nameEl.textContent = p.name;
    document.querySelectorAll('.pigment-swatch').forEach((btn) => {
      btn.classList.toggle('is-selected', btn.dataset.pigment === key);
    });
  }

  function initPaletteMixer() {
    let savedPigment = 'terracotta';
    try {
      const stored = localStorage.getItem('amrudha-studio-pigment');
      if (stored && PIGMENTS[stored]) savedPigment = stored;
    } catch (_) {}
    applyStudioPigment(savedPigment);

    const swatches = document.querySelectorAll('.pigment-swatch');
    const ripple = document.getElementById('pigment-ripple');
    if (!swatches.length) return;

    swatches.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const key = btn.dataset.pigment || 'terracotta';
        applyStudioPigment(key);
        try {
          localStorage.setItem('amrudha-studio-pigment', key);
        } catch (_) {}

        if (ripple && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          const rect = btn.getBoundingClientRect();
          const cx = e.clientX || rect.left + rect.width / 2;
          const cy = e.clientY || rect.top + rect.height / 2;
          ripple.style.left = `${cx}px`;
          ripple.style.top = `${cy}px`;
          ripple.classList.remove('is-rippling');
          void ripple.offsetWidth;
          ripple.classList.add('is-rippling');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Mobile Navigation Drawer
  ------------------------------------------------------------------------ */
  function initMobileMenu() {
    if (!mobileMenuBtn || !mobileDrawer) return;
    mobileMenuBtn.addEventListener('click', () => {
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', String(!expanded));
      mobileDrawer.hidden = expanded;
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.hidden = true;
      });
    });
  }

  /* ------------------------------------------------------------------------
     Confetti & Balloon Celebration for 100% Easel Reveal
  ------------------------------------------------------------------------ */
  function launchEaselCelebration(anchorEl) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showStudioToast('100% painted!');
      return;
    }

    let canvas = document.getElementById('celebration-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'celebration-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      canvas.style.cssText =
        'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:999;';
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (launchEaselCelebration._raf) {
      cancelAnimationFrame(launchEaselCelebration._raf);
      launchEaselCelebration._raf = null;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    canvas.width = Math.floor(vw * dpr);
    canvas.height = Math.floor(vh * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const rect = anchorEl ? anchorEl.getBoundingClientRect() : null;
    const cx = rect ? rect.left + rect.width * 0.5 : vw * 0.5;
    const cy = rect ? rect.top + rect.height * 0.45 : vh * 0.45;
    const COLORS = ['#C86D51', '#D49B4B', '#5E7A68', '#3B7A8C', '#A8586B', '#E9B963', '#FBF8F3'];

    const confetti = [];
    for (let i = 0; i < 44; i++) {
      const ang = -Math.PI * 0.9 + Math.random() * Math.PI * 0.8 + (Math.random() - 0.5) * 1.1;
      const spd = 3.2 + Math.random() * 5.8;
      confetti.push({
        x: cx + (Math.random() - 0.5) * 44,
        y: cy + (Math.random() - 0.5) * 32,
        vx: Math.cos(ang) * spd + (Math.random() - 0.5) * 2.4,
        vy: Math.sin(ang) * spd - 2.4,
        w: 6 + Math.random() * 6,
        h: 4 + Math.random() * 5,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        spin: Math.random() * Math.PI * 2,
        color: COLORS[i % COLORS.length],
        life: 115 + Math.random() * 45,
        age: 0
      });
    }

    const balloons = [];
    const balloonBaseX = rect ? rect.left : vw * 0.35;
    const balloonSpan = rect ? Math.max(220, rect.width) : vw * 0.3;
    const balloonStartY = rect ? Math.min(vh - 20, rect.bottom + 18) : vh - 12;
    for (let b = 0; b < 9; b++) {
      balloons.push({
        x: balloonBaseX + (b / 8) * balloonSpan + (Math.random() - 0.5) * 36,
        y: balloonStartY + Math.random() * 34,
        vy: -(2.1 + Math.random() * 1.6),
        r: 15 + Math.random() * 8,
        swaySeed: Math.random() * Math.PI * 2,
        swayAmp: 0.45 + Math.random() * 0.65,
        color: COLORS[(b + 1) % 6],
        life: 145 + Math.random() * 45,
        age: 0
      });
    }

    const tick = () => {
      ctx.clearRect(0, 0, vw, vh);
      let active = 0;

      for (const p of confetti) {
        p.age += 1;
        if (p.age >= p.life) continue;
        active += 1;
        p.vx *= 0.99;
        p.vy += 0.14;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vRot;
        p.spin += 0.14;
        const alpha = Math.max(0, 1 - Math.pow(p.age / p.life, 1.8));
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.scale(1, Math.cos(p.spin));
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      for (const b of balloons) {
        b.age += 1;
        if (b.age >= b.life || b.y < -80) continue;
        active += 1;
        b.y += b.vy;
        b.x += Math.sin(b.age * 0.06 + b.swaySeed) * b.swayAmp;
        const alpha = b.age > b.life - 26 ? Math.max(0, (b.life - b.age) / 26) * 0.88 : 0.88;

        ctx.save();
        ctx.globalAlpha = alpha;
        // Curly string
        ctx.strokeStyle = 'rgba(84, 71, 58, 0.55)';
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y + b.r * 1.15);
        ctx.quadraticCurveTo(b.x + Math.sin(b.age * 0.12) * 8, b.y + b.r * 1.8, b.x - 3, b.y + b.r * 2.6);
        ctx.stroke();

        // Balloon body
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.ellipse(b.x, b.y, b.r * 0.84, b.r * 1.08, 0, 0, Math.PI * 2);
        ctx.fill();

        // Knot
        ctx.beginPath();
        ctx.moveTo(b.x - 3, b.y + b.r * 1.08);
        ctx.lineTo(b.x + 3, b.y + b.r * 1.08);
        ctx.lineTo(b.x, b.y + b.r * 1.22);
        ctx.closePath();
        ctx.fill();

        // Soft studio shine
        ctx.fillStyle = 'rgba(255, 255, 255, 0.42)';
        ctx.beginPath();
        ctx.ellipse(b.x - b.r * 0.28, b.y - b.r * 0.34, b.r * 0.18, b.r * 0.34, -0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (active > 0) {
        launchEaselCelebration._raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, vw, vh);
        launchEaselCelebration._raf = null;
      }
    };

    launchEaselCelebration._raf = requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------------
     Home Page: Brush-to-Reveal Studio Easel (#easel-scratch-canvas)
  ------------------------------------------------------------------------ */
  function initEaselBrushReveal() {
    const canvas = document.getElementById('easel-scratch-canvas');
    const img = document.getElementById('easel-portrait-img');
    const hint = document.getElementById('easel-brush-hint');
    const revealBtn = document.getElementById('reveal-easel-btn');
    const resetBtn = document.getElementById('reset-easel-btn');
    const cycleBtn = document.getElementById('cycle-easel-print-btn');
    const pctBadge = document.getElementById('easel-reveal-pct');
    const captionEl = document.getElementById('easel-caption');
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const MAIN_EASEL_PORTRAIT = {
      file: '__main_profile__',
      src: './assets/profile/amrudha-easel.jpg',
      alt: 'Amrudha Shree painting a portrait on canvas at her studio easel',
      caption: 'At my easel.'
    };
    const PAINTING_POOL = ARTWORKS.filter((a) => a.category === 'painting');

    let paintingBag = [];
    let lastPaintingFile = null;
    let strokeCount = 0;
    let celebrated = false;
    let drawing = false;
    let lastPt = null;

    function refillPaintingBag() {
      paintingBag = PAINTING_POOL.map((item) => ({
        file: item.file,
        src: getFullUrl(item.file),
        alt: `${item.title} (${item.medium})`,
        caption: `${item.title}, ${item.medium}.`
      }));
      for (let i = paintingBag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = paintingBag[i];
        paintingBag[i] = paintingBag[j];
        paintingBag[j] = tmp;
      }
      if (paintingBag.length > 1 && lastPaintingFile && paintingBag[paintingBag.length - 1].file === lastPaintingFile) {
        const swap = paintingBag[0];
        paintingBag[0] = paintingBag[paintingBag.length - 1];
        paintingBag[paintingBag.length - 1] = swap;
      }
    }

    function nextRandomPainting() {
      if (!paintingBag.length) refillPaintingBag();
      const picked = paintingBag.pop() || MAIN_EASEL_PORTRAIT;
      lastPaintingFile = picked.file;
      return picked;
    }

    function updateRevealProgress(forceValue) {
      let rawPct = typeof forceValue === 'number' ? forceValue : 0;
      if (typeof forceValue !== 'number') {
        try {
          const w = canvas.width;
          const h = canvas.height;
          if (w > 0 && h > 0) {
            const data = ctx.getImageData(0, 0, w, h).data;
            const step = 6;
            const inset = w > 24 && h > 24 ? 6 : 0;
            let cleared = 0;
            let total = 0;
            for (let y = inset; y < h - inset; y += step) {
              for (let x = inset; x < w - inset; x += step) {
                total += 1;
                const alpha = data[(y * w + x) * 4 + 3];
                if (alpha < 128) cleared += 1;
              }
            }
            rawPct = total ? (cleared / total) * 100 : 0;
          }
        } catch (_) {
          rawPct = 0;
        }
      }

      const pct = rawPct >= 99 ? 100 : Math.min(98, Math.floor(rawPct));

      if (pct === 100) {
        canvas.classList.add('is-dissolved');
        hint?.classList.add('is-hidden');
      }

      if (pctBadge) {
        pctBadge.textContent = pct === 100 ? '100% painted!' : `${pct}% painted`;
      }

      if (pct === 100 && !celebrated) {
        celebrated = true;
        launchEaselCelebration(canvas);
      }
    }

    function drawSketchVeil() {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      canvas.width = w;
      canvas.height = h;
      canvas.classList.remove('is-dissolved');
      hint?.classList.remove('is-hidden');
      strokeCount = 0;
      celebrated = false;
      updateRevealProgress(0);

      ctx.globalCompositeOperation = 'source-over';
      ctx.save();
      ctx.fillStyle = '#EFE6D6';
      ctx.fillRect(0, 0, w, h);

      if (img.complete && img.naturalWidth > 0) {
        // Cover math matching object-fit: cover; object-position: center top
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const boxRatio = w / h;
        let dw = w;
        let dh = h;
        let dx = 0;
        let dy = 0;
        if (imgRatio > boxRatio) {
          dh = h;
          dw = h * imgRatio;
          dx = (w - dw) / 2;
        } else {
          dw = w;
          dh = w / imgRatio;
          dy = 0;
        }
        ctx.filter = 'grayscale(100%) sepia(42%) contrast(1.06) brightness(1.06)';
        ctx.globalAlpha = 0.86;
        ctx.drawImage(img, dx, dy, dw, dh);
      }
      ctx.restore();

      // Subtle charcoal sketch crosshatching overlay
      ctx.save();
      ctx.strokeStyle = 'rgba(78, 63, 49, 0.14)';
      ctx.lineWidth = 1;
      for (let i = -h; i < w + h; i += 14) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + h * 0.45, h);
        ctx.stroke();
      }
      ctx.restore();
    }

    function brushErase(x, y) {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      const r = 28;
      if (lastPt) {
        ctx.lineWidth = r * 1.9;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(lastPt.x, lastPt.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      // Soft bristled dabs
      for (let i = 0; i < 4; i++) {
        const ox = (Math.random() - 0.5) * 16;
        const oy = (Math.random() - 0.5) * 16;
        ctx.beginPath();
        ctx.arc(x + ox, y + oy, r * (0.45 + Math.random() * 0.45), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      lastPt = { x, y };
      hint?.classList.add('is-hidden');
      strokeCount += 1;
      if (strokeCount % 2 === 0) updateRevealProgress();
    }

    function getLocalPos(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
      const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }

    canvas.addEventListener('pointerdown', (e) => {
      drawing = true;
      canvas.setPointerCapture?.(e.pointerId);
      const pt = getLocalPos(e);
      lastPt = pt;
      brushErase(pt.x, pt.y);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!drawing && e.pointerType === 'touch') return;
      if (drawing || e.pointerType === 'mouse') {
        const pt = getLocalPos(e);
        if (!drawing) {
          lastPt = pt;
          brushErase(pt.x, pt.y);
        } else {
          brushErase(pt.x, pt.y);
        }
      }
    });

    canvas.addEventListener('pointerup', () => {
      drawing = false;
      lastPt = null;
      updateRevealProgress();
    });
    canvas.addEventListener('pointerleave', () => {
      drawing = false;
      lastPt = null;
      if (!celebrated) updateRevealProgress();
    });

    revealBtn?.addEventListener('click', () => {
      updateRevealProgress(100);
    });

    resetBtn?.addEventListener('click', () => {
      drawSketchVeil();
    });

    cycleBtn?.addEventListener('click', () => {
      const next = nextRandomPainting();
      img.src = next.src;
      img.alt = next.alt;
      if (captionEl) captionEl.textContent = next.caption;
      if (img.complete) {
        drawSketchVeil();
      } else {
        img.addEventListener('load', drawSketchVeil, { once: true });
      }
    });

    if (img.complete) {
      drawSketchVeil();
    } else {
      img.addEventListener('load', drawSketchVeil, { once: true });
    }
  }

  /* ------------------------------------------------------------------------
     Home Page: Random Studio Artwork Spotlight (#studio-spotlight-card)
  ------------------------------------------------------------------------ */
  function initStudioSpotlight() {
    const card = document.getElementById('studio-spotlight-card');
    const shuffleBtn = document.getElementById('spotlight-shuffle-btn');
    const thumbImg = document.getElementById('spotlight-thumb');
    const thumbLink = document.getElementById('spotlight-thumb-link');
    const mediumEl = document.getElementById('spotlight-medium');
    const titleEl = document.getElementById('spotlight-title');
    const openLink = document.getElementById('spotlight-open-link');
    if (!card || !shuffleBtn || !thumbImg || !titleEl) return;

    let queue = [];
    let lastSlug = 'terracotta-ivory-lace-bolero.jpg';

    function refillQueue() {
      queue = [...ARTWORKS];
      for (let i = queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = queue[i];
        queue[i] = queue[j];
        queue[j] = tmp;
      }
      if (queue.length > 1 && lastSlug && queue[queue.length - 1].file === lastSlug) {
        const tmp = queue[0];
        queue[0] = queue[queue.length - 1];
        queue[queue.length - 1] = tmp;
      }
    }

    shuffleBtn.addEventListener('click', () => {
      if (!queue.length) refillQueue();
      const item = queue.pop();
      if (!item) return;
      lastSlug = item.file;
      const pieceSlug = item.file.replace(/\.jpg$/i, '');
      const destHref = `./atelier.html?piece=${encodeURIComponent(pieceSlug)}`;

      card.classList.add('is-swapping');
      setTimeout(() => {
        thumbImg.src = getThumbUrl(item.file);
        thumbImg.alt = `${item.title} (${item.medium})`;
        if (mediumEl) mediumEl.textContent = item.medium;
        titleEl.textContent = item.title;
        if (thumbLink) thumbLink.href = destHref;
        if (openLink) {
          openLink.href = destHref;
          openLink.textContent = 'View in studio →';
        }
        card.classList.remove('is-swapping');
      }, 140);
    });
  }

  /* ------------------------------------------------------------------------
     Home Page: Damped Pendulum Physics for Hanging Macramé Plant
  ------------------------------------------------------------------------ */
  function initMacramePendulum() {
    const pendulum = document.getElementById('macrame-pendulum');
    if (!pendulum || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let angle = 2.5;
    let velocity = 0.08;
    let running = true;

    function impulse(amount) {
      velocity += amount;
      if (!running) {
        running = true;
        requestAnimationFrame(tick);
      }
    }

    function tick() {
      const spring = -0.022 * angle;
      velocity = (velocity + spring) * 0.985;
      angle += velocity;

      const baseScale = window.innerWidth <= 640 ? ' scale(0.84)' : '';
      pendulum.style.transform = `rotate(${angle.toFixed(2)}deg)${baseScale}`;

      if (Math.abs(angle) > 0.06 || Math.abs(velocity) > 0.015) {
        requestAnimationFrame(tick);
      } else {
        running = false;
        pendulum.style.transform = window.innerWidth <= 640 ? 'rotate(0deg) scale(0.84)' : 'rotate(0deg)';
      }
    }

    pendulum.addEventListener('pointerenter', () => impulse(0.45));
    pendulum.addEventListener('click', () => impulse(-0.75));
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------------
     My Story Page: Braided Tapestry, Role Filters, Certifications & Recommendations
  ------------------------------------------------------------------------ */
  function initStoryPage() {
    const loom = document.getElementById('tapestry-loom');
    if (!loom) return;

    // 1. Braided 3-Strand Scroll Spine
    const strands = Array.from(loom.querySelectorAll('.braid-strand'));
    if (strands.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const lengths = strands.map((s) => {
        const len = s.getTotalLength();
        s.style.strokeDasharray = `${len}`;
        return len;
      });

      const updateBraid = () => {
        const rect = loom.getBoundingClientRect();
        const totalTravel = rect.height + window.innerHeight * 0.35;
        const traveled = window.innerHeight * 0.72 - rect.top;
        const progress = Math.min(1, Math.max(0.14, traveled / totalTravel));
        strands.forEach((s, i) => {
          s.style.strokeDashoffset = `${(lengths[i] * (1 - progress)).toFixed(1)}`;
        });
      };

      window.addEventListener('scroll', updateBraid, { passive: true });
      window.addEventListener('resize', updateBraid, { passive: true });
      updateBraid();
    }

    // 2. Quick Section Jump Buttons + Scroll-Spy Active State
    const stops = Array.from(document.querySelectorAll('.scrubber-stop[data-chapter]'));
    const focusBtns = Array.from(document.querySelectorAll('#journey-focus-tabs .role-choice-btn[data-focus]'));
    const focusChapters = Array.from(document.querySelectorAll('.journey-chapter[data-focus]'));

    const setActiveStop = (num) => {
      stops.forEach((s) => s.classList.toggle('is-active', s.dataset.chapter === String(num)));
    };

    const jumpToChapter = (num) => {
      const target = document.getElementById(`chapter-${num}`);
      if (!target) return;
      if (target.hidden && focusBtns.length) {
        applyFocusFilter('all');
      }
      setActiveStop(num);
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    stops.forEach((s) => {
      s.addEventListener('click', () => jumpToChapter(s.dataset.chapter));
    });

    if ('IntersectionObserver' in window && stops.length) {
      const sectionObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const ch = entry.target.dataset.chapter;
            if (ch) setActiveStop(ch);
          });
        },
        { rootMargin: '-28% 0px -56% 0px', threshold: 0.02 }
      );
      document.querySelectorAll('.journey-chapter[data-chapter]').forEach((el) => sectionObs.observe(el));
    }

    // 3. Role Focus Filter Tabs
    const applyFocusFilter = (focus) => {
      focusBtns.forEach((btn) => {
        const active = btn.dataset.focus === focus;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
      focusChapters.forEach((chapter) => {
        const tags = (chapter.dataset.focus || '').split(/\s+/).filter(Boolean);
        chapter.hidden = !(focus === 'all' || tags.includes(focus));
      });
    };

    focusBtns.forEach((btn) => {
      btn.addEventListener('click', () => applyFocusFilter(btn.dataset.focus || 'all'));
    });

    // 4. Optional Technical Details Toggles (graceful no-op when full text is displayed)
    const detailToggles = Array.from(document.querySelectorAll('.tech-details-toggle[aria-expanded]'));
    detailToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.loom-card');
        const drawer = card?.querySelector('.tech-details-drawer');
        if (!drawer) return;
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!isOpen));
        btn.textContent = isOpen ? 'Technical & Role Details +' : 'Hide Details −';
        drawer.hidden = isOpen;
      });
    });

    // 5. Filterable Certifications & Specialist Training Shelf
    const certTabs = Array.from(document.querySelectorAll('#cert-filter-tabs [data-cert-filter]'));
    const certCards = Array.from(document.querySelectorAll('#cert-shelf-grid .cert-card[data-cert-cat]'));
    if (certTabs.length && certCards.length) {
      certTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const cat = tab.dataset.certFilter || 'all';
          certTabs.forEach((t) => {
            const active = t === tab;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', String(active));
          });
          certCards.forEach((card) => {
            card.hidden = !(cat === 'all' || card.dataset.certCat === cat);
          });
        });
      });
    }

    // 6. Expandable Full Competency Matrix
    const matrixBtn = document.getElementById('toggle-skill-matrix-btn');
    const matrixDrawer = document.getElementById('skill-matrix-drawer');
    matrixBtn?.addEventListener('click', () => {
      if (!matrixDrawer) return;
      const isOpen = matrixBtn.getAttribute('aria-expanded') === 'true';
      matrixBtn.setAttribute('aria-expanded', String(!isOpen));
      matrixBtn.textContent = isOpen
        ? 'Show Matrix +'
        : 'Hide Matrix −';
      matrixDrawer.hidden = isOpen;
    });

    // 7. Recruiter "Where I Can Help" Interactive Role Switcher
    const roleButtons = document.querySelectorAll('.role-choice-btn[data-role]');
    const rolePanels = document.querySelectorAll('[data-role-panel]');
    if (roleButtons.length && rolePanels.length) {
      const selectRole = (role) => {
        roleButtons.forEach((btn) => {
          const active = btn.dataset.role === role;
          btn.setAttribute('aria-pressed', String(active));
          btn.classList.toggle('is-active', active);
        });
        rolePanels.forEach((panel) => {
          panel.hidden = panel.dataset.rolePanel !== role;
        });
      };

      roleButtons.forEach((btn) => {
        btn.addEventListener('click', () => selectRole(btn.dataset.role));
      });
    }

    // 8. Recruiter Deep-Jump Buttons & Spotlight Pulse
    document.querySelectorAll('.role-jump-btn[data-jump-chapter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const num = btn.dataset.jumpChapter;
        const target = document.getElementById(`chapter-${num}`);
        if (!target) return;
        if (target.hidden && focusBtns.length) {
          applyFocusFilter('all');
        }
        setActiveStop(num);
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const card = target.querySelector('.loom-card');
        if (card) {
          card.classList.remove('is-spotlighted');
          void card.offsetWidth;
          card.classList.add('is-spotlighted');
          setTimeout(() => card.classList.remove('is-spotlighted'), 1700);
        }
      });
    });

    // 9. Print Profile Button (expands technical details for printing)
    const printProfileBtn = document.getElementById('print-profile-btn');
    printProfileBtn?.addEventListener('click', () => {
      const drawers = Array.from(document.querySelectorAll('.tech-details-drawer'));
      const prevHidden = drawers.map((d) => d.hidden);
      drawers.forEach((d) => {
        d.hidden = false;
      });
      window.addEventListener(
        'afterprint',
        () => {
          drawers.forEach((d, idx) => {
            d.hidden = prevHidden[idx];
          });
        },
        { once: true }
      );
      window.print();
    });
  }

  /* ------------------------------------------------------------------------
     Scroll Reveal & Watercolor Parallax
  ------------------------------------------------------------------------ */
  function initRevealAndParallax() {
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    } else {
      const markVisible = (el) => {
        if (el.classList.contains('is-visible')) return;
        const delay = Number(el.dataset.delay || 0);
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add('is-visible');
      };

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            markVisible(entry.target);
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px 80px 0px' }
      );

      revealEls.forEach((el) => observer.observe(el));

      const revealVisible = () => {
        const triggerBottom = window.innerHeight + 80;
        revealEls.forEach((el) => {
          if (el.classList.contains('is-visible')) return;
          if (el.getBoundingClientRect().top <= triggerBottom) {
            markVisible(el);
            observer.unobserve(el);
          }
        });
      };

      requestAnimationFrame(revealVisible);
      setTimeout(revealVisible, 350);
      window.addEventListener('load', revealVisible);
      window.addEventListener('scroll', revealVisible, { passive: true });
    }

    if (!reduced) {
      const parallaxEls = document.querySelectorAll('[data-parallax]');
      window.addEventListener(
        'pointermove',
        (e) => {
          if (e.pointerType === 'touch') return;
          const dx = e.clientX / window.innerWidth - 0.5;
          const dy = e.clientY / window.innerHeight - 0.5;
          parallaxEls.forEach((el) => {
            const factor = Number(el.dataset.parallax || 0.02);
            el.style.transform = `translate3d(${(dx * factor * 900).toFixed(1)}px, ${(dy * factor * 900).toFixed(1)}px, 0)`;
          });
        },
        { passive: true }
      );
    }
  }

  /* ------------------------------------------------------------------------
     Atelier Page: Playable 4-Mode High-DPI Mini Maker Studio
  ------------------------------------------------------------------------ */
  function initMakerSandbox() {
    const canvas = document.getElementById('maker-sandbox-canvas');
    const modeTabs = document.querySelectorAll('.sandbox-tab');
    const hintEl = document.getElementById('sandbox-hint');
    const subtoolsEl = document.getElementById('sandbox-subtools');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const LOGICAL_W = 520;
    const LOGICAL_H = 220;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = LOGICAL_W * dpr;
    canvas.height = LOGICAL_H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let sandboxMode = 'clay'; // 'clay' | 'crochet' | 'string' | 'paint'
    let pointerDown = false;

    /* --------------------------------------------------------------------
       1. Interactive 3D Hand-Sculpted Clay Studio (Orbitable 3D Mesh)
    -------------------------------------------------------------------- */
    const CLAY_CX = 260;
    const CLAY_CY = 114;
    const CLAY_PTS = 32;
    const CLAY_RINGS = 10;
    let clayMeshRadii = [];
    let clayRimLift = [];
    let clayHeight = 68;
    let clayCamYaw = -0.35;
    let clayCamPitch = 0.54;
    let clayDraggingOrbit = false;
    let clayLastPtr = null;
    let clayBounds = { minX: 165, maxX: 355, minY: 36, maxY: 186 };
    let clayImprints = [];
    let clayTool = 'sculpt'; // 'sculpt' | 'leaf' | 'smooth' | 'orbit'
    let clayPresetIdx = 0;
    const CLAY_PRESET_NAMES = ['Pinch Bowl', 'Fluted Dish', 'Hex Planter', 'Organic Vase'];
    const GLAZES = [
      { name: 'Turquoise Glaze', hex: '#4B8E93', rgb: [75, 142, 147], hiRgb: [195, 232, 236] },
      { name: 'Cobalt Blue', hex: '#345995', rgb: [52, 89, 149], hiRgb: [180, 206, 244] },
      { name: 'Metallic Bronze', hex: '#946B43', rgb: [148, 107, 67], hiRgb: [232, 202, 168] },
      { name: 'Terracotta Clay', hex: '#C86D51', rgb: [200, 109, 81], hiRgb: [246, 200, 184] },
      { name: 'Lavender Lilac', hex: '#9A83A8', rgb: [154, 131, 168], hiRgb: [224, 212, 234] }
    ];
    let activeGlaze = GLAZES[0];

    function smoothClayContour(passes = 2, centerRing = -1, centerSeg = -1, ringSpan = 2, segSpan = 4) {
      for (let p = 0; p < passes; p++) {
        const nextR = clayMeshRadii.map((row) => [...row]);
        const nextRim = [...clayRimLift];
        for (let r = 0; r < CLAY_RINGS; r++) {
          if (centerRing >= 0 && Math.abs(r - centerRing) > ringSpan) continue;
          for (let s = 0; s < CLAY_PTS; s++) {
            if (centerSeg >= 0) {
              const sDiff = Math.min(Math.abs(s - centerSeg), CLAY_PTS - Math.abs(s - centerSeg));
              if (sDiff > segSpan) continue;
            }
            const sPrev = clayMeshRadii[r][(s - 1 + CLAY_PTS) % CLAY_PTS];
            const sNext = clayMeshRadii[r][(s + 1) % CLAY_PTS];
            const rDown = r > 0 ? clayMeshRadii[r - 1][s] : clayMeshRadii[r][s];
            const rUp = r < CLAY_RINGS - 1 ? clayMeshRadii[r + 1][s] : clayMeshRadii[r][s];
            nextR[r][s] = 0.44 * clayMeshRadii[r][s] + 0.16 * (sPrev + sNext) + 0.12 * (rDown + rUp);
          }
        }
        for (let s = 0; s < CLAY_PTS; s++) {
          if (centerSeg >= 0) {
            const sDiff = Math.min(Math.abs(s - centerSeg), CLAY_PTS - Math.abs(s - centerSeg));
            if (sDiff > segSpan) continue;
          }
          const lp = clayRimLift[(s - 1 + CLAY_PTS) % CLAY_PTS];
          const ln = clayRimLift[(s + 1) % CLAY_PTS];
          nextRim[s] = 0.52 * clayRimLift[s] + 0.24 * (lp + ln);
        }
        clayMeshRadii = nextR;
        clayRimLift = nextRim;
      }
    }

    function applyClayPreset(presetIdx = 0) {
      clayPresetIdx = presetIdx % CLAY_PRESET_NAMES.length;
      clayMeshRadii = [];
      clayRimLift = [];
      clayImprints = [];
      clayHeight = clayPresetIdx === 3 ? 104 : clayPresetIdx === 1 ? 52 : clayPresetIdx === 2 ? 78 : 68;

      for (let s = 0; s < CLAY_PTS; s++) {
        const ang = (s / CLAY_PTS) * Math.PI * 2;
        if (clayPresetIdx === 1) {
          clayRimLift.push(Math.sin(ang * 8) * 3.5);
        } else {
          clayRimLift.push(Math.sin(ang * 2) * 1.4);
        }
      }

      for (let r = 0; r < CLAY_RINGS; r++) {
        const t = r / (CLAY_RINGS - 1);
        const row = [];
        for (let s = 0; s < CLAY_PTS; s++) {
          const ang = (s / CLAY_PTS) * Math.PI * 2;
          if (clayPresetIdx === 1) {
            // Fluted wide ceramic dish
            const baseR = 46 + Math.pow(t, 0.72) * 38;
            row.push(baseR + Math.sin(ang * 8) * (1.2 + t * 5.2));
          } else if (clayPresetIdx === 2) {
            // Hexagonal hand-built planter
            const sector = ((ang + Math.PI / 6) % (Math.PI / 3)) - Math.PI / 6;
            const hexScale = Math.min(1.18, 0.96 / Math.max(0.75, Math.cos(sector)));
            row.push((44 + t * 20) * hexScale);
          } else if (clayPresetIdx === 3) {
            // Tall organic narrow-neck ceramic vase
            const belly = Math.sin(t * Math.PI * 0.92) * 24;
            const neck = t > 0.65 ? -Math.sin(((t - 0.65) / 0.35) * Math.PI * 0.7) * 14 : 0;
            row.push(42 + belly + neck + Math.sin(ang * 3) * 1.2);
          } else {
            // Pinch bowl silhouette
            const profile = 40 + Math.sin(t * Math.PI * 0.62) * 34;
            row.push(profile + Math.sin(ang * 3 + t * 1.5) * 1.5);
          }
        }
        clayMeshRadii.push(row);
      }
      if (clayPresetIdx === 2) smoothClayContour(2);
    }

    function resetClay() {
      clayCamYaw = -0.35;
      clayCamPitch = 0.54;
      applyClayPreset(clayPresetIdx);
    }
    applyClayPreset(0);

    /* --------------------------------------------------------------------
       2. Live Crochet Cloth State
    -------------------------------------------------------------------- */
    let CROCHET_YARNS = [
      { name: 'Burgundy', hex: '#8E3A4D' },
      { name: 'Terracotta', hex: '#C86D51' },
      { name: 'Forest Pine', hex: '#426B5C' },
      { name: 'Folk Magenta', hex: '#B84B78' }
    ];
    let crochetYarn = CROCHET_YARNS[0].hex;
    let crochetStitches = [];
    let lastStitchPos = null;
    let hookPos = { x: 260, y: 110 };

    /* --------------------------------------------------------------------
       3. Empty-Start & Step-by-Step Animated String Art Pin Loom
    -------------------------------------------------------------------- */
    const PIN_COUNT = 28;
    const LOOM_CX = 260;
    const LOOM_CY = 110;
    const LOOM_R = 88;
    let stringLines = [];
    let activePin = null;
    let weaveQueue = [];
    let weavePatternIndex = 0;
    let activeShuttle = null;
    let weaveTimer = null;

    const PATTERN_NAMES = ['Lotus Mandala', 'Cardioid Heart Envelope', 'Starburst Compass'];

    function getPinCoords(idx) {
      const a = (idx / PIN_COUNT) * Math.PI * 2 - Math.PI / 2;
      return { x: LOOM_CX + Math.cos(a) * LOOM_R, y: LOOM_CY + Math.sin(a) * LOOM_R };
    }

    function buildWeavePattern(kind) {
      const seq = [];
      if (kind === 0) {
        // Lotus Mandala
        for (let i = 0; i < PIN_COUNT; i++) seq.push([i, (i + 9) % PIN_COUNT]);
        for (let i = 0; i < PIN_COUNT; i++) seq.push([i, (i + 12) % PIN_COUNT]);
      } else if (kind === 1) {
        // Cardioid Heart Envelope (i -> 2*i mod N)
        for (let i = 0; i < PIN_COUNT; i++) seq.push([i, (i * 2) % PIN_COUNT]);
        for (let i = 0; i < PIN_COUNT; i += 2) seq.push([i, (i * 3) % PIN_COUNT]);
      } else {
        // Starburst Compass
        for (let i = 0; i < PIN_COUNT; i++) seq.push([i, (i + 7) % PIN_COUNT]);
        for (let i = 0; i < PIN_COUNT; i++) seq.push([i, (i + 13) % PIN_COUNT]);
      }
      return seq;
    }

    function stopAutoWeave() {
      if (weaveTimer) {
        clearInterval(weaveTimer);
        weaveTimer = null;
      }
      weaveQueue = [];
      activeShuttle = null;
    }

    function startAutoWeaveStepByStep() {
      stopAutoWeave();
      stringLines = [];
      activePin = null;
      const patternIdx = weavePatternIndex % PATTERN_NAMES.length;
      const patternName = PATTERN_NAMES[patternIdx];
      weavePatternIndex += 1;
      weaveQueue = buildWeavePattern(patternIdx);

      if (hintEl && sandboxMode === 'string') {
        hintEl.textContent = `Weaving "${patternName}" thread by thread…`;
      }

      let cursor = 0;
      weaveTimer = setInterval(() => {
        if (cursor >= weaveQueue.length) {
          stopAutoWeave();
          if (hintEl && sandboxMode === 'string') {
            hintEl.textContent = `Finished "${patternName}". Drag pins or click Auto-Weave for the next design.`;
          }
          return;
        }
        const pair = weaveQueue[cursor++];
        stringLines.push(pair);
        activeShuttle = { from: pair[0], to: pair[1], t: 0 };
      }, 36);
    }

    /* --------------------------------------------------------------------
       4. Playable Paint Canvas Studio Mode (Persistent Offscreen Buffer)
    -------------------------------------------------------------------- */
    let PAINT_PIGMENTS = [
      { name: 'Terracotta Crimson', hex: '#C86D51' },
      { name: 'Cerulean Blue', hex: '#3B7A8C' },
      { name: 'Himalayan Ochre', hex: '#D49B4B' },
      { name: 'Eucalyptus Sage', hex: '#5E7A68' },
      { name: 'Mulberry Rose', hex: '#A8586B' },
      { name: 'Midnight Indigo', hex: '#2B3A4A' }
    ];
    let activePaintColor = PAINT_PIGMENTS[0].hex;
    let activeBrushStyle = 'oil'; // 'oil' | 'watercolor'
    let activeAutoScene = '';
    let lastPaintPos = null;
    let autoPaintTimer = null;

    const paintBuffer = document.createElement('canvas');
    paintBuffer.width = LOGICAL_W * dpr;
    paintBuffer.height = LOGICAL_H * dpr;
    const pBufCtx = paintBuffer.getContext('2d');
    if (pBufCtx) pBufCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    function clearPaintCanvas() {
      if (autoPaintTimer) {
        clearInterval(autoPaintTimer);
        autoPaintTimer = null;
      }
      if (!pBufCtx) return;
      pBufCtx.clearRect(0, 0, LOGICAL_W, LOGICAL_H);
      pBufCtx.fillStyle = '#F7F1E7';
      pBufCtx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);
      // Subtle linen canvas weave texture
      pBufCtx.strokeStyle = 'rgba(130, 112, 94, 0.06)';
      pBufCtx.lineWidth = 1;
      for (let x = 0; x < LOGICAL_W; x += 6) {
        pBufCtx.beginPath();
        pBufCtx.moveTo(x, 0);
        pBufCtx.lineTo(x, LOGICAL_H);
        pBufCtx.stroke();
      }
      for (let y = 0; y < LOGICAL_H; y += 6) {
        pBufCtx.beginPath();
        pBufCtx.moveTo(0, y);
        pBufCtx.lineTo(LOGICAL_W, y);
        pBufCtx.stroke();
      }
    }
    clearPaintCanvas();

    function paintDabOnBuffer(fromPt, toPt, colorHex, style) {
      if (!pBufCtx) return;
      pBufCtx.save();
      if (style === 'oil') {
        pBufCtx.strokeStyle = colorHex;
        pBufCtx.lineCap = 'round';
        pBufCtx.lineJoin = 'round';
        for (let b = -3; b <= 3; b += 2) {
          pBufCtx.globalAlpha = b === 0 ? 0.88 : 0.45;
          pBufCtx.lineWidth = b === 0 ? 6 : 2.5;
          pBufCtx.beginPath();
          pBufCtx.moveTo(fromPt.x + b, fromPt.y + b * 0.6);
          pBufCtx.lineTo(toPt.x + b, toPt.y + b * 0.6);
          pBufCtx.stroke();
        }
        // Subtle impasto specular ridge
        pBufCtx.strokeStyle = 'rgba(255, 250, 244, 0.28)';
        pBufCtx.lineWidth = 1.4;
        pBufCtx.beginPath();
        pBufCtx.moveTo(fromPt.x - 1, fromPt.y - 2);
        pBufCtx.lineTo(toPt.x - 1, toPt.y - 2);
        pBufCtx.stroke();
      } else {
        // Watercolor wash bloom
        const steps = Math.max(1, Math.ceil(Math.hypot(toPt.x - fromPt.x, toPt.y - fromPt.y) / 8));
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const x = fromPt.x + (toPt.x - fromPt.x) * t;
          const y = fromPt.y + (toPt.y - fromPt.y) * t;
          pBufCtx.fillStyle = colorHex;
          pBufCtx.globalAlpha = 0.12;
          pBufCtx.beginPath();
          pBufCtx.arc(x, y, 16 + Math.random() * 5, 0, Math.PI * 2);
          pBufCtx.fill();
        }
      }
      pBufCtx.restore();
    }

    const AUTO_PAINT_LABELS = {
      sunset: 'Sunset Canal',
      tulips: 'Dutch Tulips',
      starry: 'Starry Night',
      lotus: 'Lotus Pond'
    };

    function buildAutoPaintStrokes(sceneKey) {
      const strokes = [];
      if (sceneKey === 'tulips') {
        // Soft cerulean sky wash
        for (let x = 24; x <= 496; x += 52) {
          strokes.push({ a: { x, y: 36 }, b: { x: x + 46, y: 40 }, c: '#8AB6C2', s: 'watercolor' });
          strokes.push({ a: { x, y: 74 }, b: { x: x + 46, y: 76 }, c: '#D8E7EC', s: 'watercolor' });
        }
        // Sage meadow horizon
        for (let x = 18; x <= 496; x += 40) {
          strokes.push({ a: { x, y: 176 }, b: { x: x + 38, y: 176 }, c: '#5E7A68', s: 'watercolor' });
          strokes.push({ a: { x, y: 194 }, b: { x: x + 38, y: 194 }, c: '#426B5C', s: 'oil' });
        }
        // Stems, leaves & vibrant tulip blooms across canvas
        const tulipSpecs = [
          { x: 96, top: 82, color: '#C86D51' },
          { x: 176, top: 68, color: '#D49B4B' },
          { x: 260, top: 76, color: '#A8586B' },
          { x: 344, top: 70, color: '#C86D51' },
          { x: 424, top: 84, color: '#D49B4B' }
        ];
        tulipSpecs.forEach((t, idx) => {
          strokes.push({ a: { x: t.x, y: 184 }, b: { x: t.x, y: t.top + 16 }, c: '#5E7A68', s: 'oil' });
          strokes.push({
            a: { x: t.x, y: 158 },
            b: { x: t.x + (idx % 2 === 0 ? -18 : 18), y: 132 },
            c: '#426B5C',
            s: 'oil'
          });
          // Cupped 3-petal tulip head
          strokes.push({ a: { x: t.x - 10, y: t.top + 12 }, b: { x: t.x - 12, y: t.top - 6 }, c: t.color, s: 'oil' });
          strokes.push({ a: { x: t.x + 10, y: t.top + 12 }, b: { x: t.x + 12, y: t.top - 6 }, c: t.color, s: 'oil' });
          strokes.push({ a: { x: t.x, y: t.top + 16 }, b: { x: t.x, y: t.top - 12 }, c: t.color, s: 'oil' });
        });
      } else if (sceneKey === 'starry') {
        // Night sky wash in midnight indigo & deep cerulean
        for (let y = 26; y <= 148; y += 30) {
          for (let x = 24; x <= 496; x += 54) {
            strokes.push({
              a: { x, y },
              b: { x: x + 48, y: y + Math.sin(x * 0.03) * 8 },
              c: y < 86 ? '#2B3A4A' : '#3B7A8C',
              s: 'watercolor'
            });
          }
        }
        // Swirling stars & crescent moon halos
        const stars = [
          { x: 96, y: 52, r: 12 },
          { x: 204, y: 44, r: 10 },
          { x: 318, y: 60, r: 11 },
          { x: 428, y: 48, r: 16 }
        ];
        stars.forEach((st) => {
          for (let a = 0; a < Math.PI * 2; a += 0.75) {
            strokes.push({
              a: { x: st.x + Math.cos(a) * st.r, y: st.y + Math.sin(a) * st.r },
              b: { x: st.x + Math.cos(a + 0.65) * st.r, y: st.y + Math.sin(a + 0.65) * st.r },
              c: '#D49B4B',
              s: 'oil'
            });
          }
        });
        // Delft canal house gable silhouettes & warm lit windows
        const gables = [92, 174, 260, 346, 428];
        gables.forEach((gx, idx) => {
          const topY = idx % 2 === 0 ? 112 : 122;
          strokes.push({ a: { x: gx - 24, y: 184 }, b: { x: gx - 24, y: topY }, c: '#2B3A4A', s: 'oil' });
          strokes.push({ a: { x: gx + 24, y: 184 }, b: { x: gx + 24, y: topY }, c: '#2B3A4A', s: 'oil' });
          strokes.push({ a: { x: gx - 24, y: topY }, b: { x: gx, y: topY - 20 }, c: '#2B3A4A', s: 'oil' });
          strokes.push({ a: { x: gx + 24, y: topY }, b: { x: gx, y: topY - 20 }, c: '#2B3A4A', s: 'oil' });
          strokes.push({ a: { x: gx - 8, y: topY + 26 }, b: { x: gx - 4, y: topY + 26 }, c: '#E9B963', s: 'oil' });
          strokes.push({ a: { x: gx + 6, y: topY + 26 }, b: { x: gx + 10, y: topY + 26 }, c: '#E9B963', s: 'oil' });
        });
        for (let x = 36; x <= 480; x += 48) {
          strokes.push({ a: { x, y: 196 }, b: { x: x + 36, y: 196 }, c: '#3B7A8C', s: 'watercolor' });
        }
      } else if (sceneKey === 'lotus') {
        // Serene pond water washes
        for (let y = 38; y <= 186; y += 34) {
          for (let x = 24; x <= 496; x += 56) {
            strokes.push({
              a: { x, y },
              b: { x: x + 50, y: y + 4 },
              c: y % 68 < 34 ? '#3B7A8C' : '#5E7A68',
              s: 'watercolor'
            });
          }
        }
        // Floating lily pads
        [
          { x: 132, y: 152, rx: 36 },
          { x: 392, y: 146, rx: 40 },
          { x: 260, y: 162, rx: 48 }
        ].forEach((pad) => {
          for (let a = 0.25; a < Math.PI * 2 - 0.25; a += 0.55) {
            strokes.push({
              a: { x: pad.x, y: pad.y },
              b: { x: pad.x + Math.cos(a) * pad.rx, y: pad.y + Math.sin(a) * (pad.rx * 0.42) },
              c: '#5E7A68',
              s: 'oil'
            });
          }
        });
        // Centered blooming lotus flower in rose, terracotta & ochre
        const petals = [
          { dx: -34, dy: -16, c: '#A8586B' },
          { dx: 34, dy: -16, c: '#A8586B' },
          { dx: -24, dy: -36, c: '#C86D51' },
          { dx: 24, dy: -36, c: '#C86D51' },
          { dx: -12, dy: -52, c: '#A8586B' },
          { dx: 12, dy: -52, c: '#A8586B' },
          { dx: 0, dy: -60, c: '#C86D51' }
        ];
        petals.forEach((p) => {
          strokes.push({ a: { x: 260, y: 142 }, b: { x: 260 + p.dx, y: 142 + p.dy }, c: p.c, s: 'oil' });
        });
        strokes.push({ a: { x: 254, y: 124 }, b: { x: 266, y: 124 }, c: '#D49B4B', s: 'oil' });
      } else {
        // Default 'sunset': Sunset Canal
        for (let x = 20; x <= 500; x += 48) {
          strokes.push({ a: { x, y: 34 }, b: { x: x + 44, y: 38 }, c: '#D49B4B', s: 'watercolor' });
          strokes.push({ a: { x, y: 66 }, b: { x: x + 44, y: 68 }, c: '#C86D51', s: 'watercolor' });
        }
        for (let ang = 0; ang < Math.PI * 2; ang += 0.45) {
          strokes.push({
            a: { x: 260, y: 88 },
            b: { x: 260 + Math.cos(ang) * 20, y: 88 + Math.sin(ang) * 20 },
            c: '#E9B963',
            s: 'oil'
          });
        }
        for (let x = 14; x < 500; x += 26) {
          const y1 = 132 - Math.sin(x * 0.018) * 24;
          const y2 = 132 - Math.sin((x + 26) * 0.018) * 24;
          strokes.push({ a: { x, y: y1 }, b: { x: x + 26, y: y2 }, c: '#5E7A68', s: 'oil' });
        }
        for (let x = 14; x < 500; x += 24) {
          const y1 = 160 - Math.cos(x * 0.022) * 18;
          const y2 = 160 - Math.cos((x + 24) * 0.022) * 18;
          strokes.push({ a: { x, y: y1 }, b: { x: x + 24, y: y2 }, c: '#2B3A4A', s: 'oil' });
        }
        for (let x = 180; x <= 340; x += 22) {
          strokes.push({ a: { x, y: 186 }, b: { x: x + 18, y: 186 }, c: '#3B7A8C', s: 'watercolor' });
          strokes.push({ a: { x: x + 6, y: 196 }, b: { x: x + 20, y: 196 }, c: '#D49B4B', s: 'oil' });
        }
      }
      return strokes;
    }

    function startAutoPaint(sceneKey = 'sunset') {
      clearPaintCanvas();
      activeAutoScene = sceneKey;
      if (sandboxMode === 'paint') renderSubtools();
      const label = AUTO_PAINT_LABELS[sceneKey] || 'Sunset Canal';
      const strokes = buildAutoPaintStrokes(sceneKey);

      if (hintEl && sandboxMode === 'paint') {
        hintEl.textContent = `Painting "${label}" stroke by stroke...`;
      }

      let idx = 0;
      autoPaintTimer = setInterval(() => {
        if (idx >= strokes.length) {
          clearInterval(autoPaintTimer);
          autoPaintTimer = null;
          if (hintEl && sandboxMode === 'paint') {
            hintEl.textContent = `Finished "${label}". Keep adding your own brushstrokes or Save PNG.`;
          }
          return;
        }
        const st = strokes[idx++];
        paintDabOnBuffer(st.a, st.b, st.c, st.s);
      }, 38);
    }

    function startAutoPaintSunset() {
      startAutoPaint('sunset');
    }

    function saveSandboxPng() {
      const exportCanvas = document.createElement('canvas');
      exportCanvas.width = canvas.width;
      exportCanvas.height = canvas.height;
      const exportCtx = exportCanvas.getContext('2d');
      if (!exportCtx) return;

      exportCtx.fillStyle = '#F7F1E7';
      exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
      exportCtx.drawImage(canvas, 0, 0);

      const link = document.createElement('a');
      link.download = `amrudha-studio-${sandboxMode}.png`;
      link.href = exportCanvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      link.remove();

      if (hintEl) {
        hintEl.textContent = `Saved your ${sandboxMode} creation as PNG!`;
      }
    }

    /* --------------------------------------------------------------------
       Subtools Bar & Canvas Input Wiring
    -------------------------------------------------------------------- */
    function renderSubtools() {
      if (!subtoolsEl) return;
      if (sandboxMode === 'clay') {
        if (hintEl) {
          if (clayTool === 'leaf') {
            hintEl.textContent = 'Tap inside the 3D bowl to press leaf impressions; drag outside to orbit';
          } else if (clayTool === 'smooth') {
            hintEl.textContent = 'Brush along any 3D wall or rim to smooth; drag outside to orbit';
          } else if (clayTool === 'orbit') {
            hintEl.textContent = 'Drag anywhere on canvas to rotate & inspect your 3D piece';
          } else {
            hintEl.textContent = 'Drag the 3D clay to pinch & lift the rim; drag empty table to orbit';
          }
        }
        subtoolsEl.innerHTML =
          `<button type="button" class="sandbox-action-btn ${clayTool === 'sculpt' ? 'is-active' : ''}" data-clay-tool="sculpt">Pinch 3D</button>` +
          `<button type="button" class="sandbox-action-btn ${clayTool === 'leaf' ? 'is-active' : ''}" data-clay-tool="leaf">Press Leaf</button>` +
          `<button type="button" class="sandbox-action-btn ${clayTool === 'smooth' ? 'is-active' : ''}" data-clay-tool="smooth">Smooth</button>` +
          `<button type="button" class="sandbox-action-btn ${clayTool === 'orbit' ? 'is-active' : ''}" data-clay-tool="orbit">Orbit 3D</button>` +
          GLAZES.map(
            (g) =>
              `<button type="button" class="glaze-dot ${g.hex === activeGlaze.hex ? 'is-active' : ''}" data-glaze="${g.hex}" style="background:${g.hex}" title="${g.name}" aria-label="${g.name}"></button>`
          ).join('') +
          `<button type="button" class="sandbox-action-btn" id="clay-preset-btn">Shape: ${CLAY_PRESET_NAMES[clayPresetIdx]}</button>` +
          `<button type="button" class="sandbox-action-btn" id="sandbox-reset-btn">Reset</button>` +
          `<button type="button" class="sandbox-action-btn sandbox-save-btn" id="sandbox-save-png-btn">Save PNG ↓</button>`;

        subtoolsEl.querySelectorAll('[data-clay-tool]').forEach((b) => {
          b.addEventListener('click', () => {
            clayTool = b.dataset.clayTool || 'sculpt';
            renderSubtools();
          });
        });
        subtoolsEl.querySelectorAll('[data-glaze]').forEach((b) => {
          b.addEventListener('click', () => {
            const match = GLAZES.find((g) => g.hex === b.dataset.glaze);
            if (match) activeGlaze = match;
            renderSubtools();
          });
        });
        document.getElementById('clay-preset-btn')?.addEventListener('click', () => {
          applyClayPreset((clayPresetIdx + 1) % CLAY_PRESET_NAMES.length);
          renderSubtools();
        });
        document.getElementById('sandbox-reset-btn')?.addEventListener('click', resetClay);
        document.getElementById('sandbox-save-png-btn')?.addEventListener('click', saveSandboxPng);
      } else if (sandboxMode === 'crochet') {
        if (hintEl) hintEl.textContent = 'Drag across the canvas to hook interlocking yarn stitches';
        subtoolsEl.innerHTML =
          CROCHET_YARNS.map(
            (y) =>
              `<button type="button" class="glaze-dot ${y.hex === crochetYarn ? 'is-active' : ''}" data-yarn="${y.hex}" style="background:${y.hex}" title="${y.name}" aria-label="${y.name}"></button>`
          ).join('') +
          `<button type="button" class="sandbox-action-btn" id="sandbox-reset-btn">Clear Cloth</button>` +
          `<button type="button" class="sandbox-action-btn sandbox-save-btn" id="sandbox-save-png-btn">Save PNG ↓</button>`;

        subtoolsEl.querySelectorAll('[data-yarn]').forEach((b) => {
          b.addEventListener('click', () => {
            crochetYarn = b.dataset.yarn;
            renderSubtools();
          });
        });
        document.getElementById('sandbox-reset-btn')?.addEventListener('click', () => {
          crochetStitches = [];
          lastStitchPos = null;
        });
        document.getElementById('sandbox-save-png-btn')?.addEventListener('click', saveSandboxPng);
      } else if (sandboxMode === 'string') {
        if (hintEl) {
          hintEl.textContent = stringLines.length
            ? 'Drag pins manually or click Auto-Weave for another pattern'
            : 'Loom is empty. Drag pins manually or click Auto-Weave!';
        }
        subtoolsEl.innerHTML = `
          <button type="button" class="sandbox-action-btn" id="sandbox-mandala-btn">Auto-Weave</button>
          <button type="button" class="sandbox-action-btn" id="sandbox-reset-btn">Clear Loom</button>
          <button type="button" class="sandbox-action-btn sandbox-save-btn" id="sandbox-save-png-btn">Save PNG ↓</button>
        `;
        document.getElementById('sandbox-mandala-btn')?.addEventListener('click', startAutoWeaveStepByStep);
        document.getElementById('sandbox-reset-btn')?.addEventListener('click', () => {
          stopAutoWeave();
          stringLines = [];
          activePin = null;
          renderSubtools();
        });
        document.getElementById('sandbox-save-png-btn')?.addEventListener('click', saveSandboxPng);
      } else {
        if (hintEl) hintEl.textContent = 'Paint freely on cotton canvas or pick an Auto-Paint scene';
        subtoolsEl.innerHTML =
          PAINT_PIGMENTS.map(
            (p) =>
              `<button type="button" class="glaze-dot ${p.hex === activePaintColor ? 'is-active' : ''}" data-paint="${p.hex}" style="background:${p.hex}" title="${p.name}" aria-label="${p.name}"></button>`
          ).join('') +
          `<button type="button" class="sandbox-action-btn ${activeBrushStyle === 'oil' ? 'is-active' : ''}" data-brush="oil">Oil</button>` +
          `<button type="button" class="sandbox-action-btn ${activeBrushStyle === 'watercolor' ? 'is-active' : ''}" data-brush="watercolor">Watercolor</button>` +
          `<button type="button" class="sandbox-action-btn ${activeAutoScene === 'sunset' ? 'is-active' : ''}" id="sandbox-autopaint-btn" data-autopaint="sunset">Auto: Sunset</button>` +
          `<button type="button" class="sandbox-action-btn ${activeAutoScene === 'tulips' ? 'is-active' : ''}" data-autopaint="tulips">Auto: Tulips</button>` +
          `<button type="button" class="sandbox-action-btn ${activeAutoScene === 'starry' ? 'is-active' : ''}" data-autopaint="starry">Auto: Starry Night</button>` +
          `<button type="button" class="sandbox-action-btn ${activeAutoScene === 'lotus' ? 'is-active' : ''}" data-autopaint="lotus">Auto: Lotus</button>` +
          `<button type="button" class="sandbox-action-btn" id="sandbox-reset-btn">Clear</button>` +
          `<button type="button" class="sandbox-action-btn sandbox-save-btn" id="sandbox-save-png-btn">Save PNG ↓</button>`;

        subtoolsEl.querySelectorAll('[data-paint]').forEach((b) => {
          b.addEventListener('click', () => {
            activePaintColor = b.dataset.paint;
            renderSubtools();
          });
        });
        subtoolsEl.querySelectorAll('[data-brush]').forEach((b) => {
          b.addEventListener('click', () => {
            activeBrushStyle = b.dataset.brush;
            renderSubtools();
          });
        });
        subtoolsEl.querySelectorAll('[data-autopaint]').forEach((b) => {
          b.addEventListener('click', () => startAutoPaint(b.dataset.autopaint || 'sunset'));
        });
        document.getElementById('sandbox-reset-btn')?.addEventListener('click', () => {
          activeAutoScene = '';
          clearPaintCanvas();
          renderSubtools();
        });
        document.getElementById('sandbox-save-png-btn')?.addEventListener('click', saveSandboxPng);
      }
    }

    function getCanvasCoords(e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((e.clientX - rect.left) / rect.width) * LOGICAL_W,
        y: ((e.clientY - rect.top) / rect.height) * LOGICAL_H
      };
    }

    function projectClay3D(x, y, z) {
      const cosY = Math.cos(clayCamYaw);
      const sinY = Math.sin(clayCamYaw);
      const cosP = Math.cos(clayCamPitch);
      const sinP = Math.sin(clayCamPitch);
      const yc = y - clayHeight * 0.45;
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const yCam = yc * cosP - z1 * sinP;
      const zCam = yc * sinP + z1 * cosP;
      const FOV = 340;
      const CAM_DIST = 310;
      const scale = FOV / Math.max(80, CAM_DIST - zCam);
      return {
        sx: CLAY_CX + x1 * scale,
        sy: CLAY_CY - yCam * scale,
        xCam: x1,
        yCam,
        zCam,
        scale
      };
    }

    function getClayVertex3D(rIdx, sIdx, inner = false) {
      const t = rIdx / (CLAY_RINGS - 1);
      const ang = (sIdx / CLAY_PTS) * Math.PI * 2;
      const rBase = clayMeshRadii[rIdx]?.[sIdx] || 56;
      const r = inner ? Math.max(10, rBase - 7.5) : rBase;
      const yTop = clayHeight + (clayRimLift[sIdx] || 0) * Math.pow(t, 1.4);
      const y = inner ? Math.max(clayHeight * 0.14, t * yTop) : t * yTop;
      return {
        x: Math.cos(ang) * r,
        y,
        z: Math.sin(ang) * r
      };
    }

    function findClosestClayVertex(pt, innerOnly = false) {
      let best = { ring: CLAY_RINGS - 1, seg: 0, dist: Infinity, proj: null };
      const rStart = innerOnly ? 1 : 0;
      const rEnd = innerOnly ? CLAY_RINGS - 2 : CLAY_RINGS - 1;
      for (let r = rStart; r <= rEnd; r++) {
        for (let s = 0; s < CLAY_PTS; s++) {
          const v = getClayVertex3D(r, s, innerOnly);
          const p = projectClay3D(v.x, v.y, v.z);
          if (!innerOnly && p.zCam < -24) continue;
          const d = Math.hypot(p.sx - pt.x, p.sy - pt.y);
          if (d < best.dist) {
            best = { ring: r, seg: s, dist: d, proj: p };
          }
        }
      }
      return best;
    }

    function handleSandboxInput(pt, isInitial = false) {
      if (sandboxMode === 'clay') {
        if (isInitial) {
          clayLastPtr = pt;
          const insideVessel =
            pt.x >= clayBounds.minX &&
            pt.x <= clayBounds.maxX &&
            pt.y >= clayBounds.minY &&
            pt.y <= clayBounds.maxY;
          clayDraggingOrbit = clayTool === 'orbit' || !insideVessel;
          if (!clayDraggingOrbit && clayTool === 'leaf') {
            const hit = findClosestClayVertex(pt, true);
            if (hit.dist < 34) {
              const dup = clayImprints.some(
                (imp) =>
                  Math.abs(imp.ring - hit.ring) <= 1 &&
                  Math.min(Math.abs(imp.seg - hit.seg), CLAY_PTS - Math.abs(imp.seg - hit.seg)) <= 2
              );
              if (!dup) {
                clayImprints.push({
                  ring: hit.ring,
                  seg: hit.seg,
                  angle: (hit.seg / CLAY_PTS) * Math.PI * 2 + 0.45,
                  scale: 0.9 + Math.random() * 0.25
                });
                if (clayImprints.length > 22) clayImprints.shift();
              }
            }
          }
          return;
        }

        const prev = clayLastPtr || pt;
        const dx = pt.x - prev.x;
        const dy = pt.y - prev.y;
        clayLastPtr = pt;

        if (clayDraggingOrbit || clayTool === 'orbit') {
          clayCamYaw += dx * 0.011;
          clayCamPitch = Math.max(0.22, Math.min(1.18, clayCamPitch + dy * 0.008));
          return;
        }

        const hit = findClosestClayVertex(pt, false);
        if (hit.dist > 55) return;

        if (clayTool === 'smooth') {
          smoothClayContour(2, hit.ring, hit.seg, 3, 5);
        } else if (clayTool === 'leaf') {
          const inHit = findClosestClayVertex(pt, true);
          if (inHit.dist < 28) {
            const dup = clayImprints.some(
              (imp) =>
                Math.abs(imp.ring - inHit.ring) <= 1 &&
                Math.min(Math.abs(imp.seg - inHit.seg), CLAY_PTS - Math.abs(imp.seg - inHit.seg)) <= 2
            );
            if (!dup) {
              clayImprints.push({
                ring: inHit.ring,
                seg: inHit.seg,
                angle: (inHit.seg / CLAY_PTS) * Math.PI * 2 + 0.45,
                scale: 0.9 + Math.random() * 0.25
              });
              if (clayImprints.length > 22) clayImprints.shift();
            }
          }
        } else {
          // 3D directional push/pull & rim elevation
          const v = getClayVertex3D(hit.ring, hit.seg, false);
          const cProj = projectClay3D(0, v.y, 0);
          const vx = hit.proj.sx - cProj.sx;
          const vy = hit.proj.sy - cProj.sy;
          const vLen = Math.hypot(vx, vy) || 1;
          const radialDelta = (dx * vx + dy * vy) / vLen;

          for (let r = Math.max(0, hit.ring - 2); r <= Math.min(CLAY_RINGS - 1, hit.ring + 2); r++) {
            const rw = Math.cos(((r - hit.ring) / 3) * (Math.PI * 0.5));
            for (let s = 0; s < CLAY_PTS; s++) {
              const sDist = Math.min(Math.abs(s - hit.seg), CLAY_PTS - Math.abs(s - hit.seg));
              if (sDist <= 4) {
                const sw = Math.cos((sDist / 5) * (Math.PI * 0.5));
                const weight = rw * rw * sw * sw;
                clayMeshRadii[r][s] = Math.max(
                  22,
                  Math.min(108, clayMeshRadii[r][s] + radialDelta * 0.65 * weight)
                );
                if (hit.ring >= CLAY_RINGS - 3 && r === hit.ring) {
                  clayRimLift[s] = Math.max(-16, Math.min(22, clayRimLift[s] - dy * 0.35 * sw));
                }
              }
            }
          }
          smoothClayContour(1, hit.ring, hit.seg, 2, 4);
        }
      } else if (sandboxMode === 'crochet') {
        hookPos = { x: pt.x, y: pt.y };
        if (!lastStitchPos) {
          lastStitchPos = pt;
          return;
        }
        const dist = Math.hypot(pt.x - lastStitchPos.x, pt.y - lastStitchPos.y);
        if (dist >= 16) {
          const ang = Math.atan2(pt.y - lastStitchPos.y, pt.x - lastStitchPos.x);
          crochetStitches.push({
            x: (pt.x + lastStitchPos.x) / 2,
            y: (pt.y + lastStitchPos.y) / 2,
            angle: ang,
            color: crochetYarn
          });
          if (crochetStitches.length > 260) crochetStitches.shift();
          lastStitchPos = pt;
        }
      } else if (sandboxMode === 'string') {
        for (let i = 0; i < PIN_COUNT; i++) {
          const p = getPinCoords(i);
          if (Math.hypot(pt.x - p.x, pt.y - p.y) < 16) {
            if (activePin !== null && activePin !== i) {
              stringLines.push([activePin, i]);
              if (stringLines.length > 260) stringLines.shift();
            }
            activePin = i;
            break;
          }
        }
      } else if (sandboxMode === 'paint') {
        if (!lastPaintPos) {
          lastPaintPos = pt;
          paintDabOnBuffer(pt, pt, activePaintColor, activeBrushStyle);
          return;
        }
        paintDabOnBuffer(lastPaintPos, pt, activePaintColor, activeBrushStyle);
        lastPaintPos = pt;
      }
    }

    canvas.addEventListener('pointerdown', (e) => {
      pointerDown = true;
      canvas.setPointerCapture?.(e.pointerId);
      const pt = getCanvasCoords(e);
      lastStitchPos = pt;
      lastPaintPos = pt;
      handleSandboxInput(pt, true);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!pointerDown) return;
      handleSandboxInput(getCanvasCoords(e), false);
    });

    canvas.addEventListener('pointerup', () => {
      pointerDown = false;
      clayDraggingOrbit = false;
      clayLastPtr = null;
      lastStitchPos = null;
      lastPaintPos = null;
      activePin = null;
    });

    /* --------------------------------------------------------------------
       Render Loop
    -------------------------------------------------------------------- */
    function drawSandbox() {
      ctx.clearRect(0, 0, LOGICAL_W, LOGICAL_H);

      if (sandboxMode === 'clay') {
        // Warm 3D-perspective ceramic studio backdrop & wooden workbench mat
        const wallGrad = ctx.createLinearGradient(0, 0, 0, LOGICAL_H);
        wallGrad.addColorStop(0, '#F5EFE3');
        wallGrad.addColorStop(0.58, '#ECE1CE');
        wallGrad.addColorStop(1, '#DFCBB1');
        ctx.fillStyle = wallGrad;
        ctx.fillRect(0, 0, LOGICAL_W, LOGICAL_H);

        // Perspective workbench surface beneath vessel
        const horizonP = projectClay3D(0, 0, -140);
        const horizonY = Math.max(76, Math.min(138, horizonP.sy));
        const deskGrad = ctx.createLinearGradient(0, horizonY, 0, LOGICAL_H);
        deskGrad.addColorStop(0, '#DFCEB6');
        deskGrad.addColorStop(1, '#C5AD8C');
        ctx.fillStyle = deskGrad;
        ctx.fillRect(0, horizonY, LOGICAL_W, LOGICAL_H - horizonY);
        ctx.strokeStyle = 'rgba(104, 80, 56, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.lineTo(LOGICAL_W, horizonY);
        ctx.stroke();

        // Soft cast shadow on workbench right under base
        const baseProj = projectClay3D(6, 0, -4);
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(
          baseProj.sx,
          baseProj.sy,
          64 * baseProj.scale,
          30 * baseProj.scale * Math.max(0.32, Math.sin(clayCamPitch)),
          0,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(38, 28, 18, 0.24)';
        ctx.fill();
        ctx.restore();

        // Precompute camera-space vertices for outer & inner 3D walls + floor center
        const outerP = [];
        const innerP = [];
        let minX = LOGICAL_W;
        let maxX = 0;
        let minY = LOGICAL_H;
        let maxY = 0;

        for (let r = 0; r < CLAY_RINGS; r++) {
          const outRow = [];
          const inRow = [];
          for (let s = 0; s < CLAY_PTS; s++) {
            const vo = getClayVertex3D(r, s, false);
            const vi = getClayVertex3D(r, s, true);
            const po = projectClay3D(vo.x, vo.y, vo.z);
            const pi = projectClay3D(vi.x, vi.y, vi.z);
            outRow.push(po);
            inRow.push(pi);
            if (po.sx < minX) minX = po.sx;
            if (po.sx > maxX) maxX = po.sx;
            if (po.sy < minY) minY = po.sy;
            if (po.sy > maxY) maxY = po.sy;
          }
          outerP.push(outRow);
          innerP.push(inRow);
        }
        clayBounds = { minX: minX - 14, maxX: maxX + 14, minY: minY - 14, maxY: maxY + 14 };

        const camXformVec = (vx, vy, vz) => {
          const cosY = Math.cos(clayCamYaw);
          const sinY = Math.sin(clayCamYaw);
          const cosP = Math.cos(clayCamPitch);
          const sinP = Math.sin(clayCamPitch);
          const x1 = vx * cosY - vz * sinY;
          const z1 = vx * sinY + vz * cosY;
          return {
            x: x1,
            y: vy * cosP - z1 * sinP,
            z: vy * sinP + z1 * cosP
          };
        };

        const norm3 = (v) => {
          const l = Math.hypot(v.x, v.y, v.z) || 1;
          return { x: v.x / l, y: v.y / l, z: v.z / l };
        };

        const L1 = norm3({ x: -0.52, y: 0.72, z: 0.46 });
        const L2 = norm3({ x: 0.55, y: 0.2, z: 0.81 });
        const faces = [];

        const pushLitFace = (pts, refWorldVec, aoFactor = 1) => {
          const cx = pts.reduce((sum, p) => sum + p.xCam, 0) / pts.length;
          const cy = pts.reduce((sum, p) => sum + p.yCam, 0) / pts.length;
          const cz = pts.reduce((sum, p) => sum + p.zCam, 0) / pts.length;

          const p0 = pts[0];
          const p1 = pts[1];
          const p2 = pts[2];
          const p3 = pts[3] || pts[0];
          const ax = p2.xCam - p0.xCam;
          const ay = p2.yCam - p0.yCam;
          const az = p2.zCam - p0.zCam;
          const bx = p3.xCam - p1.xCam;
          const by = p3.yCam - p1.yCam;
          const bz = p3.zCam - p1.zCam;

          let nx = ay * bz - az * by;
          let ny = az * bx - ax * bz;
          let nz = ax * by - ay * bx;

          const refCam = camXformVec(refWorldVec.x, refWorldVec.y, refWorldVec.z);
          if (nx * refCam.x + ny * refCam.y + nz * refCam.z < 0) {
            nx = -nx;
            ny = -ny;
            nz = -nz;
          }
          const nLen = Math.hypot(nx, ny, nz) || 1;
          nx /= nLen;
          ny /= nLen;
          nz /= nLen;

          const V = norm3({ x: -cx, y: -cy, z: 310 - cz });
          if (nx * V.x + ny * V.y + nz * V.z < -0.1) return;

          const d1 = Math.max(0, nx * L1.x + ny * L1.y + nz * L1.z);
          const d2 = Math.max(0, nx * L2.x + ny * L2.y + nz * L2.z);
          const H = norm3({ x: L1.x + V.x, y: L1.y + V.y, z: L1.z + V.z });
          const spec = Math.pow(Math.max(0, nx * H.x + ny * H.y + nz * H.z), 26) * 0.56;
          const lit = (0.36 + 0.5 * d1 + 0.18 * d2) * aoFactor;

          const [br, bg, bb] = activeGlaze.rgb;
          const [hr, hg, hb] = activeGlaze.hiRgb;
          const rr = Math.min(255, Math.round(br * lit + hr * spec));
          const gg = Math.min(255, Math.round(bg * lit + hg * spec));
          const bb2 = Math.min(255, Math.round(bb * lit + hb * spec));

          faces.push({
            pts,
            zCam: cz,
            color: `rgb(${rr}, ${gg}, ${bb2})`
          });
        };

        // Inner cavity floor fan
        const floorC = projectClay3D(0, clayHeight * 0.14, 0);
        for (let s = 0; s < CLAY_PTS; s++) {
          const sN = (s + 1) % CLAY_PTS;
          pushLitFace([floorC, innerP[0][s], innerP[0][sN]], { x: 0, y: 1, z: 0 }, 0.68);
        }

        // Outer wall, inner wall & top rim bevel quads
        for (let s = 0; s < CLAY_PTS; s++) {
          const sN = (s + 1) % CLAY_PTS;
          const midAng = ((s + 0.5) / CLAY_PTS) * Math.PI * 2;
          const cosA = Math.cos(midAng);
          const sinA = Math.sin(midAng);

          for (let r = 0; r < CLAY_RINGS - 1; r++) {
            pushLitFace(
              [outerP[r][s], outerP[r][sN], outerP[r + 1][sN], outerP[r + 1][s]],
              { x: cosA, y: 0.08, z: sinA },
              1
            );
            const cavityAO = 0.68 + 0.32 * (r / (CLAY_RINGS - 1));
            pushLitFace(
              [innerP[r][s], innerP[r + 1][s], innerP[r + 1][sN], innerP[r][sN]],
              { x: -cosA, y: 0.22, z: -sinA },
              cavityAO
            );
          }

          // Top glazed bevelled rim
          const topR = CLAY_RINGS - 1;
          pushLitFace(
            [outerP[topR][s], outerP[topR][sN], innerP[topR][sN], innerP[topR][s]],
            { x: 0, y: 1, z: 0 },
            1.06
          );
        }

        // Painter's back-to-front depth sort
        faces.sort((a, b) => a.zCam - b.zCam);
        for (const f of faces) {
          ctx.beginPath();
          ctx.moveTo(f.pts[0].sx, f.pts[0].sy);
          for (let i = 1; i < f.pts.length; i++) {
            ctx.lineTo(f.pts[i].sx, f.pts[i].sy);
          }
          ctx.closePath();
          ctx.fillStyle = f.color;
          ctx.fill();
          ctx.strokeStyle = f.color;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }

        // 3D leaf-vein botanical impressions anchored on front-facing inner walls
        clayImprints.forEach((imp) => {
          const v = getClayVertex3D(imp.ring, imp.seg, true);
          const p = projectClay3D(v.x, v.y, v.z);
          if (p.zCam < -20) return;
          ctx.save();
          ctx.translate(p.sx, p.sy);
          ctx.rotate(imp.angle - clayCamYaw);
          ctx.scale(imp.scale * 0.78, imp.scale * 0.78);
          ctx.strokeStyle = 'rgba(255, 250, 240, 0.56)';
          ctx.lineWidth = 1.3;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-10, 0);
          ctx.lineTo(10, 0);
          ctx.moveTo(-3, 0);
          ctx.lineTo(-8, -5);
          ctx.moveTo(-3, 0);
          ctx.lineTo(-8, 5);
          ctx.moveTo(3, 0);
          ctx.lineTo(-2, -5);
          ctx.moveTo(3, 0);
          ctx.lineTo(-2, 5);
          ctx.stroke();
          ctx.restore();
        });

        // Compact bottom-right 3D orbit badge cue
        ctx.save();
        ctx.fillStyle = 'rgba(38, 33, 29, 0.45)';
        ctx.font = '600 10px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('3D Ceramic Sculptor · Drag outside to orbit', LOGICAL_W - 14, LOGICAL_H - 10);
        ctx.restore();
      } else if (sandboxMode === 'crochet') {
        crochetStitches.forEach((s) => {
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.angle);
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 2.4;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-9, 0);
          ctx.bezierCurveTo(-5, -8, 5, -8, 9, 0);
          ctx.bezierCurveTo(5, 8, -5, 8, -9, 0);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(2, -4);
          ctx.lineTo(10, 0);
          ctx.lineTo(2, 4);
          ctx.stroke();
          ctx.restore();
        });

        ctx.save();
        ctx.translate(hookPos.x, hookPos.y);
        ctx.rotate(-0.65);
        ctx.strokeStyle = '#8F5B3C';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(34, 0);
        ctx.stroke();
        ctx.strokeStyle = '#3B332C';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(-3, 0, 4, Math.PI * 0.2, Math.PI * 1.4, true);
        ctx.stroke();
        ctx.restore();
      } else if (sandboxMode === 'string') {
        ctx.fillStyle = '#F7F1E7';
        ctx.beginPath();
        ctx.arc(LOOM_CX, LOOM_CY, LOOM_R + 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(38,33,29,0.16)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.strokeStyle = 'rgba(38, 33, 29, 0.36)';
        ctx.lineWidth = 1;
        stringLines.forEach(([a, b]) => {
          const p1 = getPinCoords(a);
          const p2 = getPinCoords(b);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        // Glowing travelling thread shuttle during Auto-Weave
        if (activeShuttle) {
          activeShuttle.t = Math.min(1, activeShuttle.t + 0.25);
          const p1 = getPinCoords(activeShuttle.from);
          const p2 = getPinCoords(activeShuttle.to);
          const sx = p1.x + (p2.x - p1.x) * activeShuttle.t;
          const sy = p1.y + (p2.y - p1.y) * activeShuttle.t;

          ctx.strokeStyle = '#C86D51';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(sx, sy);
          ctx.stroke();

          ctx.fillStyle = '#D9A76A';
          ctx.beginPath();
          ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
          ctx.fill();
        }

        for (let i = 0; i < PIN_COUNT; i++) {
          const p = getPinCoords(i);
          ctx.fillStyle = i === activePin ? '#C86D51' : '#8F7046';
          ctx.beginPath();
          ctx.arc(p.x, p.y, i === activePin ? 4.5 : 3, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (sandboxMode === 'paint') {
        ctx.drawImage(paintBuffer, 0, 0, LOGICAL_W, LOGICAL_H);
      }

      requestAnimationFrame(drawSandbox);
    }

    modeTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        sandboxMode = tab.dataset.sandboxMode || 'clay';
        modeTabs.forEach((t) => {
          const on = t === tab;
          t.classList.toggle('is-active', on);
          t.setAttribute('aria-selected', String(on));
        });
        renderSubtools();
      });
    });

    window.__applyBorrowedPalette = (hexList, sourceTitle) => {
      if (Array.isArray(hexList) && hexList.length) {
        PAINT_PIGMENTS = hexList.map((hex, i) => ({
          name: `${sourceTitle || 'Artwork'} Shade ${i + 1}`,
          hex
        }));
        CROCHET_YARNS = hexList.slice(0, 4).map((hex, i) => ({
          name: `${sourceTitle || 'Artwork'} Yarn ${i + 1}`,
          hex
        }));
        activePaintColor = PAINT_PIGMENTS[0].hex;
        crochetYarn = CROCHET_YARNS[0].hex;
      }
      sandboxMode = 'paint';
      modeTabs.forEach((t) => {
        const on = t.dataset.sandboxMode === 'paint';
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      renderSubtools();
      if (hintEl) {
        hintEl.textContent = `Loaded palette from "${sourceTitle || 'artwork'}" into Paint Canvas and Crochet!`;
      }
      document.getElementById('mini-maker-sandbox')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // Note: String Art starts completely empty by default!
    renderSubtools();
    requestAnimationFrame(drawSandbox);
  }

  /* ------------------------------------------------------------------------
     Atelier Page: Artwork Wall, Surprise Me & 2.5x Magnifying Texture Loupe
  ------------------------------------------------------------------------ */
  function initAtelierPage() {
    const galleryGrid = document.getElementById('art-gallery-grid');
    if (!galleryGrid) return;

    const tabs = document.querySelectorAll('.gallery-pill');
    const surpriseBtn = document.getElementById('surprise-artwork-btn');
    const makerNote = document.getElementById('maker-note');
    const makerNoteText = document.getElementById('maker-note-text');

    const lightbox = document.getElementById('art-lightbox');
    const lightboxMedia = document.getElementById('lightbox-media');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxMedium = document.getElementById('lightbox-medium');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    const loupeToggleBtn = document.getElementById('loupe-toggle-btn');
    const loupeToggleLabel = document.getElementById('loupe-toggle-label');
    const loupeEl = document.getElementById('lightbox-loupe');
    const lightboxPaletteEl = document.getElementById('lightbox-palette');
    const borrowPaletteBtn = document.getElementById('borrow-palette-btn');
    const hangInWallBtn = document.getElementById('hang-in-wall-btn');

    const params = new URLSearchParams(window.location.search);
    const initialParam = params.get('category');
    const validFilters = new Set(['all', 'featured', 'painting', 'crochet', 'macrame', 'ceramics', 'mixed-media']);
    let activeFilter = initialParam && validFilters.has(initialParam) ? initialParam : 'all';
    let visibleArtworks = [];
    let currentIndex = 0;
    let loupeEnabled = false;
    let currentExtractedPalette = ['#C86D51', '#3B7A8C', '#D49B4B', '#5E7A68', '#2B3A4A'];
    let hangArtworkFn = null;

    function rgbToHex(r, g, b) {
      return (
        '#' +
        [r, g, b]
          .map((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0'))
          .join('')
          .toUpperCase()
      );
    }

    function extractPaletteFromImage(imgEl) {
      const fallback = ['#C86D51', '#3B7A8C', '#D49B4B', '#5E7A68', '#A8586B'];
      try {
        if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return fallback;
        const c = document.createElement('canvas');
        c.width = 24;
        c.height = 24;
        const cx = c.getContext('2d', { willReadFrequently: true });
        if (!cx) return fallback;
        cx.drawImage(imgEl, 0, 0, 24, 24);
        const { data } = cx.getImageData(0, 0, 24, 24);
        const buckets = new Map();
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 120) continue;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // Quantize into 24-step color bins to avoid near-duplicate pixels
          const key = `${Math.round(r / 24) * 24},${Math.round(g / 24) * 24},${Math.round(b / 24) * 24}`;
          const prev = buckets.get(key) || { count: 0, rSum: 0, gSum: 0, bSum: 0 };
          prev.count += 1;
          prev.rSum += r;
          prev.gSum += g;
          prev.bSum += b;
          buckets.set(key, prev);
        }
        const ranked = Array.from(buckets.values())
          .sort((a, b) => b.count - a.count)
          .map((bkt) => ({
            r: bkt.rSum / bkt.count,
            g: bkt.gSum / bkt.count,
            b: bkt.bSum / bkt.count
          }));
        const chosen = [];
        ranked.forEach((cand) => {
          if (chosen.length >= 5) return;
          const tooClose = chosen.some(
            (ex) => Math.hypot(ex.r - cand.r, ex.g - cand.g, ex.b - cand.b) < 42
          );
          if (!tooClose) chosen.push(cand);
        });
        while (chosen.length < 5 && ranked.length > chosen.length) {
          chosen.push(ranked[chosen.length]);
        }
        return chosen.length ? chosen.map((cObj) => rgbToHex(cObj.r, cObj.g, cObj.b)) : fallback;
      } catch (_) {
        return fallback;
      }
    }

    function renderLightboxPalette(colors) {
      if (!lightboxPaletteEl) return;
      currentExtractedPalette = colors;
      lightboxPaletteEl.innerHTML = '';
      colors.forEach((hex) => {
        const chip = document.createElement('span');
        chip.className = 'palette-chip-dot';
        chip.style.backgroundColor = hex;
        chip.title = hex;
        lightboxPaletteEl.appendChild(chip);
      });
    }

    function updateMakerNote(filterKey) {
      if (!makerNote || !makerNoteText) return;
      const next = MAKER_NOTES[filterKey] || MAKER_NOTES.all;
      if (makerNoteText.textContent.trim() === next) return;
      makerNote.classList.add('is-updating');
      setTimeout(() => {
        makerNoteText.textContent = next;
        makerNote.classList.remove('is-updating');
      }, 140);
    }

    function render() {
      visibleArtworks = ARTWORKS.filter((item) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'featured') return item.featured;
        return item.category === activeFilter;
      });

      galleryGrid.innerHTML = '';
      const frag = document.createDocumentFragment();

      visibleArtworks.forEach((item, idx) => {
        const card = document.createElement('article');
        card.className = `art-card art-card--${item.category}`;
        card.style.animationDelay = `${Math.min(idx * 28, 360)}ms`;

        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'art-card__trigger';
        trigger.setAttribute('aria-label', `View ${item.title} (${item.medium})`);
        trigger.addEventListener('click', () => openModal(idx));

        const media = document.createElement('div');
        media.className = 'art-card__media';

        const img = document.createElement('img');
        img.className = 'art-card__img';
        img.src = getThumbUrl(item.file);
        img.alt = `${item.title} (${item.medium})`;
        const isAboveFoldColumnTop =
          visibleArtworks.length <= 12 ||
          idx <= 1 ||
          idx === 16 ||
          idx === 17 ||
          idx === 32 ||
          idx === 33;
        img.loading = isAboveFoldColumnTop ? 'eager' : 'lazy';
        img.decoding = 'async';
        media.appendChild(img);

        const body = document.createElement('div');
        body.className = 'art-card__body';

        const medium = document.createElement('span');
        medium.className = 'art-card__medium';
        medium.textContent = item.medium;

        const title = document.createElement('h2');
        title.className = 'art-card__title';
        title.textContent = item.title;

        body.append(medium, title);
        trigger.append(media, body);
        card.appendChild(trigger);
        frag.appendChild(card);
      });

      galleryGrid.appendChild(frag);
    }

    function selectCategory(nextFilter) {
      activeFilter = nextFilter;

      tabs.forEach((tab) => {
        const selected = tab.dataset.filter === nextFilter;
        tab.classList.toggle('is-active', selected);
        tab.setAttribute('aria-selected', String(selected));
      });

      updateMakerNote(nextFilter);

      if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.startViewTransition(render);
      } else {
        render();
      }
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        selectCategory(tab.dataset.filter || 'all');
      });
    });

    surpriseBtn?.addEventListener('click', () => {
      if (!visibleArtworks.length) return;
      const randomIdx = Math.floor(Math.random() * visibleArtworks.length);
      openModal(randomIdx);
    });

    function openModal(idx) {
      if (!lightbox || !visibleArtworks.length) return;
      currentIndex = (idx + visibleArtworks.length) % visibleArtworks.length;
      updateModal();
      if (!lightbox.open) lightbox.showModal();
      lightbox.scrollTop = 0;
      const detailsEl = lightbox.querySelector('.lightbox__details');
      if (detailsEl) detailsEl.scrollTop = 0;
    }

    function updateModal() {
      const item = visibleArtworks[currentIndex];
      if (!item) return;
      const url = getFullUrl(item.file);
      lightboxImg.src = url;
      lightboxImg.alt = `${item.title} (${item.medium})`;
      lightboxMedium.textContent = item.medium;
      lightboxTitle.textContent = item.title;
      lightboxDesc.textContent = item.desc;
      if (loupeEl) {
        loupeEl.style.backgroundImage = `url("${url}")`;
        loupeEl.hidden = true;
      }
      if (lightboxImg.complete && lightboxImg.naturalWidth > 0) {
        renderLightboxPalette(extractPaletteFromImage(lightboxImg));
      } else {
        lightboxImg.addEventListener(
          'load',
          () => renderLightboxPalette(extractPaletteFromImage(lightboxImg)),
          { once: true }
        );
      }
      if (lightbox) lightbox.scrollTop = 0;
      const detailsEl = lightbox?.querySelector('.lightbox__details');
      if (detailsEl) detailsEl.scrollTop = 0;
    }

    borrowPaletteBtn?.addEventListener('click', () => {
      const item = visibleArtworks[currentIndex];
      if (lightbox?.open) lightbox.close();
      if (typeof window.__applyBorrowedPalette === 'function') {
        window.__applyBorrowedPalette(currentExtractedPalette, item?.title || 'Artwork');
      }
    });

    hangInWallBtn?.addEventListener('click', () => {
      const item = visibleArtworks[currentIndex];
      if (!item) return;
      if (lightbox?.open) lightbox.close();
      if (typeof hangArtworkFn === 'function') {
        hangArtworkFn(item);
      }
    });

    function stepModal(delta) {
      if (!lightbox?.open || !visibleArtworks.length) return;
      currentIndex = (currentIndex + delta + visibleArtworks.length) % visibleArtworks.length;
      updateModal();
    }

    loupeToggleBtn?.addEventListener('click', () => {
      loupeEnabled = !loupeEnabled;
      loupeToggleBtn.setAttribute('aria-pressed', String(loupeEnabled));
      if (loupeToggleLabel) {
        loupeToggleLabel.textContent = loupeEnabled ? 'Texture Loupe: On' : 'Texture Loupe: Off';
      }
      if (!loupeEnabled && loupeEl) {
        loupeEl.hidden = true;
      }
    });

    const moveLoupe = (e) => {
      if (!loupeEnabled || !loupeEl || !lightboxMedia || !lightboxImg) return;
      const imgRect = lightboxImg.getBoundingClientRect();
      const mediaRect = lightboxMedia.getBoundingClientRect();
      if (
        e.clientX < imgRect.left ||
        e.clientX > imgRect.right ||
        e.clientY < imgRect.top ||
        e.clientY > imgRect.bottom
      ) {
        loupeEl.hidden = true;
        return;
      }

      const zoom = 2.5;
      const relX = e.clientX - imgRect.left;
      const relY = e.clientY - imgRect.top;
      const bgX = -(relX * zoom - 75);
      const bgY = -(relY * zoom - 75);

      loupeEl.hidden = false;
      loupeEl.style.left = `${e.clientX - mediaRect.left}px`;
      loupeEl.style.top = `${e.clientY - mediaRect.top}px`;
      loupeEl.style.backgroundSize = `${imgRect.width * zoom}px ${imgRect.height * zoom}px`;
      loupeEl.style.backgroundPosition = `${bgX}px ${bgY}px`;
    };

    lightboxMedia?.addEventListener('pointermove', moveLoupe);
    lightboxMedia?.addEventListener('pointerleave', () => {
      if (loupeEl) loupeEl.hidden = true;
    });

    lightboxClose?.addEventListener('click', () => lightbox.close());
    lightboxPrev?.addEventListener('click', () => stepModal(-1));
    lightboxNext?.addEventListener('click', () => stepModal(1));
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.close();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox?.open) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepModal(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepModal(1);
      }
    });

    tabs.forEach((tab) => {
      const selected = tab.dataset.filter === activeFilter;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
    });
    if (makerNoteText) {
      makerNoteText.textContent = MAKER_NOTES[activeFilter] || MAKER_NOTES.all;
    }
    render();

    const normalizeSlug = (f) => f.replace(/\.jpg$/i, '');

    function openPieceByFile(fileName, updateUrl = false) {
      const targetSlug = normalizeSlug(fileName);
      let matchIdx = visibleArtworks.findIndex((a) => normalizeSlug(a.file) === targetSlug);
      if (matchIdx < 0) {
        activeFilter = 'all';
        tabs.forEach((tab) => {
          const selected = tab.dataset.filter === 'all';
          tab.classList.toggle('is-active', selected);
          tab.setAttribute('aria-selected', String(selected));
        });
        if (makerNoteText) makerNoteText.textContent = MAKER_NOTES.all;
        render();
        matchIdx = visibleArtworks.findIndex((a) => normalizeSlug(a.file) === targetSlug);
      }
      if (matchIdx >= 0) {
        if (updateUrl) {
          try {
            window.history.pushState(null, '', `./atelier.html?piece=${encodeURIComponent(targetSlug)}`);
          } catch (_) {}
        }
        openModal(matchIdx);
      }
    }

    const initialPiece = params.get('piece');
    if (initialPiece) {
      openPieceByFile(initialPiece, false);
    }

    /* ----------------------------------------------------------------------
       3-Frame Curated Art Gallery & Interactive Perspective Room Styler
    ---------------------------------------------------------------------- */
    function initExhibitionWall() {
      const shell = document.getElementById('exhibition-wall-shell');
      const body = document.getElementById('exhibition-wall-body');
      const toggleBtn = document.getElementById('toggle-exhibition-wall-btn');
      const presetBtn = document.getElementById('wall-preset-btn');
      const saveWallBtn = document.getElementById('save-wall-png-btn');
      const stage = document.getElementById('exhibition-stage');
      const framesCanvas = document.getElementById('exhibition-frames-grid');
      const titleInput = document.getElementById('wall-title-input');
      const plaqueTitle = document.getElementById('wall-plaque-title');
      const statusEl = document.getElementById('exhibition-status');
      const colorDots = document.querySelectorAll('.wall-color-dot[data-wall-color]');
      const colorPicker = document.getElementById('wall-color-picker');
      const layoutBtns = document.querySelectorAll('.wall-layout-btn[data-wall-layout]');
      const textureBtns = document.querySelectorAll('.wall-texture-btn[data-wall-texture]');
      const lightBtns = document.querySelectorAll('.wall-light-btn[data-wall-light]');
      const visitorsToggleBtn = document.getElementById('wall-toggle-visitors');
      const benchToggleBtn = document.getElementById('wall-toggle-bench');
      const plantToggleBtn = document.getElementById('wall-toggle-plant');
      const lampToggleBtn = document.getElementById('wall-toggle-lamp');
      const frames = Array.from(document.querySelectorAll('.exhibition-frame[data-frame-slot]'));
      const visitors = Array.from(document.querySelectorAll('.gallery-visitor[data-visitor-idx]'));
      if (!shell || !stage || frames.length < 3) return;

      const idxByFile = (fileName, fallbackIdx) => {
        const i = ARTWORKS.findIndex((a) => a.file === fileName);
        return i >= 0 ? i : fallbackIdx;
      };

      const isDarkHex = (hex) => {
        const clean = String(hex || '#EBE2D0').replace('#', '');
        if (clean.length !== 6) return false;
        const r = parseInt(clean.slice(0, 2), 16);
        const g = parseInt(clean.slice(2, 4), 16);
        const b = parseInt(clean.slice(4, 6), 16);
        return 0.299 * r + 0.587 * g + 0.114 * b < 138;
      };

      const LAYOUT_POSITIONS = {
        staggered: [
          { x: 18, y: 10 },
          { x: 50, y: 17 },
          { x: 82, y: 9 }
        ],
        linear: [
          { x: 18, y: 12 },
          { x: 50, y: 12 },
          { x: 82, y: 12 }
        ],
        cascade: [
          { x: 18, y: 7 },
          { x: 50, y: 14 },
          { x: 82, y: 21 }
        ]
      };

      const DEFAULT_VISITOR_POSITIONS = [
        { x: 18, bottom: 9.5 },
        { x: 31, bottom: 2 },
        { x: 41, bottom: 3.5 },
        { x: 63, bottom: 10 },
        { x: 76, bottom: 8 },
        { x: 85, bottom: 2.5 }
      ];

      const WALL_PRESETS = [
        {
          title: 'Handmade Gallery',
          color: '#EBE2D0',
          texture: 'plaster',
          light: 'daylight',
          layout: 'staggered',
          visitors: true,
          bench: true,
          plant: true,
          lamp: false,
          slots: [
            idxByFile('everlasting-magenta-bloom.jpg', 0),
            idxByFile('botanical-canopy-five-knotted-suspensions.jpg', 1),
            idxByFile('tidal-leaf-fluted-dish.jpg', 2)
          ]
        },
        {
          title: 'Terracotta Gallery',
          color: '#D5A08B',
          texture: 'brick',
          light: 'spotlights',
          layout: 'cascade',
          visitors: true,
          bench: false,
          plant: true,
          lamp: true,
          slots: [
            idxByFile('terracotta-ivory-lace-bolero.jpg', 0),
            idxByFile('rosewood-lattice-cushion.jpg', 1),
            idxByFile('gaze-of-the-himalayan-sun.jpg', 2)
          ]
        },
        {
          title: 'Evening Salon',
          color: '#44484D',
          texture: 'panelling',
          light: 'spotlights',
          layout: 'staggered',
          visitors: true,
          bench: true,
          plant: false,
          lamp: true,
          slots: [
            idxByFile('rain-kissed-boulevard.jpg', 0),
            idxByFile('quiet-evening-under-the-pergola.jpg', 1),
            idxByFile('woven-kinship.jpg', 2)
          ]
        },
        {
          title: 'Woven Linen Hall',
          color: '#B8CBD6',
          texture: 'linen',
          light: 'daylight',
          layout: 'linear',
          visitors: true,
          bench: true,
          plant: true,
          lamp: false,
          slots: [
            idxByFile('tidal-whisper-paper-wings.jpg', 0),
            idxByFile('beneath-the-surface-of-courage.jpg', 1),
            idxByFile('cerulean-lagoon-hexagonal-vessel.jpg', 2)
          ]
        },
        {
          title: 'Warm Hearth Exhibit',
          color: '#DDD0B8',
          texture: 'brick',
          light: 'lamp',
          layout: 'cascade',
          visitors: true,
          bench: true,
          plant: false,
          lamp: true,
          slots: [
            idxByFile('the-painters-stoneware-palette-quiver.jpg', 0),
            idxByFile('the-makers-burgundy-nest.jpg', 1),
            idxByFile('rosette-crowned-navy-elephant.jpg', 2)
          ]
        },
        {
          title: 'Sage Studio Salon',
          color: '#B5C4B6',
          texture: 'smooth',
          light: 'daylight',
          layout: 'staggered',
          visitors: true,
          bench: false,
          plant: true,
          lamp: false,
          slots: [
            idxByFile('cozy-teal-crocheted-toy-basket.jpg', 0),
            idxByFile('sunlit-cobblestones-bougainvillea.jpg', 1),
            idxByFile('little-hatched-chick-in-a-red-scarf.jpg', 2)
          ]
        }
      ];

      let presetCursor = 0;
      let nextHangSlot = 0;
      let dragSourceSlot = null;
      let freeDrag = null;
      let visitorDrag = null;
      let justDragged = false;
      let wallState = {
        title: WALL_PRESETS[0].title,
        color: WALL_PRESETS[0].color,
        texture: WALL_PRESETS[0].texture,
        light: WALL_PRESETS[0].light,
        layout: WALL_PRESETS[0].layout,
        positions: LAYOUT_POSITIONS[WALL_PRESETS[0].layout].map((pt) => ({ ...pt })),
        visitorPositions: DEFAULT_VISITOR_POSITIONS.map((v) => ({ ...v })),
        visitors: WALL_PRESETS[0].visitors,
        bench: WALL_PRESETS[0].bench,
        plant: WALL_PRESETS[0].plant,
        lamp: WALL_PRESETS[0].lamp,
        slots: [...WALL_PRESETS[0].slots]
      };

      const sayStatus = (msg) => {
        if (statusEl) statusEl.textContent = msg;
      };

      const applyFrameCoords = () => {
        frames.forEach((frame, idx) => {
          const pos = wallState.positions[idx] || LAYOUT_POSITIONS.staggered[idx];
          frame.style.setProperty('--fx', `${pos.x}%`);
          frame.style.setProperty('--fy', `${pos.y}%`);
          stage.style.setProperty(`--spot-${idx + 1}`, `${(7.5 + pos.x * 0.85).toFixed(1)}%`);
        });
      };

      const applyVisitorCoords = () => {
        visitors.forEach((vis, idx) => {
          const vp = wallState.visitorPositions[idx] || DEFAULT_VISITOR_POSITIONS[idx] || { x: 50, bottom: 6 };
          const perspScale = Math.max(0.82, Math.min(1.06, 1.04 - (vp.bottom / 14) * 0.2));
          vis.style.setProperty('--vx', `${vp.x}%`);
          vis.style.setProperty('--vb', `${vp.bottom}%`);
          vis.style.setProperty('--vs', perspScale.toFixed(3));
          vis.style.zIndex = String(Math.round(90 - vp.bottom * 3));
        });
      };

      const renderWall = (swingSlot = -1) => {
        stage.style.setProperty('--wall-color', wallState.color);
        stage.dataset.wallTexture = wallState.texture;
        stage.dataset.wallLight = wallState.light;
        stage.dataset.wallLayout = wallState.layout;
        stage.dataset.wallVisitors = String(wallState.visitors);
        stage.dataset.wallBench = String(wallState.bench);
        stage.dataset.wallPlant = String(wallState.plant);
        stage.dataset.wallLamp = String(wallState.lamp);
        stage.dataset.wallDark = String(isDarkHex(wallState.color));

        colorDots.forEach((d) => {
          const active = (d.dataset.wallColor || '').toUpperCase() === wallState.color.toUpperCase();
          d.classList.toggle('is-active', active);
          d.setAttribute('aria-pressed', String(active));
        });
        if (colorPicker && colorPicker.value.toUpperCase() !== wallState.color.toUpperCase()) {
          colorPicker.value = wallState.color;
        }

        layoutBtns.forEach((b) => {
          const active = b.dataset.wallLayout === wallState.layout;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        textureBtns.forEach((b) => {
          const active = b.dataset.wallTexture === wallState.texture;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        lightBtns.forEach((b) => {
          const active = b.dataset.wallLight === wallState.light;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        if (visitorsToggleBtn) {
          visitorsToggleBtn.classList.toggle('is-active', wallState.visitors);
          visitorsToggleBtn.setAttribute('aria-pressed', String(wallState.visitors));
        }
        if (benchToggleBtn) {
          benchToggleBtn.classList.toggle('is-active', wallState.bench);
          benchToggleBtn.setAttribute('aria-pressed', String(wallState.bench));
        }
        if (plantToggleBtn) {
          plantToggleBtn.classList.toggle('is-active', wallState.plant);
          plantToggleBtn.setAttribute('aria-pressed', String(wallState.plant));
        }
        if (lampToggleBtn) {
          lampToggleBtn.classList.toggle('is-active', wallState.lamp);
          lampToggleBtn.setAttribute('aria-pressed', String(wallState.lamp));
        }

        if (titleInput && titleInput.value !== wallState.title) {
          titleInput.value = wallState.title;
        }
        if (plaqueTitle) {
          plaqueTitle.textContent = wallState.title.trim() || 'Studio Exhibition';
        }

        applyFrameCoords();
        applyVisitorCoords();

        frames.forEach((frame, idx) => {
          frame.draggable = wallState.layout !== 'free';
          const art = ARTWORKS[wallState.slots[idx]] || ARTWORKS[0];
          const img = frame.querySelector('img');
          const ticket = frame.querySelector('.exhibition-frame__ticket');
          if (img && art) {
            img.src = getThumbUrl(art);
            img.alt = art.title;
          }
          if (ticket && art) {
            const pieceSlug = normalizeSlug(art.file);
            ticket.textContent = art.title;
            ticket.href = `./atelier.html?piece=${encodeURIComponent(pieceSlug)}`;
            ticket.dataset.pieceFile = art.file;
          }
          if (swingSlot === idx || swingSlot === 99) {
            frame.classList.remove('is-swinging');
            void frame.offsetWidth;
            frame.classList.add('is-swinging');
          }
        });
      };

      hangArtworkFn = (item) => {
        const idx = ARTWORKS.findIndex((a) => a.file === item.file);
        if (idx < 0) return;
        if (body && body.hidden) {
          body.hidden = false;
          toggleBtn?.setAttribute('aria-expanded', 'true');
          if (toggleBtn) toggleBtn.textContent = 'Hide Gallery';
        }
        const slot = nextHangSlot % 3;
        wallState.slots[slot] = idx;
        nextHangSlot += 1;
        renderWall(slot);
        sayStatus(`Hung "${item.title}" in frame ${slot + 1}.`);
        shell.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };

      toggleBtn?.addEventListener('click', () => {
        if (!body) return;
        const willHide = !body.hidden;
        body.hidden = willHide;
        toggleBtn.setAttribute('aria-expanded', String(!willHide));
        toggleBtn.textContent = willHide ? 'Show Gallery' : 'Hide Gallery';
      });

      presetBtn?.addEventListener('click', () => {
        presetCursor = (presetCursor + 1) % WALL_PRESETS.length;
        const p = WALL_PRESETS[presetCursor];
        wallState = {
          title: p.title,
          color: p.color,
          texture: p.texture,
          light: p.light,
          layout: p.layout,
          positions: (LAYOUT_POSITIONS[p.layout] || LAYOUT_POSITIONS.staggered).map((pt) => ({ ...pt })),
          visitorPositions: wallState.visitorPositions,
          visitors: p.visitors,
          bench: p.bench,
          plant: p.plant,
          lamp: p.lamp,
          slots: [...p.slots]
        };
        renderWall(99);
        sayStatus(`Gallery theme: "${p.title}".`);
      });

      titleInput?.addEventListener('input', () => {
        wallState.title = titleInput.value.slice(0, 44);
        if (plaqueTitle) {
          plaqueTitle.textContent = wallState.title.trim() || 'Studio Exhibition';
        }
      });

      colorDots.forEach((dot) => {
        dot.addEventListener('click', () => {
          wallState.color = dot.dataset.wallColor || '#EBE2D0';
          renderWall();
          sayStatus(`Painted gallery wall ${dot.title || wallState.color}.`);
        });
      });

      colorPicker?.addEventListener('input', () => {
        wallState.color = colorPicker.value;
        renderWall();
      });

      layoutBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const nextLayout = btn.dataset.wallLayout || 'staggered';
          wallState.layout = nextLayout;
          if (nextLayout !== 'free' && LAYOUT_POSITIONS[nextLayout]) {
            wallState.positions = LAYOUT_POSITIONS[nextLayout].map((pt) => ({ ...pt }));
          }
          renderWall(99);
          sayStatus(
            nextLayout === 'free'
              ? 'Free Place mode: drag any frame across the wall, or click its title to open the artwork.'
              : `Arranged frames in ${btn.textContent} layout.`
          );
        });
      });

      textureBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          wallState.texture = btn.dataset.wallTexture || 'smooth';
          renderWall();
          sayStatus(`Applied ${btn.textContent} gallery finish.`);
        });
      });

      lightBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          wallState.light = btn.dataset.wallLight || 'daylight';
          renderWall();
          sayStatus(`Switched gallery lighting to ${btn.textContent}.`);
        });
      });

      visitorsToggleBtn?.addEventListener('click', () => {
        wallState.visitors = !wallState.visitors;
        renderWall();
        sayStatus(wallState.visitors ? 'Added gallery visitors (drag any visitor to move them).' : 'Removed gallery visitors.');
      });

      benchToggleBtn?.addEventListener('click', () => {
        wallState.bench = !wallState.bench;
        renderWall();
        sayStatus(wallState.bench ? 'Added museum viewing bench.' : 'Removed museum viewing bench.');
      });

      plantToggleBtn?.addEventListener('click', () => {
        wallState.plant = !wallState.plant;
        renderWall();
        sayStatus(wallState.plant ? 'Added gallery olive plant.' : 'Removed gallery olive plant.');
      });

      lampToggleBtn?.addEventListener('click', () => {
        wallState.lamp = !wallState.lamp;
        renderWall();
        sayStatus(wallState.lamp ? 'Added brass standing lamp.' : 'Removed brass standing lamp.');
      });

      // Movable Gallery Visitors (pointer dragging + keyboard arrow nudging)
      visitors.forEach((vis, vIdx) => {
        vis.addEventListener('pointerdown', (e) => {
          if (e.pointerType === 'mouse' && e.button !== 0) return;
          e.stopPropagation();
          visitorDrag = {
            idx: vIdx,
            startX: e.clientX,
            startY: e.clientY,
            orig: { ...(wallState.visitorPositions[vIdx] || DEFAULT_VISITOR_POSITIONS[vIdx]) }
          };
          vis.classList.add('is-visitor-dragging');
          vis.setPointerCapture?.(e.pointerId);
        });

        vis.addEventListener('pointermove', (e) => {
          if (!visitorDrag || visitorDrag.idx !== vIdx) return;
          const rect = stage.getBoundingClientRect();
          if (rect.width <= 0 || rect.height <= 0) return;
          const dxPct = ((e.clientX - visitorDrag.startX) / rect.width) * 100;
          const dyPct = ((e.clientY - visitorDrag.startY) / rect.height) * 100;
          const nx = Math.max(10, Math.min(90, visitorDrag.orig.x + dxPct));
          const nb = Math.max(1.5, Math.min(13.5, visitorDrag.orig.bottom - dyPct));
          wallState.visitorPositions[vIdx] = {
            x: Math.round(nx * 10) / 10,
            bottom: Math.round(nb * 10) / 10
          };
          applyVisitorCoords();
        });

        const endVisitorDrag = () => {
          if (!visitorDrag || visitorDrag.idx !== vIdx) return;
          vis.classList.remove('is-visitor-dragging');
          visitorDrag = null;
          sayStatus('Moved gallery visitor to a new viewing spot.');
        };
        vis.addEventListener('pointerup', endVisitorDrag);
        vis.addEventListener('pointercancel', endVisitorDrag);

        vis.addEventListener('keydown', (e) => {
          const cur = wallState.visitorPositions[vIdx] || { x: 50, bottom: 6 };
          if (e.key === 'ArrowLeft') cur.x = Math.max(10, cur.x - 3);
          else if (e.key === 'ArrowRight') cur.x = Math.min(90, cur.x + 3);
          else if (e.key === 'ArrowUp') cur.bottom = Math.min(13.5, Math.round((cur.bottom + 1.5) * 10) / 10);
          else if (e.key === 'ArrowDown') cur.bottom = Math.max(1.5, Math.round((cur.bottom - 1.5) * 10) / 10);
          else return;
          e.preventDefault();
          wallState.visitorPositions[vIdx] = cur;
          applyVisitorCoords();
        });
      });

      frames.forEach((frame, slotIdx) => {
        const woodBtn = frame.querySelector('.exhibition-frame__wood');
        const ticketLink = frame.querySelector('.exhibition-frame__ticket');

        woodBtn?.addEventListener('click', () => {
          if (justDragged) return;
          const pool = visibleArtworks.length ? visibleArtworks : ARTWORKS;
          const currArt = ARTWORKS[wallState.slots[slotIdx]];
          const currPoolPos = pool.findIndex((a) => currArt && a.file === currArt.file);
          const nextArt = pool[(currPoolPos + 1 + pool.length) % pool.length] || ARTWORKS[0];
          const globalIdx = ARTWORKS.findIndex((a) => a.file === nextArt.file);
          wallState.slots[slotIdx] = globalIdx >= 0 ? globalIdx : 0;
          renderWall(slotIdx);
          sayStatus(`Placed "${nextArt.title}" in frame ${slotIdx + 1}.`);
        });

        ticketLink?.addEventListener('pointerdown', (e) => {
          e.stopPropagation();
        });

        ticketLink?.addEventListener('click', (e) => {
          e.stopPropagation();
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
          e.preventDefault();
          const fileName = ticketLink.dataset.pieceFile;
          if (fileName) {
            openPieceByFile(fileName, true);
          }
        });

        // Free Place pointer dragging across the gallery wall
        frame.addEventListener('pointerdown', (e) => {
          if (wallState.layout !== 'free') return;
          if (e.pointerType === 'mouse' && e.button !== 0) return;
          freeDrag = {
            slotIdx,
            startX: e.clientX,
            startY: e.clientY,
            moved: false
          };
          frame.setPointerCapture?.(e.pointerId);
        });

        frame.addEventListener('pointermove', (e) => {
          if (!freeDrag || freeDrag.slotIdx !== slotIdx || wallState.layout !== 'free' || !framesCanvas) return;
          if (!freeDrag.moved && Math.hypot(e.clientX - freeDrag.startX, e.clientY - freeDrag.startY) >= 5) {
            freeDrag.moved = true;
            frame.classList.add('is-free-dragging');
          }
          if (!freeDrag.moved) return;
          const rect = framesCanvas.getBoundingClientRect();
          if (rect.width <= 0 || rect.height <= 0) return;
          const nx = Math.max(15, Math.min(85, ((e.clientX - rect.left) / rect.width) * 100));
          const ny = Math.max(5, Math.min(26, ((e.clientY - rect.top) / rect.height) * 100));
          wallState.positions[slotIdx] = { x: Math.round(nx * 10) / 10, y: Math.round(ny * 10) / 10 };
          applyFrameCoords();
        });

        const endFreeDrag = () => {
          if (!freeDrag || freeDrag.slotIdx !== slotIdx) return;
          frame.classList.remove('is-free-dragging');
          if (freeDrag.moved) {
            justDragged = true;
            setTimeout(() => {
              justDragged = false;
            }, 0);
            sayStatus(`Repositioned frame ${slotIdx + 1} on gallery wall.`);
          }
          freeDrag = null;
        };
        frame.addEventListener('pointerup', endFreeDrag);
        frame.addEventListener('pointercancel', endFreeDrag);

        // Preset mode HTML5 drag-to-swap
        frame.addEventListener('dragstart', (e) => {
          if (wallState.layout === 'free') {
            e.preventDefault();
            return;
          }
          dragSourceSlot = slotIdx;
          frame.classList.add('is-lifted');
          if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
        });

        frame.addEventListener('dragover', (e) => {
          if (dragSourceSlot === null || dragSourceSlot === slotIdx) return;
          e.preventDefault();
          frame.classList.add('is-drop-target');
        });

        frame.addEventListener('dragleave', () => {
          frame.classList.remove('is-drop-target');
        });

        frame.addEventListener('drop', (e) => {
          e.preventDefault();
          frame.classList.remove('is-drop-target');
          if (dragSourceSlot === null || dragSourceSlot === slotIdx) return;
          const tmp = wallState.slots[slotIdx];
          wallState.slots[slotIdx] = wallState.slots[dragSourceSlot];
          wallState.slots[dragSourceSlot] = tmp;
          renderWall(slotIdx);
          sayStatus(`Swapped frames ${dragSourceSlot + 1} and ${slotIdx + 1}.`);
        });

        frame.addEventListener('dragend', () => {
          dragSourceSlot = null;
          frames.forEach((f) => f.classList.remove('is-lifted', 'is-drop-target'));
          justDragged = true;
          setTimeout(() => {
            justDragged = false;
          }, 0);
        });
      });

      saveWallBtn?.addEventListener('click', () => {
        const w = 960;
        const h = 540;
        const wallL = Math.round(w * 0.075);
        const wallR = w - wallL;
        const wallW = wallR - wallL;
        const wallTop = 48;
        const wallBot = 392;
        const wallH = wallBot - wallTop;
        const floorH = h - wallBot;
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const cx = c.getContext('2d');
        if (!cx) return;

        // 1. Back gallery wall & gradient
        const baseWallHex = wallState.color || '#EBE2D0';
        cx.fillStyle = baseWallHex;
        cx.fillRect(0, 0, w, wallBot);

        const vertShade = cx.createLinearGradient(0, wallTop, 0, wallBot);
        vertShade.addColorStop(0, 'rgba(20, 15, 10, 0.14)');
        vertShade.addColorStop(0.22, 'rgba(255, 255, 255, 0.08)');
        vertShade.addColorStop(1, 'rgba(24, 18, 12, 0.16)');
        cx.fillStyle = vertShade;
        cx.fillRect(wallL, wallTop, wallW, wallH);

        // 2. Crisp gallery wall texture inside back wall
        cx.save();
        cx.beginPath();
        cx.rect(wallL, wallTop, wallW, wallH);
        cx.clip();
        if (wallState.texture === 'brick') {
          const bh = 22;
          const bw = 56;
          for (let row = 0; row * bh < wallH; row++) {
            const y = wallTop + row * bh;
            const offset = (row % 2) * (bw / 2);
            for (let x = wallL - offset; x < wallR; x += bw) {
              const seed = ((row * 17 + Math.round(x / bw) * 31) % 7) - 3;
              cx.fillStyle = seed > 0 ? 'rgba(255,255,255,0.06)' : 'rgba(24,16,10,0.08)';
              cx.fillRect(x + 2, y + 2, bw - 4, bh - 4);
              cx.fillStyle = 'rgba(255,255,255,0.22)';
              cx.fillRect(x + 2, y + 2, bw - 4, 2);
            }
            cx.fillStyle = 'rgba(30, 22, 16, 0.24)';
            cx.fillRect(wallL, y, wallW, 2);
            for (let x = wallL - offset; x < wallR; x += bw) {
              cx.fillRect(x, y, 2, bh);
            }
          }
        } else if (wallState.texture === 'linen') {
          cx.fillStyle = 'rgba(255, 255, 255, 0.16)';
          for (let x = wallL; x < wallR; x += 4) cx.fillRect(x, wallTop, 1, wallH);
          cx.fillStyle = 'rgba(30, 22, 16, 0.15)';
          for (let y = wallTop; y < wallBot; y += 4) cx.fillRect(wallL, y, wallW, 1);
        } else if (wallState.texture === 'panelling') {
          const railY = wallTop + Math.round(wallH * 0.58);
          cx.fillStyle = 'rgba(24, 17, 12, 0.12)';
          cx.fillRect(wallL, railY, wallW, wallBot - railY);
          cx.fillStyle = 'rgba(255, 255, 255, 0.34)';
          cx.fillRect(wallL, railY - 4, wallW, 3);
          cx.fillStyle = 'rgba(28, 20, 14, 0.3)';
          cx.fillRect(wallL, railY - 1, wallW, 5);
          for (let x = wallL + 24; x < wallR - 20; x += 96) {
            cx.strokeStyle = 'rgba(28, 20, 14, 0.22)';
            cx.lineWidth = 2;
            cx.strokeRect(x, railY + 12, 74, wallBot - railY - 22);
            cx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
            cx.lineWidth = 1.5;
            cx.strokeRect(x + 2, railY + 14, 70, wallBot - railY - 26);
          }
        } else if (wallState.texture === 'plaster') {
          for (let i = 0; i < 42; i++) {
            const px = wallL + ((i * 197) % wallW);
            const py = wallTop + ((i * 113) % wallH);
            const pr = 50 + (i % 5) * 28;
            const pg = cx.createRadialGradient(px, py, 4, px, py, pr);
            pg.addColorStop(0, i % 2 === 0 ? 'rgba(255,255,255,0.18)' : 'rgba(28,20,14,0.11)');
            pg.addColorStop(1, 'transparent');
            cx.fillStyle = pg;
            cx.fillRect(wallL, wallTop, wallW, wallH);
          }
        }
        cx.restore();

        // 3. Perspective Ceiling Soffit & Angled Side Return Walls
        cx.fillStyle = 'rgba(250, 246, 238, 0.36)';
        cx.fillRect(0, 0, w, wallTop);
        cx.fillStyle = 'rgba(28, 20, 14, 0.16)';
        cx.fillRect(0, wallTop - 1, w, 1);

        cx.save();
        cx.beginPath();
        cx.moveTo(0, 0);
        cx.lineTo(wallL, wallTop);
        cx.lineTo(wallL, wallBot);
        cx.lineTo(0, h);
        cx.closePath();
        cx.fillStyle = baseWallHex;
        cx.fill();
        cx.fillStyle = 'rgba(16, 12, 8, 0.24)';
        cx.fill();
        cx.restore();

        cx.save();
        cx.beginPath();
        cx.moveTo(w, 0);
        cx.lineTo(wallR, wallTop);
        cx.lineTo(wallR, wallBot);
        cx.lineTo(w, h);
        cx.closePath();
        cx.fillStyle = baseWallHex;
        cx.fill();
        cx.fillStyle = 'rgba(16, 12, 8, 0.24)';
        cx.fill();
        cx.restore();

        // 4. One-Point Perspective Oak Gallery Floor & Skirting Baseboard
        const flGrad = cx.createLinearGradient(0, wallBot, 0, h);
        flGrad.addColorStop(0, '#866347');
        flGrad.addColorStop(0.3, '#A9815C');
        flGrad.addColorStop(1, '#C39C76');
        cx.fillStyle = flGrad;
        cx.fillRect(0, wallBot, w, floorH);

        cx.strokeStyle = 'rgba(46, 30, 16, 0.22)';
        cx.lineWidth = 1.2;
        [-4.5, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5].forEach((k) => {
          cx.beginPath();
          cx.moveTo(w / 2 + k * 78, wallBot);
          cx.lineTo(w / 2 + k * 145, h);
          cx.stroke();
        });
        [24, 54, 92, 128].forEach((dy) => {
          cx.beginPath();
          cx.moveTo(0, wallBot + dy);
          cx.lineTo(w, wallBot + dy);
          cx.stroke();
        });

        cx.fillStyle = '#EFE9DD';
        cx.fillRect(wallL, wallBot, wallW, 10);
        cx.fillStyle = 'rgba(40, 28, 18, 0.25)';
        cx.fillRect(wallL, wallBot, wallW, 2);

        // 5. Track rail & lighting
        cx.fillStyle = '#5B5246';
        cx.fillRect(wallL, wallTop - 4, wallW, 4);

        const frameW = 114;
        const frameH = 128;

        if (wallState.light === 'spotlights') {
          cx.fillStyle = 'rgba(18, 14, 10, 0.28)';
          cx.fillRect(0, 0, w, wallBot);
          wallState.positions.forEach((pos) => {
            const cxPos = wallL + (pos.x / 100) * wallW;
            const sg = cx.createRadialGradient(cxPos, wallTop + 26, 8, cxPos, wallTop + 150, 155);
            sg.addColorStop(0, 'rgba(255, 246, 214, 0.64)');
            sg.addColorStop(0.55, 'rgba(255, 240, 200, 0.24)');
            sg.addColorStop(1, 'transparent');
            cx.fillStyle = sg;
            cx.fillRect(cxPos - 155, wallTop, 310, 290);
            cx.fillStyle = '#2B251F';
            cx.fillRect(cxPos - 12, wallTop - 4, 24, 10);
          });
        } else if (wallState.light === 'lamp') {
          const lg = cx.createRadialGradient(w - 110, wallBot - 50, 14, w - 110, wallBot - 50, 390);
          lg.addColorStop(0, 'rgba(255, 218, 138, 0.5)');
          lg.addColorStop(0.5, 'rgba(255, 206, 120, 0.16)');
          lg.addColorStop(1, 'rgba(20, 15, 10, 0.26)');
          cx.fillStyle = lg;
          cx.fillRect(0, 0, w, wallBot);
        }

        // 6. Ceiling Frieze Exhibition Title Plaque (Above Rail - Zero Cable Overlap)
        const titleText = wallState.title.trim() || 'Studio Exhibition';
        const plaqueLabel = `STUDIO EXHIBITION  \u00B7  ${titleText}`;
        cx.font = 'italic 600 14px Cormorant Garamond, Georgia, serif';
        const plaqueW = Math.max(220, Math.min(wallW - 40, Math.ceil(cx.measureText(plaqueLabel).width) + 44));
        const px = w / 2 - plaqueW / 2;
        const py = 8;
        const ph = 28;
        const pr = 14;
        cx.beginPath();
        cx.arc(px + pr, py + pr, pr, Math.PI / 2, Math.PI * 1.5);
        cx.lineTo(px + plaqueW - pr, py);
        cx.arc(px + plaqueW - pr, py + pr, pr, -Math.PI / 2, Math.PI / 2);
        cx.closePath();
        cx.fillStyle = 'rgba(255, 249, 234, 0.94)';
        cx.fill();
        cx.strokeStyle = '#9E855F';
        cx.lineWidth = 1.2;
        cx.stroke();
        cx.fillStyle = '#5E3B2B';
        cx.textAlign = 'center';
        cx.textBaseline = 'middle';
        cx.fillText(plaqueLabel, w / 2, py + ph / 2);
        cx.textBaseline = 'alphabetic';

        // 7. Three Uniform Frames at Layout Coordinates + Twin Museum Cables + Full Wrapped Titles
        wallState.positions.forEach((pos, idx) => {
          const cxPos = Math.round(wallL + (pos.x / 100) * wallW);
          const topY = Math.round(wallTop + (pos.y / 100) * wallH);

          cx.strokeStyle = 'rgba(72, 60, 44, 0.45)';
          cx.lineWidth = 1.2;
          cx.beginPath();
          cx.moveTo(cxPos - 36, wallTop);
          cx.lineTo(cxPos - 36, topY);
          cx.moveTo(cxPos + 36, wallTop);
          cx.lineTo(cxPos + 36, topY);
          cx.stroke();

          cx.fillStyle = 'rgba(28, 20, 12, 0.26)';
          cx.fillRect(cxPos - frameW / 2 + 4, topY + 6, frameW, frameH);

          cx.fillStyle = idx === 1 ? '#3E3A33' : '#7C5638';
          cx.fillRect(cxPos - frameW / 2, topY, frameW, frameH);

          cx.fillStyle = '#FAF5E8';
          cx.fillRect(cxPos - frameW / 2 + 6, topY + 6, frameW - 12, frameH - 12);

          const img = frames[idx]?.querySelector('img');
          const artX = cxPos - frameW / 2 + 13;
          const artY = topY + 13;
          const artW = frameW - 26;
          const artH = frameH - 26;
          cx.save();
          cx.beginPath();
          cx.rect(artX, artY, artW, artH);
          cx.clip();
          if (img && img.complete && img.naturalWidth > 0) {
            const ir = img.naturalWidth / img.naturalHeight;
            const br = artW / artH;
            let dw = artW;
            let dh = artH;
            let dx = artX;
            let dy = artY;
            if (ir > br) {
              dw = artH * ir;
              dx = artX + (artW - dw) / 2;
            } else {
              dh = artW / ir;
              dy = artY + (artH - dh) / 2;
            }
            cx.drawImage(img, dx, dy, dw, dh);
          }
          cx.restore();

          const art = ARTWORKS[wallState.slots[idx]] || ARTWORKS[0];
          const fullTitle = art?.title || '';
          cx.font = '600 9.5px Cormorant Garamond, Georgia, serif';
          const words = fullTitle.split(/\s+/);
          const titleLines = [];
          let curLine = '';
          words.forEach((word) => {
            const test = curLine ? `${curLine} ${word}` : word;
            if (cx.measureText(test).width > 142 && curLine) {
              titleLines.push(curLine);
              curLine = word;
            } else {
              curLine = test;
            }
          });
          if (curLine) titleLines.push(curLine);
          const boxH = 12 + titleLines.length * 11;
          cx.fillStyle = '#F6EDDB';
          cx.fillRect(cxPos - 76, topY + frameH + 6, 152, boxH);
          cx.strokeStyle = 'rgba(130, 108, 82, 0.45)';
          cx.lineWidth = 1;
          cx.strokeRect(cxPos - 76, topY + frameH + 6, 152, boxH);
          cx.fillStyle = '#2E261F';
          cx.textAlign = 'center';
          titleLines.forEach((line, lIdx) => {
            cx.fillText(line, cxPos, topY + frameH + 17 + lIdx * 11);
          });
        });

        // 8. Independent Gallery Elements (Plant & Lamp Inside Corners, Bench, 6 Movable 3W/3M Visitors)
        const cornerFootY = wallBot + 36;
        const midFootY = wallBot + 62;

        if (wallState.plant) {
          const px = wallL + 34;
          cx.fillStyle = 'rgba(30, 20, 12, 0.24)';
          cx.beginPath();
          cx.ellipse(px, cornerFootY, 22, 5.5, 0, 0, Math.PI * 2);
          cx.fill();
          cx.fillStyle = '#5E7A68';
          cx.beginPath();
          cx.ellipse(px - 15, cornerFootY - 54, 15, 6.5, -0.5, 0, Math.PI * 2);
          cx.fill();
          cx.fillStyle = '#4C6856';
          cx.beginPath();
          cx.ellipse(px + 15, cornerFootY - 56, 15, 6.5, 0.5, 0, Math.PI * 2);
          cx.fill();
          cx.fillStyle = '#6F8C78';
          cx.beginPath();
          cx.ellipse(px, cornerFootY - 68, 6.5, 20, 0.1, 0, Math.PI * 2);
          cx.fill();
          cx.fillStyle = '#C47458';
          cx.beginPath();
          cx.moveTo(px - 16, cornerFootY - 36);
          cx.lineTo(px + 16, cornerFootY - 36);
          cx.lineTo(px + 11, cornerFootY - 2);
          cx.lineTo(px - 11, cornerFootY - 2);
          cx.closePath();
          cx.fill();
        }

        if (wallState.bench) {
          const bx = w / 2 - 84;
          const by = midFootY - 26;
          cx.fillStyle = 'rgba(30, 20, 12, 0.22)';
          cx.beginPath();
          cx.ellipse(w / 2, midFootY + 2, 82, 5.5, 0, 0, Math.PI * 2);
          cx.fill();
          cx.fillStyle = '#383029';
          cx.fillRect(bx + 16, by + 10, 7, 18);
          cx.fillRect(bx + 145, by + 10, 7, 18);
          cx.fillStyle = '#B1855D';
          cx.fillRect(bx, by, 168, 10);
          cx.fillStyle = '#875F3E';
          cx.fillRect(bx + 4, by + 8, 160, 3);
        }

        if (wallState.lamp) {
          const lx = wallR - 34;
          cx.fillStyle = 'rgba(30, 20, 12, 0.24)';
          cx.beginPath();
          cx.ellipse(lx, cornerFootY, 18, 5, 0, 0, Math.PI * 2);
          cx.fill();
          cx.strokeStyle = '#9B7B4F';
          cx.lineWidth = 3.2;
          cx.beginPath();
          cx.moveTo(lx, cornerFootY - 116);
          cx.lineTo(lx, cornerFootY - 2);
          cx.stroke();
          cx.fillStyle = '#7D623C';
          cx.beginPath();
          cx.ellipse(lx, cornerFootY, 15, 4, 0, 0, Math.PI * 2);
          cx.fill();
          cx.fillStyle = '#F8EED8';
          cx.beginPath();
          cx.moveTo(lx - 18, cornerFootY - 110);
          cx.lineTo(lx - 10, cornerFootY - 142);
          cx.lineTo(lx + 10, cornerFootY - 142);
          cx.lineTo(lx + 18, cornerFootY - 110);
          cx.closePath();
          cx.fill();
        }

        if (wallState.visitors) {
          const VISITOR_SPECS = [
            { gender: 'man', coat: '#373B42', leg: '#CFC4B2', hair: '#261D17', hairStyle: 'short', prop: '' },
            { gender: 'woman', coat: '#BA5D42', leg: '#CFA082', hair: '#261B15', hairStyle: 'long', prop: 'book' },
            { gender: 'man', coat: '#546858', leg: '#2B3036', hair: '#4B3629', hairStyle: 'short', prop: '' },
            { gender: 'woman', coat: '#C99652', skirt: '#334354', leg: '#2A2B30', hair: '#2A1F19', hairStyle: 'bun', prop: '' },
            { gender: 'man', coat: '#3B4B59', leg: '#5A5F66', hair: '#241B15', hairStyle: 'short', prop: '' },
            { gender: 'woman', coat: '#C48982', leg: '#282524', hair: '#593B2A', hairStyle: 'ponytail', prop: 'tote' }
          ];

          const ordered = VISITOR_SPECS.map((spec, idx) => ({
            spec,
            pos: wallState.visitorPositions[idx] || DEFAULT_VISITOR_POSITIONS[idx]
          })).sort((a, b) => b.pos.bottom - a.pos.bottom);

          ordered.forEach(({ spec, pos }) => {
            const vx = (pos.x / 100) * w;
            const vy = h - (pos.bottom / 100) * h;
            const sc = Math.max(0.82, Math.min(1.06, 1.04 - (pos.bottom / 14) * 0.2));
            cx.save();
            cx.translate(vx, vy);
            cx.scale(sc, sc);
            cx.fillStyle = 'rgba(20, 14, 10, 0.26)';
            cx.beginPath();
            cx.ellipse(0, 2, 22, 6, 0, 0, Math.PI * 2);
            cx.fill();

            if (spec.gender === 'woman') {
              cx.fillStyle = spec.leg;
              cx.fillRect(-8, -46, 5.5, 44);
              cx.fillRect(2.5, -46, 5.5, 44);
              cx.fillStyle = '#241D1A';
              cx.beginPath();
              cx.ellipse(-5.2, -1, 5.4, 3, 0, 0, Math.PI * 2);
              cx.ellipse(5.2, -1, 5.4, 3, 0, 0, Math.PI * 2);
              cx.fill();
              cx.fillStyle = spec.skirt || spec.coat;
              cx.beginPath();
              cx.moveTo(-12, -100);
              cx.lineTo(12, -100);
              cx.lineTo(22, -44);
              cx.lineTo(-22, -44);
              cx.closePath();
              cx.fill();
              cx.fillStyle = spec.coat;
              cx.beginPath();
              cx.moveTo(-13, -124);
              cx.lineTo(13, -124);
              cx.lineTo(10, -98);
              cx.lineTo(-10, -98);
              cx.closePath();
              cx.fill();
              cx.strokeStyle = 'rgba(24, 16, 12, 0.35)';
              cx.lineWidth = 1.6;
              cx.beginPath();
              cx.moveTo(-8, -124);
              cx.quadraticCurveTo(0, -121, 8, -124);
              cx.stroke();
              if (spec.prop === 'book') {
                cx.fillStyle = '#FAF4E8';
                cx.fillRect(14, -98, 11, 16);
              } else if (spec.prop === 'tote') {
                cx.strokeStyle = '#A89474';
                cx.lineWidth = 1.6;
                cx.beginPath();
                cx.moveTo(-9, -124);
                cx.lineTo(-17, -84);
                cx.stroke();
                cx.fillStyle = '#F2E8D5';
                cx.fillRect(-24, -84, 13, 20);
                cx.fillStyle = '#87524C';
                cx.fillRect(-10.5, -100, 21, 2.5);
                cx.strokeStyle = 'rgba(80, 44, 40, 0.45)';
                cx.lineWidth = 1.2;
                cx.beginPath();
                cx.moveTo(0, -97);
                cx.lineTo(0, -45);
                cx.stroke();
              } else {
                cx.strokeStyle = '#202C39';
                cx.lineWidth = 1.1;
                cx.beginPath();
                cx.moveTo(-5, -99);
                cx.lineTo(-9, -45);
                cx.moveTo(0, -99);
                cx.lineTo(0, -44);
                cx.moveTo(5, -99);
                cx.lineTo(9, -45);
                cx.stroke();
                cx.strokeStyle = '#6E4B32';
                cx.lineWidth = 2;
                cx.beginPath();
                cx.moveTo(-9, -124);
                cx.lineTo(11, -86);
                cx.stroke();
                cx.fillStyle = '#7D5438';
                cx.fillRect(8, -90, 10, 10);
              }
              cx.fillStyle = '#CFA082';
              cx.fillRect(-3, -135, 6, 12);
              if (spec.hairStyle === 'long') {
                cx.fillStyle = spec.hair;
                cx.beginPath();
                cx.arc(0, -142, 11.5, Math.PI, 0);
                cx.lineTo(14.5, -104);
                cx.quadraticCurveTo(0, -100, -14.5, -104);
                cx.closePath();
                cx.fill();
                cx.strokeStyle = '#463329';
                cx.lineWidth = 1.4;
                cx.beginPath();
                cx.moveTo(-7, -145);
                cx.quadraticCurveTo(0, -149, 7, -145);
                cx.stroke();
              } else if (spec.hairStyle === 'bun') {
                cx.fillStyle = '#CFA082';
                cx.beginPath();
                cx.arc(-9.5, -141.5, 2.1, 0, Math.PI * 2);
                cx.arc(9.5, -141.5, 2.1, 0, Math.PI * 2);
                cx.fill();
                cx.fillStyle = spec.hair;
                cx.beginPath();
                cx.ellipse(0, -142, 9.6, 10, 0, 0, Math.PI * 2);
                cx.fill();
                cx.beginPath();
                cx.arc(0, -155, 5.6, 0, Math.PI * 2);
                cx.fill();
                cx.fillStyle = '#D4A459';
                cx.beginPath();
                cx.ellipse(0, -150.5, 4.2, 1.4, 0, 0, Math.PI * 2);
                cx.fill();
              } else {
                cx.fillStyle = '#CFA082';
                cx.beginPath();
                cx.arc(-9.5, -142, 2.1, 0, Math.PI * 2);
                cx.arc(9.5, -142, 2.1, 0, Math.PI * 2);
                cx.fill();
                cx.fillStyle = spec.hair;
                cx.beginPath();
                cx.ellipse(0, -142, 9.8, 10, 0, 0, Math.PI * 2);
                cx.fill();
                cx.fillStyle = '#D4A459';
                cx.beginPath();
                cx.ellipse(0, -136, 3.8, 2, 0, 0, Math.PI * 2);
                cx.fill();
                cx.fillStyle = '#4E3323';
                cx.beginPath();
                cx.ellipse(0, -120, 5.2, 16, 0, 0, Math.PI * 2);
                cx.fill();
              }
            } else {
              cx.fillStyle = spec.leg;
              cx.fillRect(-11, -66, 9.5, 64);
              cx.fillRect(1.5, -66, 9.5, 64);
              cx.fillStyle = '#24201C';
              cx.fillRect(-12, -5, 11, 5);
              cx.fillRect(1, -5, 11, 5);
              cx.fillStyle = spec.coat;
              cx.fillRect(-19, -128, 38, 66);
              cx.strokeStyle = 'rgba(20, 16, 12, 0.45)';
              cx.lineWidth = 2;
              cx.beginPath();
              cx.moveTo(-9, -128);
              cx.quadraticCurveTo(0, -123, 9, -128);
              cx.stroke();
              if (spec.coat !== '#546858') {
                cx.strokeStyle = 'rgba(20, 16, 12, 0.35)';
                cx.lineWidth = 1.3;
                cx.beginPath();
                cx.moveTo(0, -123);
                cx.lineTo(0, -62);
                cx.stroke();
              }
              cx.fillStyle = '#D5A384';
              cx.fillRect(-3.5, -138, 7, 11);
              cx.fillStyle = '#CFA082';
              cx.beginPath();
              cx.arc(-9.8, -144, 2.2, 0, Math.PI * 2);
              cx.arc(9.8, -144, 2.2, 0, Math.PI * 2);
              cx.fill();
              cx.fillStyle = spec.hair;
              cx.beginPath();
              cx.ellipse(0, -144, 10, 10.5, 0, 0, Math.PI * 2);
              cx.fill();
              cx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
              cx.lineWidth = 1.4;
              cx.beginPath();
              cx.arc(0, -144, 6.5, Math.PI * 1.15, Math.PI * 1.85);
              cx.stroke();
            }
            cx.restore();
          });
        }

        const dl = document.createElement('a');
        dl.download = 'amrudha-art-gallery.png';
        dl.href = c.toDataURL('image/png');
        document.body.appendChild(dl);
        dl.click();
        dl.remove();
        sayStatus('Saved your custom 3-frame art gallery as PNG!');
      });

      renderWall();
    }
    initExhibitionWall();
  }

  /* ------------------------------------------------------------------------
     Say Hello Page: Wax Seal + Rubber Stamp Postcard Press
  ------------------------------------------------------------------------ */
  function initContactEnvelope() {
    const waxBtn = document.getElementById('wax-seal-btn');
    const foldBtn = document.getElementById('fold-letter-btn');
    const cover = document.getElementById('envelope-cover');
    const postcard = document.getElementById('postcard-revealed');
    const copyBtn = document.getElementById('copy-email-btn');
    const toastEl = document.getElementById('toast');

    const stampsLayer = document.getElementById('postcard-stamps-layer');
    const stampBtns = document.querySelectorAll('.stamp-pad-btn');
    const clearStampsBtn = document.getElementById('clear-stamps-btn');
    const topicSelect = document.getElementById('postcard-topic');
    const noteInput = document.getElementById('postcard-note-input');
    const mailtoLink = document.getElementById('postcard-mailto-link');
    const savePostcardBtn = document.getElementById('save-postcard-png-btn');
    let selectedStamp = 'tulip';

    const updateMailtoHref = () => {
      if (!mailtoLink) return;
      const subject = topicSelect?.value || 'Saying hello from your portfolio';
      const body = noteInput?.value || '';
      mailtoLink.href = `mailto:amrudhashree123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    topicSelect?.addEventListener('change', updateMailtoHref);
    noteInput?.addEventListener('input', updateMailtoHref);
    updateMailtoHref();

    const STAMP_SVGS = {
      tulip: `<svg viewBox="0 0 44 44" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M22 38 V18"/><path d="M14 14 C14 23, 30 23, 30 14 L26 8 L22 13 L18 8 Z"/><circle cx="22" cy="22" r="19" stroke-dasharray="3 3" opacity="0.45"/></svg>`,
      heart: `<svg viewBox="0 0 44 44" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M22 34 C14 28, 10 22, 10 17 C10 13, 13.5 10.5, 17 10.5 C19.5 10.5, 21.2 12, 22 14 C22.8 12, 24.5 10.5, 27 10.5 C30.5 10.5, 34 13, 34 17 C34 22, 30 28, 22 34 Z" stroke-dasharray="3 2"/><circle cx="22" cy="22" r="19" stroke-dasharray="3 3" opacity="0.45"/></svg>`,
      palette: `<svg viewBox="0 0 44 44" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M11 22 C11 14, 29 10, 33 19 C36 25, 30 33, 22 32 C17 31, 11 28, 11 22 Z"/><circle cx="19" cy="18" r="1.5" fill="currentColor"/><circle cx="26" cy="18" r="1.5" fill="currentColor"/><circle cx="27" cy="25" r="1.5" fill="currentColor"/></svg>`,
      vessel: `<svg viewBox="0 0 44 44" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 16 H29 L27 20 C30 24, 30 31, 26 35 H18 C14 31, 14 24, 17 20 Z"/><circle cx="22" cy="22" r="19" stroke-dasharray="3 3" opacity="0.45"/></svg>`
    };

    stampBtns.forEach((b) => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedStamp = b.dataset.stamp || 'tulip';
        stampBtns.forEach((btn) => btn.classList.toggle('is-active', btn === b));
      });
    });

    clearStampsBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (stampsLayer) stampsLayer.innerHTML = '';
    });

    postcard?.addEventListener('click', (e) => {
      if (e.target.closest('a, button, input, select, textarea, .postcard-stamper, .postcard-composer')) return;
      if (!stampsLayer) return;
      const rect = postcard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rot = (Math.random() - 0.5) * 28;
      const wrap = document.createElement('span');
      wrap.className = 'pressed-ink-stamp';
      wrap.dataset.stampType = selectedStamp;
      wrap.dataset.normX = (x / rect.width).toFixed(4);
      wrap.dataset.normY = (y / rect.height).toFixed(4);
      wrap.dataset.rot = rot.toFixed(1);
      wrap.style.left = `${x}px`;
      wrap.style.top = `${y}px`;
      wrap.style.setProperty('--stamp-rot', `${rot.toFixed(1)}deg`);
      wrap.innerHTML = STAMP_SVGS[selectedStamp] || STAMP_SVGS.tulip;
      stampsLayer.appendChild(wrap);
    });

    if (waxBtn && cover && postcard) {
      waxBtn.addEventListener('click', () => {
        const openLetter = () => {
          cover.hidden = true;
          postcard.hidden = false;
          waxBtn.setAttribute('aria-expanded', 'true');
        };
        if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          document.startViewTransition(openLetter);
        } else {
          openLetter();
        }
      });

      foldBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const closeLetter = () => {
          postcard.hidden = true;
          cover.hidden = false;
          waxBtn.setAttribute('aria-expanded', 'false');
        };
        if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          document.startViewTransition(closeLetter);
        } else {
          closeLetter();
        }
      });
    }

    const showToast = (msg) => {
      if (!toastEl) return;
      toastEl.textContent = msg;
      toastEl.hidden = false;
      clearTimeout(showToast._timer);
      showToast._timer = setTimeout(() => {
        toastEl.hidden = true;
      }, 2400);
    };

    function drawStampedMark(cx, kind, x, y, rotDeg) {
      cx.save();
      cx.translate(x, y);
      cx.rotate((rotDeg * Math.PI) / 180);
      cx.strokeStyle = 'rgba(200, 109, 81, 0.72)';
      cx.fillStyle = 'rgba(200, 109, 81, 0.72)';
      cx.lineWidth = 2;
      cx.setLineDash([4, 3]);
      cx.beginPath();
      cx.arc(0, 0, 22, 0, Math.PI * 2);
      cx.stroke();
      cx.setLineDash([]);
      if (kind === 'heart') {
        cx.beginPath();
        cx.moveTo(0, 12);
        cx.bezierCurveTo(-12, 4, -14, -8, -6, -10);
        cx.bezierCurveTo(-2, -10, 0, -5, 0, -5);
        cx.bezierCurveTo(0, -5, 2, -10, 6, -10);
        cx.bezierCurveTo(14, -8, 12, 4, 0, 12);
        cx.stroke();
      } else if (kind === 'palette') {
        cx.beginPath();
        cx.ellipse(0, 0, 12, 9, -0.3, 0, Math.PI * 2);
        cx.stroke();
        cx.beginPath();
        cx.arc(-4, -3, 1.8, 0, Math.PI * 2);
        cx.arc(4, -3, 1.8, 0, Math.PI * 2);
        cx.arc(4, 3, 1.8, 0, Math.PI * 2);
        cx.fill();
      } else if (kind === 'vessel') {
        cx.beginPath();
        cx.moveTo(-7, -8);
        cx.lineTo(7, -8);
        cx.lineTo(5, -3);
        cx.lineTo(9, 10);
        cx.lineTo(-9, 10);
        cx.lineTo(-5, -3);
        cx.closePath();
        cx.stroke();
      } else {
        // Delft tulip default
        cx.beginPath();
        cx.moveTo(0, 14);
        cx.lineTo(0, -2);
        cx.stroke();
        cx.beginPath();
        cx.moveTo(-8, -6);
        cx.quadraticCurveTo(0, 5, 8, -6);
        cx.lineTo(4, -13);
        cx.lineTo(0, -8);
        cx.lineTo(-4, -13);
        cx.closePath();
        cx.stroke();
      }
      cx.restore();
    }

    savePostcardBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const w = 960;
      const h = 560;
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const cx = c.getContext('2d');
      if (!cx) return;

      // Postcard card stock background
      cx.fillStyle = '#FFFDF7';
      cx.fillRect(0, 0, w, h);

      // Classic airmail terracotta & sage stripe header
      for (let x = 0; x < w; x += 56) {
        cx.fillStyle = '#C86D51';
        cx.fillRect(x, 0, 20, 10);
        cx.fillStyle = '#5E7A68';
        cx.fillRect(x + 28, 0, 20, 10);
      }

      // Outer border
      cx.strokeStyle = 'rgba(38, 33, 29, 0.16)';
      cx.lineWidth = 2;
      cx.strokeRect(18, 22, w - 36, h - 40);

      // Delft postmark stamp circle (top right)
      cx.save();
      cx.strokeStyle = 'rgba(94, 122, 104, 0.55)';
      cx.lineWidth = 1.5;
      cx.setLineDash([4, 4]);
      cx.beginPath();
      cx.arc(w - 110, 106, 48, 0, Math.PI * 2);
      cx.stroke();
      cx.setLineDash([]);
      cx.fillStyle = 'rgba(94, 122, 104, 0.85)';
      cx.font = '600 10px Plus Jakarta Sans, sans-serif';
      cx.textAlign = 'center';
      cx.fillText('DELFT · NL', w - 110, 100);
      cx.fillText('STUDIO POST', w - 110, 118);
      cx.restore();

      // Left message column
      cx.fillStyle = '#C86D51';
      cx.font = '600 28px Caveat, Georgia, serif';
      cx.textAlign = 'left';
      cx.fillText('Studio Postcard', 58, 92);

      const topicText = topicSelect?.value || 'Saying hello';
      cx.fillStyle = '#5E7A68';
      cx.font = '600 15px Plus Jakarta Sans, sans-serif';
      cx.fillText(`Topic: ${topicText}`, 58, 130);

      // Lined paper note block
      cx.strokeStyle = 'rgba(200, 109, 81, 0.22)';
      cx.lineWidth = 1;
      for (let ly = 186; ly <= 366; ly += 45) {
        cx.beginPath();
        cx.moveTo(58, ly);
        cx.lineTo(500, ly);
        cx.stroke();
      }

      const rawNote =
        noteInput?.value.trim() ||
        'Warm greetings from Delft. Excited to connect on healthcare, design, and creative craft!';
      cx.fillStyle = '#26211D';
      cx.font = 'italic 24px Cormorant Garamond, Georgia, serif';
      const words = rawNote.split(/\s+/);
      let line = '';
      let lineY = 178;
      words.forEach((word) => {
        const test = line ? `${line} ${word}` : word;
        if (cx.measureText(test).width > 432 && line) {
          if (lineY <= 360) cx.fillText(line, 58, lineY);
          line = word;
          lineY += 45;
        } else {
          line = test;
        }
      });
      if (line && lineY <= 360) cx.fillText(line, 58, lineY);

      cx.fillStyle = '#C86D51';
      cx.font = '600 28px Caveat, Georgia, serif';
      cx.fillText('Warmly, Amrudha Shree', 58, 460);

      // Vertical postcard divider
      cx.save();
      cx.strokeStyle = 'rgba(38, 33, 29, 0.22)';
      cx.setLineDash([6, 6]);
      cx.beginPath();
      cx.moveTo(548, 120);
      cx.lineTo(548, 490);
      cx.stroke();
      cx.restore();

      // Right address block
      cx.fillStyle = '#8C8277';
      cx.font = '600 12px Plus Jakarta Sans, sans-serif';
      cx.fillText('EMAIL', 590, 230);
      cx.fillStyle = '#26211D';
      cx.font = '500 18px Plus Jakarta Sans, sans-serif';
      cx.fillText('amrudhashree123@gmail.com', 590, 258);

      cx.fillStyle = '#8C8277';
      cx.font = '600 12px Plus Jakarta Sans, sans-serif';
      cx.fillText('STUDIO LOCATION', 590, 320);
      cx.fillStyle = '#26211D';
      cx.font = '500 18px Plus Jakarta Sans, sans-serif';
      cx.fillText('Delft, The Netherlands', 590, 348);

      // Replay placed ink stamps on top
      stampsLayer?.querySelectorAll('.pressed-ink-stamp').forEach((st) => {
        const nx = Number(st.dataset.normX || 0.5);
        const ny = Number(st.dataset.normY || 0.5);
        const rot = Number(st.dataset.rot || 0);
        const kind = st.dataset.stampType || 'tulip';
        drawStampedMark(cx, kind, nx * w, ny * h, rot);
      });

      const dl = document.createElement('a');
      dl.download = 'delft-studio-postcard.png';
      dl.href = c.toDataURL('image/png');
      document.body.appendChild(dl);
      dl.click();
      dl.remove();
      showToast('Saved delft-studio-postcard.png!');
    });

    if (!copyBtn) return;

    copyBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const email = copyBtn.dataset.email || 'amrudhashree123@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast(`Copied ${email}`);
      } catch (_) {
        showToast(`Email: ${email}`);
      }
      if (typeof window.__spawnStudioConfetti === 'function') {
        const rect = copyBtn.getBoundingClientRect();
        window.__spawnStudioConfetti(
          e.clientX || rect.left + rect.width / 2,
          e.clientY || rect.top + rect.height / 2
        );
      }
    });
  }

  /* ------------------------------------------------------------------------
     Scroll-Driven Crochet Yarn Skein, Chain Stitches & Hook Rail
  ------------------------------------------------------------------------ */
  function initCrochetScrollRail() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rail = document.createElement('aside');
    rail.className = 'crochet-scroll-rail';
    rail.setAttribute('aria-hidden', 'true');

    let chainD = 'M 18 6';
    for (let i = 0; i < 14; i++) {
      const y0 = 6 + i * 29;
      const yMid = y0 + 14.5;
      const y1 = y0 + 29;
      chainD += ` C 31 ${y0 + 5}, 31 ${yMid + 4}, 18 ${yMid}`;
      chainD += ` C 5 ${yMid - 4}, 5 ${y1 - 5}, 18 ${y1}`;
    }

    rail.innerHTML = `
      <svg class="yarn-skein" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round">
        <circle cx="20" cy="20" r="15"></circle>
        <path d="M8 14 C16 10, 26 12, 33 19"></path>
        <path d="M6 21 C15 16, 27 18, 34 25"></path>
        <path d="M12 31 C18 22, 24 14, 30 9"></path>
        <path d="M17 34 C22 25, 27 18, 33 13"></path>
        <path d="M9 11 C13 19, 17 26, 22 34"></path>
      </svg>
      <div class="crochet-rail-track">
        <svg class="crochet-rail-svg" viewBox="0 0 36 420" preserveAspectRatio="none" fill="none">
          <path class="crochet-rail-guide" d="${chainD}"></path>
          <path class="crochet-rail-stitch" d="${chainD}"></path>
        </svg>
        <svg class="crochet-rail-hook" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 26 L21 11" stroke-width="2.4" stroke="#8F5B3C"></path>
          <path d="M21 11 L26 6 C28 4 29.5 6.5 27.5 8.5 C26.2 9.8 24.5 9.2 24.5 7.8"></path>
        </svg>
      </div>
    `;

    document.body.appendChild(rail);

    const skein = rail.querySelector('.yarn-skein');
    const stitchPath = rail.querySelector('.crochet-rail-stitch');
    const hookEl = rail.querySelector('.crochet-rail-hook');
    if (!stitchPath || !hookEl) return;

    const totalLen = stitchPath.getTotalLength();
    stitchPath.style.strokeDasharray = `${totalLen}`;

    const updateRail = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = maxScroll > 20 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0.25;
      const visualProgress = 0.12 + rawProgress * 0.88;

      stitchPath.style.strokeDashoffset = `${(totalLen * (1 - visualProgress)).toFixed(1)}`;
      if (skein) {
        skein.style.transform = `rotate(${(rawProgress * 720).toFixed(1)}deg)`;
      }
      const tipPct = 4 + visualProgress * 90;
      const hookTilt = Math.sin(rawProgress * 28) * 14 - 28;
      hookEl.style.top = `${tipPct.toFixed(1)}%`;
      hookEl.style.transform = `translate(-50%, -50%) rotate(${hookTilt.toFixed(1)}deg)`;
    };

    window.addEventListener('scroll', updateRail, { passive: true });
    window.addEventListener('resize', updateRail, { passive: true });
    updateRail();
  }

  /* ------------------------------------------------------------------------
     Interactive Studio Canvas: Crochet Stitch, Watercolor Brush & Confetti
  ------------------------------------------------------------------------ */
  function initStudioTrailCanvas() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'atelier-trail-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const switcher = document.createElement('div');
    switcher.className = 'craft-mode-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Interactive studio trail mode');
    switcher.innerHTML = `
      <button type="button" class="craft-mode-btn" data-trail-mode="crochet">Crochet Stitch</button>
      <button type="button" class="craft-mode-btn" data-trail-mode="paint">Watercolor Brush</button>
      <button type="button" class="craft-mode-btn" data-trail-mode="off">Quiet Paper</button>
    `;
    document.body.appendChild(switcher);

    let mode = 'crochet';
    try {
      const saved = localStorage.getItem('amrudha-craft-trail');
      if (saved === 'crochet' || saved === 'paint' || saved === 'off') {
        mode = saved;
      }
    } catch (_) {}

    const modeButtons = switcher.querySelectorAll('[data-trail-mode]');
    const syncButtons = () => {
      modeButtons.forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.trailMode === mode);
      });
    };
    syncButtons();

    modeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        mode = btn.dataset.trailMode || 'crochet';
        try {
          localStorage.setItem('amrudha-craft-trail', mode);
        } catch (_) {}
        syncButtons();
        if (mode === 'off') {
          particles.length = 0;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      });
    });

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const PALETTE_PAINT = [
      'rgba(200, 109, 81, 0.24)',
      'rgba(94, 122, 104, 0.22)',
      'rgba(217, 167, 106, 0.24)',
      'rgba(168, 88, 107, 0.2)'
    ];
    const PALETTE_YARN = ['#C86D51', '#5E7A68', '#C4862C', '#3B7A8C'];

    const particles = [];
    let lastX = null;
    let lastY = null;
    let stitchToggle = 0;
    let animId = null;

    function addStitchParticle(x, y, angle, scale = 1, vx = 0, vy = 0) {
      if (particles.length > 90) particles.shift();
      stitchToggle += 1;
      particles.push({
        kind: 'crochet',
        x,
        y,
        vx,
        vy,
        angle,
        scale,
        color: PALETTE_YARN[stitchToggle % PALETTE_YARN.length],
        born: performance.now(),
        life: 1450
      });
      ensureLoop();
    }

    function addPaintParticle(x, y, radiusBoost = 1, vx = 0, vy = 0) {
      if (particles.length > 75) particles.shift();
      stitchToggle += 1;
      particles.push({
        kind: 'paint',
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx,
        vy,
        radius: (12 + Math.random() * 14) * radiusBoost,
        angle: Math.random() * Math.PI * 2,
        color: PALETTE_PAINT[stitchToggle % PALETTE_PAINT.length],
        born: performance.now(),
        life: 1650
      });
      ensureLoop();
    }

    window.__spawnStudioConfetti = (cx, cy) => {
      for (let i = 0; i < 16; i++) {
        const ang = (Math.PI * 2 * i) / 16 + Math.random() * 0.2;
        const spd = 1.4 + Math.random() * 2.4;
        if (i % 2 === 0) {
          addStitchParticle(cx, cy, ang, 1.05, Math.cos(ang) * spd, Math.sin(ang) * spd - 0.6);
        } else {
          addPaintParticle(cx, cy, 0.75, Math.cos(ang) * spd, Math.sin(ang) * spd - 0.6);
        }
      }
    };

    window.addEventListener(
      'pointermove',
      (e) => {
        if (mode === 'off' || e.pointerType === 'touch') return;
        const x = e.clientX;
        const y = e.clientY;
        if (lastX === null || lastY === null) {
          lastX = x;
          lastY = y;
          return;
        }
        const dx = x - lastX;
        const dy = y - lastY;
        if (Math.hypot(dx, dy) < 18) return;

        const angle = Math.atan2(dy, dx);
        if (mode === 'crochet') {
          addStitchParticle(x, y, angle, 1);
        } else if (mode === 'paint') {
          addPaintParticle(x, y, 1);
        }
        lastX = x;
        lastY = y;
      },
      { passive: true }
    );

    let lastScrollY = window.scrollY;
    let lastScrollSpawn = 0;
    window.addEventListener(
      'scroll',
      () => {
        if (mode === 'off') return;
        const now = performance.now();
        if (now - lastScrollSpawn < 65) return;
        const delta = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;
        lastScrollSpawn = now;

        const y = Math.min(window.innerHeight - 70, Math.max(90, window.innerHeight * (0.28 + Math.random() * 0.5)));
        const onRight = stitchToggle % 2 === 0;
        const x = onRight ? window.innerWidth - 78 - Math.random() * 28 : 42 + Math.random() * 34;

        if (mode === 'crochet') {
          addStitchParticle(x, y, delta >= 0 ? Math.PI / 2 : -Math.PI / 2, 1.12);
        } else if (mode === 'paint') {
          addPaintParticle(x, y, 1.25);
        }
      },
      { passive: true }
    );

    function drawFrame(now) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        const age = now - p.born;
        if (age >= p.life) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx || 0;
        p.y += p.vy || 0;
        if (p.vy) p.vy += 0.03;

        const t = age / p.life;
        const alpha = (1 - t) * (1 - t);

        if (p.kind === 'crochet') {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.scale(p.scale, p.scale);
          ctx.globalAlpha = alpha * 0.76;
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.7;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-9, 0);
          ctx.bezierCurveTo(-5, -8, 5, -8, 9, 0);
          ctx.bezierCurveTo(5, 8, -5, 8, -9, 0);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(4, -3);
          ctx.lineTo(11, 0);
          ctx.lineTo(4, 3);
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          const r = p.radius * (0.85 + t * 0.45);
          ctx.beginPath();
          ctx.ellipse(0, 0, r * 1.25, r * 0.85, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(r * 0.45, -r * 0.25, r * 0.55, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      if (particles.length > 0) {
        animId = requestAnimationFrame(drawFrame);
      } else {
        animId = null;
      }
    }

    function ensureLoop() {
      if (animId === null) {
        animId = requestAnimationFrame(drawFrame);
      }
    }
  }

  /* ------------------------------------------------------------------------
     Journal / Blog Index & Long-Form Travel Story Interactions
  ------------------------------------------------------------------------ */
  function initBlogPages() {
    // 1. Scalable Topic Filter Pills on blog.html
    const topicTabs = document.querySelectorAll('#blog-topic-tabs [data-blog-topic]');
    const blogCards = document.querySelectorAll('.blog-post-card[data-topic]');
    const emptyState = document.getElementById('blog-empty-state');
    if (topicTabs.length && blogCards.length) {
      topicTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const topic = tab.dataset.blogTopic || 'all';
          topicTabs.forEach((t) => {
            const active = t === tab;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', String(active));
          });
          let shown = 0;
          blogCards.forEach((card) => {
            const match = topic === 'all' || card.dataset.topic === topic;
            card.hidden = !match;
            if (match) shown += 1;
          });
          if (emptyState) emptyState.hidden = shown > 0;
        });
      });
    }

    // 2. Reading Progress Bar & TOC Highlighting on Article Pages
    const progressEl = document.getElementById('blog-reading-progress');
    const articleBody = document.getElementById('blog-article-body');
    const tocLinks = Array.from(document.querySelectorAll('.blog-toc-link'));
    if (progressEl && articleBody) {
      const updateReadingBar = () => {
        const rect = articleBody.getBoundingClientRect();
        const total = Math.max(1, articleBody.offsetHeight - window.innerHeight * 0.55);
        const passed = Math.max(0, window.innerHeight * 0.35 - rect.top);
        const pct = Math.min(100, Math.round((passed / total) * 100));
        progressEl.style.width = `${pct}%`;
      };
      window.addEventListener('scroll', updateReadingBar, { passive: true });
      window.addEventListener('resize', updateReadingBar, { passive: true });
      updateReadingBar();

      if (tocLinks.length && 'IntersectionObserver' in window) {
        const sections = tocLinks
          .map((link) => {
            const id = link.getAttribute('href')?.replace('#', '');
            return id ? document.getElementById(id) : null;
          })
          .filter(Boolean);

        const tocObs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              tocLinks.forEach((l) => {
                l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`);
              });
            });
          },
          { rootMargin: '-25% 0px -65% 0px', threshold: 0.01 }
        );
        sections.forEach((sec) => tocObs.observe(sec));
      }
    }

    // 3. Interactive Photo Lightbox Across All Article Figures
    const articleImgs = Array.from(document.querySelectorAll('#blog-article-body .blog-figure img'));
    const blogLightbox = document.getElementById('blog-photo-lightbox');
    const blogLbImg = document.getElementById('blog-lb-img');
    const blogLbCaption = document.getElementById('blog-lb-caption');
    const blogLbCount = document.getElementById('blog-lb-count');
    const blogLbClose = document.getElementById('blog-lb-close');
    const blogLbPrev = document.getElementById('blog-lb-prev');
    const blogLbNext = document.getElementById('blog-lb-next');
    if (articleImgs.length && blogLightbox && blogLbImg) {
      let curPhoto = 0;

      const showBlogPhoto = (idx) => {
        curPhoto = (idx + articleImgs.length) % articleImgs.length;
        const targetImg = articleImgs[curPhoto];
        const fig = targetImg.closest('figure');
        const capText = fig?.querySelector('figcaption')?.textContent || targetImg.alt || '';
        blogLbImg.src = targetImg.currentSrc || targetImg.src;
        blogLbImg.alt = targetImg.alt || capText;
        if (blogLbCaption) blogLbCaption.textContent = capText;
        if (blogLbCount) blogLbCount.textContent = `Photo ${curPhoto + 1} of ${articleImgs.length}`;
        if (blogLightbox) blogLightbox.scrollTop = 0;
      };

      articleImgs.forEach((imgEl, idx) => {
        imgEl.tabIndex = 0;
        imgEl.setAttribute('role', 'button');
        imgEl.addEventListener('click', () => {
          showBlogPhoto(idx);
          blogLightbox.showModal();
        });
        imgEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showBlogPhoto(idx);
            blogLightbox.showModal();
          }
        });
      });

      blogLbClose?.addEventListener('click', () => blogLightbox.close());
      blogLbPrev?.addEventListener('click', () => showBlogPhoto(curPhoto - 1));
      blogLbNext?.addEventListener('click', () => showBlogPhoto(curPhoto + 1));
      blogLightbox.addEventListener('click', (e) => {
        if (e.target === blogLightbox) blogLightbox.close();
      });
      document.addEventListener('keydown', (e) => {
        if (!blogLightbox.open) return;
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          showBlogPhoto(curPhoto - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          showBlogPhoto(curPhoto + 1);
        }
      });
    }

    // 4. Interactive Beginner Trek Gear Checklist (Persisted to localStorage)
    const gearChecks = Array.from(document.querySelectorAll('.blog-gear-check'));
    const gearStatus = document.getElementById('gear-check-status');
    if (gearChecks.length) {
      const STORAGE_KEY = 'amrudha-trek-gear-v1';
      let saved = [];
      try {
        saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      } catch (_) {
        saved = [];
      }
      const syncGear = () => {
        let count = 0;
        const checkedIds = [];
        gearChecks.forEach((cb, i) => {
          const itemWrap = cb.closest('li');
          itemWrap?.classList.toggle('is-checked', cb.checked);
          if (cb.checked) {
            count += 1;
            checkedIds.push(cb.dataset.gearId || String(i));
          }
        });
        if (gearStatus) {
          gearStatus.textContent = `${count} of ${gearChecks.length} essentials packed`;
        }
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
        } catch (_) {}
      };
      gearChecks.forEach((cb, i) => {
        const id = cb.dataset.gearId || String(i);
        if (Array.isArray(saved) && saved.includes(id)) cb.checked = true;
        cb.addEventListener('change', syncGear);
      });
      syncGear();
    }
  }

  /* ------------------------------------------------------------------------
     Bootstrap
  ------------------------------------------------------------------------ */
  initTheme();
  initPaletteMixer();
  initMobileMenu();
  initEaselBrushReveal();
  initStudioSpotlight();
  initMacramePendulum();
  initStoryPage();
  initRevealAndParallax();
  initMakerSandbox();
  initAtelierPage();
  initContactEnvelope();
  initBlogPages();
  initCrochetScrollRail();
  initStudioTrailCanvas();
})();
