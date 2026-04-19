const cvData = {
    cs: {
        lang: "cs",
        title: "Artem Kolychev - Životopis",
        jobTitle: "Senior Software Engineer · Backend Architect",
        location: "Praha, Česká republika",
        sections: {
            education: "Vzdělání",
            skills: "Hlavní Dovednosti",
            links: "Projekty a Odkazy",
            languages: "Jazyky",
            license: "Řidičský Průkaz",
            summary: "Profesní Shrnutí",
            experience: "Pracovní Historie"
        },
        education: [
            { degree: "IT", school: "UNIVERZITA PARDUBICE", year: "2019" },
            { degree: "ADMINISTRACE A AUTOMATIZACE", school: "VYSOKÁ ŠKOLA IT SKS V RUSKU", year: "2013" }
        ],
        skills: [
            { category: "Core Backend", items: ["PHP 8.4 (Symfony 7)", "Node.js (NestJS)", "REST API Design", "Laravel"] },
            { category: "Architektura & Infrastruktura", items: ["Event-Driven Architecture", "Mikroslužby", "RabbitMQ", "Docker", "Linux", "CI/CD"] },
            { category: "Databáze & Výkon", items: ["PostgreSQL", "Redis", "MySQL", "Oracle SQL"] },
            { category: "Observabilita & Logging", items: ["Loki / Grafana", "Promtail", "Structured Logging", "Nginx / Cloudflare"] },
            { category: "AI & Automatizace", items: ["GPT-4o Vision", "AI Agent Integration", "Browser Automation (Playwright)"] },
            { category: "Frontend (sekundární)", items: ["React", "Next.js", "Vue / Nuxt", "Tailwind CSS"] }
        ],
        links: [
            { label: "AI Automation Platform:", url: "https://bazarai.visaczech.cz/en", text: "bazarai.visaczech.cz" },
            { label: "Vízový Systém:", url: "https://visaczech.cz", text: "visaczech.cz" }
        ],
        languages: [
            { name: "Angličtina (B1)", level: 50 },
            { name: "Ruština (rodilý)", level: 100 },
            { name: "Čeština (C1)", level: 90 }
        ],
        license: { label: "ŘIDIČSKÝ PRŮKAZ", value: "A, B" },
        summary: [
            "<strong>Senior Software Engineer</strong> a <strong>Backend Architect</strong> s více než 10 lety zkušeností s navrhováním distribuovaných systémů a backendové infrastruktury. Specializuji se na event-driven mikroservisní architektury, <strong>integraci AI agentů do business logiky</strong> a zpracování dat ve velkém měřítku.",
            "Navrhuji a vlastním celý životní cyklus produkčních systémů — od lokálních Docker prostředí po cloudové nasazení. Vedl tým 7 inženýrů: technické vedení, code review, nastavování standardů a mentoring.",
            "Silné zaměření na observabilitu (Loki/Grafana s end-to-end trasovatelností přes jobId/traceId), spolehlivost systémů a eliminaci manuálních procesů prostřednictvím automatizovaných pipeline a AI agentů zakotvených v business logice."
        ],
        experience: [
            {
                title: "BACKEND DEVELOPER",
                date: "LED 2026 - DUB 2026",
                company: "NICE, PRAGUE",
                items: [
                    "Implementace backendových služeb v <strong>PHP 8.2</strong> pro mezinárodní platformu call center s 600+ zaměstnanci",
                    "Optimalizace existujících call-center API a zvýšení stability a spolehlivosti systému",
                    "Rozšíření pokrytí automatizovanými testy pro zajištění spolehlivosti kritických integrací"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "ČVC 2025 - PRO 2025",
                company: "FRENKEE.CZ, PRAGUE",
                items: [
                    "Návrh a implementace interního backendu v <strong>PHP/Symfony</strong> a Nette, zahrnující integraci API třetích stran",
                    "Integrace AI agentů (Claude/OpenAI) přímo do business logiky backendu pro automatickou validaci, obohacování a zpracování dat v pipeline",
                    "Správa Docker-based deployment pipeline a návrh API kontraktů"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "LIS 2024 - ČVC 2025",
                company: "MOUNTAINLIFT, PRAHA",
                items: [
                    "Implementace RESTful API s <strong>Laravel</strong> a <strong>Node.js/Strapi</strong> pro klientské webové platformy",
                    "Vytvoření frontendových rozhraní v <strong>React</strong> a <strong>Next.js</strong>",
                    "Návrh a údržba CI/CD pipeline pro FE i BE nasazení"
                ]
            },
            {
                title: "SENIOR BACKEND ENGINEER (Osobní projekty)",
                date: "",
                company: "",
                text: '<div class="project-block"><span class="project-title">Bazar AI</span><span class="project-url">bazarai.visaczech.cz</span><ul><li>Navrhl event-driven mikroslužby: <strong>Symfony 7.3</strong> / <strong>PHP 8.4</strong> (business logika), <strong>NestJS</strong> (AI agent + automatizace), <strong>RabbitMQ</strong> (správa životního cyklu publikací)</li><li>Integroval AI agenta na bázi GPT-4o Vision přímo do business logiky — klasifikace médií, seskupování položek, lookup VIN/SPZ, generování inzerátů</li><li>Vyvinul vysokozátěžovou stealth službu pro automatizaci prohlížeče přes rebrowser-playwright (Chromium) pro paralelní správu sezení a publikaci na více platformách</li><li>Nasadil observability stack: Loki + Grafana + Promtail s end-to-end trasovatelností přes jobId / traceId / sessionId</li><li>Konfiguroval Nginx reverse proxy s Cloudflare trusted proxy headers (CF-Connecting-IP) a SSL pro produkční nasazení</li></ul></div><div class="project-block"><span class="project-title">VisaCzech</span><span class="project-url">visaczech.cz</span><ul><li>Navrhl vrstvenou architekturu Controllers → Facades → Services → Repositories (<strong>Node.js/Express</strong> + <strong>TypeORM</strong>)</li><li>Integroval OCR pasů (Mindee), CRM API a české administrativní služby</li><li>Nasazeno přes GitLab CI/CD, Docker Compose a Nginx reverse proxy</li></ul></div>'
            },
            {
                title: "BACKEND DEVELOPER",
                date: "SRP 2022 - ZÁŘ 2024",
                company: "HEUREKA CZ, PRAHA",
                items: [
                    "Správa a rozšiřování legacy <strong>PHP 7.4→8.2</strong> API agregátoru pro integraci dopravních společností",
                    "Kontejnerizace aplikačního stacku s Dockerem, zlepšení konzistence nasazení a onboarding vývojářů",
                    "Implementace CI/CD pipeline pro automatizaci testování a workflow nasazení"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "SRP 2021 - ČVN 2022",
                company: "CFG - COMFORT FINANCE GROUP, PRAHA",
                items: [
                    "Návrh a implementace backend API v <strong>PHP 7.4</strong> pro nástroje finančního srovnání",
                    "Optimalizace databázových dotazů pro zlepšení výkonu výpočetně náročných endpointů",
                    "Spolupráce na frontendu (<strong>Vue.js / Nuxt</strong> / Tailwind) pro zajištění souladu API kontraktů s UI"
                ]
            },
            {
                title: "TEAM LEAD, BACKEND ENGINEER",
                date: "ÚNO 2018 - ČVC 2021",
                company: "TOMMYSTACHI, PRAHA",
                items: [
                    "Vedení týmu 7 vývojářů při budování vysoce bezpečného e-mailového klienta",
                    "Návrh architektury systému, výběr backend stacku (<strong>PHP/Symfony</strong>), nastavení inženýrských standardů",
                    "Architektura bezpečné API vrstvy integrované s Vue.js frontendem",
                    "Zavedení Docker prostředí a CI/CD pipeline, eliminace manuálního nasazení",
                    "Mentoring junior inženýrů v osvědčených postupech backendu a bezpečnosti"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "KVĚ 2017 - ÚNO 2018",
                company: "DESIGNEO, PRAHA",
                items: [
                    "Implementace backendových funkcí v <strong>PHP 7.1</strong> a <strong>Symfony</strong> pro klientské webové aplikace"
                ]
            },
            {
                title: "PHP DEVELOPER",
                date: "ČVN 2016 - KVĚ 2017",
                company: "RUTERRAAPARTMENT, PRAHA",
                items: [
                    "Vytvoření systému správy bytů a financí od nuly v <strong>PHP 5.6</strong> a MySQL"
                ]
            },
            {
                title: "PHP DEVELOPER",
                date: "LED 2015 - ČVN 2016",
                company: "MONSTERMEDIA, PRAHA",
                items: [
                    "Vývoj nových funkcí, refaktoring legacy kódu, zlepšení spolehlivosti backendu"
                ]
            },
            {
                title: "SYSTÉMOVÝ ADMINISTRÁTOR",
                date: "KVĚ 2012 - LED 2014",
                company: "OBCHOD, STAVROPOL",
                items: [
                    "Podpora IT infrastruktury a správa serverů"
                ]
            }
        ]
    },

    ru: {
        lang: "ru",
        title: "Артём Колычев - Резюме",
        jobTitle: "Senior Software Engineer · Backend Architect",
        location: "Прага, Чешская Республика",
        sections: {
            education: "Образование",
            skills: "Ключевые Навыки",
            links: "Проекты и Ссылки",
            languages: "Языки",
            license: "Водительские Права",
            summary: "Профессиональное Резюме",
            experience: "Опыт Работы"
        },
        education: [
            { degree: "IT", school: "УНИВЕРСИТЕТ ПАРДУБИЦЕ", year: "2019" },
            { degree: "АДМИНИСТРИРОВАНИЕ И АВТОМАТИЗАЦИЯ", school: "ВЫСШАЯ ШКОЛА IT СКС (РОССИЯ)", year: "2013" }
        ],
        skills: [
            { category: "Core Backend", items: ["PHP 8.4 (Symfony 7)", "Node.js (NestJS)", "REST API Design", "Laravel"] },
            { category: "Архитектура & Инфраструктура", items: ["Event-Driven Architecture", "Микросервисы", "RabbitMQ", "Docker", "Linux", "CI/CD"] },
            { category: "БД & Производительность", items: ["PostgreSQL", "Redis", "MySQL", "Oracle SQL"] },
            { category: "Наблюдаемость & Логирование", items: ["Loki / Grafana", "Promtail", "Structured Logging", "Nginx / Cloudflare"] },
            { category: "AI & Автоматизация", items: ["GPT-4o Vision", "AI Agent Integration", "Browser Automation (Playwright)"] },
            { category: "Frontend (вторичный)", items: ["React", "Next.js", "Vue / Nuxt", "Tailwind CSS"] }
        ],
        links: [
            { label: "AI Automation Platform:", url: "https://bazarai.visaczech.cz/en", text: "bazarai.visaczech.cz" },
            { label: "Визовая Система:", url: "https://visaczech.cz", text: "visaczech.cz" }
        ],
        languages: [
            { name: "Английский (B1)", level: 50 },
            { name: "Русский (родной)", level: 100 },
            { name: "Чешский (C1)", level: 90 }
        ],
        license: { label: "ВОДИТЕЛЬСКИЕ ПРАВА", value: "A, B" },
        summary: [
            "<strong>Senior Software Engineer</strong> и <strong>Backend Architect</strong> с 10+ годами опыта проектирования распределённых систем и бэкенд-инфраструктуры. Специализация на event-driven микросервисных архитектурах, <strong>интеграции AI-агентов в бизнес-логику</strong> и обработке данных в масштабе.",
            "Проектирую и владею полным жизненным циклом продакшн-систем — от локальных Docker-сред до облачного деплоя. Руководил командой 7 инженеров: техническое лидерство, code review, стандарты и менторинг.",
            "Сильный фокус на наблюдаемости (Loki/Grafana со сквозной трассировкой по jobId/traceId), надёжности систем и устранении ручных процессов через автоматизированные пайплайны и AI-агентов, встроенных в бизнес-логику."
        ],
        experience: [
            {
                title: "BACKEND DEVELOPER",
                date: "ЯНВ 2026 - АПР 2026",
                company: "NICE, ПРАГА",
                items: [
                    "Реализация бэкенд-сервисов на <strong>PHP 8.2</strong> для международной платформы колл-центров с 600+ сотрудниками",
                    "Оптимизация существующих API колл-центра, повышение стабильности и надёжности системы",
                    "Расширение покрытия автоматическими тестами для обеспечения надёжности критических интеграций"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "ИЮЛ 2025 - ДЕК 2025",
                company: "FRENKEE.CZ, ПРАГА",
                items: [
                    "Проектирование и реализация внутреннего бэкенда на <strong>PHP/Symfony</strong> и Nette, включая интеграцию сторонних API",
                    "Интеграция AI-агентов (Claude/OpenAI) в бизнес-логику бэкенда для автоматической валидации, обогащения и обработки данных в пайплайне",
                    "Управление Docker-пайплайнами деплоя и проектирование API-контрактов"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "НОЯ 2024 - ИЮЛ 2025",
                company: "MOUNTAINLIFT, ПРАГА",
                items: [
                    "Реализация RESTful API на <strong>Laravel</strong> и <strong>Node.js/Strapi</strong> для клиентских веб-платформ",
                    "Разработка фронтенда на <strong>React</strong> и <strong>Next.js</strong>",
                    "Проектирование и поддержка CI/CD пайплайнов для FE и BE"
                ]
            },
            {
                title: "SENIOR BACKEND ENGINEER (Личные проекты)",
                date: "",
                company: "",
                text: '<div class="project-block"><span class="project-title">Bazar AI</span><span class="project-url">bazarai.visaczech.cz</span><ul><li>Спроектировал event-driven микросервисы: <strong>Symfony 7.3</strong> / <strong>PHP 8.4</strong> (бизнес-логика), <strong>NestJS</strong> (AI-агент + браузерная автоматизация), <strong>RabbitMQ</strong> (управление жизненным циклом публикаций)</li><li>Интегрировал AI-агент на базе GPT-4o Vision напрямую в бизнес-логику — классификация медиа, группировка товаров, поиск по VIN/госномеру, генерация объявлений</li><li>Разработал высоконагруженный stealth-сервис браузерной автоматизации через rebrowser-playwright (Chromium) для параллельного управления сессиями и публикации на нескольких платформах</li><li>Развернул стек наблюдаемости: Loki + Grafana + Promtail со сквозной трассировкой по jobId / traceId / sessionId</li><li>Настроил Nginx reverse proxy с Cloudflare trusted proxy headers (CF-Connecting-IP) и SSL для продакшн-деплоя</li></ul></div><div class="project-block"><span class="project-title">VisaCzech</span><span class="project-url">visaczech.cz</span><ul><li>Спроектировал многоуровневую архитектуру Controllers → Facades → Services → Repositories (<strong>Node.js/Express</strong> + <strong>TypeORM</strong>)</li><li>Интегрировал OCR паспортов (Mindee), CRM API и чешские административные сервисы</li><li>Деплой через GitLab CI/CD, Docker Compose и Nginx reverse proxy</li></ul></div>'
            },
            {
                title: "BACKEND DEVELOPER",
                date: "АВГ 2022 - СЕН 2024",
                company: "HEUREKA CZ, ПРАГА",
                items: [
                    "Поддержка и расширение legacy <strong>PHP 7.4→8.2</strong> API-агрегатора для интеграций с транспортными компаниями",
                    "Контейнеризация legacy-стека с Docker, улучшение консистентности деплоя и онбординга",
                    "Реализация CI/CD пайплайна для автоматизации тестирования и деплоя"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "АВГ 2021 - ИЮН 2022",
                company: "CFG - COMFORT FINANCE GROUP, ПРАГА",
                items: [
                    "Проектирование и реализация бэкенд API на <strong>PHP 7.4</strong> для инструментов финансового сравнения",
                    "Оптимизация запросов к БД для повышения производительности вычислительно-интенсивных эндпоинтов",
                    "Участие в разработке фронтенда (<strong>Vue.js / Nuxt</strong> / Tailwind) для согласования API-контрактов с UI"
                ]
            },
            {
                title: "TEAM LEAD, BACKEND ENGINEER",
                date: "ФЕВ 2018 - ИЮЛ 2021",
                company: "TOMMYSTACHI, ПРАГА",
                items: [
                    "Руководство командой 7 разработчиков при создании высокозащищённого почтового клиента",
                    "Проектирование архитектуры системы, выбор бэкенд-стека (<strong>PHP/Symfony</strong>), установка инженерных стандартов",
                    "Проектирование безопасного API-слоя, интегрированного с Vue.js фронтендом",
                    "Внедрение Docker и CI/CD пайплайнов, устранение ручного деплоя",
                    "Менторинг junior-инженеров в лучших практиках бэкенда и безопасности"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "МАЙ 2017 - ФЕВ 2018",
                company: "DESIGNEO, ПРАГА",
                items: [
                    "Реализация бэкенд-функций на <strong>PHP 7.1</strong> и <strong>Symfony</strong> для клиентских веб-приложений"
                ]
            },
            {
                title: "PHP DEVELOPER",
                date: "ИЮН 2016 - МАЙ 2017",
                company: "RUTERRAAPARTMENT, ПРАГА",
                items: [
                    "Разработка системы управления квартирами и финансами с нуля на <strong>PHP 5.6</strong> и MySQL"
                ]
            },
            {
                title: "PHP DEVELOPER",
                date: "ЯНВ 2015 - ИЮН 2016",
                company: "MONSTERMEDIA, ПРАГА",
                items: [
                    "Разработка новых функций, рефакторинг legacy-кода, повышение надёжности бэкенда"
                ]
            },
            {
                title: "СИСТЕМНЫЙ АДМИНИСТРАТОР",
                date: "МАЙ 2012 - ЯНВ 2014",
                company: "МАГАЗИН, СТАВРОПОЛЬ",
                items: [
                    "Поддержка IT-инфраструктуры и администрирование серверов"
                ]
            }
        ]
    },

    en: {
        lang: "en",
        title: "Artem Kolychev - CV",
        jobTitle: "Senior Software Engineer · Backend Architect",
        location: "Prague, Czech Republic",
        sections: {
            education: "Education",
            skills: "Core Skills",
            links: "Projects & Links",
            languages: "Languages",
            license: "Driving License",
            summary: "Professional Summary",
            experience: "Work History"
        },
        education: [
            { degree: "IT", school: "UNIVERSITY OF PARDUBICE", year: "2019" },
            { degree: "ADMINISTRATION & AUTOMATION", school: "IT UNIVERSITY SKS, RUSSIA", year: "2013" }
        ],
        skills: [
            { category: "Core Backend", items: ["PHP 8.4 (Symfony 7)", "Node.js (NestJS)", "REST API Design", "Laravel"] },
            { category: "Architecture & Infrastructure", items: ["Event-Driven Architecture", "Microservices", "RabbitMQ", "Docker", "Linux", "CI/CD"] },
            { category: "Databases & Performance", items: ["PostgreSQL", "Redis", "MySQL", "Oracle SQL"] },
            { category: "Observability & Logging", items: ["Loki / Grafana", "Promtail", "Structured Logging", "Nginx / Cloudflare"] },
            { category: "AI & Automation", items: ["GPT-4o Vision", "AI Agent Integration", "Browser Automation (Playwright)"] },
            { category: "Frontend (secondary)", items: ["React", "Next.js", "Vue / Nuxt", "Tailwind CSS"] }
        ],
        links: [
            { label: "AI Automation Platform:", url: "https://bazarai.visaczech.cz/en", text: "bazarai.visaczech.cz" },
            { label: "Visa Automation System:", url: "https://visaczech.cz", text: "visaczech.cz" }
        ],
        languages: [
            { name: "English (B1)", level: 50 },
            { name: "Russian (Native)", level: 100 },
            { name: "Czech (C1)", level: 90 }
        ],
        license: { label: "DRIVING LICENSE", value: "A, B" },
        summary: [
            "<strong>Senior Software Engineer</strong> and <strong>Backend Architect</strong> with 10+ years of experience designing distributed systems and backend infrastructure. Specialises in event-driven microservice architectures, <strong>AI agent integration into business logic</strong>, and data processing at scale.",
            "Architected and owned full production lifecycles — from self-hosted Docker environments on Linux to cloud deployments. Led a team of 7 engineers: technical leadership, <strong>code review</strong>, standard-setting, and mentoring.",
            "Strong focus on observability (Loki/Grafana with cross-service tracing via jobId/traceId), reliability engineering, and eliminating manual processes through automated pipelines and AI agents embedded in business workflows."
        ],
        experience: [
            {
                title: "BACKEND DEVELOPER",
                date: "JAN 2026 - APR 2026",
                company: "NICE, PRAGUE",
                items: [
                    "Engineering of backend services in <strong>PHP 8.2</strong> for an international call-centre platform with 600+ employees",
                    "Optimisation of existing call-centre APIs, improving system stability and reducing error rates",
                    "Extension of automated test coverage to ensure reliability of critical telephony integrations"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "JUL 2025 - DEC 2025",
                company: "FRENKEE.CZ, PRAGUE",
                items: [
                    "Architecture of internal backend in <strong>PHP/Symfony</strong> and Nette, integrating third-party APIs",
                    "Integration of AI agents (Claude/OpenAI) into backend business logic for automated data validation, enrichment, and processing pipelines",
                    "Management of Docker-based deployment pipelines and design of API contracts"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "NOV 2024 - JUL 2025",
                company: "MOUNTAINLIFT, PRAGUE",
                items: [
                    "Implementation of RESTful APIs with <strong>Laravel</strong> and <strong>Node.js/Strapi</strong> for client web platforms",
                    "Development of frontend interfaces with <strong>React</strong> and <strong>Next.js</strong>",
                    "Design and maintenance of CI/CD pipelines for FE and BE deployments"
                ]
            },
            {
                title: "SENIOR BACKEND ENGINEER (Personal Projects)",
                date: "",
                company: "",
                text: '<div class="project-block"><span class="project-title">Bazar AI</span><span class="project-url">bazarai.visaczech.cz</span><ul><li>Architected event-driven microservices: <strong>Symfony 7.3</strong> / <strong>PHP 8.4</strong> (business logic), <strong>NestJS</strong> (AI agent + browser automation), <strong>RabbitMQ</strong> (publication lifecycle management)</li><li>Integrated GPT-4o Vision AI agent directly into business logic — media classification, item grouping, VIN/plate lookup, automated listing generation</li><li>Engineered a high-load stealth browser automation service via rebrowser-playwright (Chromium) for concurrent multi-platform session management and form submission</li><li>Deployed full observability stack: Loki + Grafana + Promtail with cross-service tracing via jobId / traceId / sessionId</li><li>Configured Nginx reverse proxy with Cloudflare trusted proxy headers (CF-Connecting-IP) and SSL for production deployment</li></ul></div><div class="project-block"><span class="project-title">VisaCzech</span><span class="project-url">visaczech.cz</span><ul><li>Designed layered backend architecture: Controllers → Facades → Services → Repositories (<strong>Node.js/Express</strong> + <strong>TypeORM</strong>)</li><li>Integrated passport OCR (Mindee), CRM APIs, and Czech administrative services</li><li>Deployed via GitLab CI/CD, Docker Compose, and Nginx reverse proxy</li></ul></div>'
            },
            {
                title: "BACKEND DEVELOPER",
                date: "AUG 2022 - SEP 2024",
                company: "HEUREKA CZ, PRAGUE",
                items: [
                    "Maintenance and extension of a legacy <strong>PHP 7.4→8.2</strong> API aggregator for transport company integrations",
                    "Containerisation of the legacy stack with Docker, improving deployment consistency and developer onboarding",
                    "Implementation of CI/CD pipeline to automate testing and deployment workflows"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "AUG 2021 - JUN 2022",
                company: "CFG - COMFORT FINANCE GROUP, PRAGUE",
                items: [
                    "Design and implementation of backend APIs in <strong>PHP 7.4</strong> for financial comparison tools",
                    "Optimisation of database queries, improving response times on calculation-heavy endpoints",
                    "Collaboration on frontend (<strong>Vue.js / Nuxt</strong> / Tailwind) to align API contracts with UI requirements"
                ]
            },
            {
                title: "TEAM LEAD, BACKEND ENGINEER",
                date: "FEB 2018 - JUL 2021",
                company: "TOMMYSTACHI, PRAGUE",
                items: [
                    "Leadership of a team of 7 developers building a high-security email client with end-to-end encryption",
                    "System architecture design, backend stack selection (<strong>PHP/Symfony</strong>), and engineering standards-setting",
                    "Architecture of the secure API layer integrated with a Vue.js frontend",
                    "Establishment of Docker environments and CI/CD pipelines, eliminating manual deployments",
                    "Mentoring of junior engineers in backend best practices and security"
                ]
            },
            {
                title: "BACKEND DEVELOPER",
                date: "MAY 2017 - FEB 2018",
                company: "DESIGNEO, PRAGUE",
                items: [
                    "Implementation of backend features in <strong>PHP 7.1</strong> and <strong>Symfony</strong> for client web applications"
                ]
            },
            {
                title: "PHP DEVELOPER",
                date: "JUN 2016 - MAY 2017",
                company: "RUTERRAAPARTMENT, PRAGUE",
                items: [
                    "Development of an apartment and finance management system from scratch in <strong>PHP 5.6</strong> and MySQL"
                ]
            },
            {
                title: "PHP DEVELOPER",
                date: "JAN 2015 - JUN 2016",
                company: "MONSTERMEDIA, PRAGUE",
                items: [
                    "Development of new features, refactoring of legacy codebase, and improvement of backend reliability"
                ]
            },
            {
                title: "SYSTEM ADMINISTRATOR",
                date: "MAY 2012 - JAN 2014",
                company: "RETAIL STORE, STAVROPOL",
                items: [
                    "Maintenance of IT infrastructure and server administration"
                ]
            }
        ]
    }
};
