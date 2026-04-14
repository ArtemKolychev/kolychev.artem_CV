(function () {
    'use strict';

    const DEFAULT_LANG = 'cs';

    function render(lang) {
        const data = cvData[lang];
        if (!data) return;

        document.documentElement.lang = data.lang;
        document.title = data.title;

        // Header
        document.getElementById('job-title').textContent = data.jobTitle;
        document.getElementById('contact-location').textContent = data.location;

        // Language switcher active state
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Left column section headings
        document.getElementById('h-education').textContent = data.sections.education;
        document.getElementById('h-skills').textContent = data.sections.skills;
        document.getElementById('h-links').textContent = data.sections.links;
        document.getElementById('h-languages').textContent = data.sections.languages;
        document.getElementById('h-personal').textContent = data.sections.personal;
        document.getElementById('h-license').textContent = data.sections.license;

        // Right column section headings
        document.getElementById('h-summary').textContent = data.sections.summary;
        document.getElementById('h-experience').textContent = data.sections.experience;

        // Education
        var eduContainer = document.getElementById('education-list');
        eduContainer.innerHTML = data.education.map(function (item) {
            return '<div class="section-item" style="padding-left: 15px;">' +
                '<div class="bullet-point"></div>' +
                '<h3>' + item.degree + '</h3>' +
                '<p class="company">' + item.school + '</p>' +
                '<p class="date">' + item.year + '</p>' +
                '</div>';
        }).join('');

        // Skills — supports flat array or categorised array
        var skillsContainer = document.getElementById('skills-list');
        if (data.skills.length && typeof data.skills[0] === 'object') {
            skillsContainer.innerHTML = data.skills.map(function (group) {
                var tags = group.items.map(function (s) {
                    return '<div class="skill-tag">' + s + '</div>';
                }).join('');
                return '<div class="skill-group"><div class="skill-category">' + group.category + '</div>' + tags + '</div>';
            }).join('');
        } else {
            skillsContainer.innerHTML = data.skills.map(function (skill) {
                return '<div class="skill-tag">' + skill + '</div>';
            }).join('');
        }

        // Links
        var linksContainer = document.getElementById('links-list');
        linksContainer.innerHTML = data.links.map(function (link) {
            return '<div class="section-item">' +
                '<p style="font-size:12px;">' + link.label + '<br>' +
                '<a href="' + link.url + '" style="color:#333;">' + link.text + '</a>' +
                '</p></div>';
        }).join('');

        // Language bars
        var langContainer = document.getElementById('language-bars');
        langContainer.innerHTML = data.languages.map(function (l) {
            return '<div class="language-bar">' +
                '<div class="language-name">' + l.name + '</div>' +
                '<div class="bar-bg"><div class="bar-fill" style="width:' + l.level + '%;"></div></div>' +
                '</div>';
        }).join('');

        // Personal details
        var personalContainer = document.getElementById('personal-list');
        personalContainer.innerHTML = data.personal.map(function (item) {
            return '<div class="section-item" style="padding-left:15px;">' +
                '<div class="bullet-point"></div>' +
                '<div class="personal-detail">' +
                '<label>' + item.label + '</label>' +
                '<span>' + item.value + '</span>' +
                '</div></div>';
        }).join('');

        // License
        document.getElementById('license-label').textContent = data.license.label;
        document.getElementById('license-value').textContent = data.license.value;

        // Summary
        var summaryContainer = document.getElementById('summary-text');
        summaryContainer.innerHTML = data.summary.map(function (para, i) {
            var style = i > 0 ? ' style="margin-bottom:10px;"' : ' style="margin-bottom:10px;"';
            return '<p' + style + '>' + para + '</p>';
        }).join('');

        // Experience
        var expContainer = document.getElementById('experience-list');
        expContainer.innerHTML = data.experience.map(function (job) {
            var body = '';
            if (job.items) {
                body = '<ul>' + job.items.map(function (item) {
                    return '<li>' + item + '</li>';
                }).join('') + '</ul>';
            } else if (job.text) {
                body = '<p>' + job.text + '</p>';
            }
            return '<div class="section-item">' +
                '<div class="bullet-point"></div>' +
                '<div class="timeline-header">' +
                '<h3>' + job.title + '</h3>' +
                '<span class="date">' + job.date + '</span>' +
                '</div>' +
                '<div class="company">' + job.company + '</div>' +
                body +
                '</div>';
        }).join('');
    }

    function init() {
        var saved = localStorage.getItem('cv-lang') || DEFAULT_LANG;
        render(saved);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var lang = btn.dataset.lang;
                localStorage.setItem('cv-lang', lang);
                render(lang);
            });
        });
    }

    document.addEventListener('DOMContentLoaded', init);
}());
