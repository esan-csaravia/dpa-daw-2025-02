document.addEventListener('DOMContentLoaded', () => {
            const links = document.querySelectorAll('a[href^="#"]');

            for (const link of links) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            }
            
            const navToggle = document.querySelector('.nav-toggle'); // asociar la clase a un botón en tu HTML
            const navMenu = document.querySelector('.nav-menu'); // asociar la clase al menú de navegación
            
            if (navToggle && navMenu) {
                navToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('hidden');
                });
            }

        });

