"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [activePersona, setActivePersona] = useState<string | null>(null)
  const [activeBubble, setActiveBubble] = useState<string | null>(null)
  const [bubblePositions, setBubblePositions] = useState<Record<string, { x: number; y: number }>>({})
  const personaRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const bubbleRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const personas = [
    {
      id: "persona1",
      name: "Joana Mendes",
      image: "/images/persona1.png",
      color: "bg-[#D1BFAE]",
      lightColor: "bg-[#F5EFE0]",
      borderColor: "border-[#A68B6E]",
      bubbles: [
        {
          id: "demographics1",
          title: "Características Demográficas",
          content:
            "Nome: Joana Mendes\nIdade: 28 anos\nOcupação: Coordenadora de jovens em uma igreja local\nEscolaridade: Graduada em Teologia\nLocalização: São Paulo, SP (zona urbana)\nEstado Civil: Solteira\nRenda: R$ 4.000,00 mensais",
          position: "top-[10%] left-[15%]",
        },
        {
          id: "goals1",
          title: "Objetivos ao Utilizar o Sistema",
          content:
            "Manter uma rotina diária de devocionais para fortalecer sua fé e inspirar os jovens que lidera\n\nEncontrar conteúdos variados (textos bíblicos, meditações temáticas, podcasts curtos) que possam ser compartilhados com seu grupo\n\nAcompanhar seu progresso espiritual através de métricas simples (ex.: dias consecutivos de uso)",
          position: "top-[25%] right-[20%]",
        },
        {
          id: "challenges1",
          title: "Desafios",
          content:
            "Dificuldade em conciliar a rotina intensa de trabalho com momentos de reflexão pessoal\n\nFrustra-se com aplicativos genéricos que não oferecem profundidade teológica ou recursos para liderança\n\nNecessita de flexibilidade para acessar o conteúdo offline (ex.: durante deslocamentos)",
          position: "bottom-[30%] left-[10%]",
        },
        {
          id: "skills1",
          title: "Habilidades e Tarefas Principais",
          content:
            "Alta familiaridade com tecnologia (usa apps de produtividade e redes sociais diariamente)\n\nOrganiza eventos e estudos bíblicos para grupos de jovens\n\nPreza por conteúdos bem pesquisados e alinhados com sua denominação religiosa",
          position: "bottom-[15%] right-[15%]",
        },
        {
          id: "profile1",
          title: "Perfil Narrativo",
          content:
            "Joana é ativa em sua comunidade, participa de retiros espirituais e adora escrever reflexões em seu diário. Mora em um apartamento pequeno, mas mantém um espaço dedicado à oração.\n\nUtiliza o aplicativo pela manhã, antes das reuniões de trabalho, e à noite, para planejar os devocionais do grupo de jovens.\n\nAdota ferramentas digitais que agregam valor à sua rotina espiritual, mas é crítica com apps superficiais.",
          position: "top-[50%] left-[5%]",
        },
      ],
    },
    {
      id: "persona2",
      name: "Carlos Ribeiro",
      image: "/images/persona2.png",
      color: "bg-[#A68B6E]",
      lightColor: "bg-[#D1BFAE]",
      borderColor: "border-[#49341b]",
      bubbles: [
        {
          id: "demographics2",
          title: "Características Demográficas",
          content:
            "Nome: Carlos Ribeiro\nIdade: 42 anos\nOcupação: Engenheiro civil\nEscolaridade: Pós-graduado em Gestão de Projetos\nLocalização: Curitiba, PR (zona residencial)\nEstado Civil: Casado, pai de dois filhos (5 e 8 anos)\nRenda: R$ 12.000,00 mensais",
          position: "top-[15%] right-[10%]",
        },
        {
          id: "goals2",
          title: "Objetivos ao Utilizar o Sistema",
          content:
            "Encontrar devocionais curtos e objetivos que caibam em sua rotina atribulada\n\nConectar-se espiritualmente mesmo durante viagens de trabalho ou pausas rápidas\n\nReceber lembretes suaves para não perder a prática diária",
          position: "top-[30%] left-[20%]",
        },
        {
          id: "challenges2",
          title: "Desafios",
          content:
            "Tempo limitado devido à carga de trabalho e responsabilidades familiares\n\nDesinteresse por conteúdos longos ou complexos\n\nPrefere uma interface simples e sem distrações",
          position: "bottom-[25%] right-[10%]",
        },
        {
          id: "skills2",
          title: "Habilidades e Tarefas Principais",
          content:
            "Conhecimento técnico intermediário (usa apps básicos como e-mail e navegadores)\n\nPrioriza eficiência em todas as atividades\n\nValoriza praticidade e rapidez",
          position: "bottom-[20%] left-[15%]",
        },
        {
          id: "profile2",
          title: "Perfil Narrativo",
          content:
            "Carlos trabalha em escritório e viaja a cada 15 dias para supervisionar obras. Nos fins de semana, leva a família ao parque e à igreja.\n\nAcessa o app durante o trajeto para o trabalho (no carro, usando o modo áudio) ou em pausas rápidas no escritório.\n\nPrefere ferramentas que resolvam problemas sem exigir tempo de aprendizado. Evita funcionalidades complexas.",
          position: "top-[45%] right-[5%]",
        },
      ],
    },
  ]

  // Calculate positions for connecting lines
  useEffect(() => {
    if (!activePersona) return

    // Use requestAnimationFrame to ensure DOM is ready
    const animationFrameId = requestAnimationFrame(() => {
      const newPositions: Record<string, { x: number; y: number }> = {}
      const persona = personas.find((p) => p.id === activePersona)

      if (!persona) return

      const personaElement = personaRefs.current[activePersona]
      if (!personaElement) return

      const personaRect = personaElement.getBoundingClientRect()

      persona.bubbles.forEach((bubble) => {
        const bubbleElement = bubbleRefs.current[bubble.id]
        if (!bubbleElement) return

        const bubbleRect = bubbleElement.getBoundingClientRect()

        newPositions[bubble.id] = {
          x: bubbleRect.left + bubbleRect.width / 2,
          y: bubbleRect.top + bubbleRect.height / 2,
        }
      })

      // Only update state if positions have actually changed
      const hasPositionsChanged = Object.keys(newPositions).some((key) => {
        const oldPos = bubblePositions[key]
        const newPos = newPositions[key]
        return !oldPos || Math.abs(oldPos.x - newPos.x) > 1 || Math.abs(oldPos.y - newPos.y) > 1
      })

      if (hasPositionsChanged) {
        setBubblePositions(newPositions)
      }
    })

    // Handle window resize with debounce
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          const newPositions: Record<string, { x: number; y: number }> = {}
          const persona = personas.find((p) => p.id === activePersona)

          if (!persona) return

          const personaElement = personaRefs.current[activePersona]
          if (!personaElement) return

          persona.bubbles.forEach((bubble) => {
            const bubbleElement = bubbleRefs.current[bubble.id]
            if (!bubbleElement) return

            const bubbleRect = bubbleElement.getBoundingClientRect()

            newPositions[bubble.id] = {
              x: bubbleRect.left + bubbleRect.width / 2,
              y: bubbleRect.top + bubbleRect.height / 2,
            }
          })

          setBubblePositions(newPositions)
        })
      }, 100)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(resizeTimeout)
      window.removeEventListener("resize", handleResize)
    }
  }, [activePersona])

  const handlePersonaClick = (personaId: string) => {
    setActivePersona(personaId === activePersona ? null : personaId)
    setActiveBubble(null)
  }

  const handleBubbleClick = (bubbleId: string) => {
    setActiveBubble(bubbleId === activeBubble ? null : bubbleId)
  }

  const getActivePersona = () => {
    return personas.find((persona) => persona.id === activePersona)
  }

  const getActiveBubbleContent = () => {
    const persona = getActivePersona()
    if (!persona || !activeBubble) return null
    return persona.bubbles.find((bubble) => bubble.id === activeBubble)
  }

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 transition-colors duration-500 ${
        activePersona ? "bg-[#c2bdae]/80" : "bg-[#F5EFE0]"
      }`}
    >
      {/* Background animated circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D1BFAE]/30"
            initial={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.1 + Math.random() * 0.3,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-[#4D4D4D] md:text-5xl">
        <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Personas - Chá com o Senhor
        </motion.span>
      </h1>

      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center md:h-[600px]">
        {/* Central personas */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          {personas.map((persona) => (
            <motion.div
              key={persona.id}
              ref={(el) => (personaRefs.current[persona.id] = el)}
              className={`relative flex h-40 w-40 cursor-pointer items-center justify-center rounded-full ${
                persona.color
              } shadow-lg transition-all duration-300 hover:shadow-xl md:h-48 md:w-48 ${
                activePersona === persona.id ? `ring-4 ring-[#49341b] ring-offset-4` : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePersonaClick(persona.id)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: persona.id === "persona1" ? 0.2 : 0.4 }}
            >
              <div className="relative h-36 w-36 overflow-hidden rounded-full md:h-44 md:w-44">
                <Image
                  src={persona.image || "/placeholder.svg"}
                  alt={persona.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 144px, 176px"
                  priority
                />
              </div>
              <motion.div
                className="absolute -bottom-6 rounded-full bg-[#F5EFE0] px-4 py-1 text-sm font-semibold shadow-md text-[#4D4D4D]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {persona.name}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Connecting lines */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#716152" />
            </marker>
          </defs>
          <g className="lines">
            {activePersona &&
              Object.keys(bubblePositions).length > 0 &&
              getActivePersona()?.bubbles.map((bubble) => {
                const personaElement = personaRefs.current[activePersona]
                const bubblePosition = bubblePositions[bubble.id]

                if (!personaElement || !bubblePosition) return null

                const personaRect = personaElement.getBoundingClientRect()
                const personaX = personaRect.left + personaRect.width / 2
                const personaY = personaRect.top + personaRect.height / 2

                // Calculate positions relative to SVG
                const svgElement = personaElement.parentElement?.parentElement?.querySelector("svg")
                if (!svgElement) return null

                const svgRect = svgElement.getBoundingClientRect()

                const relPersonaX = personaX - svgRect.left
                const relPersonaY = personaY - svgRect.top
                const relBubbleX = bubblePosition.x - svgRect.left
                const relBubbleY = bubblePosition.y - svgRect.top

                return (
                  <motion.line
                    key={bubble.id}
                    x1={relPersonaX}
                    y1={relPersonaY}
                    x2={relBubbleX}
                    y2={relBubbleY}
                    stroke="#716152"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                )
              })}
          </g>
        </svg>

        {/* Information bubbles */}
        <AnimatePresence>
          {activePersona &&
            getActivePersona()?.bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                ref={(el) => (bubbleRefs.current[bubble.id] = el)}
                className={`absolute ${bubble.position} z-20 cursor-pointer`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
                onClick={() => handleBubbleClick(bubble.id)}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${getActivePersona()?.lightColor} shadow-md transition-all duration-300 hover:shadow-lg md:h-20 md:w-20 ${
                    activeBubble === bubble.id ? `ring-2 ring-[#49341b]` : ""
                  } border-2 ${getActivePersona()?.borderColor}`}
                >
                  <span className="text-center text-xs font-medium md:text-sm text-[#4D4D4D]">
                    {bubble.title.split(" ")[0]}
                  </span>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Expanded bubble content */}
        <AnimatePresence>
          {activeBubble && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBubble(null)}
            >
              <motion.div
                className={`relative max-h-[80vh] w-full max-w-md overflow-auto rounded-2xl ${
                  getActivePersona()?.lightColor
                } p-6 shadow-xl border-2 ${getActivePersona()?.borderColor}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute right-4 top-4 rounded-full bg-[#F5EFE0]/80 p-1 text-[#4D4D4D] hover:bg-[#F5EFE0]"
                  onClick={() => setActiveBubble(null)}
                >
                  <X size={20} />
                </button>
                <h3 className="mb-4 text-xl font-bold text-[#4D4D4D]">{getActiveBubbleContent()?.title}</h3>
                <div className="whitespace-pre-line text-[#4D4D4D]">{getActiveBubbleContent()?.content}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-8 text-center text-sm text-[#797979]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Clique nos personagens para ver suas informações detalhadas
      </motion.div>
    </main>
  )
}
