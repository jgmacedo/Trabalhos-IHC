"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // Create audio element
    const audioElement = new Audio("/blair.mp3")
    audioElement.loop = true
    setAudio(audioElement)
    setAudioLoaded(true)

    return () => {
      if (audioElement) {
        audioElement.pause()
        audioElement.src = ""
      }
    }
  }, [])

  const handleEnterSite = () => {
    if (audio) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error)
      })
    }
    setShowIntro(false)
  }

  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="grain"></div>
        <div className="max-w-md mx-auto text-center p-6 border border-gray-800">
          <Image
            src="/tbwptn.jpg"
            alt="The Blair Witch Project"
            width={400}
            height={200}
            className="mx-auto mb-8 flicker"
          />
          <p className="mb-8 text-sm opacity-80">
            In October of 1994, three student filmmakers disappeared in the woods near Burkittsville, Maryland while
            shooting a documentary. A year later their footage was found.
          </p>
          <button
            onClick={handleEnterSite}
            className="px-6 py-2 bg-gray-900 text-yellow-200 border border-yellow-900 hover:bg-gray-800 transition-colors"
          >
            ENTER
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pb-20">
      <div className="grain"></div>

      {/* Header with main image */}
      <header className="relative w-full flex flex-col items-center">
        <Image
          src="/main.gif"
          alt="The Blair Witch Project"
          width={800}
          height={200}
          className="w-full max-w-4xl mx-auto"
        />

        {/* Navigation */}
        <nav className="w-full max-w-4xl mx-auto flex flex-wrap justify-center md:justify-between items-center p-4 border-b border-gray-800">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/mythology" className="nav-link">
            Mythology
          </Link>
          <Link href="/filmmakers" className="nav-link">
            Filmmakers
          </Link>
          <Link href="/aftermath" className="nav-link">
            Aftermath
          </Link>
          <Link href="/legacy" className="nav-link">
            Legacy
          </Link>
          <Link href="/timeline" className="nav-link">
            Timeline
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="section-title">The Blair Witch Project</h1>
            <div className="content-box">
              <p className="mb-4 text-sm leading-relaxed">
                In October of 1994, three student filmmakers disappeared in the woods near Burkittsville, Maryland while
                shooting a documentary called "The Blair Witch Project." A year later their footage was found.
              </p>
              <p className="mb-4 text-sm leading-relaxed">
                The Blair Witch Project is a documentary of the events of 1994. It reveals the horrifying events
                surrounding the disappearance of three student filmmakers in the woods near Burkittsville, Maryland.
              </p>
              <div className="my-6 border-t border-gray-800"></div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Image src="/woodcut.gif" alt="Blair Witch Woodcut" width={150} height={150} className="flicker" />
                <div>
                  <h2 className="text-yellow-200 mb-2 text-lg">The Legend</h2>
                  <p className="text-sm opacity-80">
                    In 1785, several children accused Elly Kedward of luring them into her home to draw blood from them.
                    Kedward was found guilty of witchcraft, banished from the village during a harsh winter and presumed
                    dead. By midwinter, all of Kedward's accusers and half the town's children had vanished. Fearing a
                    curse, the townspeople fled Blair and vowed never to speak Kedward's name again.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title">Evidence</h2>
            <div className="content-box">
              <div className="mb-4">
                <Image
                  src="/evidence-thumb.jpg"
                  alt="Evidence"
                  width={250}
                  height={150}
                  className="w-full border border-gray-700 hover:border-yellow-900 transition-colors cursor-pointer"
                  onClick={() => router.push("/evidence")}
                />
                <p className="text-xs mt-2 text-center text-gray-400">Click to view evidence</p>
              </div>

              <h3 className="text-yellow-200 text-sm mb-2">Recovered Items:</h3>
              <ul className="text-xs space-y-2 text-gray-300">
                <li>• 16mm film footage</li>
                <li>• Hi-8 video cassettes</li>
                <li>• DAT recordings</li>
                <li>• Heather's journal</li>
                <li>• Cameras and equipment</li>
              </ul>
            </div>

            <div className="content-box mt-6">
              <h2 className="text-yellow-200 mb-2 text-lg">Missing Filmmakers</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/heather-thumb.jpg"
                    alt="Heather Donahue"
                    width={60}
                    height={60}
                    className="border border-gray-700"
                  />
                  <div>
                    <h3 className="text-sm">Heather Donahue</h3>
                    <p className="text-xs text-gray-400">Director, 24</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/josh-thumb.jpg"
                    alt="Joshua Leonard"
                    width={60}
                    height={60}
                    className="border border-gray-700"
                  />
                  <div>
                    <h3 className="text-sm">Joshua Leonard</h3>
                    <p className="text-xs text-gray-400">Cameraman, 23</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/mike-thumb.jpg"
                    alt="Michael Williams"
                    width={60}
                    height={60}
                    className="border border-gray-700"
                  />
                  <div>
                    <h3 className="text-sm">Michael Williams</h3>
                    <p className="text-xs text-gray-400">Sound Recordist, 25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
