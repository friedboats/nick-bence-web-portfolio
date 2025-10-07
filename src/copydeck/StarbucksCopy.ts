const StarbucksCopy = {
  projectHeader: {
    imageID: 'starbucks',
    title: 'Starbucks for Life',
    role: 'Senior Interface Developer',
    description: `<p>As Senior Interface Developer, I helped bring the Starbucks for Life website to life — a gamified digital experience that drove engagement by merging Starbucks Rewards with an interactive prize-based platform. I focused on building a branded, user-friendly interface that offered a seamless experience for participants and showcased exciting incentives like free coffee for life.</p>`,
  },
  projectOverview: {
    title: 'Project overview',
    body: '<p>As a Senior Web Engineer, I helped develop Starbucks for Life, a gamified website that integrated the Starbucks Rewards program with an interactive, visually engaging experience. The project delivered a user-friendly interface that reinforced Starbucks’ brand while driving customer engagement through playful design and high-value incentives — including the chance to win free coffee for life.</p>',
    carousel: [
      {
        alt: 'Starbucks for life project',
        src: '/starbucks-featured-main.png',
      },
      {
        alt: 'Dynatrace navigation upgrade project',
        src: '/dynatrace-navigation-featured-main.png',
      },
      {
        alt: 'Dynatrace platform page project',
        src: '/dynatrace-platform-featured-main.png',
      },
      {
        alt: 'Nathans hot dogs project',
        src: '/nathans-featured-main.png',
      },
    ],
  },
  planning: {
    title: 'Planning',
    body: '<p>Collaborating with the UX team, we defined an intuitive user flow to guide potential players through the onboarding process, maximizing engagement. Wireframes were created to visualize and refine these flows. Additionally, I mapped out backend calls to establish clear integration points and data flow, ensuring smooth and efficient connectivity between our platform and external systems.</p>',
    assets: [
      {
        src: '/starbucks-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
    ],
  },
  collab: {
    title: 'Design & Collaboration',
    body: '<p>I collaborated closely with the client’s design team to maintain a unified brand experience, ensuring all design elements were implemented with consistency and precision. As part of the development, I also created custom animations from hand-drawn icons, blending artistry with custom code to bring the site to life and enhance the overall user experience.</p>',
    assets: [
      {
        src: '/dynatrace-navigation-featured-main.png',
        alt: 'Starbucks for life project',
      },
    ],
  },
  development: {
    title: 'Development',
    body: `
      <p>The website was built using HTML5, CSS3, and JavaScript. I translated the design mockups into a user-friendly interface that allowed for seamless navigation and an enjoyable user journey. To ensure the site worked flawlessly across devices, I implemented responsive design techniques and utilized media queries for different screen sizes.</p>
      <p>I also collaborated with software engineers to integrate RESTful API endpoints, optimizing data retrieval and enhancing content display capabilities on the site.</p>
    `,
    assets: [
      {
        src: '/starbucks_app_video.mp4',
        alt: 'Starbucks for life project',
        style: {
          alignItems: 'flex-start',
          aspectRatio: '427 / 725',
          width: '100%',
        },
      },
    ],
  },
  efficiency: {
    title: 'Boosting Efficiency',
    body: '<p>Managing frequent content updates and new animations was a key challenge for the Starbucks for Life promotion. To address this, my colleague and I developed a custom HTML canvas tool that enabled quick and seamless animation updates. This innovation significantly reduced the time and effort required for content management, proving to be a major time saver and an invaluable asset for future campaigns.</p>',
    assets: [
      {
        src: '/dynatrace-navigation-featured-main.png',
        alt: 'Starbucks for life project',
      },
    ],
  },
  impact: {
    title: 'Results, Impact & Key Takeaways',
    body: `
    <p>This project highlighted the importance of seamless collaboration across design, development, and project management to deliver a high-impact experience.</p>

    <ul>
      <li><b>30% increase in user engagement:</b> Gamified experience boosted interaction.</li>
      <li><b>20% increase in sign-ups:</b> Higher conversion rate from visitors to participants.</li>
      <li><b>Positive feedback:</b> Enthusiastic reviews earned the project a gold star.</li>
    </ul>
  `,
  },
} as const;

export default StarbucksCopy;
