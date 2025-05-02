import Image from "next/image"
import Navigation from "@/components/navigation"

export default function Legacy() {
  return (
    <main className="min-h-screen pb-20">
      <div className="grain"></div>

      {/* Header */}
      <header className="relative w-full flex flex-col items-center">
        <Image src="/legacyhead.gif" alt="The Legacy" width={800} height={150} className="w-full max-w-4xl mx-auto" />

        <Navigation activeLink="legacy" />
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="section-title">The Legacy</h1>

            <div className="content-box">
              <p className="mb-4 text-sm leading-relaxed">
                The Blair Witch legend has haunted the town of Burkittsville for over two centuries. From Elly Kedward's
                banishment in 1785 to the disappearance of the three filmmakers in 1994, the dark presence in the Black
                Hills Forest has left an indelible mark on the region.
              </p>

              <p className="mb-4 text-sm leading-relaxed">
                The recovered footage from Heather Donahue, Joshua Leonard, and Michael Williams provides a chilling
                glimpse into their final days and has reignited interest in the Blair Witch legend. Their documentary
                project, intended to explore local folklore, instead became a terrifying record of their own encounter
                with the unknown.
              </p>

              <div className="my-6 border-t border-gray-800"></div>

              <h2 className="text-yellow-200 mb-4 text-lg">Impact on Burkittsville</h2>
              <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <Image
                  src="/town_2.gif"
                  alt="Burkittsville"
                  width={150}
                  height={150}
                  className="border border-gray-700"
                />
                <div>
                  <p className="text-sm opacity-80">
                    Since the discovery of the footage, Burkittsville has seen an influx of curious visitors and
                    paranormal enthusiasts. Local residents have mixed feelings about the attention, with some embracing
                    the town's connection to the legend and others wishing to distance themselves from it.
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed">
                The Black Hills Forest, once a popular hiking destination, has seen a significant decrease in
                recreational visitors. However, the area has attracted numerous paranormal investigators hoping to
                capture evidence of the Blair Witch or to discover what happened to the three filmmakers.
              </p>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-4 text-lg">Continuing Investigations</h2>
              <p className="mb-4 text-sm leading-relaxed">
                The case of the missing filmmakers remains officially unsolved. While law enforcement has closed their
                active investigation, private researchers and paranormal experts continue to study the footage and
                explore the Black Hills Forest for answers.
              </p>

              <p className="mb-4 text-sm leading-relaxed">
                Several expeditions have attempted to locate the ruins of the Rustin Parr house where the final footage
                was shot, but the exact location remains elusive. Some researchers have reported experiencing similar
                phenomena to those documented by Heather, Josh, and Mike - including disorientation, strange sounds at
                night, and stick figures hanging from trees.
              </p>

              <p className="text-sm leading-relaxed">
                The Blair Witch case has become one of the most studied paranormal incidents in recent history, with the
                recovered footage providing rare documentation of what appears to be a supernatural encounter. Whether
                the Blair Witch is a genuine entity or a manifestation of local folklore remains a subject of intense
                debate among researchers.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">Theories</h2>
            <div className="content-box">
              <h3 className="text-yellow-200 text-sm mb-2">What Happened to the Filmmakers?</h3>
              <p className="text-xs opacity-80 mb-4">
                Numerous theories have emerged to explain the disappearance of Heather, Josh, and Mike. Here are some of
                the most prominent:
              </p>

              <div className="space-y-4">
                <div className="border-b border-gray-800 pb-2">
                  <h4 className="text-yellow-200 text-xs mb-1">The Supernatural Theory</h4>
                  <p className="text-xs opacity-70">
                    The filmmakers encountered the actual Blair Witch or another supernatural entity in the forest, as
                    suggested by the strange phenomena they documented.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-2">
                  <h4 className="text-yellow-200 text-xs mb-1">The Hoax Theory</h4>
                  <p className="text-xs opacity-70">
                    Some skeptics believe the entire incident was an elaborate hoax, either by the filmmakers themselves
                    or by others using their equipment.
                  </p>
                </div>

                <div className="border-b border-gray-800 pb-2">
                  <h4 className="text-yellow-200 text-xs mb-1">The Psychological Theory</h4>
                  <p className="text-xs opacity-70">
                    The stress of being lost, combined with sleep deprivation and fear of the Blair Witch legend, caused
                    the students to experience hallucinations and paranoia, leading to tragedy.
                  </p>
                </div>

                <div>
                  <h4 className="text-yellow-200 text-xs mb-1">The Human Predator Theory</h4>
                  <p className="text-xs opacity-70">
                    The filmmakers may have encountered a dangerous person living in the woods who was aware of the
                    Blair Witch legend and used it to terrorize them.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-2 text-lg">Paranormal Evidence</h2>
              <p className="text-xs opacity-80 mb-4">
                The footage recovered from the Black Hills Forest contains several unexplained phenomena:
              </p>

              <ul className="text-xs space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Strange piles of rocks that appeared to move overnight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Handmade stick figures hanging from trees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>Unexplained sounds, including children's voices and cackling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>The tent being shaken by an unseen force</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>
                    Josh's mysterious disappearance and the subsequent discovery of what appeared to be his tissue
                    bundle
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-200">•</span>
                  <span>The abandoned house that matched the description of Rustin Parr's residence</span>
                </li>
              </ul>

              <div className="mt-6">
                <Image
                  src="/can_1.gif"
                  alt="Stick Figure"
                  width={250}
                  height={150}
                  className="border border-gray-700 mx-auto mb-2"
                />
                <p className="text-xs text-center text-gray-400">One of the stick figures found by the filmmakers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
