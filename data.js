const cvData = {
    cs: {
        lang: "cs",
        title: "Artem Kolychev - Životopis",
        jobTitle: "PHP Senior Developer",
        location: "Praha, Česká republika",
        sections: {
            education: "Vzdělání",
            skills: "Hlavní Dovednosti",
            links: "Webové Stránky a Sociální Odkazy",
            languages: "Jazyky",
            personal: "Osobní Údaje",
            license: "Řidičský Průkaz",
            summary: "Profesní Shrnutí",
            experience: "Pracovní Historie"
        },
        education: [
            { degree: "IT", school: "UNIVERZITA PARDUBICE", year: "2019" },
            { degree: "ADMINISTRACE A AUTOMATIZACE", school: "VYSOKÁ ŠKOLA IT SKS V RUSKU", year: "2013" }
        ],
        skills: ["Vedení týmu", "Laravel", "Oracle SQL", "Vue/Nuxt", "Symfony", "MySQL", "Docker", "CI/CD", "Next.js", "React", "PHP"],
        links: [{ label: "Můj projekt:", url: "http://visaczech.cz", text: "visaczech.cz" }],
        languages: [
            { name: "ENG", level: 50 },
            { name: "RUS", level: 100 },
            { name: "CZ", level: 90 }
        ],
        personal: [
            { label: "Datum narození", value: "20 dub 1992" },
            { label: "Státní příslušnost", value: "Rus" }
        ],
        license: { label: "ŘIDIČSKÝ PRŮKAZ", value: "A, B" },
        summary: [
            "Jsem zkušený <strong>full-stack vývojář</strong> se silným zaměřením na <strong>PHP</strong> a backendové technologie. Aktivně využívám <strong>AI</strong> k zvyšování efektivity práce a automatizaci opakovaných činností. Mám bohaté zkušenosti s návrhem a implementací robustních backendových řešení, integrací služeb třetích stran a optimalizací výkonnosti aplikací.",
            "Zvládám návrh a údržbu <strong>CI/CD</strong> pipeline a práci s <strong>Dockerem</strong> pro konzistentní a efektivní nasazování. Úspěšně jsem vedl vývojový tým o sedmi programátorech, kde jsem se podílel na technickém vedení, <strong>code review</strong>, nastavování standardů a mentoringu.",
            "Dlouhodobě se zaměřuji na <strong>automatizaci</strong> procesů a minimalizaci lidského faktoru – využívám automatizované <strong>testování</strong>, statické analyzátory kódu a další nástroje pro zajištění kvality a spolehlivosti. V případě potřeby se věnuji také frontendovému vývoji, zejména s využitím <strong>Vue.js</strong> a <strong>Nuxt.js</strong>, abych byl schopen pokrýt celý životní cyklus webové aplikace."
        ],
        experience: [
            {
                title: "PHP DEVELOPER",
                date: "LED 2026 - DUB 2026",
                company: "NICE, PRAGUE",
                items: [
                    "Vývoj softwaru v PHP 8.2 pro mezinárodní společnost, která zaměstnává 600+ lidí a pomáhá firmám implementovat call centra",
                    "Tvorba a údržba backendového kódu v PHP 8.2 v rámci existujícího systému pro podporu call center",
                    "Psaní a úprava automatických testů k ověření funkčnosti a stability vyvíjených řešení"
                ]
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "ČVC 2025 - PRO 2025",
                company: "FRENKEE.CZ, PRAGUE",
                text: "Vývoj interního systému v <strong>PHP</strong> (Symfony, Nette) a tvorba frontendových částí v <strong>Reactu</strong>. Správa verzí v <strong>GITu</strong>, práce v prostředí <strong>Dockeru</strong> a integrace <strong>AI nástrojů</strong> (Claude / OpenAI). Zodpovědnost za <strong>napojení API třetích stran</strong> a komunikaci s externími službami."
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "LIS 2024 - ČVC 2025",
                company: "MOUNTAINLIFT, PRAHA",
                text: "Vývoj webových stránek pro zákazníky od komunikace s klientem po full stack vývoj.<br>FE: React, Next.js<br>BE: Laravel, Strapi (node headless CMS)<br>Komunikace s klientem, řízení úkolů, vývoj CI/CD, FE a BE."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "BŘE 2022 - LIS 2024",
                company: "JÁ SÁM, PRAHA",
                text: "Osobní projekt pro automatizaci vízového procesu v České republice. Používá služby 3 zemí pro scraping dat z pasu a komunikaci s administrativními službami.<br>FE napsaný s Nuxt3, Tailwind a Vuetify.<br>BE používá Node.js.<br>Obsah je uložen ve Strapi.<br>Nasazení je implementováno pomocí GitLab CI/CD a Docker."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "SRP 2022 - ZÁŘ 2024",
                company: "HEUREKA CZ, PRAHA",
                text: "Podpora starého projektu a psaní nových funkcí pro agregátor API uživatelské komunikace s dopravními společnostmi v PHP 7.4–8.2.<br>Vytvoření infrastruktury Docker a CI/CD."
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "SRP 2021 - ČVN 2022",
                company: "CFG - COMFORT FINANCE GROUP, PRAHA",
                text: "Vyvinul backend pomocí PHP 7.4 a zlepšil spolupráci na frontendu prostřednictvím Nuxt 3 a Tailwind pro nástroje finančního srovnání."
            },
            {
                title: "VEDOUCÍ TÝMU, FULLSTACK DEVELOPER",
                date: "ÚNO 2018 - ČVC 2021",
                company: "TOMMYSTACHI, PRAHA",
                text: "Řídil tým sedmi programátorů při vývoji projektu vysoce bezpečného poštovního klienta s primárním zaměřením na PHP a backendové technologie. Vedl výběr backendových technologií a navrhl architekturu projektu pro optimalizaci bezpečnosti a výkonu. Školil a mentoroval méně zkušené kolegy v PHP a osvědčených postupech backendového vývoje. Vyvinul klíčové backendové funkce a API, které se bezproblémově integrují s frontendovými komponenty postavenými pomocí Vue.js. Zřídil prostředí Docker a implementoval CI/CD pipelines pro zlepšení pracovních postupů backendového vývoje a efektivity nasazení."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "KVĚ 2017 - ÚNO 2018",
                company: "DESIGNEO, PRAHA",
                text: "Odbornost v PHP 7.4/8.2, Symfony frameworku a Bootstrapu, využívající robustní dovednosti backendového vývoje."
            },
            {
                title: "PHP BACKEND/FRONTEND PROGRAMÁTOR",
                date: "ČVN 2016 - KVĚ 2017",
                company: "RUTERRAAPARTMENT, PRAHA",
                text: "Vývoj nového projektu pro správu bytů a financí. Projekt byl vyvinut pomocí PHP 5.6, MySQL a jQuery."
            },
            {
                title: "PHP BACKEND/FRONTEND PROGRAMÁTOR",
                date: "LED 2015 - ČVN 2016",
                company: "MONSTERMEDIA, PRAHA",
                text: "Vývoj nových funkcí, úprava starých, refaktoring starého kódu."
            },
            {
                title: "SYSTÉMOVÝ ADMINISTRÁTOR",
                date: "KVĚ 2012 - LED 2014",
                company: "OBCHOD, STAVROPOL",
                text: "Podpora IT infrastruktury."
            }
        ]
    },

    ru: {
        lang: "ru",
        title: "Артём Колычев - Резюме",
        jobTitle: "PHP Senior Developer",
        location: "Прага, Чешская Республика",
        sections: {
            education: "Образование",
            skills: "Ключевые Навыки",
            links: "Сайты и Социальные Ссылки",
            languages: "Языки",
            personal: "Личные Данные",
            license: "Водительские Права",
            summary: "Профессиональное Резюме",
            experience: "Опыт Работы"
        },
        education: [
            { degree: "IT", school: "УНИВЕРСИТЕТ ПАРДУБИЦЕ", year: "2019" },
            { degree: "АДМИНИСТРИРОВАНИЕ И АВТОМАТИЗАЦИЯ", school: "ВЫСШАЯ ШКОЛА IT СКС (РОССИЯ)", year: "2013" }
        ],
        skills: ["Руководство командой", "Laravel", "Oracle SQL", "Vue/Nuxt", "Symfony", "MySQL", "Docker", "CI/CD", "Next.js", "React", "PHP"],
        links: [{ label: "Мой проект:", url: "http://visaczech.cz", text: "visaczech.cz" }],
        languages: [
            { name: "ENG", level: 50 },
            { name: "РУС", level: 100 },
            { name: "ЧЕШ", level: 90 }
        ],
        personal: [
            { label: "Дата рождения", value: "20 апр 1992" },
            { label: "Гражданство", value: "Россия" }
        ],
        license: { label: "ВОДИТЕЛЬСКИЕ ПРАВА", value: "A, B" },
        summary: [
            "Опытный <strong>full-stack разработчик</strong> с сильным акцентом на <strong>PHP</strong> и бэкенд-технологии. Активно использую <strong>AI</strong> для повышения эффективности работы и автоматизации повторяющихся задач. Богатый опыт проектирования и реализации надёжных бэкенд-решений, интеграции сторонних сервисов и оптимизации производительности приложений.",
            "Умею проектировать и поддерживать <strong>CI/CD</strong> пайплайны и работать с <strong>Docker</strong> для последовательного и эффективного развёртывания. Успешно руководил командой из семи разработчиков: техническое лидерство, <strong>code review</strong>, установка стандартов и менторинг.",
            "Постоянно фокусируюсь на <strong>автоматизации</strong> процессов и минимизации человеческого фактора — автоматизированное <strong>тестирование</strong>, статический анализ кода и другие инструменты контроля качества. При необходимости занимаюсь фронтендом, особенно с использованием <strong>Vue.js</strong> и <strong>Nuxt.js</strong>, чтобы охватить весь жизненный цикл веб-приложения."
        ],
        experience: [
            {
                title: "PHP DEVELOPER",
                date: "ЯНВ 2026 - АПР 2026",
                company: "NICE, ПРАГА",
                items: [
                    "Разработка ПО на PHP 8.2 для международной компании с 600+ сотрудниками, помогающей бизнесу внедрять колл-центры",
                    "Создание и поддержка бэкенд-кода на PHP 8.2 в рамках существующей системы поддержки колл-центров",
                    "Написание и обновление автоматических тестов для проверки функциональности и стабильности разрабатываемых решений"
                ]
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "ИЮЛ 2025 - ДЕК 2025",
                company: "FRENKEE.CZ, ПРАГА",
                text: "Разработка внутренней системы на <strong>PHP</strong> (Symfony, Nette) и создание фронтенда на <strong>React</strong>. Управление версиями в <strong>Git</strong>, работа в среде <strong>Docker</strong> и интеграция <strong>AI-инструментов</strong> (Claude / OpenAI). Ответственность за <strong>интеграцию сторонних API</strong> и взаимодействие с внешними сервисами."
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "НОЯ 2024 - ИЮЛ 2025",
                company: "MOUNTAINLIFT, ПРАГА",
                text: "Разработка сайтов для клиентов от общения с заказчиком до full stack разработки.<br>FE: React, Next.js<br>BE: Laravel, Strapi (Node headless CMS)<br>Общение с клиентами, управление задачами, разработка CI/CD, FE и BE."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "МАР 2022 - НОЯ 2024",
                company: "САМОЗАНЯТЫЙ, ПРАГА",
                text: "Личный проект по автоматизации визового процесса в Чехии. Использует сервисы 3 стран для парсинга данных паспорта и взаимодействия с административными службами.<br>FE на Nuxt3, Tailwind и Vuetify.<br>BE на Node.js.<br>Контент хранится в Strapi.<br>Деплой реализован через GitLab CI/CD и Docker."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "АВГ 2022 - СЕН 2024",
                company: "HEUREKA CZ, ПРАГА",
                text: "Поддержка legacy-проекта и написание новых функций для агрегатора API пользовательской коммуникации с транспортными компаниями на PHP 7.4–8.2.<br>Создание Docker-инфраструктуры и CI/CD."
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "АВГ 2021 - ИЮН 2022",
                company: "CFG - COMFORT FINANCE GROUP, ПРАГА",
                text: "Разработал бэкенд на PHP 7.4 и улучшил фронтенд на Nuxt 3 и Tailwind для инструментов финансового сравнения."
            },
            {
                title: "РУКОВОДИТЕЛЬ КОМАНДЫ, FULLSTACK DEVELOPER",
                date: "ФЕВ 2018 - ИЮЛ 2021",
                company: "TOMMYSTACHI, ПРАГА",
                text: "Руководил командой из семи разработчиков при создании высокозащищённого почтового клиента с акцентом на PHP и бэкенд-технологии. Определял выбор технологий бэкенда и проектировал архитектуру для оптимизации безопасности и производительности. Обучал и наставлял менее опытных коллег в PHP и лучших практиках бэкенд-разработки. Разрабатывал ключевые бэкенд-функции и API, бесшовно интегрированные с фронтендом на Vue.js. Настроил Docker-окружение и внедрил CI/CD пайплайны."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "МАЙ 2017 - ФЕВ 2018",
                company: "DESIGNEO, ПРАГА",
                text: "Экспертиза в PHP 7.4/8.2, фреймворке Symfony и Bootstrap, использование надёжных навыков бэкенд-разработки."
            },
            {
                title: "PHP BACKEND/FRONTEND ПРОГРАММИСТ",
                date: "ИЮН 2016 - МАЙ 2017",
                company: "RUTERRAAPARTMENT, ПРАГА",
                text: "Разработка нового проекта для управления квартирами и финансами на PHP 5.6, MySQL и jQuery."
            },
            {
                title: "PHP BACKEND/FRONTEND ПРОГРАММИСТ",
                date: "ЯНВ 2015 - ИЮН 2016",
                company: "MONSTERMEDIA, ПРАГА",
                text: "Разработка новых функций, доработка существующих, рефакторинг старого кода."
            },
            {
                title: "СИСТЕМНЫЙ АДМИНИСТРАТОР",
                date: "МАЙ 2012 - ЯНВ 2014",
                company: "МАГАЗИН, СТАВРОПОЛЬ",
                text: "Поддержка IT-инфраструктуры."
            }
        ]
    },

    en: {
        lang: "en",
        title: "Artem Kolychev - CV",
        jobTitle: "PHP Senior Developer",
        location: "Prague, Czech Republic",
        sections: {
            education: "Education",
            skills: "Core Skills",
            links: "Websites & Social Links",
            languages: "Languages",
            personal: "Personal Details",
            license: "Driving License",
            summary: "Professional Summary",
            experience: "Work History"
        },
        education: [
            { degree: "IT", school: "UNIVERSITY OF PARDUBICE", year: "2019" },
            { degree: "ADMINISTRATION & AUTOMATION", school: "IT UNIVERSITY SKS, RUSSIA", year: "2013" }
        ],
        skills: ["Team Leadership", "Laravel", "Oracle SQL", "Vue/Nuxt", "Symfony", "MySQL", "Docker", "CI/CD", "Next.js", "React", "PHP"],
        links: [{ label: "My project:", url: "http://visaczech.cz", text: "visaczech.cz" }],
        languages: [
            { name: "ENG", level: 50 },
            { name: "RUS", level: 100 },
            { name: "CZ", level: 90 }
        ],
        personal: [
            { label: "Date of birth", value: "20 Apr 1992" },
            { label: "Nationality", value: "Russian" }
        ],
        license: { label: "DRIVING LICENSE", value: "A, B" },
        summary: [
            "Experienced <strong>full-stack developer</strong> with a strong focus on <strong>PHP</strong> and backend technologies. Actively leveraging <strong>AI</strong> to boost work efficiency and automate repetitive tasks. Extensive experience in designing and implementing robust backend solutions, integrating third-party services, and optimising application performance.",
            "Proficient in designing and maintaining <strong>CI/CD</strong> pipelines and working with <strong>Docker</strong> for consistent and efficient deployments. Successfully led a development team of seven engineers, taking responsibility for technical leadership, <strong>code review</strong>, setting standards, and mentoring.",
            "Long-term focus on <strong>automation</strong> and minimising the human factor — automated <strong>testing</strong>, static code analysis, and other quality assurance tools. Able to take on frontend work as needed, particularly with <strong>Vue.js</strong> and <strong>Nuxt.js</strong>, to cover the full lifecycle of a web application."
        ],
        experience: [
            {
                title: "PHP DEVELOPER",
                date: "JAN 2026 - APR 2026",
                company: "NICE, PRAGUE",
                items: [
                    "Software development in PHP 8.2 for an international company with 600+ employees helping businesses implement call centres",
                    "Creating and maintaining backend code in PHP 8.2 within an existing call centre support system",
                    "Writing and updating automated tests to verify functionality and stability of developed solutions"
                ]
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "JUL 2025 - DEC 2025",
                company: "FRENKEE.CZ, PRAGUE",
                text: "Development of an internal system in <strong>PHP</strong> (Symfony, Nette) and frontend parts in <strong>React</strong>. Version control with <strong>Git</strong>, working in a <strong>Docker</strong> environment and integrating <strong>AI tools</strong> (Claude / OpenAI). Responsible for <strong>third-party API integrations</strong> and external service communication."
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "NOV 2024 - JUL 2025",
                company: "MOUNTAINLIFT, PRAGUE",
                text: "Web development for clients from initial communication through to full stack delivery.<br>FE: React, Next.js<br>BE: Laravel, Strapi (Node headless CMS)<br>Client communication, task management, CI/CD, FE and BE development."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "MAR 2022 - NOV 2024",
                company: "SELF-EMPLOYED, PRAGUE",
                text: "Personal project to automate the visa process in the Czech Republic. Uses services from 3 countries for passport data scraping and communication with administrative services.<br>FE built with Nuxt3, Tailwind, and Vuetify.<br>BE uses Node.js.<br>Content stored in Strapi.<br>Deployment via GitLab CI/CD and Docker."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "AUG 2022 - SEP 2024",
                company: "HEUREKA CZ, PRAGUE",
                text: "Supporting a legacy project and writing new features for an API aggregator for user communication with transport companies in PHP 7.4–8.2.<br>Set up Docker infrastructure and CI/CD."
            },
            {
                title: "FULL STACK DEVELOPER",
                date: "AUG 2021 - JUN 2022",
                company: "CFG - COMFORT FINANCE GROUP, PRAGUE",
                text: "Developed backend using PHP 7.4 and improved frontend collaboration via Nuxt 3 and Tailwind for financial comparison tools."
            },
            {
                title: "TEAM LEAD, FULLSTACK DEVELOPER",
                date: "FEB 2018 - JUL 2021",
                company: "TOMMYSTACHI, PRAGUE",
                text: "Led a team of seven developers building a highly secure email client with a primary focus on PHP and backend technologies. Led technology selection and designed the project architecture to optimise security and performance. Trained and mentored less experienced colleagues in PHP and backend best practices. Developed key backend features and APIs that integrate seamlessly with frontend components built with Vue.js. Set up Docker environments and implemented CI/CD pipelines."
            },
            {
                title: "BACKEND DEVELOPER",
                date: "MAY 2017 - FEB 2018",
                company: "DESIGNEO, PRAGUE",
                text: "Expertise in PHP 7.4/8.2, Symfony framework, and Bootstrap, leveraging robust backend development skills."
            },
            {
                title: "PHP BACKEND/FRONTEND DEVELOPER",
                date: "JUN 2016 - MAY 2017",
                company: "RUTERRAAPARTMENT, PRAGUE",
                text: "Development of a new project for apartment and finance management using PHP 5.6, MySQL, and jQuery."
            },
            {
                title: "PHP BACKEND/FRONTEND DEVELOPER",
                date: "JAN 2015 - JUN 2016",
                company: "MONSTERMEDIA, PRAGUE",
                text: "Development of new features, updating existing ones, refactoring legacy code."
            },
            {
                title: "SYSTEM ADMINISTRATOR",
                date: "MAY 2012 - JAN 2014",
                company: "RETAIL STORE, STAVROPOL",
                text: "IT infrastructure support."
            }
        ]
    }
};
