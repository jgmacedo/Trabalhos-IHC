import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Timeline() {
  return (
    <main className="min-h-screen pb-20">
      <div className="grain"></div>

      {/* Header */}
      <header className="relative w-full flex flex-col items-center">
        <Image src="/tlheader.gif" alt="Timeline" width={800} height={150} className="w-full max-w-4xl mx-auto" />

        <Navigation activeLink="timeline" />
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <h1 className="section-title">Timeline of Events</h1>

        <div className="content-box">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date1.gif" alt="1785" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Elly Kedward Banished</h2>
                <p className="text-sm opacity-80">
                  In February 1785, Elly Kedward is accused of witchcraft by several children in Blair, Maryland. She is
                  found guilty, banished from the town, and left to die in the winter forest. Her body is never found.
                </p>
                <Link href="/mythology/kedward" className="text-yellow-200 text-xs hover:underline mt-2 inline-block">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date2.gif" alt="1786" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Blair Township Abandoned</h2>
                <p className="text-sm opacity-80">
                  By midwinter of 1786, half of Blair's children have vanished. By spring, the town is deserted. The
                  residents believe Kedward's spirit has cursed the area. They flee, vowing never to speak her name
                  again.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date3.gif" alt="1809" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">"The Blair Witch Cult" Published</h2>
                <p className="text-sm opacity-80">
                  A book titled "The Blair Witch Cult" is published, documenting the events surrounding Elly Kedward and
                  the abandonment of Blair. The book suggests that Kedward was practicing a form of European witchcraft
                  and had formed a small cult in the area.
                </p>
                <Link href="/mythology/book" className="text-yellow-200 text-xs hover:underline mt-2 inline-block">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date4.gif" alt="1824" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Burkittsville Founded</h2>
                <p className="text-sm opacity-80">
                  The town of Burkittsville is established on the same land where Blair once stood. Most of the new
                  residents are unaware of the area's dark history.
                </p>
                <Link href="/mythology/town" className="text-yellow-200 text-xs hover:underline mt-2 inline-block">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date5.gif" alt="1886" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Coffin Rock Incident</h2>
                <p className="text-sm opacity-80">
                  A young girl named Robin Weaver goes missing in the Black Hills Forest. While search parties look for
                  her, one group of five men disappears. Their bodies are later found at Coffin Rock, ritualistically
                  murdered and arranged. Before authorities can retrieve the bodies, they mysteriously vanish. Robin
                  Weaver returns three days later with stories of an old woman whose feet never touched the ground.
                </p>
                <Link href="/mythology/coffin" className="text-yellow-200 text-xs hover:underline mt-2 inline-block">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date6.gif" alt="1940-41" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Rustin Parr Killings</h2>
                <p className="text-sm opacity-80">
                  Rustin Parr, a hermit living in the Black Hills Forest, abducts and murders seven children from
                  Burkittsville. When he finally turns himself in, he claims that the spirit of an old woman had been
                  terrorizing him for months, eventually forcing him to commit the murders. Parr is tried, convicted,
                  and hanged for his crimes.
                </p>
                <Link href="/mythology/parr" className="text-yellow-200 text-xs hover:underline mt-2 inline-block">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date7.gif" alt="1994 - October 20" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Filmmakers Arrive in Burkittsville</h2>
                <p className="text-sm opacity-80">
                  Heather Donahue, Joshua Leonard, and Michael Williams arrive in Burkittsville to film a documentary
                  about the Blair Witch legend. They interview local residents about the folklore and prepare for their
                  expedition into the Black Hills Forest.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date8.gif" alt="1994 - October 21" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Expedition Begins</h2>
                <p className="text-sm opacity-80">
                  The three filmmakers enter the Black Hills Forest to begin filming their documentary. They plan to
                  camp for several days while exploring locations connected to the Blair Witch legend.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date9.gif" alt="1994 - October 25" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Filmmakers Reported Missing</h2>
                <p className="text-sm opacity-80">
                  When Heather, Josh, and Mike fail to return from their expedition, they are reported missing. Their
                  car is found at the trailhead, but there is no sign of the filmmakers themselves.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image
                  src="/date10.gif"
                  alt="1994 - October 26 - November 5"
                  width={150}
                  height={50}
                  className="mb-2"
                />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Search Operation</h2>
                <p className="text-sm opacity-80">
                  A massive search operation is launched in the Black Hills Forest. Despite the efforts of local police,
                  park rangers, and hundreds of volunteers, no trace of the three students is found.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <Image src="/date11.gif" alt="1995 - November 16" width={150} height={50} className="mb-2" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-yellow-200 mb-2 text-lg">Footage Discovered</h2>
                <p className="text-sm opacity-80">
                  A University of Maryland anthropology student discovers film cans, video tapes, DAT recordings, and
                  Heather's journal buried beneath the foundation of an old house in the Black Hills Forest. The house
                  is later identified as the former residence of Rustin Parr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
