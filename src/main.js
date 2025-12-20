import mermaid from 'mermaid'
import './style.css'

// Initialize Mermaid with dark theme - LARGER for presentation
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
    fontSize: '16px', // Larger font
    nodeBorder: '2px'
  },
  flowchart: {
    curve: 'basis',
    padding: 30,
    nodeSpacing: 60,
    rankSpacing: 80,
    htmlLabels: true,
    useMaxWidth: true
  }
})

// Diagram definitions
const diagramDefinitions = {
  'diagram-prompt': `
flowchart TB
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
flowchart TB
    subgraph P1 ["📊 Phase 1: Analysis"]
        A1["Brainstorm"] --> A2["Research"] --> A3["Explore"]
    end
    subgraph P2 ["📝 Phase 2: Planning"]
        B1["PRD"] --> B2["Tech Specs"] --> B3["Design"]
    end
    subgraph P3 ["🏗️ Phase 3: Solutioning"]
        C1["Architecture"] --> C2["UX"] --> C3["Technical"]
    end
    subgraph P4 ["⚡ Phase 4: Implementation"]
        D1["Story Dev"] --> D2["Validation"]
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
    I["📥 Requirements"] --> P1["Spec Creation"]
    P1 --> P2["Planning"]
    P2 --> P3["Implementation"]
    P3 --> P4["Testing"]
    P4 --> O["📤 Working Software"]
    
    style I fill:#6366f1,stroke:#4f46e5,color:#fff
    style P1 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style P2 fill:#a855f7,stroke:#9333ea,color:#fff
    style P3 fill:#c026d3,stroke:#a21caf,color:#fff
    style P4 fill:#db2777,stroke:#be185d,color:#fff
    style O fill:#10b981,stroke:#059669,color:#fff
  `
}

// Horizontal diagrams for modal zoom (same structure but LR layout)
const zoomDiagramDefinitions = {
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
async function renderDiagram(elementId, isZoomed = false) {
  const element = document.getElementById(elementId)
  if (!element) return null

  // Use horizontal diagrams for modal, vertical for inline
  const definitions = isZoomed ? zoomDiagramDefinitions : diagramDefinitions
  const definition = definitions[elementId]
  if (!definition) return null

  try {
    // Generate unique ID for this render
    const suffix = isZoomed ? 'zoomed' : 'normal'
    const uniqueId = `${elementId}-${suffix}-${Date.now()}`

    const { svg } = await mermaid.render(uniqueId, definition.trim())

    if (!isZoomed) {
      element.innerHTML = svg
      // Apply styling and dynamic sizing to the SVG
      const svgElement = element.querySelector('svg')
      if (svgElement) {
        svgElement.style.maxWidth = '100%'
        svgElement.style.height = 'auto'

        // Dynamic height adjustment based on SVG dimensions
        requestAnimationFrame(() => {
          const container = element.closest('.workflow-diagram')
          if (container && svgElement.viewBox?.baseVal) {
            const viewBox = svgElement.viewBox.baseVal
            const aspectRatio = viewBox.height / viewBox.width
            const containerWidth = container.clientWidth - 40 // padding
            const optimalHeight = Math.min(Math.max(containerWidth * aspectRatio + 40, 300), 500)
            container.style.minHeight = `${optimalHeight}px`
            container.style.maxHeight = `${optimalHeight + 50}px`
          }
        })
      }
    }

    return svg
  } catch (error) {
    console.error(`Mermaid rendering error for ${elementId}:`, error)
    if (!isZoomed) {
      element.innerHTML = `<div style="color: #f43f5e; padding: 1rem; text-align: center;">
        <p>Diagram loading...</p>
      </div>`
    }
    return null
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

// Zoom Modal functionality
function initZoomModal() {
  const modal = document.getElementById('zoomModal')
  const modalContent = document.getElementById('zoomDiagram')
  const closeBtn = document.getElementById('zoomClose')
  const backdrop = modal?.querySelector('.zoom-modal-backdrop')

  if (!modal || !modalContent) return

  // Click on diagram to zoom
  document.querySelectorAll('.workflow-diagram[data-zoomable]').forEach(diagram => {
    diagram.addEventListener('click', async () => {
      const mermaidEl = diagram.querySelector('.mermaid')
      if (!mermaidEl || !mermaidEl.id) return

      // Use horizontal diagrams for zoom modal
      const definition = zoomDiagramDefinitions[mermaidEl.id]
      if (!definition) {
        console.warn(`No zoom definition found for: ${mermaidEl.id}`)
        return
      }

      // Show modal first with loading state
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
      modalContent.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #94a3b8;"><p>Đang tải sơ đồ...</p></div>'

      try {
        // Generate unique ID for this render
        const uniqueId = `zoom-${mermaidEl.id}-${Date.now()}`
        
        // Render the diagram
        const { svg } = await mermaid.render(uniqueId, definition.trim())
        
        // Insert SVG directly into modal content
        modalContent.innerHTML = svg

        // Wait for next frame to ensure DOM is updated
        await new Promise(resolve => requestAnimationFrame(resolve))

        // Get the SVG element (should be direct child now)
        const svgElement = modalContent.querySelector('svg')
        if (!svgElement) {
          throw new Error('SVG element not found after render')
        }

        // Get original dimensions
        const originalWidth = svgElement.getAttribute('width')
        const originalHeight = svgElement.getAttribute('height')
        const existingViewBox = svgElement.getAttribute('viewBox')

        // Ensure viewBox exists for proper scaling
        if (!existingViewBox) {
          if (originalWidth && originalHeight) {
            const w = parseFloat(originalWidth)
            const h = parseFloat(originalHeight)
            svgElement.setAttribute('viewBox', `0 0 ${w} ${h}`)
          } else {
            // Fallback: try to get from computed style or use default
            const computedWidth = svgElement.clientWidth || 800
            const computedHeight = svgElement.clientHeight || 600
            svgElement.setAttribute('viewBox', `0 0 ${computedWidth} ${computedHeight}`)
          }
        }

        // Remove fixed width/height to allow responsive scaling
        svgElement.removeAttribute('width')
        svgElement.removeAttribute('height')
        
        // Remove any inline styles that might interfere
        const inlineStyle = svgElement.getAttribute('style')
        if (inlineStyle) {
          // Keep only necessary styles, remove width/height
          const cleanedStyle = inlineStyle
            .split(';')
            .filter(prop => !prop.includes('width') && !prop.includes('height'))
            .join(';')
          if (cleanedStyle.trim()) {
            svgElement.setAttribute('style', cleanedStyle)
          } else {
            svgElement.removeAttribute('style')
          }
        }

        // Set preserveAspectRatio for proper scaling
        svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet')

        // Add class for styling
        svgElement.classList.add('zoom-svg')

        // Wrap SVG in container for zoom/pan functionality
        const svgContainer = document.createElement('div')
        svgContainer.className = 'zoom-svg-container'
        svgElement.parentNode.insertBefore(svgContainer, svgElement)
        svgContainer.appendChild(svgElement)

        // Initialize zoom/pan state
        let zoomLevel = 1
        let panX = 0
        let panY = 0
        let isDragging = false
        let dragStartX = 0
        let dragStartY = 0
        let dragStartPanX = 0
        let dragStartPanY = 0

        // Update cursor based on zoom level
        function updateCursor() {
          if (zoomLevel > 1.01) {
            svgContainer.style.cursor = isDragging ? 'grabbing' : 'grab'
          } else {
            svgContainer.style.cursor = 'default'
          }
        }

        // Apply transform
        function applyTransform() {
          svgElement.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`
          svgElement.style.transformOrigin = 'center center'
          updateCursor()
        }

        // Mouse wheel zoom
        svgContainer.addEventListener('wheel', (e) => {
          e.preventDefault()
          
          const delta = e.deltaY > 0 ? -0.15 : 0.15
          const oldZoom = zoomLevel
          const newZoom = Math.max(0.5, Math.min(5, zoomLevel + delta))
          
          if (oldZoom === newZoom) return
          
          // Zoom towards mouse position
          const rect = svgContainer.getBoundingClientRect()
          const mouseX = e.clientX - rect.left - rect.width / 2
          const mouseY = e.clientY - rect.top - rect.height / 2
          
          // Calculate zoom point in SVG coordinates
          const zoomPointX = (mouseX - panX) / oldZoom
          const zoomPointY = (mouseY - panY) / oldZoom
          
          // Update zoom level
          zoomLevel = newZoom
          
          // Adjust pan to zoom towards mouse position
          panX = mouseX - zoomPointX * newZoom
          panY = mouseY - zoomPointY * newZoom
          
          applyTransform()
        }, { passive: false })

        // Mouse drag to pan
        svgContainer.addEventListener('mousedown', (e) => {
          // Allow panning when zoomed in
          if (zoomLevel > 1.01) {
            e.preventDefault()
            isDragging = true
            dragStartX = e.clientX
            dragStartY = e.clientY
            dragStartPanX = panX
            dragStartPanY = panY
            svgContainer.style.cursor = 'grabbing'
          }
        })

        document.addEventListener('mousemove', (e) => {
          if (isDragging) {
            const deltaX = e.clientX - dragStartX
            const deltaY = e.clientY - dragStartY
            panX = dragStartPanX + deltaX / zoomLevel
            panY = dragStartPanY + deltaY / zoomLevel
            applyTransform()
          }
        })

        document.addEventListener('mouseup', () => {
          if (isDragging) {
            isDragging = false
            svgContainer.style.cursor = zoomLevel > 1 ? 'grab' : 'default'
          }
        })

        svgContainer.addEventListener('mouseenter', updateCursor)
        svgContainer.addEventListener('mouseleave', () => {
          svgContainer.style.cursor = 'default'
        })

        // Add reset zoom button
        const resetBtn = document.createElement('button')
        resetBtn.className = 'zoom-reset-btn'
        resetBtn.innerHTML = '🔄 Reset'
        resetBtn.title = 'Reset zoom và pan (hoặc nhấn R)'
        resetBtn.addEventListener('click', () => {
          zoomLevel = 1
          panX = 0
          panY = 0
          applyTransform()
        })
        modalContent.appendChild(resetBtn)

        // Keyboard shortcuts for zoom/pan
        zoomKeyHandler = (e) => {
          if (!modal.classList.contains('active')) return
          
          // Reset with R key
          if (e.key === 'r' || e.key === 'R') {
            e.preventDefault()
            zoomLevel = 1
            panX = 0
            panY = 0
            applyTransform()
          }
          
          // Zoom in/out with + and -
          if (e.key === '+' || e.key === '=') {
            e.preventDefault()
            zoomLevel = Math.min(5, zoomLevel + 0.2)
            applyTransform()
          }
          if (e.key === '-' || e.key === '_') {
            e.preventDefault()
            zoomLevel = Math.max(0.5, zoomLevel - 0.2)
            applyTransform()
          }
        }
        
        document.addEventListener('keydown', zoomKeyHandler)

        // Force a reflow to ensure rendering
        void svgElement.offsetHeight

      } catch (error) {
        console.error('Zoom render error:', error)
        modalContent.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #f43f5e; text-align: center; padding: 2rem;">
            <p style="font-size: 1.25rem; margin-bottom: 0.5rem;">❌ Không thể tải sơ đồ</p>
            <p style="font-size: 0.875rem; color: #94a3b8;">${error.message || 'Lỗi không xác định'}</p>
          </div>
        `
      }
    })
  })

  // Store zoom/pan event handlers for cleanup
  let zoomKeyHandler = null

  // Close modal
  function closeModal() {
    modal.classList.remove('active')
    document.body.style.overflow = ''
    
    // Remove zoom keyboard handler if exists
    if (zoomKeyHandler) {
      document.removeEventListener('keydown', zoomKeyHandler)
      zoomKeyHandler = null
    }
    
    // Clear content when closing to free memory
    modalContent.innerHTML = ''
  }

  closeBtn?.addEventListener('click', closeModal)
  backdrop?.addEventListener('click', closeModal)

  // Close on Escape key
  const escapeHandler = (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal()
    }
  }
  document.addEventListener('keydown', escapeHandler)
}

// Create floating particles in hero section
function createParticles() {
  const particlesContainer = document.getElementById('particles')
  if (!particlesContainer) return

  const particleCount = 15

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.classList.add('particle')

    const size = Math.random() * 120 + 30
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
      navbar.style.background = 'rgba(10, 10, 15, 0.98)'
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.9)'
    }
  })
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  createParticles()
  initTabs()
  initSmoothScroll()
  initNavbar()
  initZoomModal()
  initScrollAnimations()

  // Render initial diagram after a short delay
  setTimeout(async () => {
    await renderVisibleDiagrams()
  }, 300)
})

// Scroll animations with Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible')
        animateOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe sections
  document.querySelectorAll('.animate-section').forEach(section => {
    animateOnScroll.observe(section)
  })

  // Observe items
  document.querySelectorAll('.animate-item').forEach(item => {
    animateOnScroll.observe(item)
  })
}
