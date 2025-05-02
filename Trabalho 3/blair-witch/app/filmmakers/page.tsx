import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Filmmakers() {
  return (
    <main className="min-h-screen pb-20">
      <div className="grain"></div>

      {/* Header */}
      <header className="relative w-full flex flex-col items-center">
        <Image src="/filmhead.gif" alt="The Filmmakers" width={800} height={150} className="w-full max-w-4xl mx-auto" />

        <Navigation activeLink="filmmakers" />
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="section-title">The Filmmakers</h1>

            <div className="content-box">
              <div className="flex flex-col items-center mb-6">
                <Image
                  src="/together_sm.jpg"
                  alt="The Filmmakers"
                  width={400}
                  height={250}
                  className="border border-gray-700 mb-3"
                />
                <p className="text-xs text-center text-gray-400">
                  Heather Donahue, Joshua Leonard, and Michael Williams before their disappearance
                </p>
              </div>

              <p className="mb-4 text-sm leading-relaxed">
                In October 1994, three student filmmakers - Heather Donahue, Joshua Leonard, and Michael Williams -
                hiked into the Black Hills Forest near Burkittsville, Maryland to film a documentary about the local
                legend of the Blair Witch. They were never seen again.
              </p>

              <p className="mb-4 text-sm leading-relaxed">
                A year later, their footage was found. The 16mm film and Hi-8 video recovered from their equipment
                revealed the terrifying events that led to their disappearance.
              </p>

              <div className="my-6 border-t border-gray-800"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Image
                    src="/heather1_sm.gif"
                    alt="Heather Donahue"
                    width={150}
                    height={200}
                    className="border border-gray-700 mx-auto mb-2"
                  />
                  <h3 className="text-yellow-200 text-sm">Heather Donahue</h3>
                  <p className="text-xs text-gray-400">Director, 24</p>
                  <Link
                    href="/filmmakers/heather"
                    className="text-yellow-200 text-xs hover:underline mt-2 inline-block"
                  >
                    Profile →
                  </Link>
                </div>

                <div className="text-center">
                  <Image
                    src="/josh1_sm.jpg"
                    alt="Joshua Leonard"
                    width={150}
                    height={200}
                    className="border border-gray-700 mx-auto mb-2"
                  />
                  <h3 className="text-yellow-200 text-sm">Joshua Leonard</h3>
                  <p className="text-xs text-gray-400">Cameraman, 23</p>
                  <Link href="/filmmakers/joshua" className="text-yellow-200 text-xs hover:underline mt-2 inline-block">
                    Profile →
                  </Link>
                </div>

                <div className="text-center">
                  <Image
                    src="/mike1.jpg"
                    alt="Michael Williams"
                    width={150}
                    height={200}
                    className="border border-gray-700 mx-auto mb-2"
                  />
                  <h3 className="text-yellow-200 text-sm">Michael Williams</h3>
                  <p className="text-xs text-gray-400">Sound Recordist, 25</p>
                  <Link
                    href="/filmmakers/michael"
                    className="text-yellow-200 text-xs hover:underline mt-2 inline-block"
                  >
                    Profile →
                  </Link>
                </div>
              </div>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-4 text-lg">The Project</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Heather Donahue, a film student at Montgomery College, conceived "The Blair Witch Project" as her senior
                thesis. The documentary was intended to explore the legend of the Blair Witch and its impact on the town
                of Burkittsville, Maryland.
              </p>

              <p className="mb-4 text-sm leading-relaxed">
                Heather recruited fellow students Joshua Leonard and Michael Williams to help with the production.
                Joshua would handle the 16mm black and white photography, while Michael would record sound.
              </p>

              <p className="text-sm leading-relaxed">
                The crew entered the Black Hills Forest on October 21, 1994, planning to camp for a few days while
                gathering footage. They were reported missing when they failed to return on October 25. Despite
                extensive searches, no trace of them was found until their equipment and footage were discovered under
                an abandoned house in the forest a year later.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">Equipment</h2>
            <div className="content-box">
              <h3 className="text-yellow-200 text-sm mb-2">Recovered Items:</h3>
              <ul className="text-xs space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>16mm Bolex Camera (black & white footage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>CP-16 Film Camera</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Hi-8 Video Camcorder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>DAT Recorder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Heather's Journal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Maps of Burkittsville area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Camping equipment</span>
                </li>
              </ul>

              <div className="mt-6">
                <Image
                  src="/hi8med.gif"
                  alt="Hi-8 Camera"
                  width={250}
                  height={150}
                  className="border border-gray-700 mx-auto mb-2"
                />
                <p className="text-xs text-center text-gray-400">Hi-8 Video Camera used by the filmmakers</p>
              </div>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-2 text-lg">Recovered Footage</h2>
              <p className="text-xs opacity-80 mb-4">
                The footage recovered from the Black Hills Forest documents the filmmakers' final days. It begins as a
                documentary project but gradually transforms into a terrifying record of their struggle to escape the
                forest and the unknown entity stalking them.
              </p>

              <div className="space-y-3">
                <div className="border border-gray-700 p-2 hover:border-yellow-900 transition-colors cursor-pointer">
                  <h3 className="text-yellow-200 text-xs mb-1">Day 1: Interviews</h3>
                  <p className="text-xs opacity-70">
                    Interviews with Burkittsville residents about the Blair Witch legend
                  </p>
                </div>

                <div className="border border-gray-700 p-2 hover:border-yellow-900 transition-colors cursor-pointer">
                  <h3 className="text-yellow-200 text-xs mb-1">Day 2: Into the Woods</h3>
                  <p className="text-xs opacity-70">The crew enters the Black Hills Forest</p>
                </div>

                <div className="border border-gray-700 p-2 hover:border-yellow-900 transition-colors cursor-pointer">
                  <h3 className="text-yellow-200 text-xs mb-1">Day 3: Lost</h3>
                  <p className="text-xs opacity-70">The filmmakers realize they are lost in the woods</p>
                </div>

                <div className="border border-gray-700 p-2 hover:border-yellow-900 transition-colors cursor-pointer">
                  <h3 className="text-yellow-200 text-xs mb-1">Night 3: Strange Sounds</h3>
                  <p className="text-xs opacity-70">The crew is awakened by mysterious noises in the night</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Link href="/footage" className="text-yellow-200 text-xs hover:underline">
                  View All Footage →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
