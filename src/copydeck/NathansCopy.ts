const NathansCopy = {
  projectHeader: {
    imageID: 'nathans',
    title: 'Nathan’s Famous | Ticket to Fun',
    role: 'Senior Interface Developer',
    description: `<p>For their 100th anniversary, Nathan’s Famous aimed to celebrate their legacy by launching “Ticket to Fun,” a loyalty campaign inspired by the iconic Coney Island. This campaign centered around a gamified, interactive experience that encouraged customer engagement while collecting user-generated content. The goal was to immerse users in a virtual Coney Island, allowing them to earn tickets through various activities and redeem them for prizes in a virtual gift shop.</p>`,
    carousel: [
      {
        alt: 'Nathans hot dogs project',
        src: '/nathans-featured-main.png',
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
    body: '<p>In collaboration with the project team, we defined the overall user journey and crafted a virtual Coney Island experience that would resonate with Nathan’s audience. The planning phase included mapping out key activities—such as trivia, video exploration, a photo booth, and mini-games—to ensure an engaging and cohesive flow for participants. Additionally, backend integration points were outlined to enable seamless ticket tracking and prize redemption.</p>',
    assets: [
      {
        src: '/dynatrace-navigation-featured-thumb.png',
        alt: 'Starbucks for life project',
      },
    ],
  },
  collab: {
    title: 'Design & Collaboration',
    body: `
      <p>To bring the Coney Island landing page vision to life, I worked closely with designers to ensure the visuals and animations matched the playful, nostalgic theme. Each section of the park was designed as a separate component layered onto a stripped-down main background. This modular approach simplified maintenance, improved load times, and enabled smoother updates.</p>
      <p>Custom canvas animations played a key role in enhancing the experience, from dynamic park elements to interactive games. I also ensured responsive design compatibility using a mobile-first approach, allowing users to enjoy the experience seamlessly across devices.</p>
    `,
    assets: [
      {
        alt: 'Nathans hot dogs project',
        src: '/nathans-featured-main.png',
      },
    ],
  },
  development: {
    title: 'Development',
    body: `
      <p>Using HTML5, CSS3, and JavaScript, I brought the ‘Ticket to Fun’ campaign to life by building a fully interactive virtual Coney Island. This immersive experience included a variety of gamified elements such as a hotdog eating contest, lunch rush game, instant win opportunities, and a Zoltar fortune reader game. I also developed a gift shop where users could redeem their tickets for prizes, creating a seamless blend of fun and reward.  In collaboration with backend engineers, I integrated RESTful APIs to track user progress, check wins, synchronize ticket earnings, and update the prize catalog in real-time, ensuring a smooth, engaging experience for users.</p>
    `,
    assets: [
      {
        alt: 'Nathans hot dogs project',
        src: '/nathans-featured-main.png',
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
  whatWeLearned: {
    title: 'What We Learned',
    body: `
      <ul>
        <li><b>Communicating value:</b> While users enjoyed earning tickets, clearer messaging around rewards was essential to sustain motivation.</li>
        <li><b>Streamlined navigation:</b> The environmental navigation—with no secondary menus—proved highly effective, allowing users to focus on activities without distraction.</li>
        <li><b>Reminder opt-ins:</b> Users preferred opting into reminder emails after exploring the site rather than during registration, indicating the importance of timing in user engagement.</li>
        <li><b>In-store behavior insights:</b> Participants noted that while shopping in-store, they were more likely to look up product details or deals than engage with promotional CTAs, highlighting the need for strategic timing and messaging.</li>
      </ul>
      <p>This project reinforced the importance of balancing creativity with functionality to deliver an immersive, user-centered experience. By leveraging modular design and gamification, we successfully created a memorable campaign that resonated with Nathan’s fans and left a lasting impression.</p>
    `,
  },
  impact: {
    title: 'Results, Impact & Key Takeaways',
    body: `
    <p>The "Ticket to Fun" campaign achieved remarkable success, driving both user engagement and brand awareness. Nathan's Famous was thrilled with the results, which highlighted the power of gamification and interactive storytelling.</p>

    <ul>
      <li><b>892,962 tickets earned:</b> Demonstrating high user activity and engagement.</li>
      <li><b>40.08% conversion rate:</b> Showcasing a strong participant-to-registration ratio.</li>
      <li><b>55.70% email opt-in rate:</b> Highlighting strong interest in ongoing communication.</li>
    </ul>
  `,
    assets: [
      {
        alt: 'Nathans hot dogs project',
        src: '/nathans-featured-main.png',
      },
    ],
  },
} as const;

export default NathansCopy;
