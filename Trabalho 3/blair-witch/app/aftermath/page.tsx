import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Aftermath() {
  return (
    <main className="min-h-screen pb-20">
      <div className="grain"></div>

      {/* Header */}
      <header className="relative w-full flex flex-col items-center">
        <Image src="/afterhead.gif" alt="The Aftermath" width={800} height={150} className="w-full max-w-4xl mx-auto" />

        <Navigation activeLink="aftermath" />
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="section-title">The Aftermath</h1>

            <div className="content-box">
              <div className="flex flex-col items-center mb-6">
                <Image
                  src="/car_inside_back_wide.gif"
                  alt="Abandoned Car"
                  width={400}
                  height={250}
                  className="border border-gray-700 mb-3"
                />
                <p className="text-xs text-center text-gray-400">
                  The filmmakers' abandoned car, discovered at the Burkittsville trailhead
                </p>
              </div>

              <p className="mb-4 text-sm leading-relaxed">
                On October 25, 1994, when Heather, Josh, and Mike failed to return from their expedition, a massive
                search was launched in the Black Hills Forest. Despite the efforts of local police, park rangers, and
                hundreds of volunteers, no trace of the three students was found.
              </p>

              <p className="mb-4 text-sm leading-relaxed">
                Their car was found at the trailhead, containing some of their equipment and personal belongings. The
                search was officially called off after two weeks, with authorities concluding that the students had
                likely become disoriented in the woods and succumbed to exposure or injury.
              </p>

              <div className="my-6 border-t border-gray-800"></div>

              <h2 className="text-yellow-200 mb-4 text-lg">The Discovery</h2>
              <p className="mb-4 text-sm leading-relaxed">
                In November 1995, almost exactly a year after the disappearance, a University of Maryland anthropology
                student made a shocking discovery while exploring the ruins of a century-old house in the Black Hills
                Forest. Hidden beneath layers of soil in the house's foundation were bundles of film cans, video tapes,
                DAT recordings, and Heather's journal.
              </p>

              <p className="text-sm leading-relaxed">
                The house was later identified as the former residence of Rustin Parr, the hermit who had murdered seven
                children in the 1940s, claiming that the Blair Witch had commanded him to do so. The house had
                supposedly been burned down after Parr's execution, but portions of the foundation remained.
              </p>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-4 text-lg">The Investigation</h2>
              <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <Image src="/sheriff.gif" alt="Sheriff" width={150} height={150} className="border border-gray-700" />
                <div>
                  <h3 className="text-yellow-200 mb-2 text-sm">Sheriff Ronald Cravens</h3>
                  <p className="text-xs opacity-80">
                    "We conducted one of the most thorough searches in the history of this county. Over 500 acres were
                    combed by foot, air, and with canine units. We found no bodies, no blood evidence, nothing to
                    indicate what happened to these kids."
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed">
                The footage recovered from the site was analyzed by both law enforcement and film experts. While the
                material showed the students becoming increasingly frightened and disoriented, there was no conclusive
                evidence of what ultimately happened to them. The final night of footage ends abruptly, with Heather's
                camera falling to the ground inside what appears to be the Parr house.
              </p>

              <p className="text-sm leading-relaxed">
                The case remains officially unsolved. The families of Heather, Josh, and Mike have established a
                foundation dedicated to finding answers about their disappearance and to supporting search and rescue
                operations for hikers lost in national parks.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">Evidence</h2>
            <div className="content-box">
              <h3 className="text-yellow-200 text-sm mb-2">Recovered Items:</h3>
              <ul className="text-xs space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>11 cans of 16mm film</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>10 Hi-8 video cassettes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>8 DAT audio recordings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Heather's journal (39 pages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Film equipment (damaged)</span>
                </li>
              </ul>

              <div className="mt-6">
                <Image
                  src="/journal_front_sm.jpg"
                  alt="Heather's Journal"
                  width={250}
                  height={150}
                  className="border border-gray-700 mx-auto mb-2"
                />
                <p className="text-xs text-center text-gray-400">Heather's recovered journal</p>
              </div>

              <div className="mt-4 text-center">
                <Link href="/journal" className="text-yellow-200 text-xs hover:underline">
                  View Journal Pages →
                </Link>
              </div>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-2 text-lg">Audio Recordings</h2>
              <p className="text-xs opacity-80 mb-4">
                The DAT tapes recovered with the footage contain disturbing audio recordings from the students' final
                days in the forest.
              </p>

              <div className="space-y-3">
                <div className="border border-gray-700 p-2 hover:border-yellow-900 transition-colors cursor-pointer">
                  <h3 className="text-yellow-200 text-xs mb-1">Strange Sounds</h3>
                  <p className="text-xs opacity-70">Unexplained noises recorded on night 3</p>
                </div>

                <div className="border border-gray-700 p-2 hover:border-yellow-900 transition-colors cursor-pointer">
                  <h3 className="text-yellow-200 text-xs mb-1">Children's Voices</h3>
                  <p className="text-xs opacity-70">What sounds like children laughing outside the tent</p>
                </div>

                <div className="border border-gray-700 p-2 hover:border-yellow-900 transition-colors cursor-pointer">
                  <h3 className="text-yellow-200 text-xs mb-1">Josh's Screams</h3>
                  <p className="text-xs opacity-70">Distant screams believed to be Joshua Leonard</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Link href="/audio" className="text-yellow-200 text-xs hover:underline">
                  Listen to Recordings →
                </Link>
              </div>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-2 text-lg">News Coverage</h2>
              <Image
                src="/newsreport1.gif"
                alt="News Report"
                width={250}
                height={150}
                className="border border-gray-700 mx-auto mb-3"
              />
              <p className="text-xs opacity-80">
                The disappearance of the three filmmakers received national media attention, particularly after the
                discovery of their footage. The mysterious circumstances and connection to the Blair Witch legend
                sparked widespread interest and speculation.
              </p>
              <div className="mt-4 text-center">
                <Link href="/news" className="text-yellow-200 text-xs hover:underline">
                  View News Reports →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
