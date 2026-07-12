const metrics = [
  { value: "6+", label: "years of hands-on experience" },
  { value: "6", label: "companies partnered with" },
  { value: "11", label: "private contracts delivered" },
  { value: "8", label: "talks & sessions facilitated" }
];

const focusAreas = [
  {
    title: "Generative AI, Agents & Voice",
    summary:
      "Designing production LLM and agent systems — routed multi-agent architectures, guardrails, retrieval, and near real-time voice interfaces.",
    bullets: [
      "Routed multi-agent orchestration with guardrails to prevent drift",
      "Near real-time voice-to-voice pipelines (streaming ASR + TTS)",
      "Self-hosted LLM serving on GPU infrastructure (vLLM, SGLang, llama.cpp)",
      "Agentic RAG and GraphRAG over vector stores and Neo4j knowledge graphs"
    ]
  },
  {
    title: "Computer Vision at Scale",
    summary:
      "Architecting multi-stage vision pipelines that stay accurate and affordable across hours of continuous high-resolution video.",
    bullets: [
      "High-recall detection plus temporal logic, with VLM verification to cut false positives",
      "Detection & segmentation: YOLO (v3–v11), RT-DETR, SAM/SAM2, nnU-Net",
      "OCR pipelines for complex documents, including Arabic script",
      "Cost-aware architecture: the right model at the right stage"
    ]
  },
  {
    title: "Medical Imaging & 3D Pipelines",
    summary:
      "Building segmentation and report-generation services for CT, MRI, and X-ray with sub-second to low-second latency.",
    bullets: [
      "3D multi-organ and tumor segmentation APIs (kidney, pancreas, colon)",
      "Medical VLM fine-tuning: MedGemma, PaliGemma, CXR-GPT",
      "DICOM / NIfTI orchestration with MONAI, ITK, VTK",
      "Optimized inference: 1.2–2s in 3D, ~0.1s in 2D"
    ]
  },
  {
    title: "AI Infrastructure & Deployment",
    summary:
      "On-premise and hybrid AI infrastructure built for security, data residency, and regulated environments.",
    bullets: [
      "On-prem GPU inference, provisioning, and model serving",
      "Hybrid cloud / on-prem architectures (AWS, GCP, Azure)",
      "Docker, Kubernetes, FastAPI, WebSocket streaming services",
      "Edge & optimization: Jetson, MIG partitioning, ONNX"
    ]
  }
];

const skillGroups = [
  {
    title: "Vision & Detection",
    items: [
      "YOLO v3-v11",
      "Mask/RCNN",
      "RT-DETR",
      "BlazeFace",
      "UNet",
      "nnU-Net",
      "Vision Transformers"
    ]
  },
  {
    title: "Generative/Foundational & Multimodal",
    items: [
      "DINO v1-v3",
      "CLIP/SigLIP",
      "SAM/SAM2",
      "MedGemma",
      "Qwen",
      "Mixtral",
      "Phi 2/3/3.5",
      "Whisper"
    ]
  },
  {
    title: "Frameworks & Tooling",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "Ultralytics",
      "OpenCV",
      "SAHI",
      "PaddleOCR"
    ]
  },
  {
    title: "Data & Languages",
    items: [
      "Python",
      "C++",
      "Swift",
      "SQL",
      "NumPy",
      "Pandas",
      "Seaborn",
      "MATLAB"
    ]
  },
  {
    title: "Deployment & Infrastructure",
    items: [
      "Docker",
      "FastAPI",
      "Kubernetes",
      "On-prem GPU",
      "Jetson",
      "MIG",
      "ONNX",
      "vLLM / SGLang"
    ]
  },
  {
    title: "Agentic & Retrieval",
    items: [
      "Agent harnessing",
      "Tool-calling",
      "Guardrails",
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "RAG pipelines"
    ]
  },
  {
    title: "Vector & Graph Databases",
    items: [
      "FAISS",
      "Chroma",
      "Pinecone",
      "Neo4j",
      "Knowledge graphs",
      "GraphRAG"
    ]
  }
];

const experiences = [
  {
    role: "Senior AI Engineer",
    company: "Abu Dhabi Executive Office (ADEO)",
    period: "Mar 2026 – Present",
    summary:
      "Delivering strategic government AI programs end-to-end — from problem definition and architecture through model evaluation and on-premise deployment — while guiding a team of 3 engineers on project execution.",
    highlights: [
      "Led the design and delivery of an end-to-end AI recruitment platform covering the full hiring lifecycle, from CV ingestion to AI-assisted interview analysis and evidence-based candidate comparison.",
      "Architected a near real-time voice-to-voice screening agent using a routed multi-agent design with guardrails, built on self-hosted LLMs — so candidates are assessed on more than a CV alone.",
      "Designed a multi-stage computer vision pipeline for emergency-vehicle obstruction detection: high-recall detection plus temporal logic, followed by VLM verification, making hours of continuous 4K video computationally tractable.",
      "Built an OCR pipeline to automate processing of complex internal documents, enabling downstream AI workflows.",
      "Benchmark and evaluate candidate models before deployment, weighing accuracy, latency, cost, privacy, and on-premise constraints.",
      "Participate in building new AI infrastructure aligned with organization-wide AI enablement."
    ]
  },
  {
    role: "AI Team Lead",
    company: "PaxeraHealth",
    period: "Nov 2023 – Feb 2026",
    summary:
      "Led the AI team at a medical imaging technology company, owning the AI roadmap, architecture, and production readiness of healthcare-grade products.",
    highlights: [
      "Led development of medical VLM and GenAI products through to deployment at leading healthcare institutions.",
      "Designed and deployed on-premise AI infrastructure for company products and enterprise healthcare customers, meeting security and regulatory requirements.",
      "Architected the EraBot RAG platform: agentic LLM orchestration, prompt-engineered guardrails, hybrid retrieval, and request gating for grounded clinical responses.",
      "Fine-tuned a small-parameter LLM as a semantic router, surpassing larger models in routing accuracy while cutting latency and inference cost.",
      "Scaled chest X-ray QA and radiology report generation by fine-tuning medical VLMs (MedGemma, PaliGemma, CXR-GPT).",
      "Productionized 2D/3D multi-organ segmentation (1.2–2s in 3D, ~0.1s in 2D) and real-time WebSocket Whisper ASR.",
      "Mentored AI engineers and set best practices for model development, pipelines, and inference optimization."
    ]
  },
  {
    role: "Senior Computer Vision Engineer",
    company: "DevisionX",
    period: "Mar 2023 – Oct 2024",
    summary:
      "Guided the Tuba AutoML platform, integrating SAM/SAM2, and scaling annotation plus benchmarking systems.",
    highlights: [
      "Managed and mentored the ML team delivering CV features on tight timelines.",
      "Integrated SAM/SAM2 pipelines and auto-labeling services deployable via CUDA + FastAPI.",
      "Refined AutoML pipelines for classification and detection, boosting reliability.",
      "Researched vector quantization (VQ-VAE) for interpretable classifiers.",
      "Delivered a SCADA automation CV product combining OCR, contrastive learning, YOLO, and SAHI."
    ]
  },
  {
    role: "Computer Vision Engineer",
    company: "PassApp",
    period: "Jun 2022 – Feb 2023",
    summary:
      "Shipped security-focused pipelines for license plate recognition, biometric verification, and national ID OCR.",
    highlights: [
      "End-to-end license plate recognition deployed on cloud and on-prem.",
      "Face matching APIs integrated into client mobile apps.",
      "Egyptian national ID recognition services powering government workflows.",
      "iOS ML deployment for on-device inference."
    ]
  },
  {
    role: "Machine Learning Engineer (Co-Founder)",
    company: "Pxivision",
    period: "Jan 2021 – Sep 2023",
    summary:
      "Delivered bespoke CV systems for smart access control and document processing across multiple clients.",
    highlights: [
      "Designed license plate, Arabic OCR, and ID parsing solutions with cloud APIs.",
      "Crafted inspection models using YOLO and Vision Transformers tailored to Arabic text.",
      "Deployed low-latency on-prem and cloud pipelines with monitoring.",
      "Automated data annotation and optimization loops to cut deployment cost."
    ]
  },
  {
    role: "Computer Vision Engineer",
    company: "DevisionX",
    period: "Jul 2020 – Nov 2020",
    summary:
      "Helped build and test the early Tuba AutoML pipeline for image classification and object detection.",
    highlights: [
      "Participated in building the early version of Tuba (AutoML platform) and the MLOps cycle.",
      "Tested YOLO v3–v5 and classification model pipelines.",
      "Built an end-to-end object detection AutoML pipeline with hyperparameter grid search."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Digified",
    period: "Jul 2019 – Nov 2019",
    summary:
      "Built state-of-the-art models to read Egyptian ID data for a FinTech and government digital-identity startup.",
    highlights: [
      "Built lightweight text de-noising and segmentation autoencoders trained on Arabic datasets.",
      "Built, trained, and tested text detection models.",
      "Automated the data annotation process for text segmentation."
    ]
  }
];

const research = [
  {
    title: "Blaze-Wi · WiFi Sensing for Gait Recognition & Intrusion Detection",
    period: "May 2020 – Jul 2021",
    details: [
      "Built a privacy-preserving sensing stack leveraging WiFi signal variation instead of cameras.",
      "Achieved 99.3% gait recognition accuracy on Widar 3.0 with a custom Blaze-Wi network.",
      "Integrated intrusion detection, gait recognition, and indoor localization powered by Flutter data collection."
    ],
    link: "https://drive.google.com/file/d/19ybpBiJmnzYncetyZTorKcRHrvpNDjZr/view",
    linkLabel: "Read the paper →"
  },
  {
    title: "Research Assistant · WiFi Sensing",
    period: "Mar 2023 – Jul 2023",
    details: [
      "Explored deep learning techniques for WiFi sensing applications.",
      "Investigated multimodal fusion between RF signals and computer vision heuristics."
    ]
  }
];

const socials = [
  {
    label: "GitHub",
    url: "https://github.com/sayedmohamedscu",
    icon: "🐙"
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/elsayed-mohamed-603509142/",
    icon: "🔗"
  },
  {
    label: "Medium",
    url: "https://medium.com/@elsayed_mohamed",
    icon: "✍️"
  },
  {
    label: "Hugging Face",
    url: "https://huggingface.co/sayedM",
    icon: "🤗"
  }
];

const heroSocialPriority = ["LinkedIn", "GitHub", "Medium", "Hugging Face"];

const renderMetrics = () => {
  const dl = document.getElementById("metric-cards");
  if (!dl) return;
  metrics.forEach(({ value, label }) => {
    const dt = document.createElement("dt");
    dt.textContent = value;
    const dd = document.createElement("dd");
    dd.textContent = label;
    dl.append(dt, dd);
  });
};

const renderFocus = () => {
  const container = document.getElementById("focus-cards");
  if (!container) return;
  focusAreas.forEach(({ title, summary, bullets }) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${title}</h3>
      <p>${summary}</p>
      <ul>${bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
    container.append(card);
  });
};

const renderSkills = () => {
  const grid = document.getElementById("skill-grid");
  if (!grid) return;
  skillGroups.forEach(({ title, items }) => {
    const block = document.createElement("article");
    block.className = "skill";
    block.innerHTML = `
      <strong>${title}</strong>
      <div>${items.map((item) => `<span>${item}</span>`).join("")}</div>
    `;
    grid.append(block);
  });
};

const renderExperience = () => {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;
  experiences.forEach(({ role, company, period, summary, highlights }) => {
    const item = document.createElement("article");
    item.className = "timeline__item";
    item.innerHTML = `
      <div class="timeline__meta">
        <span>${period}</span>
        <span>${company}</span>
      </div>
      <h3>${role}</h3>
      <p>${summary}</p>
      <ul class="timeline__highlights">
        ${highlights.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    `;
    timeline.append(item);
  });
};

const renderResearch = () => {
  const container = document.getElementById("research-cards");
  if (!container) return;
  research.forEach(({ title, period, details, link, linkLabel }) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${title}</h3>
      <p class="eyebrow">${period}</p>
      <ul>${details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
      ${
        link
          ? `<a class="card__link" href="${link}" target="_blank" rel="noopener noreferrer">${
              linkLabel || "Read more →"
            }</a>`
          : ""
      }
    `;
    container.append(card);
  });
};

const renderSocials = () => {
  const container = document.getElementById("social-links");
  if (!container) return;
  socials.forEach(({ label, url, icon }) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = icon
      ? `<span class="social-icon" aria-hidden="true">${icon}</span>${label}`
      : label;
    container.append(link);
  });
};

const renderHeroSocials = () => {
  const container = document.getElementById("hero-socials");
  if (!container) return;
  heroSocialPriority
    .map((label) => socials.find((social) => social.label === label))
    .filter(Boolean)
    .forEach(({ label, url, icon }) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = icon
        ? `<span class="social-icon" aria-hidden="true">${icon}</span>${label}`
        : label;
      container.append(link);
    });
};

const setYear = () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

document.addEventListener("DOMContentLoaded", () => {
  renderMetrics();
  renderFocus();
  renderSkills();
  renderExperience();
  renderResearch();
  renderHeroSocials();
  renderSocials();
  setYear();
});
