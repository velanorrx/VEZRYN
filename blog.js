/* VEZRYN BLOG — separate from your existing script.js */
const vezrynArticles = {
  "brand-philosophy": {
    category: "BRAND PHILOSOPHY", issue: "VEZRYN JOURNAL / 001", number: "01 / 06",
    title: "OVERCOME<br><span>YOURSELF</span>",
    subtitle: "The greatest transformation begins within. Strength is built where no one is watching.",
    image: "Photos/Story1.jpg",
    sections: `
      <p class="blog-section-label">01 / THE BEGINNING</p>
      <h2>THE ONLY OPPONENT<br>THAT MATTERS <span>IS YOU</span></h2>
      <p class="blog-lead">There is a version of you that chooses comfort. Another chooses growth. Every day, through the smallest decisions, you decide which one becomes stronger.</p>
      <p>Transformation rarely begins with a dramatic moment. It begins quietly: one more repetition, one promise kept, one day you show up when nobody would know if you stayed away. Progress is not always visible, and discipline is not always exciting. But the work you repeat becomes the person you become.</p>
      <blockquote>Your greatest achievement is becoming someone you once thought you could not be</blockquote>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">02 / THE PRACTICE</p>
      <h2>DISCIPLINE<br>OVER <span>COMFORT</span></h2>
      <p>Motivation comes and goes. Discipline gives you something to return to. It is the decision to continue with intention, even when the result is distant and the effort feels unseen.</p>
      <p>At VEZRYN, strength is more than what can be measured in weight or seen in a reflection. It is consistency without applause, humility in progress, and the courage to start again. We do not believe in perfection. We believe in commitment.</p>
      <div class="blog-principles">
        <div class="blog-principle"><span class="number">01</span><h3>SHOW UP</h3><p>Keep the promises you make to yourself.</p></div>
        <div class="blog-principle"><span class="number">02</span><h3>STAY HUMBLE</h3><p>Let your work speak louder than your ego.</p></div>
        <div class="blog-principle"><span class="number">03</span><h3>KEEP EVOLVING</h3><p>Respect how far you have come. Keep going.</p></div>
      </div>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">03 / THE VEZRYN STANDARD</p>
      <h2>WEAR YOUR<br><span>FEELINGS</span></h2>
      <p>VEZRYN was created for those who see training as more than a routine. It is a practice of self-respect: a way to build confidence through action and express identity without needing to announce it.</p>
      <p>Every collection carries a story of power, struggle, and transformation. The design is an outward expression of an inward standard. The garment does not make you disciplined. You give it meaning through what you do in it.</p>
      <p class="blog-closing-line">Do not chase the person you want to appear to be.<br><strong>Become the person you respect.</strong></p>`
  },
  "design-philosophy": {
    category: "DESIGN PHILOSOPHY", issue: "VEZRYN JOURNAL / 002", number: "02 / 06",
    title: "FORM WITH<br><span>INTENTION.</span>",
    subtitle: "Every line has a purpose. Every detail carries meaning.",
    image: "Photos/Content01.png",
    sections: `
      <p class="blog-section-label">01 / THE VISUAL LANGUAGE</p>
      <h2>DESIGN IS MORE<br>THAN <span>APPEARANCE</span></h2>
      <p class="blog-lead">A garment can do more than fit the body. It can express a mindset, carry a story, and give shape to the values someone chooses to live by.</p>
      <p>VEZRYN draws from dark mythology, sculptural forms, and the tension between strength and restraint. Sharp lines create direction. Ornamental details add history. Negative space gives each element room to breathe.</p>
      <blockquote>Nothing is added without intention.<br> 
      Nothing meaningful is there by accident.</blockquote>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">02 / FUNCTION MEETS IDENTITY</p>
      <h2>BUILT FOR<br><span>MOVEMENT</span></h2>
      <p>Performance remains at the heart of the design. Silhouettes are considered around the body in motion, while graphic placement follows the form instead of competing with it. A strong visual identity should never come at the expense of wearability.</p>
      <p>Our goal is not to make the loudest piece in the room. It is to create something distinctive to the people who recognize its meaning: bold without excess, confident without needing approval.</p>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">03 / THE STANDARD</p>
      <h2>DETAIL WITH<br><span>DISCIPLINE</span></h2>
      <p>From the first sketch to the final placement, every choice should serve the larger idea. The result is clothing that feels considered rather than decorated, and expressive rather than ordinary.</p>
      <p class="blog-closing-line">A clear identity<br> A deliberate form<br><strong>Nothing without purpose</strong></p>`
  },
  "collection-story-fallen": {
    category: "COLLECTION STORY / FALLEN ANGEL", issue: "VEZRYN JOURNAL / 003", number: "03 / 06",
    title: "BEAUTY IN<br><span>REBELLION</span>",
    subtitle: "The fall is not always the end. Sometimes it is the beginning of becoming.",
    image: "Photos/Fallen_Cover.png",
    sections: `
      <p class="blog-section-label">01 / THE FALL</p>
      <h2>NOT EVERY FALL<br>ENDS IN <span>DEFEAT</span></h2>
      <p class="blog-lead">The Fallen Angel story begins at the moment everything familiar is lost. What follows is not a simple return to the past, but the difficult work of rebuilding an identity on new terms.</p>
      <p>There is beauty in rebellion when it means refusing to surrender your ability to grow. The fallen figure becomes a symbol of resilience: marked by the past, but not defined by it.</p>
      <blockquote>Strength is not the absence of a fall.<br> It is the choice to rise with intention.</blockquote>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">02 / THE DESIGN LANGUAGE</p>
      <h2>POWER IN<br><span>CONTRAST</span></h2>
      <p>Dark tones, sharp ornamental lines, and sculptural forms reflect the tension between fragility and strength. The visual language is dramatic, but every detail serves the central idea: transformation through adversity.</p>
      <p class="blog-closing-line">You are not only what you have lost.<br><strong>You are what you choose to rebuild.</strong></p>`
  },
  "collection-story-olympians": {
    category: "COLLECTION STORY / 12 OLYMPIANS", issue: "VEZRYN JOURNAL / 004", number: "04 / 06",
    title: "EARN YOUR<br><span>DOMAIN.</span>",
    subtitle: "Twelve gods. Twelve forces. One standard of mastery.",
    image: "Photos/Greek_Cover.jpg",
    sections: `
      <p class="blog-section-label">01 / THE PANTHEON</p>
      <h2>POWER REQUIRES<br><span>RESPONSIBILITY</span></h2>
      <p class="blog-lead">The Twelve Olympians represent distinct forces, talents, and contradictions. Their stories remind us that power takes many forms—and that mastery is never simply about possessing strength.</p>
      <p>From wisdom and strategy to courage and creation, the Olympian world becomes a framework for exploring the qualities we work to develop within ourselves. Each force asks a different question about how power should be earned and used.</p>
      <blockquote>Do not seek a domain to rule before you have learned to master yourself.</blockquote>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">02 / A MODERN INTERPRETATION</p>
      <h2>DISCIPLINE IS<br><span>THE OFFERING</span></h2>
      <p>VEZRYN translates the scale and symbolism of Greek mythology into a contemporary visual language. Ornamental references meet athletic silhouettes, connecting legendary archetypes with the everyday practice of self-improvement.</p>
      <p class="blog-closing-line">Power is not simply inherited.<br><strong>It is built through what you practice.</strong></p>`
  },
  "collection-story-dracula": {
    category: "COLLECTION STORY / DRACULA", issue: "VEZRYN JOURNAL / 005", number: "05 / 06",
    title: "THE IMMORTAL<br><span>COUNT</span>",
    subtitle: "Dark elegance, untamed ambition, and the enduring pull of a legend.",
    image: "Photos/Cover_Dracula.png",
    sections: `
      <p class="blog-section-label">01 / THE LEGEND</p>
      <h2>THE POWER OF<br><span>THE UNKNOWN</span></h2>
      <p class="blog-lead">Few figures hold the imagination like Dracula. Part history, part folklore, and part enduring nightmare, the legend exists at the edge between elegance and fear.</p>
      <p>This story explores the tension between control and temptation, refinement and danger. Its power comes from contrast: a composed presence with something untamed beneath the surface.</p>
      <blockquote>Some legends do not fade.<br> They learn how to live in the shadows.</blockquote>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">02 / DARK ELEGANCE</p>
      <h2>SHADOWS WITH<br><span>INTENTION</span></h2>
      <p>The visual direction draws on dark tones, dramatic contrast, and a restrained sense of ornament. The result is designed to feel cinematic and commanding without losing the clean lines of contemporary performance apparel.</p>
      <p class="blog-closing-line">A legend remembered in darkness.<br><strong>A presence impossible to ignore.</strong></p>`
  },
  "behind-the-designs": {
    category: "BEHIND THE DESIGNS", issue: "VEZRYN JOURNAL / 006", number: "06 / 06",
    title: "FROM VISION<br><span>TO FORM</span>",
    subtitle: "The ideas, details, and creative hands behind the VEZRYN designs.",
    image: "Photos/Content03.png",
    sections: `
      <p class="blog-section-label">01 / THE FIRST IDEA</p>
      <h2>EVERY DESIGN<br>STARTS WITH A <span>QUESTION</span></h2>
      <p class="blog-lead">Before a design becomes a garment, it begins as an idea: a feeling, a symbol, a story, or a shape that deserves to be explored.</p>
      <p>The process starts by defining what a collection should communicate. Research uncovers references and contradictions. Sketches test the silhouette. Graphic studies explore how the story can live on the body without overwhelming it.</p>
      <blockquote>The goal is not to fill space.<br> It is to give every detail a reason to exist.</blockquote>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">02 / REFINED THROUGH ITERATION</p>
      <h2>DETAILS THAT<br><span>EARN THEIR PLACE</span></h2>
      <p>Strong concepts rarely arrive fully formed. Proportions are adjusted, details are simplified, and placements are reconsidered until the overall design feels balanced. The smallest change can alter the entire character of a piece.</p>
      <p>Technical apparel brings another layer of consideration: the design must work with the garment's fit and movement. Visual impact and function should support one another.</p>
      <div class="blog-divider"><span>✳</span></div>
      <p class="blog-section-label">03 / THE ARTISTS</p>
      <h2>CREATED THROUGH<br><span>COLLABORATION</span></h2>
      <p>VEZRYN celebrates the Thai artists whose creativity helps bring mythological references to life. Their interpretation, skill, and perspective are part of each collection's identity. The people behind the artwork deserve to be seen and acknowledged alongside the finished design.</p>
      <p class="blog-closing-line">An idea becomes a design through intention.<br><strong>A design becomes a story through people.</strong></p>`
  }
};

const vezrynSummaries = {
  "brand-philosophy": "The mindset behind discipline, self-respect, and continual growth.",
  "design-philosophy": "The visual principles that shape the VEZRYN design language.",
  "collection-story-fallen": "The Fallen Angel story of resilience, rebellion, and rebuilding.",
  "collection-story-olympians": "The ideas of mastery and responsibility behind the Olympians.",
  "collection-story-dracula": "The dark elegance and legend behind the Dracula collection.",
  "behind-the-designs": "From early concepts to the artists and details behind each design."
};

const vezrynRecommendations = {
  "brand-philosophy": ["design-philosophy", "collection-story-fallen", "behind-the-designs"],
  "design-philosophy": ["behind-the-designs", "brand-philosophy", "collection-story-olympians"],
  "collection-story-fallen": ["design-philosophy", "behind-the-designs", "brand-philosophy"],
  "collection-story-olympians": ["behind-the-designs", "collection-story-fallen", "design-philosophy"],
  "collection-story-dracula": ["behind-the-designs", "design-philosophy", "brand-philosophy"],
  "behind-the-designs": ["design-philosophy", "collection-story-olympians", "collection-story-dracula"]
};

const params = new URLSearchParams(window.location.search);
const requestedArticle = params.get("article");
const currentKey = Object.prototype.hasOwnProperty.call(vezrynArticles, requestedArticle)
  ? requestedArticle
  : "brand-philosophy";
const currentArticle = vezrynArticles[currentKey];

document.title = `${currentArticle.category} | VEZRYN`;
document.getElementById("blogCategory").textContent = currentArticle.category;
document.getElementById("blogIssue").textContent = currentArticle.issue;
document.getElementById("blogAsideNumber").textContent = currentArticle.number;
document.getElementById("blogTitle").innerHTML = currentArticle.title;
document.getElementById("blogSubtitle").textContent = currentArticle.subtitle;
document.getElementById("blogArticle").innerHTML = currentArticle.sections;
document.getElementById("blogHeroImage").style.backgroundImage =
  `linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.2)),url("${currentArticle.image}")`;

const relatedGrid = document.getElementById("blogRelatedGrid");
vezrynRecommendations[currentKey].forEach((key) => {
  const article = vezrynArticles[key];
  const card = document.createElement("a");
  card.className = "blog-related-card";
  card.href = `blog.html?article=${encodeURIComponent(key)}`;

  const image = document.createElement("div");
  image.className = "blog-related-image";
  image.style.backgroundImage = `url("${article.image}")`;
  image.setAttribute("aria-hidden", "true");

  const copy = document.createElement("div");
  copy.className = "blog-related-copy";

  const category = document.createElement("p");
  category.className = "blog-eyebrow";
  category.textContent = article.category;

  const title = document.createElement("h3");
  title.textContent = article.title.replace(/<br>/g, " ").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

  const summary = document.createElement("p");
  summary.textContent = vezrynSummaries[key];

  const link = document.createElement("span");
  link.className = "blog-related-link";
  link.innerHTML = '<span>READ STORY</span>';

  copy.append(category, title, summary, link);
  card.append(image, copy);
  relatedGrid.appendChild(card);
});

const menuToggle = document.querySelector(".blog-menu-toggle");
const navLinks = document.querySelector(".blog-nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "CLOSE" : "MENU";
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "MENU";
    });
  });
}
