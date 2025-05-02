import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Mythology() {
  return (
    <main className="min-h-screen pb-20">
      <div className="grain"></div>

      {/* Header */}
      <header className="relative w-full flex flex-col items-center">
        <Image
          src="/mythhead.gif"
          alt="Blair Witch Mythology"
          width={800}
          height={150}
          className="w-full max-w-4xl mx-auto"
        />

        <Navigation activeLink="mythology" />
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="section-title">The Mythology</h1>
            <div className="content-box">
              <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <Image src="/woodcut.gif" alt="Blair Witch Woodcut" width={150} height={150} className="flicker" />
                <div>
                  <h2 className="text-yellow-200 mb-2 text-lg">Elly Kedward</h2>
                  <p className="text-sm opacity-80">
                    In the winter of 1785, an Irish immigrant named Elly Kedward was banished from the town of Blair
                    after several local children accused her of luring them to her home to draw blood from them. Tied to
                    a cart, she was dragged into the woods and left to die of exposure. Her body was never found.
                  </p>
                </div>
              </div>

              <div className="my-6 border-t border-gray-800"></div>

              <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <Image src="/town_1.gif" alt="Burkittsville" width={150} height={150} />
                <div>
                  <h2 className="text-yellow-200 mb-2 text-lg">The Curse of Blair</h2>
                  <p className="text-sm opacity-80">
                    By midwinter, half of Blair's children had vanished, and by spring, the town was deserted. Fearing a
                    curse, the townspeople vowed never to speak Kedward's name again. In 1824, the town of Burkittsville
                    was founded on the abandoned site of Blair.
                  </p>
                </div>
              </div>

              <div className="my-6 border-t border-gray-800"></div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Image src="/coffin1.gif" alt="Coffin Rock" width={150} height={150} />
                <div>
                  <h2 className="text-yellow-200 mb-2 text-lg">Coffin Rock</h2>
                  <p className="text-sm opacity-80">
                    In 1886, a young girl named Robin Weaver went missing. When she returned three days later, she spoke
                    of an old woman whose feet never touched the ground. While Robin was missing, search parties were
                    sent out. One such party never returned. Their bodies were found weeks later at Coffin Rock, bound
                    together, disemboweled, and with strange symbols carved into their faces. The bodies vanished before
                    they could be recovered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title">Timeline</h2>
            <div className="content-box">
              <ul className="space-y-4 text-sm">
                <li className="border-b border-gray-800 pb-2">
                  <div className="text-yellow-200">1785</div>
                  <p>Elly Kedward banished from Blair for witchcraft</p>
                </li>
                <li className="border-b border-gray-800 pb-2">
                  <div className="text-yellow-200">1786</div>
                  <p>Blair deserted after multiple children vanish</p>
                </li>
                <li className="border-b border-gray-800 pb-2">
                  <div className="text-yellow-200">1809</div>
                  <p>"The Blair Witch Cult" book published</p>
                </li>
                <li className="border-b border-gray-800 pb-2">
                  <div className="text-yellow-200">1824</div>
                  <p>Burkittsville founded on the Blair site</p>
                </li>
                <li className="border-b border-gray-800 pb-2">
                  <div className="text-yellow-200">1886</div>
                  <p>Coffin Rock incident</p>
                </li>
                <li className="border-b border-gray-800 pb-2">
                  <div className="text-yellow-200">1940-41</div>
                  <p>Rustin Parr kills seven children, claims the Blair Witch made him do it</p>
                </li>
                <li>
                  <div className="text-yellow-200">1994</div>
                  <p>Three student filmmakers disappear while making a documentary about the Blair Witch</p>
                </li>
              </ul>

              <div className="mt-6 text-center">
                <Link href="/timeline" className="text-yellow-200 text-xs hover:underline">
                  View Complete Timeline →
                </Link>
              </div>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-2 text-lg">Rustin Parr</h2>
              <Image
                src="/parr1.gif"
                alt="Rustin Parr"
                width={250}
                height={150}
                className="w-full border border-gray-700 mb-3"
              />
              <p className="text-xs opacity-80">
                In 1940-41, a hermit named Rustin Parr abducted seven children from Burkittsville and brutally murdered
                them in his secluded house in the woods. When he finally turned himself in, he claimed that the spirit
                of an old woman had been terrorizing him for months, eventually forcing him to commit the murders. Parr
                was hanged for his crimes.
              </p>
              <div className="mt-4 text-center">
                <Link href="/mythology/parr" className="text-yellow-200 text-xs hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
