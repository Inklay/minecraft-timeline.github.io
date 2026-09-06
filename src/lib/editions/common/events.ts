import type { Version } from '..'

export const events: Version[] = [
  {
    title: 'Minecon 2011',
    type: 'event',
    date: '2011-11-18',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2011',
    longDescription: [
      'The first official Minecon event held in 2011 at Las Vegas.',
      'The event coincided with the release of Minecraft 1.0.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2012',
    type: 'event',
    date: '2012-11-24',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2012',
    longDescription: [
      'The second official Minecon event held in 2012 at Disney land Paris.',
      'The Redstone Update was announced during this event',
      'This event was also lived streamed on the internet, allowing many more people to watch the event.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2013',
    type: 'event',
    date: '2013-11-02',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2013',
    longDescription: [
      'The third official Minecon event held in 2013 in Orlando, Florida.',
      'There were many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2015',
    type: 'event',
    date: '2015-07-04',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2015',
    longDescription: [
      'The fourth official Minecon event held in 2015 in London.',
      'There was a first preview of the Combat Update during this event, which was released a few months later.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2016',
    type: 'event',
    date: '2016-09-24',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2016',
    longDescription: [
      'The fifth and final official Minecon event held in 2016 in Anaheim, California. Minecones were replaced by Minecon Live, a live streamed event after this one.',
      'There was a first preview of the Exploration Update during this event, which was released a few months later.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Game bought by Microsoft',
    type: 'event',
    date: '2014-11-06',
    icon: 'common/event_microsoft.png',
    learnMore: 'https://web.archive.org/web/20140915195135/https://mojang.com/2014/09/yes-were-being-bought-by-microsoft/',
    longDescription: [
      'On November of 2014, all of Mojang was acquired by Microsoft for $2.5 billion. This included Minecraft, of course.',
      'The process began a few months earlier. Many suspected this acquisition was happening, but Mojang only confirmed it on September.',
      "According to Notch, he sold Mojang because he didn't want the responsibility of owning a company of such global significance.",
      'As soon as Mojang was sold, Notch and the other two founders (Carl and Jakob) left the company.',
    ],
  },
] as const
