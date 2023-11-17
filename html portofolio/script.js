document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dummy data for dynamic content
    const serviceData = [
        { icon: 'C:\Users\LENOVO_ITL6\Documents\html portofolio\logo\uiux.png', title: 'UI/UX Design', description: 'Description for UI/UX Design.' },
        { icon: 'web-development-icon.png', title: 'Web Development', description: 'Description for Web Development.' },
        { icon: 'app-development-icon.png', title: 'Application Development', description: 'Description for Application Development.' }
    ];

    const portfolioData = [
        { image: 'project1.jpg', title: 'Project 1', description: 'Description for Project 1.' },
        { image: 'project2.jpg', title: 'Project 2', description: 'Description for Project 2.' },
        { image: 'project3.jpg', title: 'Project 3', description: 'Description for Project 3.' }
    ];

    const educationData = [
        { school: 'High School', year: 'Year' },
        { school: 'College', year: 'Year' },
        { school: 'University', year: 'Year' }
    ];

    const expertiseData = ['HTML/CSS', 'JavaScript', 'Python'];

    const socialMediaData = [
        { icon: 'facebook-icon.png', platform: 'Facebook' },
        { icon: 'twitter-icon.png', platform: 'Twitter' }
    ];

    // Function to dynamically populate content
    function populateContent(container, template, data) {
        const targetContainer = document.querySelector(container);

        data.forEach(item => {
            const templateClone = template.cloneNode(true);
            for (const key in item) {
                templateClone.innerHTML = templateClone.innerHTML.replace(new RegExp(`{{${key}}}`, 'g'), item[key]);
            }
            targetContainer.appendChild(templateClone);
        });
    }

    // Populate dynamic content
    populateContent('#services .service', document.querySelector('#services .service-item'), serviceData);
    populateContent('#portfolio .portfolio', document.querySelector('#portfolio .portfolio-item'), portfolioData);

    const educationList = document.querySelector('#skills .education ul');
    educationData.forEach(education => {
        const listItem = document.createElement('li');
        listItem.textContent = `${education.school} - ${education.year}`;
        educationList.appendChild(listItem);
    });

    const expertiseList = document.querySelector('#skills .expertise ul');
    expertiseData.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        expertiseList.appendChild(listItem);
    });

    populateContent('#contact .social-media', document.querySelector('#contact .social-media li'), socialMediaData);
});
