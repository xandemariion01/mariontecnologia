document.addEventListener('DOMContentLoaded', function () {
    const promos = [
        {
            img: './Assets/img/Sistemas/loja.png',
            title: 'Evite surpresas fiscais: seu negócio protegido com precisão.',
            desc: 'Um sistema que calcula corretamente impostos e obrigações evita multas, economiza dinheiro e garante a tranquilidade que você merece!'
        },
        {
            img: './Assets/img/Sistemas/gestao_emp.png',
            title: 'Gestão Empresarial Revolucionária: maximize resultados e simplifique processos.',
            desc: 'Controle completo do seu negócio em tempo real.'
        },
        {
            img: './Assets/img/Sistemas/relatorios.png',
            title: 'Relatórios Inteligentes: transforme dados em decisões estratégicas.',
            desc: 'Visualize seu negócio de forma clara, identifique oportunidades e tome decisões mais rápidas com relatórios precisos.'
        }
    ];

    let currentIndex = 0;

    function changePromo() {
        const img = document.getElementById('promo-img');
        const title = document.getElementById('promo-title');
        const desc = document.getElementById('promo-desc');

        // Fade out
        img.style.opacity = 0;

        setTimeout(() => {
            // Atualiza o conteúdo
            currentIndex = (currentIndex + 1) % promos.length;
            img.src = promos[currentIndex].img;
            title.textContent = promos[currentIndex].title;
            desc.textContent = promos[currentIndex].desc;

            // Fade in
            img.style.opacity = 1;
        }, 1000); // espera 1s durante o fade
    }

    setInterval(changePromo, 7000);
});