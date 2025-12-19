import mermaid from 'mermaid'
import './style.css'

// Initialize Mermaid with dark theme
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    darkMode: true,
    background: '#12121a',
    primaryColor: '#6366f1',
    primaryTextColor: '#f8fafc',
    primaryBorderColor: '#4f46e5',
    lineColor: '#94a3b8',
    secondaryColor: '#8b5cf6',
    tertiaryColor: '#1a1a24',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    nodeBorder: '2px'
  },
  flowchart: {
    curve: 'basis',
    padding: 20,
    nodeSpacing: 50,
    rankSpacing: 60,
    htmlLabels: true
  }
})

// Diagram definitions
const diagramDefinitions = {
  'diagram-prompt': `
flowchart LR
    A["🎯 Xác định Mục tiêu"] --> B["📝 Chuẩn bị Context"]
    B --> C["✍️ Viết Prompt"]
    C --> D["🔍 Review & Refine"]
    D --> E["🚀 Execute"]
    E --> F{"Kết quả OK?"}
    F -->|"❌ Không"| D
    F -->|"✅ Có"| G["🎉 Hoàn thành"]
    
    style A fill:#6366f1,stroke:#4f46e5,color:#fff
    style B fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style C fill:#a855f7,stroke:#9333ea,color:#fff
    style D fill:#c026d3,stroke:#a21caf,color:#fff
    style E fill:#db2777,stroke:#be185d,color:#fff
    style F fill:#f43f5e,stroke:#e11d48,color:#fff
    style G fill:#10b981,stroke:#059669,color:#fff
  `,
  'diagram-spec-kit': `
flowchart TB
    subgraph S1 ["📦 Step 1: Install"]
        A["uv tool install specify-cli"]
    end
    subgraph S2 ["📋 Step 2: Principles"]
        B["/speckit.constitution"]
    end
    subgraph S3 ["📝 Step 3: Spec"]
        C["/speckit.specify"]
    end
    subgraph S4 ["🗺️ Step 4: Plan"]
        D["/speckit.plan"]
    end
    subgraph S5 ["📊 Step 5: Tasks"]
        E["/speckit.tasks"]
    end
    subgraph S6 ["⚡ Step 6: Execute"]
        F["/speckit.implement"]
    end
    
    S1 --> S2 --> S3 --> S4 --> S5 --> S6
    
    style A fill:#6366f1,stroke:#4f46e5,color:#fff
    style B fill:#7c3aed,stroke:#6d28d9,color:#fff
    style C fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style D fill:#a855f7,stroke:#9333ea,color:#fff
    style E fill:#c026d3,stroke:#a21caf,color:#fff
    style F fill:#10b981,stroke:#059669,color:#fff
  `,
  'diagram-bmad': `
flowchart LR
    subgraph P1 ["📊 Phase 1: Analysis"]
        A1["Brainstorm"] --> A2["Research"] --> A3["Explore"]
    end
    subgraph P2 ["📝 Phase 2: Planning"]
        B1["PRD"] --> B2["Tech Specs"] --> B3["Design Docs"]
    end
    subgraph P3 ["🏗️ Phase 3: Solutioning"]
        C1["Architecture"] --> C2["UX Design"] --> C3["Technical"]
    end
    subgraph P4 ["⚡ Phase 4: Implementation"]
        D1["Story-driven Dev"] --> D2["Continuous Validation"]
    end
    
    P1 --> P2 --> P3 --> P4
    
    style A1 fill:#6366f1,stroke:#4f46e5,color:#fff
    style A2 fill:#6366f1,stroke:#4f46e5,color:#fff
    style A3 fill:#6366f1,stroke:#4f46e5,color:#fff
    style B1 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style B2 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style B3 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style C1 fill:#a855f7,stroke:#9333ea,color:#fff
    style C2 fill:#a855f7,stroke:#9333ea,color:#fff
    style C3 fill:#a855f7,stroke:#9333ea,color:#fff
    style D1 fill:#10b981,stroke:#059669,color:#fff
    style D2 fill:#10b981,stroke:#059669,color:#fff
  `,
  'diagram-overview': `
flowchart TB
    subgraph Input ["📥 INPUT"]
        I1["User Requirements"] --> I2["Context & Constraints"]
    end
    subgraph Process ["⚙️ AI-ASSISTED PROCESS"]
        P1["Spec Creation"] --> P2["Planning"]
        P2 --> P3["Implementation"]
        P3 --> P4["Testing & Validation"]
    end
    subgraph Output ["📤 OUTPUT"]
        O1["Working Software"] --> O2["Documentation"]
    end
    
    Input --> Process --> Output
    
    style I1 fill:#6366f1,stroke:#4f46e5,color:#fff
    style I2 fill:#6366f1,stroke:#4f46e5,color:#fff
    style P1 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style P2 fill:#a855f7,stroke:#9333ea,color:#fff
    style P3 fill:#c026d3,stroke:#a21caf,color:#fff
    style P4 fill:#db2777,stroke:#be185d,color:#fff
    style O1 fill:#10b981,stroke:#059669,color:#fff
    style O2 fill:#10b981,stroke:#059669,color:#fff
  `
}

// Render a single diagram
async function renderDiagram(elementId) {
  const element = document.getElementById(elementId)
  if (!element) return

  const definition = diagramDefinitions[elementId]
  if (!definition) return

  try {
    // Clear existing content
    element.innerHTML = ''

    // Generate unique ID for this render
    const uniqueId = `${elementId}-${Date.now()}`

    const { svg } = await mermaid.render(uniqueId, definition.trim())
    element.innerHTML = svg

    // Apply some styling to the SVG
    const svgElement = element.querySelector('svg')
    if (svgElement) {
      svgElement.style.maxWidth = '100%'
      svgElement.style.height = 'auto'
    }
  } catch (error) {
    console.error(`Mermaid rendering error for ${elementId}:`, error)
    element.innerHTML = `<div style="color: #f43f5e; padding: 1rem; text-align: center;">
      <p>Diagram loading...</p>
    </div>`
  }
}

// Render all visible diagrams
async function renderVisibleDiagrams() {
  const activePanel = document.querySelector('.workflow-panel.active')
  if (!activePanel) return

  const diagramElement = activePanel.querySelector('.mermaid')
  if (diagramElement && diagramElement.id) {
    await renderDiagram(diagramElement.id)
  }
}

// Tab switching functionality
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn')
  const panels = document.querySelectorAll('.workflow-panel')

  tabButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const targetTab = button.dataset.tab

      // Update active button
      tabButtons.forEach(btn => btn.classList.remove('active'))
      button.classList.add('active')

      // Update active panel
      panels.forEach(panel => {
        panel.classList.remove('active')
        if (panel.id === `panel-${targetTab}`) {
          panel.classList.add('active')
        }
      })

      // Render diagram after tab switch
      await renderVisibleDiagrams()
    })
  })
}

// Create floating particles in hero section
function createParticles() {
  const particlesContainer = document.getElementById('particles')
  if (!particlesContainer) return

  const particleCount = 20

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.classList.add('particle')

    const size = Math.random() * 100 + 20
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 15
    const duration = Math.random() * 10 + 10

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      top: ${top}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `

    particlesContainer.appendChild(particle)
  }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (href === '#') return

      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}

// Navbar background on scroll
function initNavbar() {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 10, 15, 0.95)'
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.8)'
    }
  })
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.tool-card, .practice-card, .resource-card')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll')
    observer.observe(el)
  })
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  createParticles()
  initTabs()
  initSmoothScroll()
  initNavbar()
  initScrollAnimations()

  // Render initial diagram after a short delay
  setTimeout(async () => {
    await renderVisibleDiagrams()
  }, 300)
})
