import { Container } from '@/components/Container'
import Image from 'next/image'
import GithubStar from '@/images/about/2021star.png' 
import Support from '@/images/about/support.png' 
import Eddiebot from '@/images/about/eddiebot.png' 

export function Content() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-32">
      <Container className="relative">
        <div>
          <h1 className="mt-3 text-4xl font-semibold text-gray-900">About</h1>
          <p className="my-4 text-lg tracking-tight">Read more about where EddieHub started and the core values of the community.</p>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Our Background
          </h2>
          <Image
                className="mx-auto"
                src={GithubStar}
                alt="github star 2021 badge"
                width="auto"
                height="250"
              />
          <p className="mt-4 text-lg tracking-tight">
            EddieHub was founded by Eddie Jaoude, GitHub Star, GitHub Star of
            the Year 2020 and winner of the GitHub Community Growth Award 2021.
            As a passionate advocate of Open Source who has always believed in
            giving back to the tech community, Eddie’s particular focus is
            creating and supporting opportunities for those wanting to start a
            career in tech.
          </p>
          <p className="mt-4 text-lg tracking-tight">
            Recognising that starting in Open Source can be daunting, Eddie was
            keen to build a community which focused on Open Source for those
            with varying tech abilities and at different stages of their tech
            journey.
          </p>

          <p className="mt-4 text-lg tracking-tight">
            The main objective was for members to share their experiences by
            adopting both a mentor and mentee role on the premise that everyone
            has something to teach but also something to learn. “Collaboration
            First, Code Second” quickly became what the community members live
            by.
          </p>
          <h2 className="font-display mt-5 text-3xl tracking-tight  sm:text-4xl">
            Our Aims
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            EddieHub’s overall aim is to support members in: accelerating their
            learnings so that they can have the career they want.
          </p>

          <p className="mt-4 text-lg tracking-tight">
            This can be broken down into two components:
          </p>
          <ol className="mt-4 list-decimal text-lg tracking-tight">
            <li>
              Improving your technical expertise through Open Source
              <p className="mt-4 text-lg tracking-tight"></p>Through tutorials
              explaining key concepts of Open Source ranging from; how to get
              started on Github, to Documentation, Automated Testing and
              Continuous Delivery (CI and CD), guest interviews with experts in
              the field to live streams where your projects can be reviewed and
              you can receive feedback and encouragement.
              <p>
                Technical knowledge is also built upon in the Discord channels
                and GitHub Discussions where members can ask questions and share
                their projects, whilst getting the guidance and support from
                Eddie, our expert moderators as well as all members of the
                community.
              </p>
            </li>
            <Image
                className="mx-auto"
                src={Support}
                alt="github support"
                width="auto"
                height="500"
              />
            <li>
              Building upon your communication skills
              <p className="mt-4 text-lg tracking-tight">
                For EddieHub, learning how to collaborate is key and we believe
                that a vital part of knowing how to collaborate with others is
                through effective communication skills.
              </p>
              <p className="mt-4 text-lg tracking-tight">
                Often there are limited opportunities to expand upon these
                skills. You may work within a small team and liaise with the
                same colleagues on a daily basis, work on your own or, as a
                result of geographic location, there may not be opportunities
                (such as clubs or meet-up groups) to develop your communication
                style and confidence.
              </p>
              <p className="mt-4 text-lg tracking-tight">
                By creating a community with members from all around the world
                and with different technical levels, EddieHub has generated an
                opportunity for members to interact with a large diversity of
                people. This constant interaction between members means that the
                way they receive feedback has an impact on how they communicate
                feedback to others.
              </p>
              <p className="mt-4 text-lg tracking-tight">
                Recognising that at the outset these communication skills were
                primarily through the Discord written messages and GitHub Issues
                and Pull Requests, EddieHub has launched initiatives for regular
                Public Speaking events, tutorials and “Ask me Anything” sessions
                to further support its members.
              </p>
              <p className="mt-4 text-lg tracking-tight">
                We are pleased that members have reported that this approach has
                been invaluable to them. Had they not made their projects Open
                Source, they would not have been able to progress these in the
                same way as a private project. In addition, whilst feedback was
                either not sought or viewed as a negative critique, it is now
                both actively encouraged and more confidently given.
              </p>
            </li>
          </ol>
          <h2 className="font-display mt-5 text-3xl tracking-tight  sm:text-4xl">
            Our Core Values
          </h2>
          <p>Behind these aims are EddieHub’s core values:</p>
          <ol className="mt-4 list-decimal text-lg tracking-tight">
            <li>
              An inclusive and welcoming environment
              <p className="mt-4 text-lg tracking-tight">
                As with many other communities, EddieHub has a Code of Conduct
                and Equality, Diversity & Inclusion policy. In addition we have
                excellent moderators who keep a close eye to ensure that members
                feel EddieHub is a safe space where they can learn, network and
                share their experiences.
              </p>
              <p className="mt-4 text-lg tracking-tight">
                We had observed that many other communities had a very “male
                orientated” language, as well as making assumptions that
                everyone went by the “he/him” gender pronoun. We wanted EddieHub
                to be different and use gender neutral language to ensure that
                we did not alienate any members whilst making a clear stance
                against the “bro culture” which often dominates the tech space.
              </p>
              <p className="mt-4 text-lg tracking-tight">
                Through a community discussion we achieved this through our
                Discord bot named “EddieBot”, which picks up and suggests
                alternatives to gender favouring, polarising, race related,
                religion inconsiderate or other unequal phrasing. In addition,
                Eddiebot was built by the community members and we feel this is
                an accurate reflection to members’ commitment to these core
                values.
              </p>
              <Image
                className="mx-auto"
                src={Eddiebot}
                alt="eddiebot"
                width="auto"
                height="300"
              />
            </li>
            <li>
              The wellbeing of our community members.
              <p className="mt-4 text-lg tracking-tight">
                Moderators and members advocate for taking time for self care
                and avoiding burning out. We have a Discord channel dedicated to
                our members sharing what they do in their down time, which in
                turn reminds others to take a break. We want to lead by example
                in the tech space and stop glamourising overworking and the
                “hustle” culture, through sharing tips and tutorials on the
                EddieHub Blog as to how you can ensure you are looking after
                yourself.
              </p>
            </li>
            <li>
              Achieve your goals whilst having fun!
              <p className="mt-4 text-lg tracking-tight">
                Whilst no EddieHub member is the same, one thing we all have in
                common - Open Source is our hobby, our passion - not just a job.
              </p>
              <p className="mt-4 text-lg tracking-tight">
                At EddieHub we will always encourage members to make their next
                Open Source contribution and we are their biggest cheerleaders.
                Whether we might nudge members directly to check on how their
                project is going, to hackathons and challenges as well as asking
                them to come out of their comfort zone to moderate a call or
                speak in public for the first time.
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  )
}
