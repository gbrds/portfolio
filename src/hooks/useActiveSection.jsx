import { useEffect, useState } from "react"

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    // Track intersection ratios for observed sections
    const ratios = new Map()

    // Initialize ratios for all sections to 0
    sectionIds.forEach((id) => ratios.set(id, 0))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio || 0)
        })

        // Pick the section with the largest intersection ratio
        let maxId = null
        let maxRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > maxRatio) {
            maxRatio = ratio
            maxId = id
          }
        }

        if (maxId) setActive(maxId)
      },
      {
        rootMargin: "-40px 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}