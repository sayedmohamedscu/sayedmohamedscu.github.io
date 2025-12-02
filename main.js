const metrics = [
  { value: "6", label: "companies partnered with" },
  { value: "16", label: "private contracts delivered" },
  { value: "5+", label: "years of hands-on experience" },
  { value: "8", label: "talks & sessions facilitated" }
];

const focusAreas = [
  {
    title: "Multimodal & Generative AI Platforms",
    summary:
      "Architecting VLM/LLM pipelines (EraBot) with retrieval, fine-tuning, evaluation, and low-latency serving.",
    bullets: [
      "MedGemma, PaliGemma, LLAVA, Florence-2, CXR-GPT customizations",
      "CrewAI, LangChain, LlamaIndex agents with FAISS / Pinecone retrieval",
      "vLLM, SGLang, llama.cpp optimized inference stacks"
    ]
  },
  {
    title: "Medical Imaging & 3D Pipelines",
    summary:
      "Building segmentation/classification services for CT, MRI, OCT, and X-ray datasets with SOTA accuracy.",
    bullets: [
      "3D tumor segmentation APIs for kidney, pancreas, colon",
      "SAM/SAM2 fine-tuning, nnU-Net, Vision Transformers",
      "DICOM / NIfTI data orchestration with MONAI, ITK, VTK"
    ]
  },
  {
    title: "Deployment, MLOps & Edge",
    summary:
      "Productionized stacks spanning Jetson edge devices, FastAPI services, Docker/Kubernetes, and multi-cloud.",
    bullets: [
      "AWS, GCP, Azure, Firebase, S3, GCS",
      "Streaming inference via WebSockets for Whisper STT",
      "Model optimization with ONNX, TensorRT, MIG partitioning"
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
      "Phi 2/3/3.5"
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
    title: "Deployment Stack",
    items: [
      "Docker",
      "FastAPI",
      "Kubernetes",
      "Jetson",
      "Raspberry Pi",
      "ONNX",
      "Firebase",
      "Vector DBs"
    ]
  },
  {
    title: "Agentic & Retrieval",
    items: [
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "FAISS",
      "Chroma",
      "Pinecone",
      "RAG pipelines"
    ]
  }
];

const experiences = [
  {
    role: "Senior Artificial Intelligence Engineer",
    company: "PaxeraHealth · ",
    period: "Nov 2023 – Present",
    summary:
      "Leading medical imaging AI initiatives, deploying multimodal LLM/VLM solutions, and operationalizing cloud-native inference.",
    highlights: [
      "Built 3D tumor segmentation services with 1.2–2s inference SLA and API integrations.",
      "Developed SAM-based 2D segmentation services with 0.1s response times.",
      "Architected EraBot LLM/VLM stack covering RAG, fine-tuning, eval, search, assist flows.",
      "Fine-tuned and evaluated MedGemma, PaliGemma, LLAVA, Florence-2, CXR-GPT for medical QA.",
      "Launched FAQ + prompt-engineered assistants spanning OpenAI, Gemini, Qwen, Llama, Mixtral, Phi.",
      "Served Whisper via real-time WebSocket APIs for clinical speech-to-text."
    ]
  },
  {
    role: "Senior Computer Vision Engineer",
    company: "DevisionX",
    period: "Mar 2023 – Oct 2024",
    summary:
      "Guided the Tuba AutoML platform, integrating SAM/SAM2, and scaling annotation plus benchmarking systems.",
    highlights: [
      "Managed and mentored ML teams delivering CV features on tight timelines.",
      "Integrated SAM/SAM2 pipelines and auto-labeling services deployable via CUDA + FastAPI.",
      "Refined AutoML pipelines for classification & detection, boosting reliability.",
      "Researched vector quantization (VQ-VAE) for interpretable classifiers.",
      "Delivered SCADA automation CV product combining OCR, contrastive learning, YOLO, SAHI."
    ]
  },
  {
    role: "Computer Vision Engineer",
    company: "PassApp",
    period: "Jun 2022 – Jan 2023",
    summary:
      "Shipped security-focused pipelines for license plate recognition, biometric verification, and national ID OCR.",
    highlights: [
      "End-to-end license plate recognition deployed on cloud & on-prem.",
      "Face matching APIs integrated into client mobile apps.",
      "Egyptian national ID recognition services powering government workflows.",
      "iOS ML deployment for on-device inference."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Pxivision",
    period: "Jan 2021 – Sep 2023",
    summary:
      "Delivered bespoke CV systems for smart access control and document processing for multiple clients.",
    highlights: [
      "Designed license plate, Arabic OCR, and ID parsing solutions with cloud APIs.",
      "Crafted inspection models using YOLO + Vision Transformers tailored to Arabic text.",
      "Deployed low-latency on-prem and cloud pipelines with monitoring.",
      "Automated data annotation and optimization loops to cut deployment cost."
    ]
  }
];

const research = [
  {
    title: "Blaze-Wi · WiFi Sensing for Gait Recognition & Intrusion Detection",
    period: "May 2020 – Jul 2021",
    details: [
      "Built privacy-preserving security stack leveraging WiFi signal variation instead of cameras.",
      "Achieved 99.3% gait recognition accuracy on Widar 3.0 with custom Blaze-Wi network.",
      "Integrated intrusion detection, gait recognition, and indoor localization powered by Flutter data collection."
    ]
  },
  {
    title: "Research Assistant · WiFi Sensing ",
    period: "Mar 2023 – Jul 2023",
    details: [
      "Explored deep learning techniques for WiFi sensing applications .",
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

const heroSocialPriority = ["LinkedIn", "Medium", "Hugging Face"];

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
  research.forEach(({ title, period, details }) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${title}</h3>
      <p class="eyebrow">${period}</p>
      <ul>${details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
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






